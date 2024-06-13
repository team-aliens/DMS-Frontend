import styled from 'styled-components';
import { useEffect } from 'react';
import {
  Button,
  SearchBox,
  Sort,
  CheckBox,
  Text,
} from '@team-aliens/design-system';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { SortEnum } from '@/apis/managers';
import { StudentBox } from '@/components/main/StudentBox';
import { StudentInfo } from '@/apis/managers/response';
import { useModal } from '@/hooks/useModal';
import { PointFilterModal } from '@/components/modals/PointFilter';
import { DeletePointListModal } from '../modals/DeletePointList';
import {
  useCancelPointHistory,
  usePointOptionList,
} from '@/hooks/usePointsApi';
import { FilterState, ModeType } from '@/pages/Home';
import {
  PointEnum,
  PointType,
  useAllPointHistoryExcel,
  useDeletePointOption,
} from '@/apis/points';
import { DeleteStudentModal } from '../modals/DeleteStudent';
import { useDeleteStudent } from '@/hooks/useMangersApis';
import { GivePointOptionsModal } from '../modals/GivePointOptionsModal';
import { ViewPointOptionsModal } from '../modals/ViewPointOptionsModal';
import { DeletePointOptionModal } from '../modals/DeletePointOption';
import { useToast } from '@/hooks/useToast';
import { TagDropDown } from './TagDropDown';
import { TagType } from '@/apis/tags/response';
import { DeleteStudentTagModal } from '../modals/DeleteStudentTag';
import { useDeleteStudentTag } from '@/hooks/useTagsApi';
import { GiveAllTagModal } from '../modals/GiveAllTagModal';
import { useTagList } from '@/hooks/useTagsApi';
import { DeleteTagModal } from '../modals/DeleteTag';
import { ViewAllTagModal } from '../modals/ViewAllTagModal';
import { useDeleteTag } from '@/apis/tags';
import { IsUseAbleFeature } from '@/apis/auth/response';
import { Divider } from './Divider';
import { ViewItem } from './ViewItem';
import {
  useClickedStudentIdStore,
  useSelectedStudentIdStore,
} from '@/store/useSelectedStudentIdStore';
import { usePointHistoryId } from '@/store/usePointHistoryId';
import { useQueryClient } from '@tanstack/react-query';
import { useDeleteTagIdStore } from '@/store/useDeleteTagId';
import StudentSelectModal from '../modals/StudentSelectModal';
import SideBarPortal from '../sidebar/SideBarPortal';
import { PointList } from './PointList';
import { SideBar } from '../sidebar';

interface Props extends FilterState {
  mode: ModeType;
  studentList: StudentInfo[];
  startPoint: number;
  endPoint: number;
  checkedTagList: TagType[];
  setCheckedTagList: Dispatch<SetStateAction<TagType[]>>;
  availableFeature: IsUseAbleFeature;
  onChangeSearchName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSortType: () => void;
  onClickStudent: (id: string, modeType?: ModeType) => void;
  onChangeFilterType: (type: PointType) => void;
  onChangeLimitPoint: (startPoint: number, endPoint: number) => void;
  refetchSearchStudents?: () => void;
}

export function StudentList({
  mode,
  studentList,
  name,
  sort,
  filterType,
  startPoint,
  endPoint,
  checkedTagList,
  setCheckedTagList,
  onChangeSearchName,
  onChangeSortType,
  onClickStudent,
  onChangeFilterType,
  onChangeLimitPoint,
  refetchSearchStudents,
  availableFeature,
}: Props) {
  const [selectedStudentId, resetStudentId, appendStudentId] =
    useSelectedStudentIdStore((state) => [
      state.selectedStudentId,
      state.resetStudentId,
      state.appendStudentId,
    ]);

  const [clickedStudentId] = useClickedStudentIdStore((state) => [
    state.clickedStudentId,
  ]);

  const [pointHistoryId] = usePointHistoryId((state) => [state.pointHistoryId]);
  const [tagId] = useDeleteTagIdStore((state) => [state.deleteTagId]);
  const { modalState, selectModal } = useModal();

  useEffect(() => {
    refetchSearchStudents();
  }, [modalState]);

  const [openAllPointHistorySideBar, setOpenAllPointHistorySideBar] =
    useState(false);
  const openPointFilterModal = () => selectModal('POINT_FILTER');

  const cancelPoint = useCancelPointHistory(pointHistoryId);
  const deleteStudent = useDeleteStudent(clickedStudentId);
  const allPointHistoryExcel = useAllPointHistoryExcel();

  const [selectedPointOption, setSelectedPointOption] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [tagModal, setTagModal] = useState<string>('');

  const { data: allPointOptions } = usePointOptionList();
  const { data: allTags, refetch: refetchAllTags } = useTagList();

  const { toastDispatch } = useToast();

  const queryClient = useQueryClient();

  const deletePointOptionAPI = useDeletePointOption(selectedPointOption, {
    onSuccess: () => {
      selectModal('POINT_OPTIONS');
      queryClient.invalidateQueries(['usePointList']);
      setSelectedPointOption('');
      toastDispatch({
        toastType: 'SUCCESS',
        actionType: 'APPEND_TOAST',
        message: '상/벌점 항목이 삭제되었습니다.',
      });
    },
    onError: () => {
      toastDispatch({
        toastType: 'ERROR',
        actionType: 'APPEND_TOAST',
        message: '상/벌점 항목 삭제를 실패했습니다.',
      });
    },
  });

  const deleteTagAPI = useDeleteTag(selectedTag, {
    onSuccess: () => {
      refetchAllTags();
      queryClient.invalidateQueries(['studentList']);
      setSelectedTag('');
      toastDispatch({
        toastType: 'SUCCESS',
        actionType: 'APPEND_TOAST',
        message: '태그가 삭제되었습니다.',
      });
      selectModal('VIEW_TAG_OPTIONS');
    },
    onError: () => {
      toastDispatch({
        toastType: 'ERROR',
        actionType: 'APPEND_TOAST',
        message: '태그 삭제를 실패했습니다.',
      });
    },
  });

  const filterState = useMemo(() => {
    if (startPoint === -100 && endPoint === 100 && filterType === 'ALL') {
      return { text: '상/벌점', color: 'gray' };
    }
    return {
      text: `${PointEnum[filterType]} / ${startPoint}~${endPoint}점`,
      color: 'primary',
    };
  }, [startPoint, endPoint, filterType]);

  const [isSelectAllButton, setIsSelectAllButton] = useState(false);

  const onClickAllButton = () => {
    if (isSelectAllButton) {
      resetStudentId();
    } else {
      studentList.forEach((student) => {
        appendStudentId(student.id);
      });
    }
    setIsSelectAllButton((prev) => !prev);
  };

  const deleteStudentTag = useDeleteStudentTag(clickedStudentId, tagId);

  return (
    <_Wrapper>
      <_Filter className="filter">
        <SearchBox
          className="searchBox"
          value={name}
          onChange={onChangeSearchName}
        />
        <_Buttons>
          <ViewItem />
          {availableFeature?.point_service && (
            <Button
              color={filterState.color as 'primary' | 'gray' | 'error'}
              kind="outline"
              onClick={openPointFilterModal}
            >
              {filterState.text}
            </Button>
          )}
          <TagDropDown
            refetchSearchStudents={refetchSearchStudents}
            checkedTagList={checkedTagList}
            setCheckedTagList={setCheckedTagList}
          />
          <Button
            kind="outline"
            color="gray"
            onClick={onChangeSortType}
            Icon={<Sort />}
            className="filterButton"
          >
            {SortEnum[sort]}순
          </Button>
          <Divider width={2} height={47} margin={'0 16px 0 16px'} />
          <Button
            kind="outline"
            color="gray"
            onClick={() => {
              setOpenAllPointHistorySideBar(true);
            }}
            className="filterButton"
          >
            상/벌점 내역
          </Button>
        </_Buttons>
      </_Filter>
      <_Buttons>
        <CheckBox status={isSelectAllButton} onChange={onClickAllButton} />
        <Text cursor="pointer">전체 선택</Text>
      </_Buttons>
      <_StudentList>
        {studentList.map((item) => (
          <StudentBox
            key={item.id}
            mode={mode}
            studentInfo={item}
            onClickStudent={onClickStudent}
            isSelected={selectedStudentId.includes(item.id)}
          />
        ))}
      </_StudentList>
      {modalState.selectedModal === 'POINT_FILTER' && (
        <PointFilterModal
          filterType={filterType}
          minPoint={startPoint}
          maxPoint={endPoint}
          onChangeLimitPoint={onChangeLimitPoint}
          onChangeFilterType={onChangeFilterType}
        />
      )}
      {modalState.selectedModal === 'DELETE_POINT_LIST' && (
        <DeletePointListModal onClick={cancelPoint.mutate} />
      )}
      {modalState.selectedModal === 'DELETE_STUDENT' && (
        <DeleteStudentModal onClick={deleteStudent.mutate} />
      )}
      {modalState.selectedModal === 'POINT_OPTIONS' && (
        <ViewPointOptionsModal
          selectedPointOption={selectedPointOption}
          setSelectedPointOption={setSelectedPointOption}
          allPointOptions={allPointOptions}
        />
      )}
      {modalState.selectedModal === 'GIVE_POINT' && (
        <GivePointOptionsModal allPointOptions={allPointOptions} />
      )}
      {modalState.selectedModal === 'DELETE_POINT_OPTION' && (
        <DeletePointOptionModal
          setSelectedOption={setSelectedPointOption}
          onClick={deletePointOptionAPI.mutate}
        />
      )}
      {modalState.selectedModal === 'DELETE_STUDENT_TAG' && (
        <DeleteStudentTagModal
          onClick={() => {
            deleteStudentTag.mutate();
          }}
        />
      )}
      {modalState.selectedModal === 'GIVE_TAG_OPTIONS' && (
        <GiveAllTagModal
          selectedStudentId={selectedStudentId}
          refetchSearchStudents={refetchSearchStudents}
          allTags={allTags}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          setTagModal={setTagModal}
        />
      )}
      {modalState.selectedModal === 'VIEW_TAG_OPTIONS' && (
        <ViewAllTagModal
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          allTags={allTags}
          refetchAllTags={refetchAllTags}
          setTagModal={setTagModal}
        />
      )}
      {modalState.selectedModal === 'DELETE_TAG' && (
        <DeleteTagModal
          setSelectedOption={setSelectedTag}
          onClick={deleteTagAPI.mutate}
          tagModal={tagModal}
        />
      )}
      {Boolean(selectedStudentId.length) && <StudentSelectModal />}
      <SideBarPortal>
        <SideBar
          isOpened={openAllPointHistorySideBar}
          title="상/벌점 내역"
          close={() => {
            setOpenAllPointHistorySideBar(false);
          }}
          button={
            <Button margin={['top', 50]} onClick={allPointHistoryExcel.mutate}>
              엑셀 출력하기
            </Button>
          }
        >
          <PointList isOpened={openAllPointHistorySideBar} />
        </SideBar>
      </SideBarPortal>
    </_Wrapper>
  );
}
const _Wrapper = styled.div`
  width: 1030px;
  transition: width 0.7s ease-in-out;
  margin-bottom: 150px;
`;

const _Filter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 52px 0;
  > button {
    > svg > path {
      fill: ${({ theme }) => theme.color.gray6};
    }
  }
`;
const _StudentList = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const _Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 36px;
`;

const _ChooseModalBoxWrapper = styled.div`
  position: relative;
`;

const _ChooseBox = styled.div`
  z-index: 99;
  margin-left: -48px;
  margin-top: 8px;
  position: absolute;
  width: 132px;
  max-height: 92px;
  background: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.color.gray3};
`;

const _ChooseBoxText = styled.div`
  font-weight: 400;
  font-size: 12px;
  height: 46px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const _Line = styled.div`
  width: 110px;
  height: 1px;
  border: 1px solid ${({ theme }) => theme.color.gray3};
`;
