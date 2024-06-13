export interface ApplyOutingReqeustType {
  student_name?: string;
  date: string;
}

export interface OutingListExcelQueryStringType {
  startDates: string;
  endDates: string;
}

export interface OutingTypeReqeustType {
  titles: string[];
}

export interface AddOutingTypeReqeust {
  outing_list_type_search_name?: string;
  title: string;
}

export interface SearchOutingTypeReqeust {
  outing_list_type: string;
}

export interface SettingOutingRequestType {
  day_of_week: Week;
  outing_time: string;
  arrival_time: string;
}

export interface EditOutingRequestType {
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
