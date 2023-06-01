import { useModal } from '@/hooks/useModal';
import { Button, Input, Modal } from '@team-aliens/design-system';
import { ChangeEvent } from 'react';

interface PropsType {
  question: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  answer: string;
  onClick: () => void;
}

export function ChangeQnA({ question, onChange, answer, onClick }: PropsType) {
  const { closeModal } = useModal();

  return (
    <Modal
      close={closeModal}
      buttonList={[
        <Button kind="contained" onClick={onClick}>
          저장
        </Button>,
      ]}
      title="새 확인 질문과 답변을 입력해주세요."
      inputList={[
        <Input
          name="question"
          value={question}
          onChange={onChange}
          placeholder="질문"
        />,
        <Input
          name="answer"
          value={answer}
          onChange={onChange}
          placeholder="답변"
        />,
      ]}
    />
  );
}
