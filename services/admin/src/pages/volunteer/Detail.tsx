import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { StudentInfo } from '@/components/volunteer/StudentInfo';
import styled from 'styled-components';
import { VolunteerHeader } from './Header';
import { useState, useEffect } from 'react';
import { getApplicationVolunteerStudents } from '@/apis/volunteers';
import { useParams } from 'react-router-dom';

interface volunteerDetailProps {
  volunteerId: string;
}

export function VolunteerDetail() {
  const { volunteerId } = useParams<{ volunteerId: string }>();
  const [applications, setApplications] = useState<any[]>([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await getApplicationVolunteerStudents(volunteerId);
        setApplications(response?.applicants || []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApplications();
  }, [volunteerId]);

  return (
    <WithNavigatorBar>
      <_Wrapper>
        <VolunteerHeader />
        <_StudentInfoWrapper>
          {applications.map((applicant) => (
            <StudentInfo
              key={applicant.id}
              name={applicant.name}
              gcd={applicant.gcd}
            />
          ))}
        </_StudentInfoWrapper>
      </_Wrapper>
    </WithNavigatorBar>
  );
}

const _Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
`;

const _StudentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 100px;
`;
