import { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { theme } from '@team-aliens/design-system/dist/styles/theme';
import { WithNavigatorBar } from '../../components/WithNavigatorBar';
import { TeacherTable } from '../../components/daybreak/Table';
import { TeacherModal } from '../../components/daybreak/Modal';
import { useModal } from '@/hooks/useModal';
import { useManagerStudyApplication } from '@/hooks/useDaybreakApi';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { useGetStudyApplicationExcel } from '@/apis/daybreak';
import ExportIcon from '../../assets/export.svg';

export const DaybreakPage = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const { mutate: downloadExcel } = useGetStudyApplicationExcel();

  const { selectModal, modalState } = useModal();
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useManagerStudyApplication({});

  const applicationList = useMemo(
    () => data?.pages.flatMap((page) => page.applications) ?? [],
    [data],
  );

  const scrollRef = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  const handleRowClick = useCallback(
    (id: string) => {
      setSelectedId(id);
      selectModal('DAYBREAK_STUDY_DETAIL');
    },
    [selectModal],
  );

  return (
    <WithNavigatorBar>
      <_Content>
        <_PageHeader>
          <_PageTitle>새벽자습 신청함</_PageTitle>
          <_ExportButton onClick={() => downloadExcel()}>
            <img src={ExportIcon} alt="" width={28} height={28} />
            내보내기
          </_ExportButton>
        </_PageHeader>
        <TeacherTable data={applicationList} handleRowClick={handleRowClick} />
        <div ref={scrollRef} />
      </_Content>
      {modalState.selectedModal === 'DAYBREAK_STUDY_DETAIL' && (
        <TeacherModal selectedId={selectedId} />
      )}
    </WithNavigatorBar>
  );
};

const _Content = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 172px 136px 80px;
`;

const _PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

const _PageTitle = styled.h1`
  ${theme.font.headlineL};
  color: ${theme.teacherColor.gray[900]};
`;

const _ExportButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 50px;
  padding: 10px 24px;
  border: none;
  border-radius: 12px;
  background: ${theme.teacherColor.blue[300]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  color: ${theme.teacherColor.gray[50]};
  ${theme.font.titleS};
  cursor: pointer;
  white-space: nowrap;
`;
