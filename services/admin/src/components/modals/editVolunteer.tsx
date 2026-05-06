import {
  Modal,
  Input,
  DropDown,
  Button,
  TextArea,
  Text,
} from '@team-aliens/design-system';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { editVolunteerWorkRequest } from '@/apis/volunteers/request';
import { gradeKoreanCalculator, gradeEngToKorean } from '@/utils/translate';
import { SexType } from '@/apis/volunteers/request';
import { useEditVolunteerWork } from '@/hooks/useVolunteerApi';

interface EditVolunteerProps {
  closeModal: () => void;
  volunteerId: string;
  name: string;
  sex: SexType;
  grade: string;
  score: number;
  optionalScore: number;
  maxApplicants: number;
}

export function EditVolunteer({
  closeModal,
  volunteerId,
  name,
  sex,
  grade,
  score,
  optionalScore,
  maxApplicants,
}: EditVolunteerProps) {
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const { mutate: editVolunteer } = useEditVolunteerWork();
  const grades = ['1학년', '2학년', '3학년', '전체'];

  const [editvolunteerData, setEditVolunteerData] =
    useState<editVolunteerWorkRequest>({
      name: name,
      available_sex: sex,
      available_grade: grade,
      score: score,
      optional_score: optionalScore,
      max_applicants: maxApplicants,
    });

  const [selectedSex, setSelectedSex] = useState<SexType>('ALL');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    const newValue =
      name === 'score' || name === 'optional_score' || name === 'max_applicants'
        ? value === ''
          ? null
          : Number(value)
        : value;

    setEditVolunteerData((prevData) => ({
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
    setEditVolunteerData((prevData) => ({
      ...prevData,
      available_sex: sex,
    }));
  };

  const onSubmit = () => {
    const sortedGrades = selectedGrades.slice().filter(Boolean).sort();
    const combinedGrade = gradeKoreanCalculator(sortedGrades.join(', '));

    editVolunteer(
      {
        volunteerId,
        body: {
          ...editvolunteerData,
          available_grade: combinedGrade,
        },
      },
      {
        onSuccess: () => {
          closeModal();
        },
      },
    );
  };

  useEffect(() => {
    const initialGrades = grade ? grade.split(', ').map((g) => g) : [];

    const normalize = (g?: string) => {
      if (!g) return '';
      return g.includes('학년') ? g : `${g}학년`;
    };

    const firstGrade = normalize(initialGrades[0]);
    const secondGrade = normalize(initialGrades[1]);

    const gradesToSet = [] as string[];
    if (firstGrade) gradesToSet.push(gradeEngToKorean(firstGrade));
    if (secondGrade) gradesToSet.push(gradeEngToKorean(secondGrade));

    if (grade && (grade.includes('전체') || grade === 'ALL')) {
      setSelectedGrades(['전체']);
    } else {
      setSelectedGrades(gradesToSet);
    }

    setSelectedSex(sex);
    setEditVolunteerData((prev) => ({ ...prev, available_grade: grade }));
  }, [grade, sex]);

  return (
    <Modal
      close={closeModal}
      title="봉사 수정"
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
                  value={editvolunteerData.name}
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
                  placeholder={'ex) 5'}
                  name="score"
                  value={editvolunteerData.score}
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

const _GradeButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 2fr));
  gap: 12px;
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
