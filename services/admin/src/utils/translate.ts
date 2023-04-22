import { GradeType, SeatStatusType, SexType } from '@/apis/studyRooms/request';
import { Features } from '@/apis/auth/response';
import { DAY } from '@/apis/remains';

export const dateToString = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString().slice(0, -1).replace(/.\s/g, '/');

export type SexToKorean = '남여 모두' | '남' | '여';

export const sexTypeToKorean: Record<SexType, SexToKorean> = {
  ALL: '남여 모두',
  MALE: '남',
  FEMALE: '여',
};

export type GradeToKorean = '모든 학년' | '1학년' | '2학년' | '3학년';

export const gradeTypeToKorean: Record<GradeType, GradeToKorean> = {
  0: '모든 학년',
  1: '1학년',
  2: '2학년',
  3: '3학년',
};

export type SeatStatusKorean = '사용 가능' | '사용 불가' | '빈 공간' | '사용중';

export const seatStatusToKorean: Record<SeatStatusType, SeatStatusKorean> = {
  AVAILABLE: '사용 가능',
  UNAVAILABLE: '사용 불가',
  EMPTY: '빈 공간',
  IN_USE: '사용중',
};
export type ServiceToKorean = '홈' | '신청' | '공지' | '마이페이지';

export interface ServiceObject {
  service: ServiceToKorean | '';
  index: number;
}

export const serviceToKorean = (service: Features): ServiceObject => {
  switch (service) {
    case 'study_room_service':
      return { service: '신청', index: 1 };
    case 'point_service':
      return { service: '홈', index: 0 };
    case 'notice_service':
      return { service: '공지', index: 2 };
    case 'meal_service':
    default:
      return {
        service: '',
        index: -99,
      };
  }
};

export type DayToKorean = '월' | '화' | '수' | '목' | '금' | '토' | '일';

export const getDayWithText: Record<DayToKorean, DAY> = {
  월: DAY.MONDAY,
  화: DAY.TUESDAY,
  수: DAY.WEDNESDAY,
  목: DAY.THURSDAY,
  금: DAY.FRIDAY,
  토: DAY.SATURDAY,
  일: DAY.SUNDAY,
};
