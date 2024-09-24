import styled from 'styled-components';
import { Text, Trash } from '@team-aliens/design-system';
import Edit from '../../assets/edit.svg';
import { deleteVolunteerWork } from '@/apis/volunteers';
import { useState } from 'react';
import Delete from '../../assets/delete.svg';
import { useNavigate } from 'react-router-dom';

interface VolunteersInfoProps {
  name: string;
  availableSex: string;
  availableGrade: string;
  id: string;
  onDelete: (id: string) => void;
}

export function InfoCard({
  name,
  availableGrade,
  availableSex,
  id,
  onDelete,
}: VolunteersInfoProps) {
  const naviagate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteVolunteerWork(id);
      onDelete(id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameClick = () => {
    naviagate(`/volunteer/detail/${id}`);
  };

  return (
    <_Wrapper>
      <Text
        color="gray8"
        size="bodyM"
        cursor="pointer"
        onClick={handleNameClick}
      >
        {name}
      </Text>
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

        <_IconWrapper>
          <EditIcon src={Edit} />
          <DeleteIcon src={Delete} onClick={handleDelete} />
        </_IconWrapper>
      </_Info>
    </_Wrapper>
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

const _IconWrapper = styled.div`
  display: flex;
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
