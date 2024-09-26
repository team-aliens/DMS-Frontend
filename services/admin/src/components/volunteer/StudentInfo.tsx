import styled from 'styled-components';
import { Text, Button } from '@team-aliens/design-system';
import {
  approveVolunteerApplication,
  rejectVolunteerApplication,
} from '@/apis/volunteers';

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
  const handleApprove = async () => {
    try {
      await approveVolunteerApplication(id);
      onApprove(id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await rejectVolunteerApplication(id);
      onDelete(id);
    } catch (error) {
      console.error(error);
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
