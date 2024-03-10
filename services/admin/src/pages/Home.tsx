import styled from 'styled-components';
import { ChangeEvent, useState, useEffect } from 'react';
import { Button, Change, Text } from '@team-aliens/design-system';
import { StudentList } from '@/components/main/StudentList';
import { Divider } from '@/components/main/Divider';
import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { SortType } from '@/apis/managers';
import { useDebounce } from '@/hooks/useDebounce';
import { useObj } from '@/hooks/useObj';
import { useSearchStudents, useStudentDetail } from '@/hooks/useMangersApis';
import { PointList } from '@/components/main/PointList';
import { PointType } from '@/apis/points';
import { useStudentPointHistory } from '@/hooks/usePointsApi';
import { usePointHistoryList } from '@/hooks/usePointHistoryList';
import { TagType } from '@/apis/tags/response';
import { useAvailAbleFeatures } from '@/hooks/useSchoolsApi';
import {
  useClickedStudentIdStore,
  useSelectedStudentIdStore,
} from '@/store/useSelectedStudentIdStore';
import { SideBar } from '@/components/sidebar';
import { DetailBox } from '@/components/main/DetailBox/DetailBox';
import SideBarPortal from '@/components/sidebar/SideBarPortal';
import { useModal } from '@/hooks/useModal';

export interface FilterState {
  name: string;
  sort: SortType;
  filterType: PointType;
}

export interface LimitPoint {
  startPoint: number;
  endPoint: number;
}

export type ModeType = 'GENERAL' | 'POINTS';
export type ListViewType = 'STUDENTS' | 'POINTS';

interface Mode {
  type: ModeType;
  text: string;
}

export function Home() {
  const { debounce } = useDebounce();
  const { state: studentsPointHistoryList } = usePointHistoryList();

  const { obj: filter, changeObjectValue } = useObj<FilterState>({
    name: '',
    sort: 'GCN',
    filterType: 'ALL',
  });
  const [limitPoint, setLimitPoint] = useState<LimitPoint>({
    startPoint: -100,
    endPoint: 100,
  });
  const [checkedTagList, setCheckedTagList] = useState<TagType[]>([]);

  const [debouncedName, setDebouncedName] = useState(filter.name);
  const [selectedStudentId, resetStudentId, appendStudentId, deleteStudentId] =
    useSelectedStudentIdStore((state) => [
      state.selectedStudentId,
      state.resetStudentId,
      state.appendStudentId,
      state.deleteStudentId,
    ]);

  const [mode, setMode] = useState<Mode>({
    type: 'GENERAL',
    text: '부여',
  });
  const [listViewType, setListViewType] = useState<ListViewType>('POINTS');

  const [clickedStudentId, resetClickedStudentId] = useClickedStudentIdStore(
    (state) => [state.clickedStudentId, state.resetClickedStudentId],
  );

  const { modalState } = useModal();

  const { data: studentDetail, refetch: refetchStudentDetail } =
    useStudentDetail(clickedStudentId);

  const { data: studentList, refetch: refetchSearchStudents } =
    useSearchStudents({
      name: debouncedName,
      sort: filter.sort,
      filter_type: filter.filterType,
      min_point: limitPoint.startPoint,
      max_point: limitPoint.endPoint,
      tag_id: checkedTagList,
    });

  const { data: availableFeature } = useAvailAbleFeatures();

  const { data: studentPointHistory, refetch: refetchStudentPointHistory } =
    useStudentPointHistory(clickedStudentId, availableFeature?.point_service);

  const onChangeSortType = () => {
    const value: SortType = filter.sort === 'GCN' ? 'NAME' : 'GCN';
    changeObjectValue('sort', value);
  };

  const onChangeFilterType = (type: PointType) => {
    changeObjectValue('filterType', type);
  };

  const onChangeLimitPoint = (startPoint: number, endPoint: number) => {
    setLimitPoint({ startPoint, endPoint });
  };

  const onChangeSearchName = (e: ChangeEvent<HTMLInputElement>) => {
    changeObjectValue('name', e.target.value);
    debounce(() => setDebouncedName(e.target.value), 200);
  };

  const onClickStudent = (id: string, modeType?: ModeType) => {
    if (modeType === 'POINTS') {
      if (selectedStudentId.includes(id)) {
        deleteStudentId(id);
        console.log("TEST6",deleteStudentId);
      } else {
        appendStudentId(id);
      }
    } else {
      if (selectedStudentId[0] === id) {
        resetStudentId();
      } else {
        resetStudentId();
        appendStudentId(id);
      }
    }
  };

  const ChangeMode = () => {
    switch (mode.type) {
      case 'GENERAL':
        setMode({ ...mode, type: 'POINTS', text: '일반' });
        break;
      case 'POINTS':
        setMode({ ...mode, type: 'GENERAL', text: '부여' });
        setListViewType('POINTS');
        break;
      default:
        break;
    }
  };

  const ChangeListMode = () => {
    switch (listViewType) {
      case 'STUDENTS':
        setListViewType('POINTS');
        break;
      case 'POINTS':
        setListViewType('STUDENTS');
        break;
      default:
        break;
    }
  };

  return (
    <WithNavigatorBar>
      <_Wrapper>
        {listViewType === 'POINTS' ? (
          <>
            <StudentList
              mode={mode.type}
              studentList={studentList?.students || []}
              name={filter.name}
              sort={filter.sort}
              filterType={filter.filterType}
              startPoint={limitPoint.startPoint}
              endPoint={limitPoint.endPoint}
              checkedTagList={checkedTagList}
              setCheckedTagList={setCheckedTagList}
              availableFeature={availableFeature}
              onChangeSearchName={onChangeSearchName}
              onChangeSortType={onChangeSortType}
              onClickStudent={onClickStudent}
              onChangeLimitPoint={onChangeLimitPoint}
              onChangeFilterType={onChangeFilterType}
              refetchSearchStudents={refetchSearchStudents}
            />
          </>
        ) : (
          <PointList />
        )}
      </_Wrapper>
      <SideBarPortal>
        <SideBar
          isOpened={Boolean(clickedStudentId)}
          title="학생 상세 정보"
          close={() => {
            modalState.selectedModal === '' && resetClickedStudentId();
          }}
        >
          {clickedStudentId && (
            <DetailBox
              studentPointHistory={studentPointHistory}
              studentDetail={studentDetail}
              availableFeature={availableFeature}
            />
          )}
        </SideBar>
      </SideBarPortal>
    </WithNavigatorBar>
  );
}

const _Wrapper = styled.div`
  display: flex;
  margin: 70px auto 0 auto;
  overflow-y: scroll;
`;

const _ModeButton = styled(Button)`
  position: absolute;
  top: 50px;
  margin-left: 20px;
`;

const _PointListButton = styled(Button)`
  position: fixed;
  top: 50px;
  right: 60px;
`;
