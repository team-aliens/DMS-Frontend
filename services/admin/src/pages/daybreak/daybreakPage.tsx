import { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { Button, Text } from '@team-aliens/design-system';
import { WithNavigatorBar } from '../../components/WithNavigatorBar';
import { TypeButtonBar } from '../../components/daybreak/TypeButtonBar';
import { TeacherTable } from '../../components/daybreak/Table';
import { TeacherModal } from '../../components/daybreak/Modal';
import { useModal } from '@/hooks/useModal';
import { useManagerStudyApplication } from '@/hooks/useDaybreakApi';
import { useGetStudyApplicationExcel } from '@/apis/daybreak';

export const DaybreakPage = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const [selectedTypeId, setSelectedTypeId] = useState<string>();

  const { mutate: downloadExcel } = useGetStudyApplicationExcel();

  const { selectModal, modalState } = useModal();
  const { data } = useManagerStudyApplication({
    ...(selectedTypeId && { grade: Number(selectedTypeId) }),
  });

  const applicationList = useMemo(() => {
    return data?.applications || [];
  }, [data]);

  const handleRowClick = useCallback(
    (id: string) => {
      setSelectedId(id);
      selectModal('DAYBREAK_STUDY_DETAIL');
    },
    [selectModal],
  );

  return (
    <WithNavigatorBar>
      <_Wrapper>
        <_Header>
          <Text display="block" size="headlineM" margin={['bottom', 40]}>
            새벽자습 신청함
          </Text>
          <_FilterRow>
            <TypeButtonBar
              activeType={selectedTypeId}
              onToggle={(id) => {
                setSelectedTypeId((prev) => (prev === id ? '' : id));
              }}
            />
            <Button color="gray" kind="outline" onClick={downloadExcel}>
              액셀 출력
            </Button>
          </_FilterRow>
        </_Header>
        <TeacherTable data={applicationList} handleRowClick={handleRowClick} />
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
  width: 94%;
  display: flex;
  flex-direction: column;
  margin: 0 48px 30px 48px;
`;

const _FilterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
