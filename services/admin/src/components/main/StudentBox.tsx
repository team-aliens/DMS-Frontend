import {
  useEffect,
  useRef,
  useContext,
  SetStateAction,
  Dispatch,
  ChangeEvent,
  MouseEvent,
} from 'react';
import styled from 'styled-components';
import { Text, CheckBox } from '@team-aliens/design-system';
import { StudentInfo } from '@/apis/managers/response';
import { ModeType } from '@/pages/Home';
import { usePointHistoryList } from '@/hooks/usePointHistoryList';
import { Tag } from './Tag';
import {
  useClickedStudentIdStore,
  useSelectedStudentIdStore,
} from '@/store/useSelectedStudentIdStore';

export interface StudentBoxProps {
  mode: ModeType;
  studentInfo: StudentInfo;
  onClickStudent: (id: string, modeType?: ModeType) => void;
  isSelected: boolean;
}

export function StudentBox({
  studentInfo,
  onClickStudent,
  isSelected,
  mode,
}: StudentBoxProps) {
  const ref = useRef<HTMLLIElement>(null);

  const [selectedStudentId, resetStudentId, appendStudentId, deleteStudentId] =
    useSelectedStudentIdStore((state) => [
      state.selectedStudentId,
      state.resetStudentId,
      state.appendStudentId,
      state.deleteStudentId,
    ]);

  const [clickedStudentId, setClickedStudentId, resetClickedStudentId] =
    useClickedStudentIdStore((state) => [
      state.clickedStudentId,
      state.setClickedStudentId,
      state.resetClickedStudentId,
    ]);

  useEffect(() => {
    if (clickedStudentId.includes(studentInfo.id))
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [clickedStudentId]);
  const { updateRecentlyStudentInfo, pointHistoryList } = usePointHistoryList();

  const onChangeCheckBox = () => {
    if (isSelected) {
      deleteStudentId(studentInfo.id);
    } else {
      appendStudentId(studentInfo.id);
    }
  };

  const preventCheckBoxClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const clickStudent = () => {
    if (studentInfo.id === clickedStudentId) resetClickedStudentId();
    else if (studentInfo.id !== clickedStudentId)
      setClickedStudentId(studentInfo.id);
  };

  return (
    <_Wrapper
      isClick={clickedStudentId === studentInfo.id}
      ref={ref}
      className="studentBox"
      onClick={clickStudent}
    >
      <div onClick={preventCheckBoxClick}>
        <CheckBox status={isSelected} onChange={onChangeCheckBox} />
      </div>
      <img
        className="studentBox"
        src={studentInfo.profile_image_url}
        alt="프로필"
      />
      <Text
        className="studentBox"
        size="bodyL"
        color="gray10"
        margin={['left', 16]}
      >
        {studentInfo.name}
      </Text>
      <Text
        className="studentBox"
        margin={['left', 16]}
        size="bodyL"
        color="gray6"
      >
        {studentInfo.gcn}
      </Text>
      <_Tags>
        <_BonusPoints>+ {studentInfo.bonus_point}</_BonusPoints>
        <_MinusPoints>- {studentInfo.minus_point}</_MinusPoints>
        {studentInfo.tags?.map((tag) => (
          <Tag key={tag.id} id={tag.id} color={tag.color} name={tag.name} />
        ))}
      </_Tags>
      <Text
        className="studentBox"
        size="bodyL"
        color="gray6"
        margin={['left', 'auto']}
      >
        {studentInfo.room_number}호
      </Text>
    </_Wrapper>
  );
}

const _Wrapper = styled.li<{ isClick: boolean }>`
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  height: 70px;
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 8px;
  padding: 17px 40px 17px 36px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: ${({ theme, isClick }) =>
    isClick && `2px solid ${theme.color.primary}`};
  > img {
    width: 36px;
    height: 36px;
    background-color: ${({ theme }) => theme.color.gray5};
    border-radius: 50%;
    margin-left: 24px;
  }
`;

const _Tags = styled.div`
  max-width: 45%;
  display: flex;
  align-items: center;
  margin-left: 24px;
  gap: 12px;
  white-space: nowrap;
  overflow: hidden;
  opacity: 1;
`;

const _BonusPoints = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 26px;
  border-radius: 13px;
  padding: 10px;
  gap: 4px;
  background-color: #ecf9ff;
  color: #0c408a;
  font-size: 14px;
`;

const _MinusPoints = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 26px;
  border-radius: 13px;
  padding: 10px;
  gap: 4px;
  background-color: #fff1f0;
  color: #cf1322;
  font-size: 14px;
`;
