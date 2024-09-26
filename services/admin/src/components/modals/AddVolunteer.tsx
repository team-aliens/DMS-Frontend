import { useModal } from '@/hooks/useModal';
import {
  Modal,
  Input,
  DropDown,
  Button,
  TextArea,
} from '@team-aliens/design-system';
import styled from 'styled-components';
import { addVolunteerWork } from '@/apis/volunteers';
import { useState } from 'react';
import { addVolunteerWorkRequest } from '@/apis/volunteers/request';
import { gradeKoreanCalculator } from '@/utils/translate';
import { SexType } from '@/apis/volunteers/request';

export function AddVolunteer() {
  const [primaryGrade, setPrimaryGrade] = useState<string>('');
  const [secondaryGrade, setSecondaryGrade] = useState<string>('');

  const grades = ['1학년', '2학년', '3학년'];
  const { closeModal } = useModal();

  const [volunteerData, setVolunteerData] = useState<addVolunteerWorkRequest>({
    name: '',
    content: '',
    point: null,
    optional_score: null,
    max_applicants: null,
    available_grade: '',
    available_sex: 'ALL',
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setVolunteerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onDropDownChange = (gradeType: string, value: string) => {
    if (gradeType === 'primary') {
      setPrimaryGrade(value);
    } else if (gradeType === 'secondary') {
      setSecondaryGrade(value);
    }
  };

  const onSexButtonClick = (sex: SexType) => {
    setVolunteerData((prevData) => ({
      ...prevData,
      available_sex: sex,
    }));
    console.log(sex);
    console.log(volunteerData);
  };

  const onSubmit = async () => {
    try {
      const sortedGrades = [primaryGrade, secondaryGrade]
        .filter(Boolean)
        .sort();
      const combinedGrade = gradeKoreanCalculator(sortedGrades.join(', '));

      await addVolunteerWork({
        ...volunteerData,
        available_grade: combinedGrade,
      });
    } catch (error) {
      console.error(error);
    }
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
                placeholder="ex) 2층 자습실 청소"
                name="name"
                label="제목"
                value={volunteerData.name}
                onChange={onChange}
              />
              <DropDown
                items={grades}
                placeholder={''}
                value={primaryGrade}
                width={334}
                onChange={(value) => onDropDownChange('primary', value)}
                label="조건"
              />
              <DropDown
                items={grades}
                placeholder={''}
                value={secondaryGrade}
                width={334}
                onChange={(value) => onDropDownChange('secondary', value)}
              />
              <Input
                width={334}
                type="number"
                placeholder="ex) 1"
                name="point"
                value={volunteerData.point}
                label="점수"
                onChange={onChange}
              />
              <Input
                width={334}
                type="number"
                placeholder="ex) 10"
                name="optional_score"
                value={volunteerData.optional_score}
                onChange={onChange}
              />
              <Input
                width={334}
                type="number"
                placeholder="ex) 3"
                name="max_applicants"
                label="인원수"
                value={volunteerData.max_applicants}
                onChange={onChange}
              />
              <_ButtonWrapper>
                <Button kind="outline" onClick={() => onSexButtonClick('MALE')}>
                  남자
                </Button>
                <Button
                  kind="outline"
                  onClick={() => onSexButtonClick('FEMALE')}
                >
                  여자
                </Button>
                <Button kind="outline" onClick={() => onSexButtonClick('ALL')}>
                  전체
                </Button>
              </_ButtonWrapper>
            </_InputWrapper>
            <_TextAreaWrapper>
              <_TextareaText>내용</_TextareaText>
              <TextArea
                width={703}
                height={520}
                name="content"
                onChange={onChange}
                value={volunteerData.content}
              />
            </_TextAreaWrapper>
          </_Container>
        </>,
      ]}
      buttonList={[
        <>
          <Button kind="outline" onClick={closeModal}>
            취소
          </Button>
          <Button onClick={onSubmit}>확인</Button>
        </>,
      ]}
    ></Modal>
  );
}

const _InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
