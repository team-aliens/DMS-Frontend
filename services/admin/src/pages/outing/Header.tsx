import { Arrow, Button, Text } from '@team-aliens/design-system';
import styled from 'styled-components';
import { Divider } from '@/components/main/Divider';
import { useToast } from '@/hooks/useToast';
import { ArrowLeft, ArrowRight } from '@/assets';

interface HeaderProps {
  date: string;
  onArrowClick: (increase: number) => void;
}

const Header = ({ date, onArrowClick }: HeaderProps) => {
  const { toastDispatch } = useToast();

  const outingTileClick = () => {
    toastDispatch({
      actionType: 'APPEND_TOAST',
      toastType: 'INFORMATION',
      message: '개발 중인 기능입니다.',
    });
  };

  return (
    <_Container>
      <_DateBox>
        <img src={ArrowLeft} onClick={() => onArrowClick(-1)} />
        <Text size="headlineM" color="gray8">
          {date}
        </Text>
        <img src={ArrowRight} onClick={() => onArrowClick(+1)} />
      </_DateBox>
      <_ButtonWrapper onClick={outingTileClick}>
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
  margin: 50px 0px;
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
