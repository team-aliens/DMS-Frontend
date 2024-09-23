import styled from 'styled-components';
import { Text, Trash } from '@team-aliens/design-system';
import Edit from '../../assets/edit.svg';

interface VolunteersInfoProps {
  name: string;
  availableSex: string;
  availableGrade: string;
}

export function InfoCard({
  name,
  availableGrade,
  availableSex,
}: VolunteersInfoProps) {
  return (
    <_Wrapper>
      <Text color="gray8" size="bodyM" cursor="pointer">
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
          <Trash colorKey="gray6" size={24} />
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
