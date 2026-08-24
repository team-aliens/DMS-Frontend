import { Features, IsUseAbleFeature } from '@/apis/auth/response';
import { ServiceToKorean, serviceToKorean } from '@/utils/translate';

export const serviceObjectToNavList = (features: IsUseAbleFeature) => {
  const navList = (Object.entries(features) as [Features, boolean][])
    // 예전엔 키 존재 여부만 보고 값(true/false)을 버렸다.
    // 그래서 서버가 기능을 꺼도 메뉴가 남고, 응답에서 키가 빠지면 메뉴가 사라졌다.
    .filter(([, isAvailable]) => isAvailable)
    .map(([feature]) => serviceToKorean(feature))
    .concat({
      service: '설문',
      index: 3,
    })
    // .concat({
    //   service: '분실물',
    //   index: 4,
    // })
    .concat({
      service: '마이페이지',
      index: 4,
    })
    // 매핑되지 않은 기능(index: -99)은 메뉴로 만들지 않는다
    .filter((i) => i.service)
    .sort((prev, current) => prev.index - current.index)
    .map((i) => i.service) as ServiceToKorean[];

  // meal_service와 daybreak_service가 같은 '새벽자습'으로 매핑돼 중복될 수 있다
  return navList.filter((service, index) => navList.indexOf(service) === index);
};
