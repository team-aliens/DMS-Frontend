import { MegaPhone, Text, Button } from '@team-aliens/design-system';
import { Divider } from '../../components/main/Divider';
import styled from 'styled-components';
import { useModal } from '@/hooks/useModal';
import OutingTimeModal from '../../components/outings/OutingTimeModal';
import OutingAddTimeModal from '@/components/outings/OutingAddTimeModal';
import { Link } from 'react-router-dom';
import OutingDisabledTime from '@/components/outings/OutingDisabledTime';
import { useToast } from '@/hooks/useToast';

export function OutingOptions() {
  const { selectModal, closeModal, modalState } = useModal();
  const { toastDispatch } = useToast();

  const handleButton = () => {
    toastDispatch({
      actionType: 'APPEND_TOAST',
      toastType: 'INFORMATION',
      message: '개발 중인 기능입니다.',
    });
  };

  return (
    <>
      <_Wrapper>
        <_ApplyAbleTime>
          <MegaPhone fill={false} colorKey="primary" />
          <Text margin={['left', 20]} color="gray5" size="bodyS">
            {/* TODO: 외출 시간 설정 모달  */}
            외출 시간 설정을 입력해 주세요.
          </Text>
          {/* TODO: TimeModal 수정 필요  */}
          <Button
            kind="text"
            color="primary"
            margin={['left', 'auto']}
            // onClick={() => selectModal('OUTING_TIME')}
            onClick={handleButton}
          >
            작성
          </Button>
        </_ApplyAbleTime>
        <div className="buttonWrapper">
          <Button
            color="gray"
            onClick={() => selectModal('OUTING_DISABLED_TIME')}
          >
            외출 비활성화
          </Button>
          <Button
            kind="outline"
            color="gray"
            onClick={() => selectModal('OUTING_ADD_TIME')}
          >
            항목 추가
          </Button>
          <Divider height={43} width={2} margin="0" />
          <Link to={'/outing'}>
            <Button>외출 현황</Button>
          </Link>
        </div>
      </_Wrapper>
      {modalState.selectedModal === 'OUTING_TIME' && <OutingTimeModal />}
      {modalState.selectedModal === 'OUTING_ADD_TIME' && (
        <OutingAddTimeModal closeModal={closeModal} />
      )}
      {modalState.selectedModal === 'OUTING_DISABLED_TIME' && (
        <OutingDisabledTime />
      )}
    </>
  );
}

const _Wrapper = styled.div`
  display: flex;
  .buttonWrapper {
    display: flex;
    margin-left: auto;
    gap: 12px;
    position: relative;
  }
`;

const _ApplyAbleTime = styled.div`
  display: flex;
  align-items: center;
  min-width: 400px;
  height: 50px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.gray1};
  padding-left: 20px;
  box-shadow: 0 1px 20px rgba(238, 238, 238, 0.8);
  > button {
    min-width: 58px;
  }
`;

const _ButtonWrapper = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`;
