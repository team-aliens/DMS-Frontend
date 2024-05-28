import { Text } from '@team-aliens/design-system';
import { WithNavigatorBar } from '../WithNavigatorBar';
import { ListOptions } from './ListOptions';
import styled from 'styled-components';

export function OutingTimeSet() {
  const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];
  return (
    <WithNavigatorBar>
      <_Wrapper>
        <ListOptions />
        <_WeeklyBox>
          <>
            {daysOfWeek.map((item: string) => (
              <_DayOfTheWeek key={item}>
                <_Text>{item}</_Text>
                {item !== '일' && <_Line />}
                <_TimeBox>
                  <Text color="primary" size="bodyS">
                    공통 <br />
                    00:00 ~ 00:00
                  </Text>
                </_TimeBox>
              </_DayOfTheWeek>
            ))}
          </>
        </_WeeklyBox>
      </_Wrapper>
    </WithNavigatorBar>
  );
}

const _Wrapper = styled.div`
  width: 990px;
  margin: 0 auto;
  padding: 100px 0;
`;

const _WeeklyBox = styled.div`
  width: 100%;
  max-width: 1030px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  margin-top: 100px;
  padding-top: 15px;
  box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.1);
  display: flex;
`;

const _DayOfTheWeek = styled.div`
  display: flex;
  flex-direction: column;
  width: 14.25%;
  align-items: center;
  position: relative;
`;

const _Line = styled.div`
  background: #ddd;
  width: 1px;
  height: 268px;
  position: absolute;
  right: 0;
`;

const _Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  color: #999;
`;

const _TimeBox = styled.div`
  width: 112px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
