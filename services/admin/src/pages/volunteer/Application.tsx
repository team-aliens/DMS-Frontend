import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import styled from 'styled-components';
import { VolunteerHeader } from './Header';
import { InfoCard } from '@/components/volunteer/InfoCard';
import { BreadCrumb, Text } from '@team-aliens/design-system';
import { useEffect, useState } from 'react';
import {
  excludeVolunteerApplication,
  getVolunteerCurrent,
} from '@/apis/volunteers';
import { sexTypeToKorean, gradeEngToKorean } from '@/utils/translate';
import trash from '../../assets/trash.svg';
import { useToast } from '@/hooks/useToast';
import { pathToKorean } from '@/router';

export function VolunteerApplication() {
  const [current, setCurrent] = useState<any[]>([]);
  const { toastDispatch } = useToast();

  useEffect(() => {
    getVolunteerCurrent().then((response) => {
      setCurrent(response?.volunteers || []);
    });
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await excludeVolunteerApplication(id);

      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '봉사 활동에서 성공적으로 제외했습니다.',
      });

      window.location.reload();
    } catch (error) {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'ERROR',
        message: '봉사 활동에서 제외에 실패했습니다.',
      });
    }
  };

  return (
    <WithNavigatorBar>
      <_Wrapper>
        <BreadCrumb left={366} pathToKorean={pathToKorean}/>
        <VolunteerHeader />
        <_VolunteerWrapper>
          {current.map((currentVolunteer) => (
            
            <div key={currentVolunteer.id}>
              <InfoCard
                id={currentVolunteer.id}
                name={currentVolunteer.name}
                availableGrade={gradeEngToKorean(
                  currentVolunteer.available_grade
                )}
                availableSex={sexTypeToKorean(currentVolunteer.available_sex)}
                status="noneIcon"
                maxApplicants={currentVolunteer.max_applicants}
                currentApplicants={currentVolunteer.current_applicants}
                detailPath='/apply/volunteer/current/detail'
              />
              <_StudentWrapper> 
                {currentVolunteer.applicants?.map((applicant) => (
                  <div key={applicant.id}>
                    <img
                      onClick={() => handleDelete(applicant.id)}
                      style={{ cursor: 'pointer' }}
                      src={trash}
                    />
                    <Text size="bodyS" color="primary">
                      {applicant.gcd} {applicant.name}
                    </Text>
                  </div>
                ))}
              </_StudentWrapper>
            </div>
          ))}
        </_VolunteerWrapper>
      </_Wrapper>
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
    justify-content: center;
    width: auto;
    min-width: 120px;
    height: 40px;
    padding: 8px;
    gap: 9px;
  }
`;
