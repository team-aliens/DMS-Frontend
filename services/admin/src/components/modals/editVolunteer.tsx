import {
  Modal,
  Input,
  DropDown,
  Button,
  TextArea,
} from '@team-aliens/design-system';
import styled from 'styled-components';
import { editVolunteerWork } from '@/apis/volunteers';
import { useEffect, useState } from 'react';
import { editVolunteerWorkRequest } from '@/apis/volunteers/request';
import {
  gradeKoreanCalculator,
  gradeEngToKorean,
  sexKoreanToEng,
  SexToKorean,
} from '@/utils/translate';
import { SexType } from '@/apis/volunteers/request';

interface EditVolunteerProps {
  closeModal: () => void;
  volunteerId: string;
  name: string;
  sex: SexType;
  grade: string;
  point: number;
  optionalScore: number;
  maxApplicants: number;
  content: string;
}

export function EditVolunteer({
  closeModal,
  volunteerId,
  name,
  sex,
  grade,
  point,
  optionalScore,
  maxApplicants,
  content,
}: EditVolunteerProps) {
  const [primaryGrade, setPrimaryGrade] = useState<string>('');
  const [secondaryGrade, setSecondaryGrade] = useState<string>('');

  const grades = ['1학년', '2학년', '3학년'];

  const [editvolunteerData, setEditVolunteerData] =
    useState<editVolunteerWorkRequest>({
      name: name,
      content: content,
      available_sex: sex,
      available_grade: grade,
      point: point,
      optional_score: optionalScore,
      max_applicants: maxApplicants,
    });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    const newValue =
      name === 'point' || name === 'optional_score' || name === 'max_applicants'
        ? Number(value)
        : value;

    setEditVolunteerData((prevData) => ({
      ...prevData,
      [name]: newValue,
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
    setEditVolunteerData((prevData) => ({
      ...prevData,
      available_sex: sex,
    }));
  };

  const onSubmit = async () => {
    try {
      const sortedGrades = [primaryGrade, secondaryGrade]
        .filter(Boolean)
        .sort();
      const combinedGrade = gradeKoreanCalculator(sortedGrades.join(', '));

      await editVolunteerWork(volunteerId, {
        ...editvolunteerData,
        available_grade: combinedGrade,
      });
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const initialGrades = grade.split(', ').map((g) => g);

    const firstGrade = initialGrades[0].includes('학년')
      ? initialGrades[0]
      : initialGrades[0] + '학년';
    const secondGrade = initialGrades[1]
      ? initialGrades[1].includes('학년')
        ? initialGrades[1]
        : initialGrades[1] + '학년'
      : '';

    setPrimaryGrade(gradeEngToKorean(firstGrade || ''));
    setSecondaryGrade(gradeEngToKorean(secondGrade || ''));
  }, [grade]);

  return (
    <Modal
      close={closeModal}
      title="봉사 수정"
      width="1151px"
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
                value={editvolunteerData.name}
                onChange={onChange}
              />
              <DropDown
                items={grades}
                placeholder={primaryGrade || ''}
                value={primaryGrade}
                width={334}
                onChange={(value) => onDropDownChange('primary', value)}
                label="조건"
              />
              <DropDown
                items={grades}
                placeholder={secondaryGrade || ''}
                value={secondaryGrade}
                width={334}
                onChange={(value) => onDropDownChange('secondary', value)}
              />
              <Input
                width={334}
                type="number"
                placeholder={'ex) 5'}
                name="point"
                value={editvolunteerData.point}
                label="점수"
                onChange={onChange}
              />
              <Input
                width={334}
                type="number"
                placeholder="ex) 10"
                name="optional_score"
                value={editvolunteerData.optional_score}
                onChange={onChange}
              />
              <Input
                width={334}
                type="number"
                placeholder="ex) 3"
                name="max_applicants"
                label="인원수"
                value={editvolunteerData.max_applicants}
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
                value={editvolunteerData.content}
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
  align-items: center;
  justify-content: center;
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
