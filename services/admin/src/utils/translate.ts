import { GradeType, SeatStatusType, SexType } from '@/apis/studyRooms/request';
import { Features } from '@/apis/auth/response';
import { DAY } from '@/apis/remains';

export const dateToString = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString().slice(0, -1).replace(/.\s/g, '/');

export type SexToKorean = '남여 모두' | '남' | '여';

export const sexTypeToKorean = (sex: SexType): SexToKorean => {
  switch (sex) {
    case 'ALL':
      return '남여 모두';
    case 'MALE':
      return '남';
    case 'FEMALE':
      return '여';
    default:
  }
};

export const sexKoreanToEng = (sex: string): SexType => {
  switch (sex) {
    case '남여 모두':
      return 'ALL';
    case '남':
      return 'MALE';
    case '여':
      return 'FEMALE';
    default:
  }
};

export function gradeEngToKorean(grade: string): string {
  switch (grade) {
    case 'FIRST':
      return '1학년';
    case 'FIRST_SECOND':
      return '1, 2학년';
    case 'FIRST_THIRD':
      return '1, 3학년';
    case 'SECOND':
      return '2학년';
    case 'SECOND_THIRD':
      return '2, 3학년';
    case 'THIRD':
      return '3학년';
    case 'ALL':
      return '모든 학년';
    default:
      return grade;
  }
}

export function gradeKoreanCalculator(grade: string): string {
  switch (grade) {
    case '1학년':
      return 'FRIST';
    case '1학년, 2학년':
      return 'FIRST_SECOND';
    case '2학년, 1학년':
      return 'FIRST_SECOND';
    case '1학년, 3학년':
      return 'FIRST_THIRD';
    case '3학년, 1학년':
      return 'FIRST_THIRD';
    case '2학년':
      return 'SECOND';
    case '2학년, 3학년':
      return 'SECOND_THIRD';
    case '3학년, 2학년':
      return 'SECOND_THIRD';
    case '3학년':
      return 'THIRD';
    case '모든 학년':
      return 'ALL';
    default:
      return grade;
  }
}

export type GradeToKorean = '모든 학년' | '1학년' | '2학년' | '3학년';

export const gradeTypeToKorean = (grade: GradeType): GradeToKorean => {
  switch (grade) {
    case 0:
      return '모든 학년';
    case 1:
      return '1학년';
    case 2:
      return '2학년';
    case 3:
      return '3학년';
    default:
  }
};

export const gradeKoreanToEng = (grade: GradeToKorean): GradeType => {
  switch (grade) {
    case '모든 학년':
      return 0;
    case '1학년':
      return 1;
    case '2학년':
      return 2;
    case '3학년':
      return 3;
    default:
  }
};

export type SeatStatusKorean = '사용 가능' | '사용 불가' | '빈 공간';

export const seatStatusToKorean = (
  status: SeatStatusType,
): SeatStatusKorean => {
  switch (status) {
    case 'AVAILABLE':
      return '사용 가능';
    case 'UNAVAILABLE':
      return '사용 불가';
    case 'EMPTY':
      return '빈 공간';
    default:
  }
};

export const seatStatusKoreanToEng = (
  status: SeatStatusKorean,
): SeatStatusType => {
  switch (status) {
    case '사용 가능':
      return 'AVAILABLE';
    case '사용 불가':
      return 'UNAVAILABLE';
    case '빈 공간':
      return 'EMPTY';
    default:
  }
};

export type ServiceToKorean = '홈' | '신청' | '공지' | '마이페이지' | '외출';
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
export const getDayWithText = (text: string): DAY => {
  switch (text) {
    case '월':
      return 'MONDAY';
    case '화':
      return 'TUESDAY';
    case '수':
      return 'WEDNESDAY';
    case '목':
      return 'THURSDAY';
    case '금':
      return 'FRIDAY';
    case '토':
      return 'SATURDAY';
    case '일':
      return 'SUNDAY';
    default:
  }
};

export const getTextWithDay = (day: DAY) => {
  switch (day) {
    case 'MONDAY':
      return '월';
    case 'TUESDAY':
      return '화';
    case 'WEDNESDAY':
      return '수';
    case 'THURSDAY':
      return '목';
    case 'FRIDAY':
      return '금';
    case 'SATURDAY':
      return '토';
    case 'SUNDAY':
      return '일';
    default:
  }
};
