import { Button, Modal } from '@team-aliens/design-system';
import { VoteSelection } from '../main/VoteSelection';
import styled from 'styled-components';
import { useState } from 'react';
import { CreateVoteModal } from './CreateVoteModal';

interface PropsType {
  onClose: () => void;
}

export const SelectVoteEventModal = ({ onClose }: PropsType) => {
  const [selected, setSelected] = useState<boolean[]>([false, false]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onSelected = (index: number) => {
    setSelected((prev) => prev.map((v, i) => (i === index ? !v : false)));
  };

  const createVoteModal = () => {
    setIsOpen(true);
  };

  const isClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <Modal
          close={onClose}
          buttonList={[
            <Button kind="outline" onClick={onClose}>
              취소
            </Button>,
            <Button
              disabled={selected.every((v) => v === false)}
              onClick={createVoteModal}
            >
              다음
            </Button>,
          ]}
          title="투표 항목 생성"
          width="1150px"
        >
          <_Contents>
            <VoteSelection
              selectionType="student"
              selected={selected[0]}
              onSelected={() => onSelected(0)}
            />
            <VoteSelection
              selectionType="etc"
              selected={selected[1]}
              onSelected={() => onSelected(1)}
            />
          </_Contents>
        </Modal>
      )}

      {isOpen && (
        <CreateVoteModal
          voteTopic={selected[1]}
          isClose={isClose}
          edit={false}
        />
      )}
    </>
  );
};

const _Contents = styled.div`
  display: flex;
  gap: 54px;
  justify-content: center;
`;
