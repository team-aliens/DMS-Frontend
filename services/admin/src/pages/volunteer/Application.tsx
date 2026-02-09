import React, { useMemo, useState } from 'react';
import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import styled from 'styled-components';
import { VolunteerHeader } from './Header';
import { InfoCard } from '@/components/volunteer/InfoCard';
import { BreadCrumb, Text } from '@team-aliens/design-system';
import { sexTypeToKorean, gradeEngToKorean } from '@/utils/translate';
import { trash, kebap } from '../../assets';
import { pathToKorean } from '@/router';
import {
  useExcludeVolunteerApplication,
  usePrefetchVolunteerAssignedScore,
  useVolunteerList,
  useVolunteerCurrent,
} from '@/hooks/useVolunteerApi';
import { VolunteerCurrentSkeleton } from '@/components/common/Skeleton';
import { AdjustPointer } from '@/components/modals/AdjustPointer';
import { useToast } from '@/hooks/useToast';
import { useModalStore } from '@/store/useModalStore';

export function VolunteerApplication() {
  const { data, isLoading } = useVolunteerCurrent();
  const { data: volunteerListData } = useVolunteerList();
  const { mutate: excludeVolunteer } = useExcludeVolunteerApplication();
  const prefetchVolunteerAssignedScore = usePrefetchVolunteerAssignedScore();
  const { selectedModal, selectModal } = useModalStore();
  const { toastDispatch } = useToast();
  const [selectedApplicant, setSelectedApplicant] = useState<{
    id: string;
    gcd: string;
    name: string;
    volunteerId: string;
    minScore: number;
    maxScore: number;
  } | null>(null);

  const volunteers = data?.volunteers ?? [];

  const getRange = (target: any) => {
    const a = Number(target?.min_score ?? target?.minScore ?? target?.score);
    const b = Number(
      target?.max_score ??
        target?.maxScore ??
        target?.optional_score ??
        target?.optionalScore,
    );
    if (!Number.isFinite(a) || !Number.isFinite(b)) return undefined;
    return { minScore: a, maxScore: b };
  };

  const volunteerRangeById = useMemo(() => {
    const map = new Map<string, { minScore: number; maxScore: number }>();
    const list = volunteerListData?.volunteers ?? [];
    list.forEach((v) => {
      const range = getRange(v);
      if (!range) return;
      map.set(v.id, range);
    });
    return map;
  }, [volunteerListData?.volunteers]);

  return (
    <WithNavigatorBar>
      <_Wrapper>
        <BreadCrumb left={366} pathToKorean={pathToKorean} />
        {isLoading ? (
          <VolunteerCurrentSkeleton />
        ) : (
          <>
            <VolunteerHeader />
            <_VolunteerWrapper>
              {volunteers.map((currentVolunteer) => (
                <div key={currentVolunteer.id}>
                  <InfoCard
                    id={currentVolunteer.id}
                    name={currentVolunteer.name}
                    availableGrade={gradeEngToKorean(
                      currentVolunteer.available_grade,
                    )}
                    availableSex={sexTypeToKorean(
                      currentVolunteer.available_sex,
                    )}
                    status="noneIcon"
                    maxApplicants={currentVolunteer.max_applicants}
                    currentApplicants={currentVolunteer.current_applicants}
                    detailPath="/apply/volunteer/current/detail"
                  />
                  <_StudentWrapper>
                    {currentVolunteer.applicants?.map((applicant) => (
                      <div key={applicant.id}>
                        <img
                          onClick={() => excludeVolunteer(applicant.id)}
                          style={{
                            cursor: 'pointer',
                            padding: '3px 4px',
                          }}
                          src={trash}
                        />
                        <Text size="bodyS" color="primary">
                          {applicant.gcd} {applicant.name}
                        </Text>
                        <img
                          style={{ cursor: 'pointer' }}
                          src={kebap}
                          onMouseEnter={() =>
                            prefetchVolunteerAssignedScore(applicant.id)
                          }
                          onFocus={() =>
                            prefetchVolunteerAssignedScore(applicant.id)
                          }
                          onClick={() => {
                            const range =
                              getRange(currentVolunteer) ??
                              volunteerRangeById.get(currentVolunteer.id);

                            if (!range) {
                              toastDispatch({
                                actionType: 'APPEND_TOAST',
                                toastType: 'ERROR',
                                message: volunteerListData?.volunteers?.length
                                  ? '봉사활동 점수 범위를 불러오지 못했습니다.'
                                  : '봉사활동 정보를 불러오는 중입니다. 잠시 후 다시 시도해주세요.',
                              });
                              return;
                            }

                            setSelectedApplicant({
                              id: applicant.id,
                              gcd: applicant.gcd,
                              name: applicant.name,
                              volunteerId: currentVolunteer.id,
                              minScore: range.minScore,
                              maxScore: range.maxScore,
                            });
                            selectModal('ADJUST_POINTER');
                          }}
                        />
                      </div>
                    ))}
                  </_StudentWrapper>
                </div>
              ))}
            </_VolunteerWrapper>
          </>
        )}
      </_Wrapper>
      {selectedModal === 'ADJUST_POINTER' && selectedApplicant && (
        <AdjustPointer applicant={selectedApplicant} />
      )}
    </WithNavigatorBar>
  );
}

const _Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
`;

const _VolunteerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 100px;
  > div {
    display: flex;
    gap: 59px;
  }
`;

const _StudentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 34px;
  > div {
    border-radius: 8px;
    background-color: #f5f9ff;
    display: flex;
    align-items: center;
    width: auto;
    justify-content: center;
    min-width: 150px;
    height: 40px;
    padding: 8px;
    gap: 4px;
  }
`;
