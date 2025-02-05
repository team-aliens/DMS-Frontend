import { Button, Modal } from '@team-aliens/design-system';
import { VoteSelection } from '../main/VoteSelection';
import styled from 'styled-components';

export const SelectVoteEventModal = () => {
  return (
    <Modal
      close={() => {}}
      buttonList={[<Button kind="outline">취소</Button>, <Button>확인</Button>]}
      title="투표 항목 생성"
      width="1150px"
    >
      <Contents>
        <VoteSelection selectionType="student" />
        <VoteSelection selectionType="etc" />
      </Contents>
    </Modal>
  );
};

const Contents = styled.div`
  display: flex;
  gap: 54px;
  justify-content: center;
`;
