import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { useVoteResult } from '@/hooks/useVoteApi';
import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const SurveyResult = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useVoteResult(id);
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat('ko-KR').format(today);

  return (
    <WithNavigatorBar>
      <_Wrapper>
        <_Header>
          모범학생 투표 결과
          <span>{formattedDate}</span>
        </_Header>
        <_Contents>
          {data && data.votes.length > 0
            ? data.votes.map((data) => (
                <li key={data.id}>
                  {data.name}({data.votes})
                </li>
              ))
            : '결과가 없습니다.'}
        </_Contents>
      </_Wrapper>
    </WithNavigatorBar>
  );
};

const _Contents = styled.div`
  font: ${font.bodyM};
`;

const _Header = styled.div`
  font: ${font.headlineM};
  display: flex;
  flex-direction: column;
  gap: 32px;
  > span {
    font: ${font.bodyM};
    color: ${color.gray5};
  }
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 44px 32px 0px 32px;
  justify-content: center;
  width: 1040px;
  margin: 100px 100px 60px 50px;
  gap: 67px;
`;
