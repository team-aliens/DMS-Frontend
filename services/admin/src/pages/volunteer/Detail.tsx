import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { StudentInfo } from '@/components/volunteer/StudentInfo';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { BreadCrumb } from '@team-aliens/design-system';
import { pathToKorean } from '@/router';
import {
  useApplicationVolunteerStudents,
  useApproveVolunteerApplication,
  useRejectVolunteerApplication,
} from '@/hooks/useVolunteerApi';
import { VolunteerHeader } from './Header';
import { VolunteerDetailSkeleton } from '@/components/common/Skeleton';

export function VolunteerDetail() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useApplicationVolunteerStudents(id ?? '');

  const { mutate: approveMutation } = useApproveVolunteerApplication();
  const { mutate: rejectMutation } = useRejectVolunteerApplication();

  return (
    <WithNavigatorBar>
      <_Wrapper>
        <BreadCrumb left={366} pathToKorean={pathToKorean} />
        {data?.applicants && isLoading ? (
          <VolunteerDetailSkeleton />
        ) : (
          <>
            <VolunteerHeader />
            {data?.applicants.length === 0 ? (
              <_EmptyState>신청한 학생이 없습니다.</_EmptyState>
            ) : (
              <_StudentInfoWrapper>
                {data?.applicants.map((applicant) => (
                  <StudentInfo
                    key={applicant.id}
                    name={applicant.name}
                    gcd={applicant.gcd}
                    onApprove={() => approveMutation(applicant.id)}
                    id={applicant.id}
                    onDelete={() => rejectMutation(applicant.id)}
                  />
                ))}
              </_StudentInfoWrapper>
            )}
          </>
        )}
      </_Wrapper>
    </WithNavigatorBar>
  );
}

const _EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

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
