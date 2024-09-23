import styled from 'styled-components';
import { Text, Trash } from '@team-aliens/design-system';
import Edit from '../../assets/edit.svg';

export function InfoCard() {
  return (
    <_Wrapper>
      <_Info>
        <Text color="primary" size="bodyM">
          2층
        </Text>
        <Text color="gray8" size="bodyM" margin={['left', 14]} cursor="pointer">
          봉사활동 이름
        </Text>
      </_Info>
      <_Divider />
      <_Info>
        <Text color="primary" size="bodyM">
          2학년 남녀
        </Text>
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

const _IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
`;

const EditIcon = styled.img`
  cursor: pointer;
`;
