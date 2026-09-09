import { useState, useMemo } from 'react';
import {
  PageLayout,
  _PageHeader,
  _PageTitle,
  _Toolbar,
} from '../components/layout';
import { TypeFilter } from '../components/daybreak/TypeFilter';
import { ActiveButtonBar } from '../components/daybreak/ActiveButtonBar';
import { TeacherTable } from '../components/daybreak/Table';
import { DetailSidebar } from '../components/daybreak/DetailSidebar';
import { useModal } from '@/hooks/useModal';
import { useToast } from '@/hooks/useToast';
import {
  useGeneralStudyApplication,
  useUpdateStudyStatus,
} from '@/hooks/useDaybreakApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const DaybreakListPage = () => {
  const [selectedStudentId, setSelectedStudentId] = useState<string>('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedTypeId, setSelectedTypeId] = useState<string>('');

  const { selectModal, closeModal, modalState } = useModal();
  const { toastDispatch } = useToast();

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGeneralStudyApplication({
      ...(selectedTypeId && { type_id: selectedTypeId }),
    });

  const applicationList = useMemo(
    () => data?.pages.flatMap((page) => page.applications) ?? [],
    [data]
  );

  const scrollRef = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  const { mutate: updateStatus } = useUpdateStudyStatus();

  // 아직 요청 중인 신청만 상태를 바꿀 수 있다
  const selectableIds = useMemo(
    () =>
      applicationList
        .filter((item) => item.status === 'PENDING')
        .map((item) => item.application_id),
    [applicationList]
  );

  const handleRowClick = (id: string) => {
    const clicked = applicationList.find((item) => item.application_id === id);
    if (!clicked) return;
    setSelectedStudentId(clicked.student_id);
    selectModal('DAYBREAK_STUDY_DETAIL');
  };

  const handleActionClick = (action: 'APPROVE' | 'REJECT') => {
    if (selectedIds.length === 0)
      return toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'ERROR',
        message: '선택된 항목이 없습니다.',
      });

    updateStatus(
      {
        application_id_list: selectedIds,
        status: action === 'APPROVE' ? 'FIRST_APPROVED' : 'REJECTED',
      },
      { onSuccess: () => setSelectedIds([]) }
    );
  };

  return (
    <>
      <PageLayout>
        <_PageHeader>
          <_PageTitle>새벽자습 리스트</_PageTitle>
          <_Toolbar>
            <TypeFilter
              value={selectedTypeId}
              onChange={(typeId) => {
                setSelectedTypeId(typeId);
                setSelectedIds([]);
              }}
            />
            <ActiveButtonBar onClick={handleActionClick} />
          </_Toolbar>
        </_PageHeader>

        <TeacherTable
          data={applicationList}
          selectedIds={selectedIds}
          handleRowClick={handleRowClick}
          onSelectChange={(ids) =>
            setSelectedIds(ids.filter((id) => selectableIds.includes(id)))
          }
        />
        <div ref={scrollRef} />
      </PageLayout>

      {modalState.selectedModal === 'DAYBREAK_STUDY_DETAIL' && (
        <DetailSidebar studentId={selectedStudentId} close={closeModal} />
      )}
    </>
  );
};
