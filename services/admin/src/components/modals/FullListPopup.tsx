import { Modal, Button } from '@team-aliens/design-system';

interface PropsType {
  onClose: () => void;
}

export const FullListPopup = ({ onClose }: PropsType) => {
  return (
    <Modal
      close={onClose}
      title="항목이 가득찼습니다."
      buttonList={[
        <Button kind="outline" onClick={onClose}>
          취소
        </Button>,
        <Button disabled={false} onClick={onClose}>
          {'확인'}
        </Button>,
      ]}
      width="560px"
    >
      투표 선택지를 더 이상 추가 할 수 없습니다.
    </Modal>
  );
};
