import styled from 'styled-components';
import { VolunteerHeader } from './Header';
import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { InfoCard } from '@/components/volunteer/InfoCard';
import { useEffect, useState } from 'react';
import { getVolunteers } from '@/apis/volunteers';
import { sexTypeToKorean, gradeEngToKorean } from '@/utils/translate';

export function Volunteer() {
  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    getVolunteers().then((response) => {
      setApplications(response?.volunteers || []);
    });
  }, []);

  const handleDelete = (id: string) => {
    setApplications((prevApplications) =>
      prevApplications.filter((volunteer) => volunteer.id !== id),
    );
  };

  return (
    <>
      <WithNavigatorBar>
        <_Wrapper>
          <VolunteerHeader />
          <_BoxWrapper>
            {applications.map((volunteer) => (
              <InfoCard
                key={volunteer.id}
                id={volunteer.id}
                status="icon"
                onDelete={handleDelete}
                name={volunteer.name}
                availableSex={sexTypeToKorean(volunteer.available_sex)}
                availableGrade={gradeEngToKorean(volunteer.available_grade)}
              />
            ))}
          </_BoxWrapper>
        </_Wrapper>
      </WithNavigatorBar>
    </>
  );
}

const _Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
`;

const _BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 280px 280px;
  gap: 75px;
`;
