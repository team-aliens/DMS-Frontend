import styled from 'styled-components';
import { Text, Button } from '@team-aliens/design-system';
import {
  approveVolunteerApplication,
  rejectVolunteerApplication,
} from '@/apis/volunteers';
import { useToast } from '@/hooks/useToast';

interface StudentInfoProps {
  name: string;
  gcd: string;
  id: string;
  onApprove: (id: string) => void;
  onDelete: (id: string) => void;
}

export function StudentInfo({
  name,
  gcd,
  id,
  onApprove,
  onDelete,
}: StudentInfoProps) {
  const { toastDispatch } = useToast();
  const handleApprove = async () => {
    try {
      await approveVolunteerApplication(id);
      onApprove(id);
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '봉사 신청을 수락했습니다.',
      });
    } catch (error) {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'ERROR',
        message: '봉사 신청 수락에 실패했습니다.',
      });
    }
  };

  const handleDelete = async () => {
    try {
      await rejectVolunteerApplication(id);
      onDelete(id);
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '봉사 신청을 거절했습니다.',
      });
    } catch (error) {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'ERROR',
        message: '봉사 신청 거절에 실패했습니다.',
      });
    }
  };

  return (
    <_Wrapper>
      <_TextWrapper>
        <Text size="bodyM">{gcd}</Text>
        <Text size="bodyM">{name}</Text>
      </_TextWrapper>
      <_ButtonWrapper>
        <Button kind="outline" onClick={handleDelete}>
          거절
        </Button>
        <Button onClick={handleApprove}>수락</Button>
      </_ButtonWrapper>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  display: flex;
  width: 990px;
  height: 82px;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
  padding: 16px 24px;
  align-items: center;
`;

const _ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
`;

const _TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
