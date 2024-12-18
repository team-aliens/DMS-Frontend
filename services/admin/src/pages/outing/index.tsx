import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { MemberBox } from '@/components/outings/MemberBox';
import { Text, Search } from '@team-aliens/design-system';
import { OutingDetailInfoModal } from '@/components/modals/OutingDetailInfoModal';
import { useModal } from '@/hooks/useModal';
import Header from './Header';
import { useOutingApplications, useOutingTypeList } from '@/hooks/useOutingApi';
import { useDeleteOutingListOption } from '@/apis/outing';
import { OutingDoneList } from '@/components/modals/OutingDoneList';
import { ViewOutingTypeModal } from '@/components/modals/ViewOutingTypeModal';
import { DeleteOutingListModal } from '@/components/modals/DeleteOutingList';
import { useToast } from '@/hooks/useToast';
import { useForm } from '@/hooks/useForm';

export function Outing() {
  const { selectModal, modalState } = useModal();
  const { toastDispatch } = useToast();

  const [date, setDate] = useState(new Date());
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [tagModal] = useState<string>('');

  useEffect(() => {
    const storedDate = localStorage.getItem('selectedDate');
    storedDate ? setDate(new Date(storedDate)) : setDate(new Date());
  }, []);

  const handleArrowClick = (increment: number): void => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + increment);
    setDate(newDate);
    localStorage.setItem('selectedDate', newDate.toISOString());
  };

  const MustTrue = true;

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const dateStr = `${year}-${month}-${day}`;

  const { state: outingOptionState, onHandleChange } = useForm({
    outing_option_name: '',
  });

  const { data: outingApplyList, refetch: refetchOutingApplyLists } =
    useOutingApplications({
      date: dateStr,
    });

  const { data: outingTypeList, refetch: refetchOutingTypeList } =
    useOutingTypeList();

  const approvedStatusLists = outingApplyList?.outings;
  const groupedIds = approvedStatusLists?.reduce((groups, item) => {
    const { id } = item;
    if (!groups[id]) groups[id] = [];
    groups[id].push(id);
    return groups;
  }, {} as Record<string, string[]>);

  const idList = groupedIds ? Object.values(groupedIds) : [];

  useEffect(() => {
    refetchOutingApplyLists();
  }, [dateStr]);

  const deleteOutingType = useDeleteOutingListOption(selectedTag, {
    onSuccess: () => {
      selectModal('OUTING_TYPE');
      refetchOutingTypeList();
      setSelectedTag('');
      toastDispatch({
        toastType: 'SUCCESS',
        actionType: 'APPEND_TOAST',
        message: '외출 유형이 삭제되었습니다.',
      });
    },
    onError: () => {
      toastDispatch({
        toastType: 'ERROR',
        actionType: 'APPEND_TOAST',
        message: '외출 유형 삭제를 실패했습니다.',
      });
    },
  });

  return (
    <>
      <WithNavigatorBar>
        <_Wrapper>
          <Header date={dateStr} onArrowClick={handleArrowClick} />
          <_BoxWrapper>
            <_Box>
              <_Container>
                <Text size="titleS">외출 신청</Text>
                <_SearchWrapper>
                  <Search className="Search" />
                  <_SearchInput
                    type="text"
                    name="outing_option_name"
                    value={outingOptionState.outing_option_name}
                    onChange={onHandleChange}
                    disabled={
                      approvedStatusLists && approvedStatusLists.length === 0
                    }
                  />
                </_SearchWrapper>
                {approvedStatusLists && approvedStatusLists.length === 0 ? (
                  <Text size="bodyM">외출 신청자가 없습니다.</Text>
                ) : (
                  <>
                    {approvedStatusLists?.filter((options) =>
                      options.student_name.includes(
                        outingOptionState.outing_option_name,
                      ),
                    ).length > 0 && (
                      <_HeaderWrapper>
                        <Text margin={['left', 652]}>외출 확인</Text>
                        <Text margin={['left', 13]}>복귀 확인</Text>
                        <Text margin={['left', 27]}>문자 전송 확인</Text>
                      </_HeaderWrapper>
                    )}
                    <_OutingWrapper>
                      {approvedStatusLists?.filter((options) =>
                        options.student_name.includes(
                          outingOptionState.outing_option_name,
                        ),
                      ).length === 0 ? (
                        <Text size="bodyM">검색 결과가 없습니다.</Text>
                      ) : (
                        approvedStatusLists
                          ?.filter((options) =>
                            options.student_name.includes(
                              outingOptionState.outing_option_name,
                            ),
                          )
                          .map((options) => {
                            const {
                              id,
                              outing_type,
                              student_name,
                              student_gcn,
                              outing_time,
                              arrival_time,
                              outing_companion_count,
                              is_approved,
                              is_returned,
                            } = options;
                            return (
                              <MemberBox
                                key={id}
                                id={id}
                                idList={idList}
                                outing_type={outing_type}
                                student_gcn={student_gcn}
                                is_approved={is_approved}
                                is_returned={is_returned}
                                student_name={student_name}
                                outing_time={outing_time}
                                arrival_time={arrival_time}
                                outing_companion_count={outing_companion_count}
                                isReqeustModal={MustTrue}
                              />
                            );
                          })
                      )}
                    </_OutingWrapper>
                  </>
                )}
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
      {modalState.selectedModal === 'OUTING_TYPE' && (
        <ViewOutingTypeModal
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          outingTypeList={outingTypeList}
          refetchOutingTypeList={refetchOutingTypeList}
        />
      )}
      {modalState.selectedModal === 'DELETE_OUTING_LIST_TYPE' && (
        <DeleteOutingListModal
          tagModal={tagModal}
          setSelectedOption={setSelectedTag}
          onClick={deleteOutingType.mutate}
        />
      )}
    </>
  );
}

const _Box = styled.div`
  position: relative;
  width: 100%;
  height: 628px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 15px 0px;
  padding: 31px 27px 0px 27px;
  overflow-y: auto;
  margin-top: 20px;
  overflow-x: hidden;
`;

const _OutingWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const _HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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

const _SearchWrapper = styled.div`
  position: relative;
  .Search {
    position: absolute;
    top: 8px;
  }
`;

const _SearchInput = styled.input`
  width: 202px;
  height: 40px;
  border-bottom: 1px solid #dddddd;
  padding: 0px 0px 0px 30px;
  font-size: 16px;
`;

export default Outing;
