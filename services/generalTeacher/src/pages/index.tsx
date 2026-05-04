import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { TeacherHeader } from '../components/daybreak/Header';
import { TypeButtonBar } from '../components/daybreak/TypeButtonBar';
import { ActiveButtonBar } from '../components/daybreak/ActiveButtonBar';
import { TeacherTable } from '../components/daybreak/Table';
import { TeacherModal } from '../components/daybreak/Modal';
import { useAuth } from '@/hooks/useAuth';
import { useModal } from '@/hooks/useModal';
import { useToast } from '@/hooks/useToast';
import {
  useGeneralStudyApplication,
  useUpdateStudyStatus,
} from '@/hooks/useDaybreakApi';
import {} from '@/apis/daybreak/request';

type ApplicationStatus =
  | 'PENDING'
  | 'FIRST_APPROVED'
  | 'SECOND_APPROVED'
  | 'REJECTED'
  | 'EXPIRED';

interface TeacherPageProps {
  viewType: 'ALL' | 'APPROVED' | 'REJECTED';
}

export const TeacherPage = ({ viewType }: TeacherPageProps) => {
  const [selectedId, setSelectedId] = useState<string>('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedTypeId, setSelectedTypeId] = useState<string>('');

  const { logOut } = useAuth();
  const { selectModal, modalState } = useModal();
  const { toastDispatch } = useToast();
  const { ref, inView } = useInView({ threshold: 0, rootMargin: '200px' });
  const today = new Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Seoul',
  }).format(new Date());

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGeneralStudyApplication({
      date: '2026-04-23',
      size: 8,
      ...(selectedTypeId && { type_id: selectedTypeId }),
    });

  const applicationList =
    data?.pages?.flatMap((page) => page.applications) || [];

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleRowClick = (id: string) => {
    setSelectedId(id);
    selectModal('DAYBREAK_STUDY_DETAIL');
  };

  const handleSelectChange = (ids: string[]) => {
    setSelectedIds(ids);
  };

  const { mutate: updateStatus } = useUpdateStudyStatus();

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
      {
        onSuccess: () => {
          setSelectedIds([]);
        },
      }
    );
  };

  return (
    <>
      <_Wrapper>
        <TeacherHeader onLogout={logOut} />
        <_ContentSection>
          <_ToolBar>
            <TypeButtonBar
              activeType={selectedTypeId}
              onToggle={(id) => {
                setSelectedTypeId((prev) => (prev === id ? '' : id));
                setSelectedIds([]);
              }}
            />
            <ActiveButtonBar onClick={handleActionClick} />
          </_ToolBar>

          <TeacherTable
            data={applicationList}
            selectedIds={selectedIds}
            handleRowClick={handleRowClick}
            onSelectChange={handleSelectChange}
          />
          {hasNextPage && <div ref={ref} style={{ height: '1px' }} />}
        </_ContentSection>
      </_Wrapper>

      {modalState.selectedModal === 'DAYBREAK_STUDY_DETAIL' && (
        <TeacherModal selectedId={selectedId} />
      )}
    </>
  );
};

export const _Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const _ContentSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 107px;
`;

export const _ToolBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;
