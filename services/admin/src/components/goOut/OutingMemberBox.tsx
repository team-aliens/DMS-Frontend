import styled from 'styled-components';

interface OutingMemberBoxProps {
  type?: string;
}

export function OutingMemberBox({ type }: OutingMemberBoxProps) {
  const isDelay = type === 'delay';
  const isComplete = type === 'complete';

  return (
    <Box isComplete={isComplete}>
      <Name isDelay={isDelay} isComplete={isComplete}>
        김은빈
      </Name>
      <Type isDelay={isDelay}>식사외출</Type>
      <TimeWrapper>
        {isDelay && <DelayTime>5분 지남</DelayTime>}
        <Time isDelay={isDelay} isComplete={isComplete}>
          00:00 ~ 00:00
        </Time>
      </TimeWrapper>
      {isComplete && <Complete>외출 완료</Complete>}
    </Box>
  );
}

const Box = styled.div<{ isComplete?: boolean }>`
  width: 452px;
  height: 50px;
  border-radius: 4px;
  background-color: ${(props) => (props.isComplete ? '#DDDDDD' : '#f9f9f9')};
  border: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  margin-bottom: 9px;
`;

const Name = styled.div<{ isDelay?: boolean; isComplete?: boolean }>`
  font-weight: 400;
  font-size: 16px;

  color: ${(props) => {
    if (props.isComplete) return '#999999';
    if (props.isDelay) return '#852424';
    return '#000';
  }};
  margin-left: 22px;
`;

const Type = styled.div<{ isDelay: boolean }>`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => (props.isDelay ? 'rgba(194, 53, 53, 0.5)' : '#999999')};
  margin-left: 23px;
  margin-right: 108px;
`;

const TimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Time = styled.div<{ isDelay: boolean; isComplete?: boolean }>`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => {
    if (props.isComplete) return '#999999';
    if (props.isDelay) return 'rgba(194, 53, 53, 0.5)';
    return '#000';
  }};
`;

const DelayTime = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: rgba(194, 53, 53, 0.5);
`;

const Complete = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #999999;
  margin-left: 22px;
`;
