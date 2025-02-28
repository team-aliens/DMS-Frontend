import React, { useState } from 'react';
import styled from 'styled-components';
import Delete from '../../assets/delete.svg';

export const VoteEditPopup = () => {
  const [items, setItems] = useState([{ value: '김치' }, { value: '파전' }]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue) {
      setItems([...items, { value: inputValue }]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <Modal>
      <_VoteEditPopup>
        <_PopupTitle>
          투표 항목 수정 <span>{items.length}/50</span>
        </_PopupTitle>
        <_VoteListUl>
          {items.map((item, index) => (
            <li key={index}>
              <input
                type="text"
                value={item.value}
                readOnly
              />
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
            />
            <button onClick={handleAddItem}>추가</button>
          </li>
        </_VoteListUl>

        <_Footer>
          <button className="cancel">이전</button>
          <button className="ok">확인</button>
        </_Footer>
      </_VoteEditPopup>
    </Modal>
  );
};

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const _VoteEditPopup = styled.div`
  width: 600px;
  max-width: 90%;
  border-radius: 12px;
  background: #fff;
  padding: 20px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const _PopupTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  & > span {
    font-size: 16px;
    color: #999;
  }
`;

const _VoteListUl = styled.ul`
  padding: 0;
  background: #f9f9f9;
  height: 400px;
  overflow: auto;
  box-sizing: border-box;
  list-style: none;

  > li {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    > input {
      width: 100%;
      height: 46px;
      border: 2px solid #3d8aff;
      border-radius: 4px;
      padding: 0 20px;
      box-sizing: border-box;
      margin-right: 12px;
      font-size: 16px;
      color: #343434;
    }

    > button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;

const _Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;

  > button {
    width: 80px;
    height: 50px;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    margin-left: 12px;
  }

  > button.cancel {
    border: 1px solid #3d8aff;
    color: #3d8aff;
  }

  > button.ok {
    background: #3d8aff;
    color: #fff;
  }
`;

const DeleteIcon = styled.img`
  cursor: pointer;
`;
