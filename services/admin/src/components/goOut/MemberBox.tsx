import styled from 'styled-components';

export function MemberBox() {
  return (
    <Box>
      <div style={{ fontWeight: '400', fontSize: '16px' }}>김은빈 외 6명</div>
      <Type>식사외출</Type>
      <Time>00:00 ~ 00:00</Time>
    </Box>
  );
}

const Time = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-left: 145px;
`;

const Type = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #999999;
  margin-left: 22px;
`;

const Box = styled.div`
  width: 452px;
  height: 50px;
  border-radius: 4px;
  background-color: #f9f9f9;
  border: 1px solid #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 9px;
`;
