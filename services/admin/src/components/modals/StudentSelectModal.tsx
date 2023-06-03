import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelectedStudentIdStore } from '@/store/useSelectedStudentIdStore';
import { Text, Button } from '@team-aliens/design-system';
import { fadeInRight } from '../../components/animation/fade';
import { Divider } from '../main/Divider';
import { useModal } from '@/hooks/useModal';
import OutsideClickHandler from 'react-outside-click-handler';
import { RecentPointItem } from '../main/DetailBox/PointItem';

export default function StudentSelectModal() {
  const [selectedStudentId] = useSelectedStudentIdStore((state) => [
    state.selectedStudentId,
    state.resetStudentId,
    state.appendStudentId,
    state.deleteStudentId,
  ]);

  const [click, setClick] = useState(false);
  const { selectModal } = useModal();

  return (
    <OutsideClickHandler onOutsideClick={() => setClick(false)}>
      <_Wrapper>
        <_Header>
          <Text color="gray6" margin={['left', 5]}>
            기본정보
          </Text>
          <Text color="gray6" margin={[0, 80, 0, 5]}>
            최근 부여 항목
          </Text>
        </_Header>
        <_StudentWrapper>
          {selectedStudentId.map((student) => {
            return <RecentPointItem studentId={student} />;
          })}
        </_StudentWrapper>
        <_UnderWrapper>
          <Text size="BtnM">
            {selectedStudentId.length}명이 선택되었습니다.
          </Text>
          <_ButtonWrapper>
            {click && (
              <_Items>
                <_Item onClick={() => selectModal('GIVE_POINT')}>
                  <Text color="gray5" size="captionM" cursor="pointer">
                    상/벌점
                  </Text>
                </_Item>
                <_Item onClick={() => selectModal('GIVE_TAG_OPTIONS')}>
                  <Text color="gray5" size="captionM" cursor="pointer">
                    학생 태그
                  </Text>
                </_Item>
              </_Items>
            )}
            <Button onClick={() => setClick(!click)}>부여</Button>
          </_ButtonWrapper>
        </_UnderWrapper>
      </_Wrapper>
    </OutsideClickHandler>
  );
}

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 32px;
  right: 28px;
  background-color: white;
  width: 418px;
  height: 448px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.19);
  border-radius: 8px;
  z-index: 2;
  padding: 36px 40px 23px;
  /* animation: ${fadeInRight} 0.3s; */
`;

const _Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const _StudentWrapper = styled.div`
  width: 338px;
  height: 285px;
  margin-bottom: 30px;
  position: relative;
  overflow-y: scroll;
  margin-top: 10px;
`;

const _UnderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const _ButtonWrapper = styled.div`
  display: flex;
  position: relative;
`;

const _Items = styled.div`
  position: absolute;
  width: 132px;
  max-height: 138px;
  left: -137px;
  top: -46px;
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 3;
  overflow-y: scroll;
`;

const _Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0 8px;
  height: 46px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
`;
