import styled from 'styled-components';
import { Text } from '@team-aliens/design-system';
import { StudentDetailPointList } from './StudentDetailPoint';
import { PointHistoryList } from '@/context/pointHistoryList';
import { IsUseAbleFeature } from '@/apis/auth/response';
import { StudentInfo } from '@/apis/managers/response';
import { useSelectedStudentIdStore } from '@/store/useSelectedStudentIdStore';

interface PropsType {
  studentList: StudentInfo[];
  pointHistoryList: PointHistoryList[];
  availableFeature: IsUseAbleFeature;
}

export function HistoryList({
  studentList,
  pointHistoryList,
  availableFeature,
}: PropsType) {
  const [selectedStudentId] = useSelectedStudentIdStore((state) => [
    state.selectedStudentId,
  ]);

  return (
    <>
      <_PointDetailBox isSelected={selectedStudentId.length > 0}>
        {availableFeature.point_service
          ? pointHistoryList
              .filter((i) => selectedStudentId.includes(i.studentId))
              .map(({ name, gcn, studentId, list }) => (
                <StudentDetailPointList
                  key={studentId}
                  name={name}
                  gcn={gcn}
                  historyList={list}
                  availableFeature={availableFeature}
                />
              ))
          : studentList
              .filter((res) => selectedStudentId.includes(res.id))
              .map(({ name, id, gcn }) => (
                <StudentDetailPointList
                  key={id}
                  name={name}
                  gcn={gcn}
                  availableFeature={availableFeature}
                />
              ))}
      </_PointDetailBox>
    </>
  );
}

const _PointDetailBox = styled.div<{ isSelected: boolean }>`
  position: relative;
  width: 309px;
  min-height: 485px;
  border-top: ${({ theme, isSelected }) =>
    isSelected && `1px solid ${theme.color.gray5}`};
  margin-top: 20px;
`;
