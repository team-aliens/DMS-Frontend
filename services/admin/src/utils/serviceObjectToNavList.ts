import { Features, IsUseAbleFeature } from '@/apis/auth/response';
import { ServiceToKorean, serviceToKorean } from '@/utils/translate';

export const serviceObjectToNavList = (features: IsUseAbleFeature) =>
  Object.entries(features)
    .map((i: [Features, boolean]) => serviceToKorean(i[0]))
    .concat({
      service: '설문',
      index: 3,
    })
    .concat({
      service: '분실물',
      index: 4,
    })
    .concat({
      service: '마이페이지',
      index: 5,
    })
    .sort((prev, current) => prev.index - current.index)
    .map((i) => i.service) as ServiceToKorean[];
