import styled from 'styled-components';

export const VoteDuePopup = () => {
  return (
    <_VoteDuePopup>
      <_PopupTitle>모범 학생 투표</_PopupTitle>
      <_PopupText>마감일</_PopupText>
      <span>2024-3-1 / 13:20 ~ 2024-3-12 / 14:40</span>
      <_Footer>
        <button className="ok">수정</button>
        <button className="cancel">삭제</button>
      </_Footer>
    </_VoteDuePopup>
  );
};

const _VoteDuePopup = styled.div`
  width: 360px;
  height: 236px;
  border-radius: 8px;
  background: #fff;
  box-sizing: border-box;
  padding: 34px 30px 20px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  position: relative;

  > span {
    font-size: 14px;
    font-weight: 400;
    color: #005de8;
  }
`;

const _PopupTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  & > span {
    font-size: 16px;
    color: #999;
  }
`;

const _PopupText = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 24px;
  margin-bottom: 5px;
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
