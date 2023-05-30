import { useEffect, useRef, useContext, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';
import { Text, CheckBox } from '@team-aliens/design-system';
import { StudentInfo } from '@/apis/managers/response';
import { ModeType } from '@/pages/Home';
import { usePointHistoryList } from '@/hooks/usePointHistoryList';
import { Tag } from './Tag';

export interface StudentBoxProps {
  mode: ModeType;
  studentInfo: StudentInfo;
  onClickStudent: (id: string, modeType?: ModeType) => void;
  isSelected: boolean;
  setSelectedStudentId: Dispatch<SetStateAction<string[]>>;
  selectedStudentId: string[];
}

export function StudentBox({
  studentInfo,
  onClickStudent,
  isSelected,
  selectedStudentId,
  setSelectedStudentId,
  mode,
}: StudentBoxProps) {
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (selectedStudentId.includes(studentInfo.id))
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [selectedStudentId]);
  const { updateRecentlyStudentInfo, pointHistoryList } = usePointHistoryList();

  const onChangeCheckBox = () => {
    if(isSelected){
      setSelectedStudentId((student) => student.filter((id) => id !== studentInfo.id))
    }else {
      setSelectedStudentId((prev) => [...prev, studentInfo.id])
    }
  }
  return (
    <_Wrapper
      ref={ref}
      className="studentBox"
    >
      <CheckBox status={isSelected} onChange={onChangeCheckBox}
      />
      <img
        className="studentBox"
        src={studentInfo.profile_image_url}
        alt="프로필"
      />
      <Text
        className="studentBox"
        size="bodyL"
        color={'gray10'}
        margin={['left', 16]}
      >
        {studentInfo.name}
      </Text>
      <Text
        className="studentBox"
        margin={['left', 16]}
        size="bodyL"
        color={'gray6'}
      >
        {studentInfo.gcn}
      </Text>
      <_Tags>
        {studentInfo.tags?.map((tag) => (
          <Tag key={tag.id} id={tag.id} color={tag.color} name={tag.name} />
        ))}
      </_Tags>
      <Text
        className="studentBox"
        size="bodyL"
        color={'gray6'}
        margin={['left', 'auto']}
      >
        {studentInfo.room_number}호
      </Text>
    </_Wrapper>
  );
}

const _Wrapper = styled.li`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 70px;
  background-color: ${({ theme, }) => theme.color.gray1};
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  padding: 17px 40px 17px 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
  > img {
    width: 36px;
    height: 36px;
    background-color: ${({ theme  }) => theme.color.gray5};
    border-radius: 50%;
    margin-left: 24px;
  }
`;

const _Tags = styled.div`
  max-width: 45%;
  display: flex;
  align-items: center;
  margin-left: 24px;
  gap: 10px;
  white-space: nowrap;
  overflow: hidden;
  opacity: 1;
`;
