import styled from 'styled-components';
import { Text, Button, Trash } from '@team-aliens/design-system';
import { gradeTypeToKorean, sexTypeToKorean } from '@/utils/translate';

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
          <EditIcon pathColor={'#555555'} color={'#FFFFFF'} />
          <Trash colorKey="gray6" size={24} />
        </_IconWrapper>
      </_Info>
    </_Wrapper>
  );
}

function EditIcon({ color, pathColor }: { color: string; pathColor: string }) {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="13.1504" cy="13" r="13" fill={color} />
      <path
        d="M15.6495 11.4451L14.7053 10.5009L8.48589 16.7203V17.6645H9.43009L15.6495 11.4451ZM16.5937 10.5009L17.5379 9.55667L16.5937 8.61247L15.6495 9.55667L16.5937 10.5009ZM9.98299 19H7.15039V16.1667L16.1216 7.19551C16.2468 7.07032 16.4167 7 16.5937 7C16.7708 7 16.9406 7.07032 17.0658 7.19551L18.9549 9.08457C19.0801 9.2098 19.1504 9.37961 19.1504 9.55667C19.1504 9.73374 19.0801 9.90355 18.9549 10.0288L9.98299 19Z"
        fill={pathColor}
      />
    </svg>
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
