import React, { useMemo, useState } from 'react';
import { Modal, Button } from '@team-aliens/design-system';
import styled from 'styled-components';
import { useModal } from '@/hooks/useModal';
import { useUpdateVolunteerApplicationScore } from '@/hooks/useVolunteerApi';

interface PropsType {
  applicant: {
    id: string;
    gcd: string;
    name: string;
  };
}

export function AdjustVolunteerPoint({ applicant }: PropsType) {
  const { closeModal } = useModal();
  const { mutate: updateScore } = useUpdateVolunteerApplicationScore();

  const min = 0;
  const max = 10;
  const gap = 1;

  const [range, setRange] = useState({ startPoint: min, endPoint: max });
  const [isSliderMoved, setIsSliderMoved] = useState(false);

  const { startPoint, endPoint } = range;
  const markings = useMemo(() => Array.from({ length: 11 }, (_, i) => i), []);

  const onSliderChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value);
    const clamped = Math.min(Math.max(next, min), endPoint - gap);
    setRange((prev) => ({ ...prev, startPoint: clamped }));
    setIsSliderMoved(true);
  };

  const onSliderChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = Number(e.target.value);
    const clamped = Math.max(Math.min(next, max), startPoint + gap);
    setRange((prev) => ({ ...prev, endPoint: clamped }));
    setIsSliderMoved(true);
  };

  const progressLeft = ((startPoint - min) / (max - min)) * 100;
  const progressRight = 100 - ((endPoint - min) / (max - min)) * 100;

  const handleSave = () => {
    updateScore(
      {
        volunteerApplicationId: applicant.id,
        body: {
          update_score: startPoint.toString(),
        },
      },
      {
        onSuccess: () => {
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
          <_Marking>
            {markings.map((mark) => (
              <_MarkText
                key={mark}
                $active={mark === startPoint || mark === endPoint}
              >
                {mark === 0 ? mark : `+${mark}`}
              </_MarkText>
            ))}
          </_Marking>

          <_Slider>
            <_Track />
            <_Progress
              style={{ left: `${progressLeft}%`, right: `${progressRight}%` }}
            />
            <_Range
              aria-label="start-point"
              type="range"
              min={min}
              max={max}
              value={startPoint}
              onChange={onSliderChangeMin}
            />
            <_Range
              aria-label="end-point"
              type="range"
              min={min}
              max={max}
              value={endPoint}
              onChange={onSliderChangeMax}
            />
          </_Slider>

          <_InputRow>
            <_InputBox>
              <_InputLabel>시작 점수</_InputLabel>
              <_InputDisplay $active={isSliderMoved}>
                {startPoint}
              </_InputDisplay>
            </_InputBox>
            <_Separator>~</_Separator>
            <_InputBox>
              <_InputLabel>끝 점수</_InputLabel>
              <_InputDisplay $active={isSliderMoved}>{endPoint}</_InputDisplay>
            </_InputBox>
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

const _Marking = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;

const _MarkText = styled.span<{ $active: boolean }>`
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active }) => ($active ? '#1a202c' : '#cbd5e0')};
`;

const _Slider = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 29px;
  width: 100%;
`;

const _Track = styled.div`
  position: absolute;
  height: 5px;
  width: 100%;
  background-color: #e3f2fd;
  border-radius: 50px;
`;

const _Progress = styled.div`
  position: absolute;
  height: 5px;
  background-color: #1070ff;
  border-radius: 50px;
`;

const _Range = styled.input`
  position: absolute;
  width: 100%;
  cursor: pointer;
  appearance: none;
  background: transparent;
  pointer-events: none;

  &::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #1070ff;
    appearance: none;
    -webkit-appearance: none;
    pointer-events: auto;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #1070ff;
    border: none;
    pointer-events: auto;
    cursor: pointer;
  }
`;

const _InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`;

const _InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const _InputLabel = styled.label`
  font-size: 12px;
  color: #666666;
`;

const _InputDisplay = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  width: 96px;
  border: 1px solid #999999;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  line-height: 100%;
  color: ${({ $active }) => ($active ? '#000000' : '#dddddd')};
`;

const _Separator = styled.span`
  margin-top: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: #202020;
`;
