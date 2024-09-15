import { useModal } from '@/hooks/useModal';
import {
  Modal,
  Input,
  DropDown,
  Button,
  TextArea,
} from '@team-aliens/design-system';
import styled from 'styled-components';

export function AddVolunteer() {
  const grades = ['1학년', '2학년', '3학년'];

  const { closeModal } = useModal();

  const onChange = () => {
    console.log('');
  };

  return (
    <Modal
      close={closeModal}
      title="봉사 추가"
      inputList={[
        <>
          <_Container>
            <_InputWrapper>
              <Input
                width={334}
                type="text"
                placeholder="봉사활동 이름"
                name={'title'}
                label="제목"
                value=""
                onChange={onChange}
              />
              <DropDown
                items={grades}
                placeholder={''}
                value=""
                width={334}
                onChange={onChange}
                label="조건"
              />
              <DropDown
                items={grades}
                placeholder={''}
                value=""
                width={334}
                onChange={onChange}
              />
              <Input
                width={334}
                type="number"
                placeholder="점수"
                name={'score'}
                label="점수"
                value=""
                onChange={onChange}
              />
              <Input
                width={334}
                type="number"
                placeholder="인원수"
                name={'people'}
                label="인원수"
                value=""
                onChange={onChange}
              />
              <_ButtonWrapper>
                <Button kind="outline">남자</Button>
                <Button kind="outline">여자</Button>
                <Button kind="outline">전체</Button>
              </_ButtonWrapper>
            </_InputWrapper>
            <_TextAreaWrapper>
              <_TextareaText>내용</_TextareaText>
              <TextArea
                width={703}
                height={520}
                name="내용"
                onChange={onChange}
                value=""
              />
            </_TextAreaWrapper>
          </_Container>
        </>,
      ]}
      buttonList={[
        <>
          <Button kind="outline">취소</Button>
          <Button>확인</Button>
        </>,
      ]}
    ></Modal>
  );
}

const _InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const _ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 36px;
`;

const _Container = styled.div`
  display: flex;
  gap: 56px;
`;

const _TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const _TextareaText = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #555555;
  margin-left: 6px;
`;
