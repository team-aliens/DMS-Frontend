import { Button, Modal, Text } from '@team-aliens/design-system';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useModal } from '@/hooks/useModal';
import OutingListExcel from '@/components/modals/OutingListExcel';
import { AddVolunteer } from '@/components/modals/AddVolunteer';

export function VolunteerHeader() {
  const { selectModal, modalState } = useModal();
  const addVolunteerModal = () => selectModal('VOLUNTEER_ADD');

  return (
    <>
      <_Wrapper>
        <div></div>
        <_ButtonWrapper>
          <Button onClick={addVolunteerModal}>봉사 추가</Button>
        </_ButtonWrapper>
      </_Wrapper>
      {modalState.selectedModal === 'VOLUNTEER_ADD' ? <AddVolunteer /> : null}
    </>
  );
}

const _Wrapper = styled.div`
  display: flex;
  width: 990px;
  margin-top: 100px;
  align-items: center;
  margin-bottom: 40px;
`;

const _ButtonWrapper = styled.div`
  margin-left: auto;
  display: flex;
`;
