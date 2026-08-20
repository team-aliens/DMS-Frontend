import { NavigatorBar } from '@team-aliens/design-system';
import styled from 'styled-components';
import React, { useEffect, useMemo } from 'react';
import { getCookie } from '@/utils/cookies';
import { ServiceToKorean } from '@/utils/translate';
import { serviceObjectToNavList } from '@/utils/serviceObjectToNavList';
import { useAvailAbleFeatures } from '@/hooks/useSchoolsApi';
import { setUseableFeatures } from '@/utils/setUseableFeatures';

interface PropsType {
  children: React.ReactNode;
}

export function WithNavigatorBar({ children }: PropsType) {
  const { data } = useAvailAbleFeatures();

  // 예전엔 쿠키가 있으면 갱신하지 않아서(getCookie('service') || setUseableFeatures(data)),
  // 만료 10년짜리 쿠키에 박힌 옛날 메뉴가 서버 응답이 바뀌어도 계속 남았다.
  useEffect(() => {
    setUseableFeatures(data);
  }, [data]);

  // 서버 응답이 도착하면 그걸 그대로 쓰고, 도착 전에는 쿠키로 그린다
  const services: ServiceToKorean[] = useMemo(
    () =>
      data
        ? serviceObjectToNavList(data)
        : ((getCookie('service') || '').split(',') as ServiceToKorean[]).filter(
            (i) => i,
          ),
    [data],
  );

  return (
    <_Wrapper>
      <NavigatorBar navList={services} />
      {children}
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  display: flex;
`;
