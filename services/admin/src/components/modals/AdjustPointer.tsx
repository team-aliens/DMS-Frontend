import React, { useEffect, useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Modal, Button, Input } from '@team-aliens/design-system';
import styled from 'styled-components';
import { useModalStore } from '@/store/useModalStore';
import {
  useUpdateVolunteerApplicationScore,
  useVolunteerAssignedScore,
} from '@/hooks/useVolunteerApi';
import MultiRangeSlider, { StartEndPoint } from '@/components/MultiRangeSlider';

interface PropsType {
  applicant: {
    id: string;
    gcd: string;
    name: string;
    minScore: number;
    maxScore: number;
  };
}

export function AdjustPointer({ applicant }: PropsType) {
  const { closeModal } = useModalStore();
  const queryClient = useQueryClient();
  const { mutate: updateScore } = useUpdateVolunteerApplicationScore();
  const { data: assignedScoreData } = useVolunteerAssignedScore(applicant.id);

  const rawMin = Number(applicant.minScore);
  const rawMax = Number(applicant.maxScore);
  const min =
    Number.isFinite(rawMin) && Number.isFinite(rawMax)
      ? Math.min(rawMin, rawMax)
      : 0;
  const max =
    Number.isFinite(rawMin) && Number.isFinite(rawMax)
      ? Math.max(rawMin, rawMax)
      : 10;

  const cachedAssignedScoreData = queryClient.getQueryData<
    { assigned_score: number } | undefined
  >(['getVolunteerAssignedScore', applicant.id]);

  const initialEndPoint = cachedAssignedScoreData
    ? Math.min(
        Math.max(Number(cachedAssignedScoreData.assigned_score), min),
        max,
      )
    : max;

  const [sliderState, setSliderState] = useState<StartEndPoint>(() => ({
    startPoint: min,
    endPoint: initialEndPoint,
  }));
  const [isSliderMoved, setIsSliderMoved] = useState(false);
  const endPoint = sliderState.endPoint;
  const markings = useMemo(
    () =>
      Array.from({ length: max - min + 1 }, (_, i) => {
        const value = min + i;
        if (value === 0) return '0';
        if (value > 0) return `+${value}`;
        return `${value}`;
      }),
    [max, min],
  );

  useEffect(() => {
    if (isSliderMoved) return;
    if (!assignedScoreData) return;

    const next = Number(assignedScoreData.assigned_score);
    const clamped = Math.min(Math.max(next, min), max);

    setSliderState((prev) => ({
      ...prev,
      startPoint: min,
      endPoint: clamped,
    }));
  }, [assignedScoreData, isSliderMoved, max, min]);

  const onDisabledInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const handleSave = () => {
    updateScore(
      {
        volunteerApplicationId: applicant.id,
        body: {
          update_score: endPoint.toString(),
        },
      },
      {
        onSuccess: () => {
          queryClient.setQueryData(
            ['getVolunteerAssignedScore', applicant.id],
            { assigned_score: endPoint },
          );
          queryClient.invalidateQueries([
            'getVolunteerAssignedScore',
            applicant.id,
          ]);
          closeModal();
        },
      },
    );
  };

  return (
    <Modal
      title={`${applicant.gcd} ${applicant.name} 상벌점 조정`}
      close={closeModal}
      width="520px"
      buttonList={[
        <Button key="save" onClick={handleSave}>
          저장
        </Button>,
      ]}
    >
      <_Contents>
        <_Label>부여 상점 조절</_Label>
        <_SliderSection>
          <MultiRangeSlider
            state={sliderState}
            min={min}
            max={max}
            minVal={min}
            maxVal={sliderState.endPoint}
            setState={(action) => {
              setIsSliderMoved(true);
              setSliderState((prev) => {
                const next =
                  typeof action === 'function' ? action(prev) : action;
                return { startPoint: min, endPoint: next.endPoint };
              });
            }}
            markings={markings}
            disableLeft
            highlightRight
          />

          <_InputRow>
            <_ReadOnlyInput>
              <Input
                width={96}
                label="시작 점수"
                name="minScore"
                value={min}
                onChange={onDisabledInputChange}
                type="number"
              />
            </_ReadOnlyInput>
            <_Separator>~</_Separator>
            <_ReadOnlyInput>
              <Input
                width={96}
                label="끝 점수"
                name="maxScore"
                value={max}
                onChange={onDisabledInputChange}
                type="number"
              />
            </_ReadOnlyInput>
          </_InputRow>
        </_SliderSection>
      </_Contents>
    </Modal>
  );
}

const _Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 28px 0;
  gap: 24px;
`;

const _Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #4a5568;
  margin: 0 0 16px 0;
`;

const _SliderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const _InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 96%;
  margin: 20px auto 0 auto;
  label {
    color: #555555;
  }
  input {
    border: 1px solid ${({ theme }) => theme.color.gray3};
    color: ${({ theme }) => theme.color.gray5} !important;
    text-align: center;
    font-weight: 700;
    font-size: 22px !important;
  }
`;

const _ReadOnlyInput = styled.div`
  pointer-events: none;
`;

const _Separator = styled.span`
  display: flex;
  align-items: center;
  margin: 0 8px;
  font-size: 22px;
  font-weight: 400;
  line-height: 1;
  transform: translateY(20px);
  color: ${({ theme }) => theme.color.gray8};
`;
