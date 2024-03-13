import { Arrow, Button, Text } from '@team-aliens/design-system';
import styled from 'styled-components';
import { Divider } from '@/components/main/Divider';

interface HeaderProps {
  date: string;
}

const Header = ({ date }: HeaderProps) => {
  return (
    <_Container>
      <_DateBox>
        <Arrow />
        <Text size="headlineM" color="gray8">
          {date}
        </Text>
        <Arrow direction="right" />
      </_DateBox>
      <_ButtonWrapper>
        <Button kind="outline" color="gray">
          엑셀 출력
        </Button>
        <Button kind="outline" color="gray">
          외출 유형
        </Button>
        <Divider height={43} width={2} margin="0" />
        <Button>외출 시간 설정</Button>
      </_ButtonWrapper>
    </_Container>
  );
};

const _Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const _ButtonWrapper = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`;

const _DateBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export default Header;
