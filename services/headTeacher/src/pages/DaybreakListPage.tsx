import { useMemo, useState } from 'react';
import { ActionButton, ApprovalModal } from '@team-aliens/design-system';
import type { ApprovalType } from '@team-aliens/design-system';
import {
  PageLayout,
  _PageHeader,
  _PageTitle,
  _Toolbar,
} from '../components/layout';
import { TypeFilter } from '../components/daybreak/TypeFilter';
import { TeacherTable } from '../components/daybreak/Table';
import { DetailSidebar } from '../components/daybreak/DetailSidebar';
import { useModal } from '@/hooks/useModal';
import { useToast } from '@/hooks/useToast';
import {
  useHeadStudyApplication,
  useUpdateStudyStatus,
} from '@/hooks/useDaybreakApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const DaybreakListPage = () => {
  const [selectedStudentId, setSelectedStudentId] = useState<string>('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedTypeId, setSelectedTypeId] = useState<string>('');
  const [approvalType, setApprovalType] = useState<ApprovalType | null>(null);

  const { selectModal, closeModal, modalState } = useModal();
  const { toastDispatch } = useToast();

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useHeadStudyApplication({
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

  const handleRowClick = (id: string) => {
    const clicked = applicationList.find((item) => item.application_id === id);
    if (!clicked) return;
    setSelectedStudentId(clicked.student_id);
    selectModal('DAYBREAK_STUDY_DETAIL');
  };

  const handleActionClick = (type: ApprovalType) => {
    if (selectedIds.length === 0) {
      return toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'ERROR',
        message: '선택된 항목이 없습니다.',
      });
    }
    setApprovalType(type);
  };

  const handleApprovalConfirm = () => {
    if (!approvalType) return;
    updateStatus(
      {
        application_id_list: selectedIds,
        status: approvalType === 'approve' ? 'SECOND_APPROVED' : 'REJECTED',
      },
      { onSuccess: () => setSelectedIds([]) }
    );
    setApprovalType(null);
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
            <ActionButton
              variant="approve"
              label=""
              onClick={() => handleActionClick('approve')}
            />
            <ActionButton
              variant="reject"
              label=""
              onClick={() => handleActionClick('reject')}
            />
          </_Toolbar>
        </_PageHeader>

        <TeacherTable
          variant="HEAD_TEACHER"
          data={applicationList}
          selectedIds={selectedIds}
          handleRowClick={handleRowClick}
          onSelectChange={setSelectedIds}
        />
        <div ref={scrollRef} />
      </PageLayout>

      {approvalType && (
        <ApprovalModal
          type={approvalType}
          title=""
          onClick={handleApprovalConfirm}
          close={() => setApprovalType(null)}
        />
      )}

      {modalState.selectedModal === 'DAYBREAK_STUDY_DETAIL' && (
        <DetailSidebar studentId={selectedStudentId} close={closeModal} />
      )}
    </>
  );
};
