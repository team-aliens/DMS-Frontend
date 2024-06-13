import { useModal } from '@/hooks/useModal';
import { Button, Modal } from '@team-aliens/design-system';
import { Dispatch, SetStateAction } from 'react';

interface PropsType {
  setSelectedOption?: Dispatch<SetStateAction<string>>;
  onClick?: () => void;
  tagModal: string;
}

export function DeleteOutingListModal({
  onClick,
  tagModal,
  setSelectedOption,
}: PropsType) {
  const { closeModal, selectModal } = useModal();

  const backToDeleteTagModal = () => {
    selectModal(
      tagModal === 'DELETE_OUTING_LIST_TYPE'
        ? 'DELETE_OUTING_LIST_TYPE'
        : 'OUTING_TYPE',
    );
    setSelectedOption('');
  };

  return (
    <Modal
      className="modalButton"
      close={closeModal}
      content="외출 유형을 삭제하시겠습니까?"
      buttonList={[
        <Button
          className="modalButton"
          onClick={backToDeleteTagModal}
          kind="outline"
          color="gray"
        >
          취소
        </Button>,
        <Button
          className="modalButton"
          onClick={onClick}
          kind="contained"
          color="error"
        >
          확인
        </Button>,
      ]}
    />
  );
}
