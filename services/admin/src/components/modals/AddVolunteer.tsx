import { useModal } from '@/hooks/useModal';
import {
  Modal,
  Input,
  DropDown,
  Button,
  TextArea,
  Text,
} from '@team-aliens/design-system';
import styled from 'styled-components';
import { useState } from 'react';
import { useAddVolunteerWork } from '@/hooks/useVolunteerApi';
import { addVolunteerWorkRequest } from '@/apis/volunteers/request';
import { gradeKoreanCalculator } from '@/utils/translate';
import { SexType } from '@/apis/volunteers/request';
import { useToast } from '@/hooks/useToast';

export function AddVolunteer() {
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedSex, setSelectedSex] = useState<SexType>(null);
  const { mutate: addVolunteer } = useAddVolunteerWork();

  const grades = ['1학년', '2학년', '3학년', '전체'];
  const { closeModal } = useModal();

  const [volunteerData, setVolunteerData] = useState<addVolunteerWorkRequest>({
    name: '',
    score: null,
    optional_score: null,
    max_applicants: null,
    available_grade: '',
    available_sex: 'ALL',
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    const newValue =
      name === ' score' ||
      name === 'optional_score' ||
      name === 'max_applicants'
        ? value === ''
          ? null
          : Number(value)
        : value;

    setVolunteerData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const onGradeButtonClick = (grade: string) => {
    if (grade === '전체') {
      setSelectedGrades(['전체']);
      return;
    }

    setSelectedGrades((prev) => {
      if (prev.includes('전체')) return [grade];

      if (prev.includes(grade)) {
        return prev.filter((g) => g !== grade);
      }

      if (prev.length >= 2) return prev;

      return [...prev, grade];
    });
  };

  const onSexButtonClick = (sex: SexType) => {
    setSelectedSex(sex);
    setVolunteerData((prevData) => ({
      ...prevData,
      available_sex: sex,
    }));
  };

  const onSubmit = () => {
    const sortedGrades = selectedGrades.slice().filter(Boolean).sort();
    const combinedGrade = gradeKoreanCalculator(sortedGrades.join(', '));

    addVolunteer(
      {
        ...volunteerData,
        available_grade: combinedGrade,
      },
      {
        onSuccess: () => {
          closeModal();
        },
      },
    );
  };

  return (
    <Modal
      close={closeModal}
      title="봉사 추가"
      width="800px"
      inputList={[
        <>
          <_Container>
            <_InputWrapper>
              <_Contents>
                <Input
                  width={334}
                  type="text"
                  placeholder="ex) 2층 자습실 청소"
                  name="name"
                  label="제목"
                  value={volunteerData.name}
                  onChange={onChange}
                />
                <_GradeWrapper>
                  <Text>조건</Text>
                  <_GradeButtonWrapper>
                    {grades.map((g) => (
                      <Button
                        key={g}
                        kind={
                          selectedGrades.includes(g) ? 'contained' : 'outline'
                        }
                        onClick={() => onGradeButtonClick(g)}
                      >
                        {g}
                      </Button>
                    ))}
                  </_GradeButtonWrapper>
                </_GradeWrapper>

                <_SexWrapper>
                  <Text>성별</Text>
                  <_ButtonWrapper>
                    <Button
                      kind={selectedSex === 'MALE' ? 'contained' : 'outline'}
                      onClick={() => onSexButtonClick('MALE')}
                    >
                      남자
                    </Button>
                    <Button
                      kind={selectedSex === 'FEMALE' ? 'contained' : 'outline'}
                      onClick={() => onSexButtonClick('FEMALE')}
                    >
                      여자
                    </Button>
                    <Button
                      kind={selectedSex === 'ALL' ? 'contained' : 'outline'}
                      onClick={() => onSexButtonClick('ALL')}
                    >
                      전체
                    </Button>
                  </_ButtonWrapper>
                </_SexWrapper>
              </_Contents>
              <_Contents>
                <Input
                  width={334}
                  type="number"
                  placeholder="ex) 1"
                  name="score"
                  value={volunteerData.score}
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
              </_Contents>
            </_InputWrapper>
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

const _GradeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const _SexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const _Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const _InputWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

const _ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const _GradeButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 2fr));
  gap: 12px;
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
