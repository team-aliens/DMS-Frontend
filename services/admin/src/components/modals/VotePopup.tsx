import { useState } from 'react';
import styled from 'styled-components';
import Delete from '../../assets/delete.svg';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import { Button, Modal } from '@team-aliens/design-system';
import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { FullListPopup } from './FullListPopup';
import { useCreateVoteOption } from '@/hooks/useVoteApi';

interface PropsType {
  mode: string;
  votingId: string;
  onClose: () => void;
}

export const VotePopup = ({ mode, votingId, onClose }: PropsType) => {
  const [items, setItems] = useState<{ value: string }[]>([]);
  const [isFull, setIsFull] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');

  const { mutate: addVoteOption } = useCreateVoteOption();

  const handleAddItem = () => {
    if (inputValue) {
      if (items.length >= 50) {
        setIsFull(true);
      } else {
        addVoteOption({ voting_topic_id: votingId, option_name: inputValue });
        setItems([...items, { value: inputValue }]);
        setInputValue('');
      }
    }
  };

  const handleDeleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <>
      <Modal
        close={onClose}
        buttonList={[
          <Button key="previous" kind="outline" onClick={onClose}>
            이전
          </Button>,
          <Button key="confirm">확인</Button>,
        ]}
        width="1150px"
      >
        <_Wrapper>
          <_Header>
            <span>{mode === 'edit' ? '투표 항목 수정' : '투표 항목 생성'}</span>
            {items.length}/50
          </_Header>
          <_Contents>
            {items.map((item, index) => (
              <li key={index}>
                <input type="text" value={item.value} readOnly />
                <button onClick={() => handleDeleteItem(index)}>
                  <DeleteIcon src={Delete} />
                </button>
              </li>
            ))}
            <li>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="새 항목 추가"
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleAddItem}>추가</button>
            </li>
          </_Contents>
        </_Wrapper>
      </Modal>
      {isFull && <FullListPopup onClose={() => setIsFull(false)} />}
    </>
  );
};

const _Contents = styled.div`
  padding: 0;
  height: 400px;
  overflow: auto;
  box-sizing: border-box;
  list-style: none;

  > li {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    > input {
      width: 410px;
      height: 46px;
      border: 2px solid #3d8aff;
      border-radius: 4px;
      padding: 0 20px;
      box-sizing: border-box;
      margin-right: 12px;
      color: ${color.gray7};
      font: ${font.bodyM};
    }

    > button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 34px;
`;

const _Header = styled.div`
  display: flex;
  justify-content: space-between;
  font: ${font.bodyM};
  color: ${color.gray5};
  > span {
    font: ${font.headlineS};
    color: black;
  }
`;

const DeleteIcon = styled.img`
  cursor: pointer;
`;
