import React, { useState } from 'react';
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
  useVolunteerCurrent,
} from '@/hooks/useVolunteerApi';
import { VolunteerCurrentSkeleton } from '@/components/common/Skeleton';
import { useModal } from '@/hooks/useModal';
import { AdjustVolunteerPoint } from '@/components/modals/AdjustPointer';

export function VolunteerApplication() {
  const { data, isLoading } = useVolunteerCurrent();
  const { mutate: excludeVolunteer } = useExcludeVolunteerApplication();
  const { selectModal, modalState } = useModal();
  const [selectedApplicant, setSelectedApplicant] = useState<{
    id: string;
    gcd: string;
    name: string;
    volunteerId: string;
  } | null>(null);

  const volunteers = data?.volunteers ?? [];

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
                          onClick={() => {
                            setSelectedApplicant({
                              id: applicant.id,
                              gcd: applicant.gcd,
                              name: applicant.name,
                              volunteerId: currentVolunteer.id,
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
      {modalState.selectedModal === 'ADJUST_POINTER' && selectedApplicant && (
        <AdjustVolunteerPoint applicant={selectedApplicant} />
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
