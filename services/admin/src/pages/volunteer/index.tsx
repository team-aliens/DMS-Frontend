import styled from 'styled-components';
import { VolunteerHeader } from './Header';
import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { InfoCard } from '@/components/volunteer/InfoCard';
import { useEffect, useState } from 'react';
import { getVolunteers } from '@/apis/volunteers';
import { sexTypeToKorean, gradeEngToKorean } from '@/utils/translate';
import { BreadCrumb } from '@team-aliens/design-system';
import { pathToKorean } from '@/router';

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
          <BreadCrumb left={366} pathToKorean={pathToKorean}/>
          <VolunteerHeader />
          <_BoxWrapper>
            {applications.map((volunteer) => (
              <InfoCard
                key={volunteer.id}
                id={volunteer.id}
                status="icon"
                onDelete={handleDelete}
                availablePoint={volunteer.score}
                availableOptionalScore={volunteer.optional_score}
                availableMaxApplicants={volunteer.max_applicants}
                name={volunteer.name}
                availableContent={volunteer.content}
                availableSex={sexTypeToKorean(volunteer.available_sex)}
                availableGrade={gradeEngToKorean(volunteer.available_grade)}
                currentApplicants={volunteer.current_applicants}
                maxApplicants={volunteer.max_applicants}
                detailPath='/apply/volunteer/detail'
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 75px; 
  row-gap: 50px;
  align-items: start;
  margin-bottom: 50px;
`;
