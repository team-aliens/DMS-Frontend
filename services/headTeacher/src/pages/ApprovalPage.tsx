import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { theme } from '@team-aliens/design-system/dist/styles/theme';
import { PageLayout, _PageHeader, _Toolbar } from '../components/layout';
import { TypeFilter } from '../components/daybreak/TypeFilter';
import { RevertButton } from '../components/daybreak/RevertButton';
import { TeacherTable } from '../components/daybreak/Table';
import { DetailSidebar } from '../components/daybreak/DetailSidebar';
import { useModal } from '@/hooks/useModal';
import { useToast } from '@/hooks/useToast';
import {
  useHeadStudyApplication,
  useRevertStudyApplication,
} from '@/hooks/useDaybreakApi';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

type ApprovalTab = 'APPROVED' | 'REJECTED';

const TABS: { key: ApprovalTab; label: string }[] = [
  { key: 'APPROVED', label: '승인' },
  { key: 'REJECTED', label: '반려' },
];

export const ApprovalPage = () => {
  const [tab, setTab] = useState<ApprovalTab>('APPROVED');
  const [selectedStudentId, setSelectedStudentId] = useState<string>('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedTypeId, setSelectedTypeId] = useState<string>('');

  const { selectModal, closeModal, modalState } = useModal();
  const { toastDispatch } = useToast();

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useHeadStudyApplication({
      status: tab === 'APPROVED' ? 'SECOND_APPROVED' : 'REJECTED',
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

  const { mutate: revert } = useRevertStudyApplication();

  const handleRowClick = (id: string) => {
    const clicked = applicationList.find((item) => item.application_id === id);
    if (!clicked) return;
    setSelectedStudentId(clicked.student_id);
    selectModal('DAYBREAK_STUDY_DETAIL');
  };

  const handleRevert = () => {
    if (selectedIds.length === 0) {
      return toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'ERROR',
        message: '선택된 항목이 없습니다.',
      });
    }
    revert(
      { application_id_list: selectedIds },
      { onSuccess: () => setSelectedIds([]) }
    );
  };

  return (
    <>
      <PageLayout>
        <_PageHeader>
          <_TabBar>
            {TABS.map(({ key, label }) => (
              <_Tab
                key={key}
                active={tab === key}
                onClick={() => {
                  setTab(key);
                  setSelectedIds([]);
                }}
              >
                {label}
              </_Tab>
            ))}
          </_TabBar>
          <_Toolbar>
            <TypeFilter
              value={selectedTypeId}
              onChange={(typeId) => {
                setSelectedTypeId(typeId);
                setSelectedIds([]);
              }}
            />
            <RevertButton onClick={handleRevert} />
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

      {modalState.selectedModal === 'DAYBREAK_STUDY_DETAIL' && (
        <DetailSidebar studentId={selectedStudentId} close={closeModal} />
      )}
    </>
  );
};

const _TabBar = styled.div`
  display: flex;
`;

const _Tab = styled.button<{ active: boolean }>`
  padding: 0 32px 8px;
  border: none;
  background: none;
  cursor: pointer;
  ${theme.font.headlineL};
  color: ${({ active }) =>
    active ? theme.teacherColor.gray[600] : theme.teacherColor.gray[400]};
  border-bottom: 4px solid
    ${({ active }) => (active ? theme.teacherColor.gray[600] : 'transparent')};
`;
