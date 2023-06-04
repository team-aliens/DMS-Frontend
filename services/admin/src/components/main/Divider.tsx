import styled from 'styled-components';

interface DividerProps {
  width?: number;
  height?: number;
  margin?: string;
  maxWidth?: number;
}
export function Divider({
  height = 500,
  margin = '0 20px 0 40px',
  width = 1,
  maxWidth = 1300,
}: DividerProps) {
  return <_Divider height={height} width={width} margin={margin} />;
}

const _Divider = styled.hr<DividerProps>`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ theme }) => theme.color.gray3};
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;
