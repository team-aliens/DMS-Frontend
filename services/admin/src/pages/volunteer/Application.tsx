import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import styled from 'styled-components';
import { VolunteerHeader } from './Header';
import { InfoCard } from '@/components/volunteer/InfoCard';
import { Text } from '@team-aliens/design-system';
import { useEffect, useState } from 'react';
import {
  excludeVolunteerApplication,
  getVolunteerCurrent,
  getVolunteers,
} from '@/apis/volunteers';
import { sexTypeToKorean, gradeEngToKorean } from '@/utils/translate';
import trash from '../../assets/trash.svg';

export function VolunteerApplication() {
  const [current, setCurrent] = useState<any[]>([]);

  useEffect(() => {
    getVolunteerCurrent().then((response) => {
      setCurrent(response?.volunteers || []);
    });
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await excludeVolunteerApplication(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WithNavigatorBar>
      <_Wrapper>
        <VolunteerHeader />
        <_VolunteerWrapper>
          {current.map((currentVolunteer) => (
            <div key={currentVolunteer.id}>
              <InfoCard
                id={currentVolunteer.id}
                name={currentVolunteer.volunteer_name}
                availableGrade={gradeEngToKorean(
                  currentVolunteer.available_grade,
                )}
                availableSex={sexTypeToKorean(currentVolunteer.available_sex)}
                status="noneIcon"
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