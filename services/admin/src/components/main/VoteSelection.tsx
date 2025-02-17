import { VoteEtcPlus, VoteModelStudentPlus } from '@/assets';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import { useState } from 'react';
import styled from 'styled-components';

interface SelectionType {
  selectionType: string;
  selected: boolean;
  onSelected: () => void;
}

export const VoteSelection = ({
  selectionType,
  selected,
  onSelected,
}: SelectionType) => {
  return (
    <_Wrapper onClick={onSelected} select={selected}>
      {selectionType === 'etc' ? <VoteEtcPlus /> : <VoteModelStudentPlus />}
      <_Contents>
        <span>{selectionType === 'etc' ? '기타' : '모범 학생'} 투표</span>
        <div>
          <p>{selectionType === 'etc' ? '기타' : '모범 학생'} 투표를</p> 만들
          때에는 이곳을 클릭하세요!
        </div>
      </_Contents>
    </_Wrapper>
  );
};

const _Wrapper = styled.div<{ select: boolean }>`
  background-color: white;
  border-radius: 24px;
  box-shadow: ${({ select }) =>
    select
      ? '0px 30px 40px rgba(0, 115, 255, 0.12), 0px 12px 20px rgba(0, 115, 255, 0.06)'
      : '0px 1px 15px rgba(0, 0, 0, 0.1)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 82px 88px;
  gap: 28px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 30px 40px rgba(0, 115, 255, 0.12),
      0px 12px 20px rgba(0, 115, 255, 0.06);
  }
`;

const _Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  > span {
    font: ${font.titleM};
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
