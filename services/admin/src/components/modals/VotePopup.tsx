<<<<<<< HEAD
import React, { useState } from 'react';
=======
import { useMutation } from '@tanstack/react-query';
import { createVoteOption } from '@/apis/votes';
import { useState } from 'react';
>>>>>>> 2e9129e (feat: 투표 항목 api 연동)
import styled from 'styled-components';
import Delete from '../../assets/delete.svg';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import { Button, Modal } from '@team-aliens/design-system';
import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { FullListPopup } from './FullListPopup';

interface PropsType {
  mode: string;
<<<<<<< HEAD
  onClose: () => void;
}

export const VotePopup = ({ mode, onClose }: PropsType) => {
=======
  voting_topic_id: string;
  onClose: () => void;
}

export const VotePopup = ({ mode, voting_topic_id, onClose }: PropsType) => {
>>>>>>> 2e9129e (feat: 투표 항목 api 연동)
  const [items, setItems] = useState(
    mode === 'edit' ? [{ value: '김치' }, { value: '파전' }] : [],
  );
  const [isFull, setIsFull] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');

<<<<<<< HEAD
=======
  const { mutate: addVoteOption } = useMutation(createVoteOption, {
    onSuccess: () => {
      console.log('투표 옵션이 성공적으로 추가되었습니다.');
    },
    onError: (error) => {
      console.error('투표 옵션 추가 중 오류 발생:', error);
    },
  });

>>>>>>> 2e9129e (feat: 투표 항목 api 연동)
  const handleAddItem = () => {
    if (inputValue) {
      if (items.length >= 50) {
        setIsFull(true);
      } else {
<<<<<<< HEAD
=======
        addVoteOption({
          voting_topic_id,
          option_name: inputValue,
        });

>>>>>>> 2e9129e (feat: 투표 항목 api 연동)
        setItems([...items, { value: inputValue }]);
        setInputValue('');
      }
    }
  };

<<<<<<< HEAD
  const handleDeleteItem = (index) => {
=======
  const handleDeleteItem = (index: number) => {
>>>>>>> 2e9129e (feat: 투표 항목 api 연동)
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  const onFullListPopUpClose = () => {
    setIsFull(false);
  };

  return (
    <>
      <Modal
<<<<<<< HEAD
        close={() => {}}
=======
        close={onClose}
>>>>>>> 2e9129e (feat: 투표 항목 api 연동)
        buttonList={[
          <Button kind="outline" onClick={onClose}>
            이전
          </Button>,
          <Button>확인</Button>,
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
      {isFull && <FullListPopup onClose={onFullListPopUpClose} />}
    </>
  );
};
<<<<<<< HEAD

=======
>>>>>>> 2e9129e (feat: 투표 항목 api 연동)
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
