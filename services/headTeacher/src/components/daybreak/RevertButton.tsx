import styled from 'styled-components';
import { theme } from '@team-aliens/design-system/dist/styles/theme';
import RevertIcon from '../../assets/revert.svg';

interface RevertButtonProps {
  onClick: () => void;
}

export const RevertButton = ({ onClick }: RevertButtonProps) => {
  return (
    <_Button onClick={onClick}>
      <img src={RevertIcon} alt="" width={28} height={28} />
      되돌리기
    </_Button>
  );
};

const _Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 50px;
  padding: 10px 24px;
  border: none;
  border-radius: 12px;
  background: ${theme.teacherColor.blue[300]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  color: ${theme.teacherColor.gray[50]};
  ${theme.font.titleS};
  cursor: pointer;
  white-space: nowrap;
`;
