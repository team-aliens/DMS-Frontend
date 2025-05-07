import { Magnifyingglass } from '@/assets/magnifyingglass';
import { useDeleteExcludedStudent } from '@/hooks/useVoteApi';
import {
  useCreateExcludedStudent,
  useExcludedStudentList,
  useModelStudentList,
} from '@/hooks/useVoteApi';
import { Button, Modal } from '@team-aliens/design-system';
import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface PropsType {
  onClose: () => void;
  edit: boolean;
}

export function EditVoteStudent({ onClose, edit }: PropsType) {
  const [name, setName] = useState('');
  const [isCheck, setIsCheck] = useState<string[]>([]); // 체크된 학생 gcn 리스트

  const today = new Date();
  const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    '0',
  )}-${String(today.getDate()).padStart(2, '0')}`;

  const { data: modelStudentsData } = useModelStudentList(date);
  const { data: excludedStudentData } = useExcludedStudentList();
  const { mutate: createExcludedStudent } = useCreateExcludedStudent();
  const { mutate: deleteExcludedStudent } = useDeleteExcludedStudent();

  const modelStudents = modelStudentsData?.students ?? [];
  const excludedStudents = excludedStudentData?.excluded_students ?? [];

  const mergedStudentList = edit // 수정 버전에서 제외된 학생 + 기존 모범 학생 리스트를 표현하기 위한 배열 합침
    ? [
        ...modelStudents,
        ...excludedStudents.filter(
          (excluded) =>
            !modelStudents.some((model) => model.gcn === excluded.gcn),
        ),
      ]
    : excludedStudents;

  const studentList = mergedStudentList;

  useEffect(() => {
    // 제외 학생 + 모범 학생 리스트에서 제외 학생들을 체크 상태로 하기 위한 useEffect
    if (excludedStudentData?.excluded_students) {
      const excludedGcns = excludedStudentData.excluded_students.map(
        (student) => student.gcn,
      );
      setIsCheck(excludedGcns);
    }
  }, [excludedStudentData]);

  const filteredStudents = name
    ? studentList.filter((student) => student.gcn.includes(name))
    : studentList;

  const onClick = (gcn: string, id: string) => {
    const isChecked = isCheck.includes(gcn);

    if (isChecked) {
      deleteExcludedStudent(id);
    } else {
      createExcludedStudent({ id, gcn });
    }

    setIsCheck((prev) =>
      isChecked ? prev.filter((id) => id !== gcn) : [...prev, gcn],
    );
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Modal
      buttonList={[
        <Button kind="outline" onClick={onClose}>
          취소
        </Button>,
        <Button onClick={() => window.location.reload()}>확인</Button>,
      ]}
      close={onClose}
      width="1150px"
    >
      <_Wrapper>
        <_Header>제외 학생 지정</_Header>
        <_Contents>
          <_Input>
            <Magnifyingglass />
            <input type="text" onChange={onChange} value={name} />
          </_Input>
          <_Students>
            {filteredStudents.length !== 0 ? (
              filteredStudents.map((student) => (
                <_Item
                  key={student.gcn}
                  onClick={() => onClick(student.gcn, student.id)}
                  check={isCheck.includes(student.gcn)}
                >
                  <span>{student.name}</span>
                  <span>{student.gcn}</span>
                </_Item>
              ))
            ) : (
              <span>아직 제외된 학생이 없습니다.</span>
            )}
          </_Students>
        </_Contents>
      </_Wrapper>
    </Modal>
  );
}

const _Item = styled.div<{ check: boolean }>`
  padding: 21px 0 21px 36px;
  border-radius: 4px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
  width: 770px;
  background-color: ${(props) =>
    props.check ? color.primaryDarken1 : 'transparent'};
  color: ${(props) => (props.check ? 'white' : 'inherit')};
  display: flex;
  gap: 12px;
  cursor: pointer;
  > span {
    font: ${font.bodyL};
  }
  &:hover {
    background-color: ${color.primaryDarken1};
    color: white;
  }
`;

const _Students = styled.div`
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 400px;
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    font: ${font.bodyL};
    color: ${color.gray5};
    height: 100%;
  }
`;

const _Input = styled.div`
  border-radius: 30px;
  background-color: ${color.gray1};
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
  width: 241px;
  padding: 10px 0px 9px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  > input {
    font: ${font.bodyL};
  }
`;

const _Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-height: 500px;
  overflow: hidden;
`;

const _Header = styled.header`
  font: ${font.headlineS};
`;
