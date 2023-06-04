import { Text, Trash } from '@team-aliens/design-system';
import styled from 'styled-components';
import { useModal } from '@/hooks/useModal';
import {
  AllPointItemType,
  StudentPointHistoryType,
} from '@/apis/points/response';
import { PointEnum, PointType } from '@/apis/points';
import { usePointHistoryId } from '@/store/usePointHistoryId';
import { useRecentStudentPointHistory } from '@/hooks/usePointsApi';
import { useState } from 'react';

interface PropsType extends StudentPointHistoryType {
  isDeleteListOption?: boolean;
  canDelete?: boolean;
  canClick?: boolean;
  onClick?: (id: string, name: string, score: number, type: PointType) => void;
  OptionSelected?: string;
}

export function PointItem({
  isDeleteListOption = false,
  canDelete = false,
  canClick = false,
  onClick,
  OptionSelected,
  point_history_id,
  name,
  score,
  type,
}: PropsType) {
  const { selectModal } = useModal();
  const [setPointHistoryId] = usePointHistoryId((state) => [
    state.setPointHistoryId,
  ]);
  const openCancelPointModal = () => {
    selectModal('DELETE_POINT_LIST');
    setPointHistoryId(point_history_id);
  };

  const openDeletePointModal = () => {
    selectModal('DELETE_POINT_OPTION');
  };

  return (
    <_Wrapper
      className="grantPoint"
      canClick={canClick}
      type={type}
      onClick={() => onClick && onClick(point_history_id, name, score, type)}
      OptionSelected={OptionSelected === point_history_id}
    >
      {canClick && OptionSelected === point_history_id ? (
        <Text
          className="grantPoint"
          margin={[0, 20]}
          color={type === 'BONUS' ? 'primary' : 'error'}
          size="BtnM"
        >
          {name}
        </Text>
      ) : (
        <Text className="grantPoint" margin={[0, 20]} color="gray6" size="BtnM">
          {name}
        </Text>
      )}
      <_PointType
        className="grantPoint"
        margin={['left', 'auto']}
        color={type === 'BONUS' ? 'primary' : 'error'}
        size="bodyS"
      >
        {PointEnum[type]}
      </_PointType>
      <_Line className="grantPoint" />
      {canClick && OptionSelected === point_history_id ? (
        <Text
          className="grantPoint"
          margin={[0, 30]}
          color={type === 'BONUS' ? 'primary' : 'error'}
        >
          {score}
        </Text>
      ) : (
        <Text className="grantPoint" margin={[0, 30]} color="gray6">
          {score}
        </Text>
      )}
      {canDelete && (
        <>
          <_Line />
          <_Delete
            onClick={
              isDeleteListOption ? openDeletePointModal : openCancelPointModal
            }
          >
            <Trash colorKey="gray5" />
          </_Delete>
        </>
      )}
    </_Wrapper>
  );
}

export function RecentPointItem({ studentId }: { studentId: string }) {
  const { data: recentStudentPointHistory } =
    useRecentStudentPointHistory(studentId);

  return (
    <_Student>
      <>
        <Text>{recentStudentPointHistory?.student_name}</Text>
        <Text>{recentStudentPointHistory?.student_gcn}</Text>
      </>
      <_Divider />
      <>
        <_HollowBox width={80}>
          <Text
            color={recentStudentPointHistory?.point_name ? 'gray10' : 'gray5'}
          >
            {recentStudentPointHistory?.point_name || '내역 없음'}
          </Text>
        </_HollowBox>
        <Text color="primary">{recentStudentPointHistory?.point_score}</Text>
      </>
    </_Student>
  );
}

export function StudentPointItem({
  isDeleteListOption = false,
  canDelete = false,
  canClick = false,
  onClick,
  OptionSelected,
  point_history_id,
  date,
  name,
  score,
  type,
}: PropsType) {
  const { selectModal } = useModal();
  const [setPointHistoryId] = usePointHistoryId((state) => [
    state.setPointHistoryId,
  ]);
  const openCancelPointModal = () => {
    selectModal('DELETE_POINT_LIST');
    setPointHistoryId(point_history_id);
  };

  const openDeletePointModal = () => {
    selectModal('DELETE_POINT_OPTION');
  };

  const [mouseOver, setMouseOver] = useState<boolean>(false);

  return (
    <_Wrapper
      onMouseOver={() => {
        setMouseOver(true);
      }}
      onMouseOut={() => {
        setMouseOver(false);
      }}
      className="grantPoint"
      canClick={canClick}
      type={type}
      onClick={() => onClick && onClick(point_history_id, name, score, type)}
      OptionSelected={OptionSelected === point_history_id}
    >
      <Text className="grantPoint" margin={[0, 20]} color="gray6" size="BtnM">
        {name}
      </Text>
      <_PointDate
        className="grantPoint"
        margin={['left', 'auto']}
        color="gray6"
        size="bodyS"
      >
        {date}
      </_PointDate>
      <_Line className="grantPoint" />
      {!mouseOver ? (
        <Text
          className="grantPoint"
          margin={[0, 30]}
          color={type === 'BONUS' ? 'primary' : 'error'}
        >
          {score}
        </Text>
      ) : (
        <_Delete
          onClick={
            isDeleteListOption ? openDeletePointModal : openCancelPointModal
          }
        >
          <Trash colorKey="gray5" />
        </_Delete>
      )}
      {canDelete}
    </_Wrapper>
  );
}

// 전체내역 확인할 때 사용되는 컴포넌트
export function AllPointItem({
  point_history_id,
  student_name,
  student_gcn,
  point_name,
  point_score,
  point_type,
}: AllPointItemType) {
  const { selectModal } = useModal();
  const [pointHistoryId, setPointHistoryId] = usePointHistoryId((state) => [
    state.pointHistoryId,
    state.setPointHistoryId,
  ]);

  const openCancelPointModal = () => {
    selectModal('DELETE_POINT_LIST');
    setPointHistoryId(point_history_id);
  };

  const [mouseOver, setMouseOver] = useState<boolean>(false);

  return (
    <_AllPointWrapper
      onMouseOver={() => {
        setMouseOver(true);
      }}
      onMouseOut={() => {
        setMouseOver(false);
      }}
    >
      <Text margin={[0, 16, 0, 30]} color="gray10" size="bodyM">
        {student_name}
      </Text>
      <Text margin={['right', 'auto']} color="gray6" size="bodyM">
        {student_gcn}
      </Text>
      <Text margin={[0, 30]} color="gray6" size="BtnM">
        {point_name}
      </Text>
      <_Line />
      {!mouseOver ? (
        <Text
          margin={[0, 30]}
          color={point_type === 'BONUS' ? 'primary' : 'error'}
          size="bodyM"
        >
          {point_score}
        </Text>
      ) : (
        <_Delete onClick={openCancelPointModal}>
          <Trash colorKey="gray5" />
        </_Delete>
      )}
    </_AllPointWrapper>
  );
}

const _Wrapper = styled.div<{
  canClick?: boolean;
  OptionSelected?: boolean;
  type: string;
}>`
  display: flex;
  cursor: ${({ canClick }) => (canClick ? 'pointer' : 'default')};
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.color.gray2};
  border: 2px solid
    ${({ OptionSelected, type, canClick }) => {
      if (canClick && OptionSelected) {
        if (type === 'BONUS') return '#3D8AFF';
        return '#FF4646';
      }
      return '#EEEEEE';
    }};
  border-radius: 4px;
`;

const _AllPointWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.color.gray1};
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 20px rgba(238, 238, 238, 0.8);
`;

const _Line = styled.div`
  width: 1px;
  height: 30px;
  background-color: #eeeeee;
`;

const _PointDate = styled(Text)`
  margin-right: 20px;
`;

const _PointType = styled(_PointDate)``;

const _Delete = styled.div`
  margin: 0 26px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.gray2};
  border-radius: 50%;
`;

const _Student = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 57px;
  background-color: #f9f9f9;
  margin-bottom: 8px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  padding: 0 28px;
`;

const _HollowBox = styled.div<{ width: number }>`
  div {
    width: ${({ width }) => width}px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const _Divider = styled.div`
  position: absolute;
  top: 50%;
  left: 47%;
  transform: translate(-50%, -50%);
  width: 1px;
  height: 28px;
  background-color: ${({ theme }) => theme.color.gray3};
`;
