import styled from 'styled-components';

interface DividerProps {
  width?: number;
  height?: number;
  margin?: string;
}
export function Divider({height = 500, margin = '0 20px 0 40px', width = 1}: DividerProps) {
  return (
    <_Wrapper margin={margin}>
      <_Divider height={height} width={width}/>
    </_Wrapper>
  );
}

const _Wrapper = styled.div<{margin: string}>`
  margin: ${({margin}) => margin};
`;

const _Divider = styled.hr<{height: number, width: number}>`
  width: ${({width}) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.color.gray3};
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
