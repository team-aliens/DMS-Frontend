import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { Text } from '@team-aliens/design-system';
import { WithNavigatorBar } from '../../components/WithNavigatorBar';
import { TypeButtonBar } from '../../components/daybreak/TypeButtonBar';
import { TeacherTable } from '../../components/daybreak/Table';
import { TeacherModal } from '../../components/daybreak/Modal';
import { useModal } from '@/hooks/useModal';
import { useManagerStudyApplication } from '@/hooks/useDaybreakApi';

export const DaybreakPage = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const [selectedTypeId, setSelectedTypeId] = useState<string>();

  const { selectModal, modalState } = useModal();
  const { ref, inView } = useInView({ threshold: 0, rootMargin: '200px' });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useManagerStudyApplication({
      size: 8,
      ...(selectedTypeId && { grade: Number(selectedTypeId) }),
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

  return (
    <WithNavigatorBar>
      <_Wrapper>
        <_Header>
          <Text display="block" size="headlineM" margin={['bottom', 40]}>
            새벽자습 신청함
          </Text>
          <TypeButtonBar
            activeType={selectedTypeId}
            onToggle={(id) => {
              setSelectedTypeId((prev) => (prev === id ? '' : id));
            }}
          />
        </_Header>
        <TeacherTable data={applicationList} handleRowClick={handleRowClick} />
        {hasNextPage && <div ref={ref} style={{ height: '1px' }} />}
      </_Wrapper>
      {modalState.selectedModal === 'DAYBREAK_STUDY_DETAIL' && (
        <TeacherModal selectedId={selectedId} />
      )}
    </WithNavigatorBar>
  );
};

export const _Wrapper = styled.div`
  width: 1510px;
  display: flex;
  flex-direction: column;
  margin: 100px 0 0 80px;
`;

export const _Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 48px;
  margin-bottom: 30px;
`;
