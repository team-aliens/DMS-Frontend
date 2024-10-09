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
} from '@/utils/translate';
import { SexType } from '@/apis/volunteers/request';
import { useToast } from '@/hooks/useToast';

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
  const [primaryGrade, setPrimaryGrade] = useState<string>('');
  const [secondaryGrade, setSecondaryGrade] = useState<string>('');
  const { toastDispatch } = useToast();

  const grades = ['1학년', '2학년', '3학년'];

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
        ? value === '' ?  null : Number(value)
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
    setSelectedSex(sex);
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

      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '봉사 활동을 성공적으로 수정했습니다.',
      });
      
      closeModal();
      window.location.reload();
    } catch (error) {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'ERROR',
        message: '봉사 활동 수정에 실패했습니다.'
      })
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
    setSelectedSex(sex);
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
                <_ButtonWrapper>
                  <Button kind={selectedSex === 'MALE' ? 'contained' : 'outline'} onClick={() => onSexButtonClick('MALE')}>
                    남자
                  </Button>
                  <Button
                    kind={selectedSex === 'FEMALE' ? 'contained' : 'outline'}
                    onClick={() => onSexButtonClick('FEMALE')}
                  >
                    여자
                  </Button>
                  <Button kind={selectedSex === 'ALL' ? 'contained' : 'outline'} onClick={() => onSexButtonClick('ALL')}>
                    전체
                  </Button>
                </_ButtonWrapper>  
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
