import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { pagePath } from '@/utils/pagePath';
import { useAvailAbleFeatures } from '@/hooks/useSchoolsApi';
import { Text } from '@team-aliens/design-system';

export default function Index() {
  const { data: availableFeature } = useAvailAbleFeatures();

  return (
    <WithNavigatorBar>
      <Layout>
        {availableFeature?.study_room_service && (
          <Link to={pagePath.apply.studyRoom.list}>
            <_Wrapper>
              <div>
                <Text size="titleM">자습실</Text>
                <Text>
                  자습실 관리와 생성 <br />
                  또는 수정,삭제할 수 있습니다.
                </Text>
              </div>
            </_Wrapper>
          </Link>
        )}
        {availableFeature?.remain_service && (
          <Link to={pagePath.apply.remains.list}>
            <_Wrapper>
              <div>
                <Text size="titleM">잔류</Text>
                <Text>
                  잔류 항목 확인과 생성 <br /> 또는 수정,삭제할 수 있습니다.
                </Text>
              </div>
            </_Wrapper>
          </Link>
        )}
        {availableFeature?.outing_service && (
          <Link to={pagePath.outing}>
            <_Wrapper>
              <div>
                <Text size="titleM">주말 외출</Text>
                <Text>
                  주말 외출 명단을 확인하고 <br /> 관리할 수 있습니다.
                </Text>
              </div>
            </_Wrapper>
          </Link>
        )}
        {availableFeature?.volunteer_service && (
          <Link to={pagePath.volunteer}>
            <_Wrapper>
              <div>
                <Text size="titleM">봉사</Text>
                <Text>
                  냐냐 <br /> 냐ㅑ냐냐ㅑ.
                </Text>
              </div>
            </_Wrapper>
          </Link>
        )}
      </Layout>
    </WithNavigatorBar>
  );
}
const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 260px auto auto;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;
const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 180px;
  background: #ffffff;
  box-shadow: 0px 1px 20px rgba(238, 238, 238, 0.8);
  border-radius: 4px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
