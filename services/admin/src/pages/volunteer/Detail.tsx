import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { StudentInfo } from '@/components/volunteer/StudentInfo';
import styled from 'styled-components';
import { VolunteerHeader } from './Header';
import { useState, useEffect } from 'react';
import { getApplicationVolunteerStudents } from '@/apis/volunteers';
import { useParams } from 'react-router-dom';
import { useToast } from '@/hooks/useToast';
import { BreadCrumb } from '@team-aliens/design-system';
import { pathToKorean } from '@/router';

export function VolunteerDetail() {
  const { id } = useParams<{ id: string }>();
  const [applications, setApplications] = useState<any[]>([]);
  const { toastDispatch } = useToast();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await getApplicationVolunteerStudents(id);
        setApplications(response?.applicants || []);
      } catch (error) {
        toastDispatch({
          actionType: 'APPEND_TOAST',
          toastType: 'ERROR',
          message: '봉사 활동 신청된 학생 조회에 실패했습니다.',
        });
      }
    };
    fetchApplications();
  }, [id]);

  const handleApprove = (id: string) => {
    setApplications((prevApplications) =>
      prevApplications.filter((volunteer) => volunteer.id !== id),
    );
  };

  const handleDelete = (id: string) => {
    setApplications((prevApplications) =>
      prevApplications.filter((volunteer) => volunteer.id !== id),
    );
  };

  return (
    <WithNavigatorBar>
      <_Wrapper>
        <BreadCrumb left={366} pathToKorean={pathToKorean}/>
        <VolunteerHeader />
        <_StudentInfoWrapper>
          {applications.map((applicant) => (
            <StudentInfo
              key={applicant.id}
              name={applicant.name}
              gcd={applicant.gcd}
              onApprove={handleApprove}
              id={applicant.id}
              onDelete={handleDelete}
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
