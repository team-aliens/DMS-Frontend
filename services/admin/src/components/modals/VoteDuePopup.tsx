import styled from 'styled-components';

export const VoteDuePopup = () => {
  return (
    <_VoteDuePopup>
      <_VoteInfo>
        <_PopupTitle>모범 학생 투표</_PopupTitle>
        <_PopupText>마감일</_PopupText>
        <Deadline>2024-3-1 / 13:20 ~ 2024-3-12 / 14:40</Deadline>
      </_VoteInfo>
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
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.10);
  position: relative;
  padding: 34px 30px 20px;
  overflow: hidden;
`;

const _VoteInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const _PopupTitle = styled.div`
  color: #343434;
  font-size: 16px;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 400;
  line-height: 26px;
  word-wrap: break-word;
`;

const _PopupText = styled.div`
  color: #343434;
  font-size: 14px;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
`;

const Deadline = styled.div`
  color: #005de8;
  font-size: 14px;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 400;
  line-height: 22px;
  word-wrap: break-word;
`;

const _Footer = styled.div`
  position: absolute;
  left: 220px;
  top: 182px;
  display: flex;
  align-items: center;
  gap: 4px;

  > button {
    width: 58px;
    padding: 14px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    line-height: 22px;
    word-wrap: break-word;
  }

  > button.ok {
    background: #3d8aff;
    color: white;
  }

  > button.cancel {
    background: white;
    border: 1px #dddddd solid;
    color: #555555;
  }
`;
