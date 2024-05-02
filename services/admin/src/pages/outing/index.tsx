import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { MemberBox } from '@/components/outings/MemberBox';
import { SearchBox, Text } from '@team-aliens/design-system';
import { OutingDetailInfoModal } from '@/components/modals/OutingDetailInfoModal';
import { useModal } from '@/hooks/useModal';
import Header from './Header';
import { useOutingApplications } from '@/hooks/useOutingApi';
import { useObj } from '@/hooks/useObj';
import { useDebounce } from '@/hooks/useDebounce';
import { OutingStatusType } from '@/apis/outing';
import { OutingDoneList } from '@/components/modals/OutingDoneList';
import { BreadCrumb } from '@team-aliens/design-system';
import { pathToKorean } from '@/router';
interface FilterState {
  reqeust_name: string;
  outnig_name: string;
}

export function Outing() {
  const { selectModal, modalState } = useModal();
  const { debounce } = useDebounce();
  const { obj: filter, changeObjectValue } = useObj<FilterState>({
    reqeust_name: '',
    outnig_name: '',
  });

  const [activeSearchBar, setActiveSearchBar] =
    useState<OutingStatusType>('APPROVED');
  const [date, setDate] = useState(new Date());

  const handleArrowClick = (increment: number): void => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + increment);
    setDate(newDate);
  };

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const dateStr = `${year}-${month}-${day}`;

  const openOutingApplyModal = () => selectModal('OUTING_REQUESTED');
  const openDoneModal = () => selectModal('OUTING_DONE');

  const [approveSearchdName, setApproveSearchdName] = useState(
    filter.reqeust_name,
  );
  const [doneSearchName, setDoneSearchName] = useState(filter.outnig_name);

  const onChangeReqeustSearchName = (e: ChangeEvent<HTMLInputElement>) => {
    changeObjectValue('reqeust_name', e.target.value);
    setActiveSearchBar('APPROVED');
    debounce(() => setApproveSearchdName(e.target.value), 250);
  };

  const onChangeOutingSearchName = (e: ChangeEvent<HTMLInputElement>) => {
    changeObjectValue('outnig_name', e.target.value);
    setActiveSearchBar('DONE');
    debounce(() => setDoneSearchName(e.target.value), 250);
  };

  const studentName =
    activeSearchBar === 'APPROVED' ? approveSearchdName : doneSearchName;

  const { data: outingApplyList, refetch: refetchOutingApplyLists } =
    useOutingApplications({
      student_name: studentName,
      date: dateStr,
    });

  const approvedStatus = outingApplyList?.outings.filter(
    (item) => item.outing_status === 'APPROVED',
  );

  const doneStatus = outingApplyList?.outings.filter(
    (item) => item.outing_status === 'DONE',
  );

  useEffect(() => {
    refetchOutingApplyLists();
  }, [dateStr]);

  return (
    <>
      <WithNavigatorBar>
        <_Wrapper>
          <BreadCrumb pathToKorean={pathToKorean}></BreadCrumb>
          <Header date={dateStr} onArrowClick={handleArrowClick} />
          <_BoxWrapper>
            <_Box>
              <_Container>
                <Text size="titleS">외출 신청</Text>
                <SearchBox
                  className="searchBox"
                  value={filter.reqeust_name}
                  onChange={onChangeReqeustSearchName}
                />

                <div onClick={openOutingApplyModal}>
                  {approvedStatus?.length === 0 ? (
                    <Text>외출 신청이 없거나 검색 결과가 없어요.</Text>
                  ) : (
                    <_OutingWrapper>
                      <MemberBox outingApplyList={approvedStatus} />
                    </_OutingWrapper>
                  )}
                </div>
              </_Container>
            </_Box>
            <_Box>
              <_Container>
                <Text size="titleS">외출 완료</Text>
                <SearchBox
                  className="searchBox"
                  value={filter.outnig_name}
                  onChange={onChangeOutingSearchName}
                />
                <div onClick={openDoneModal}>
                  {doneStatus?.length === 0 ? (
                    <Text>외출 신청이 없거나 검색 결과가 없어요.</Text>
                  ) : (
                    <_OutingWrapper>
                      <MemberBox outingApplyList={doneStatus} />
                    </_OutingWrapper>
                  )}
                </div>
              </_Container>
            </_Box>
          </_BoxWrapper>
        </_Wrapper>
      </WithNavigatorBar>
      {modalState.selectedModal === 'OUTING_REQUESTED' && (
        <OutingDetailInfoModal
          tagColor="#595959"
          tagBackGroundColor="#f5f5f5"
          text="외출 승인"
        />
      )}
      {modalState.selectedModal === 'OUTING_DONE' && (
        <OutingDetailInfoModal
          tagColor="#0C408A"
          tagBackGroundColor="#ECF9FF"
          text="외출 완료"
        />
      )}
      {modalState.selectedModal === 'DONE_MODAL' && <OutingDoneList />}
    </>
  );
}

const _Box = styled.div`
  position: relative;
  width: 506px;
  height: 628px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 15px 0px;
  padding: 31px 27px 0px 27px;
  overflow-y: auto;
  margin-top: 20px;
  overflow-x: hidden;
`;

const _OutingWrapper = styled.ul`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const _Wrapper = styled.div`
  margin: 0 auto;
  width: 1030px;
`;

const _BoxWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Outing;
