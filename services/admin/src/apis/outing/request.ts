export interface ApplyOutingReqeustType {
  student_name?: string;
  date: string;
}

export interface SettingOutingRequestType {
  day_of_week: Week;
  outing_time: string;
  arrival_time: string;
}

export type Week =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY'
  | 'COMMON';
