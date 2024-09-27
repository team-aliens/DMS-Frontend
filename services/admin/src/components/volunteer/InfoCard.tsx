import styled from 'styled-components';
import { Text } from '@team-aliens/design-system';
import Edit from '../../assets/edit.svg';
import { deleteVolunteerWork } from '@/apis/volunteers';
import Delete from '../../assets/delete.svg';
import { EditVolunteer } from '../modals/editVolunteer';
import { useState } from 'react';
import { SexToKorean, sexKoreanToEng } from '@/utils/translate';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/useToast';

interface VolunteersInfoProps {
  name?: string;
  availableSex?: SexToKorean;
  availableGrade?: string;
  id?: string;
  onDelete?: (id: string) => void;
  status: 'icon' | 'noneIcon';
  availablePoint?: number;
  availableOptionalScore?: number;
  availableMaxApplicants?: number;
  availableContent?: string;
}

export function InfoCard({
  name,
  availableGrade,
  availableSex,
  id,
  onDelete,
  status = 'icon',
  availablePoint,
  availableOptionalScore,
  availableMaxApplicants,
  availableContent,
}: VolunteersInfoProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { toastDispatch } = useToast();

  const handleDelete = async () => {
    try {
      await deleteVolunteerWork(id);
      onDelete(id);

      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'SUCCESS',
        message: '봉사 활동을 성공적으로 삭제했습니다.',
      });
    } catch (error) {
      toastDispatch({
        actionType: 'APPEND_TOAST',
        toastType: 'ERROR',
        message: '봉사 활동 삭제에 실패했습니다.',
      });
    }
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <_Wrapper>
        <Link to={`/volunteer/detail/${id}`}>
          <Text color="gray8" size="bodyM" cursor="pointer">
            {name}
          </Text>
        </Link>
        <_Divider />
        <_Info>
          <_TextWrapper>
            <Text color="primary" size="bodyM">
              {availableGrade}
            </Text>
            <Text color="primary" size="bodyM">
              {availableSex}
            </Text>
          </_TextWrapper>
          <_IconWrapper status={status}>
            <EditIcon onClick={openEditModal} src={Edit} />
            <DeleteIcon src={Delete} onClick={handleDelete} />
          </_IconWrapper>
        </_Info>
      </_Wrapper>
      {isEditModalOpen && (
        <EditVolunteer
          content={availableContent}
          point={availablePoint}
          optionalScore={availableOptionalScore}
          maxApplicants={availableMaxApplicants}
          name={name}
          sex={sexKoreanToEng(availableSex)}
          grade={availableGrade}
          closeModal={closeEditModal}
          volunteerId={id}
        />
      )}
    </>
  );
}

const _Wrapper = styled.li`
  width: 280px;
  height: 110px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: 0 1px 20px rgba(238, 238, 238, 0.8);
  padding: 20px 20px 14px 20px;
`;

const _Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.gray4};
  margin: 12px 0 14px 0;
`;

const _Info = styled.div`
  display: flex;
`;

const _TextWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const _IconWrapper = styled.div<VolunteersInfoProps>`
  display: ${({ status }) => (status === 'icon' ? 'flex' : 'none')};
  align-items: center;
  gap: 12px;
  margin-left: auto;
`;

const EditIcon = styled.img`
  cursor: pointer;
`;

const DeleteIcon = styled.img`
  cursor: pointer;
`;
