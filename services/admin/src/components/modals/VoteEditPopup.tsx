import styled from 'styled-components';
import Delete from '../../assets/delete.svg';

export const VoteEditPopup = () => {
  return (
    <_VoteEditPopup>
      <_PopupTitle>
        투표 항목 수정 <span>8/50</span>
      </_PopupTitle>
      <_VoteListUl>
        <li>
          <input type="text" value="김치" />
          <button>
            <DeleteIcon src={Delete} />
          </button>
        </li>
        <li>
          <input type="text" value="파전" />
          <button>
            <DeleteIcon src={Delete} />
          </button>
        </li>
      </_VoteListUl>

      <_Footer>
        <button className="cancel">이전</button>
        <button className="ok">확인</button>
      </_Footer>
    </_VoteEditPopup>
  );
};

const _VoteEditPopup = styled.div`
  width: 1150px;
  height: 696px;
  border-radius: 8px;
  background: #fff;
  box-sizing: border-box;

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
  margin-bottom: 34px;
  padding: 34px 30px 0px;

  & > span {
    font-size: 16px;
    color: #999;
  }
`;

const _VoteListUl = styled.ul`
  padding: 24px 32px;
  background: #f9f9f9;
  height: 492px;
  overflow: auto;
  box-sizing: border-box;

  > li {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }

  > li:last-child {
    margin-bottom: 0;
  }

  > li input {
    width: 410px;
    height: 46px;
    border: 2px solid #3d8aff;
    border-radius: 4px;
    padding: 0 20px;
    box-sizing: border-box;
    margin-right: 12px;
    font-size: 16px;
    color: #343434;
  }

  > li input button img {
    display: block;
  }
`;

const _Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: auto;
  padding: 0 30px 20px;

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
