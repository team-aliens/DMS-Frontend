import { Button } from '@team-aliens/design-system';
import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import styled from 'styled-components';

export const VoteDuePopup = () => {
  return (
    <_VoteDuePopup>
      <_VoteInfo>
        <_PopupTitle>모범 학생 투표</_PopupTitle>
        <_Contents>
          <_PopupText>마감일</_PopupText>
          <Deadline>2024-3-1 / 13:20 ~ 2024-3-12 / 14:40</Deadline>
        </_Contents>
      </_VoteInfo>
      <_Footer>
        <Button>수정</Button>
        <Button kind="outline" color="gray">
          삭제
        </Button>
      </_Footer>
    </_VoteDuePopup>
  );
};

const _Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const _VoteDuePopup = styled.div`
  width: 428px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 30px 40px rgba(0, 115, 255, 0.12),
      0px 12px 20px rgba(0, 115, 255, 0.06);
  }
`;

const _VoteInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
`;

const _PopupTitle = styled.div`
  color: #343434;
  font: ${font.bodyM};
  word-wrap: break-word;
`;

const _PopupText = styled.div`
  color: #343434;
  font: ${font.bodyS};
  word-wrap: break-word;
`;

const Deadline = styled.div`
  color: #005de8;
  font: ${font.bodyS};
  word-wrap: break-word;
`;

const _Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 4px;
`;
