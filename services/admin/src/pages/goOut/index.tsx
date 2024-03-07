import React, { useState } from 'react';
import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import styled from 'styled-components';
import { Button } from '@team-aliens/design-system';
import { Search } from '@team-aliens/design-system';
import { MemberBox } from '@/components/goOut/MemberBox';
import { OutingMemberBox } from '@/components/goOut/OutingMemberBox';
import { SearchBox } from '@/components/goOut/SearchBox';

interface TitleProps {
  active: boolean;
}

export function Outing() {
  const [activeTab, setActiveTab] = useState<'application' | 'expected'>(
    'application',
  );

  const tabContent: { [key in 'application' | 'expected']: React.ReactNode } = {
    application: (
      <MemberWrapper>
        <MemberBox />
        <MemberBox />
        <MemberBox />
      </MemberWrapper>
    ),
    expected: (
      <MemberWrapper>
        <MemberBox />
        <MemberBox />
        <MemberBox />
        <MemberBox />
        <MemberBox />
        <MemberBox />
        <MemberBox />
        <MemberBox />
        <MemberBox />
        <MemberBox />
        <MemberBox />
      </MemberWrapper>
    ),
  };

  const handleTabChange = (tab: 'application' | 'expected') => {
    setActiveTab(tab);
  };

  return (
    <WithNavigatorBar>
      <_Wrapper>
        <Button>모달 열기</Button>
        <BoxWrapper>
          <Box>
            <TitleWrapper>
              <TitleBox
                onClick={() => handleTabChange('application')}
                active={activeTab === 'application'}
              >
                외출 신청
              </TitleBox>
              <Line />
              <TitleBox
                onClick={() => handleTabChange('expected')}
                active={activeTab === 'expected'}
              >
                외출 예정
              </TitleBox>
            </TitleWrapper>
            <SearchBox />
            <div>{tabContent[activeTab]}</div>
          </Box>
          <Box>
            <Title>외출 중</Title>
            <SearchBox />
            <OutingWrapper>
              <OutingMemberBox type="delay" />
              <OutingMemberBox />
              <OutingMemberBox type="complete" />
            </OutingWrapper>
          </Box>
        </BoxWrapper>
      </_Wrapper>
    </WithNavigatorBar>
  );
}

const Box = styled.div`
  width: 506px;
  height: 628px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 15px 0px;
  display: flex;
  flex-direction: column;
  padding: 31px 27px 0px 27px;
  text-align: left;
  gap: 20px;
  overflow-y: auto;
`;

const MemberWrapper = styled.div`
  overflow-y: auto;
`;

const _Wrapper = styled.div`
  margin: 0 auto;
  width: 1030px;
  margin-bottom: 150px;
`;

const BoxWrapper = styled.div`
  display: flex;
  gap: 18px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const TitleBox = styled.div<TitleProps>`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => (props.active ? '#000000' : '#999999')};
  cursor: pointer;
`;

const Line = styled.div`
  width: 1px;
  height: 29px;
  border: 1px solid #eeeeee;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
`;

const OutingWrapper = styled.div``;

export default Outing;
