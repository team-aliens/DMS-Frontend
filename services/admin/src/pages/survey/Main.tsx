import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { EditVoteStudent } from '@/components/modals/EditVoteStudent';
import { SelectVoteEventModal } from '@/components/modals/SelectVoteEventModal';
import { VoteDuePopup } from '@/components/modals/VoteDuePopup';
import { Button } from '@team-aliens/design-system';
import { useState } from 'react';
import styled from 'styled-components';

export const Main = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <WithNavigatorBar>
      {isOpen && <SelectVoteEventModal onClose={onClose} />}
      <_Wrapper>
        <_Header>
          <Button onClick={onOpen}>투표 항목 추가 +</Button>
        </_Header>
        <_VoteDiv>
          <VoteDuePopup />
          <VoteDuePopup />
          <VoteDuePopup />
          <VoteDuePopup />
          <VoteDuePopup />
          <VoteDuePopup />
        </_VoteDiv>
      </_Wrapper>
    </WithNavigatorBar>
  );
};

const _Header = styled.div`
  display: flex;
  justify-content: right;
`;

const _VoteDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

const _Wrapper = styled.div`
  padding: 100px 100px 0px 50px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
