import { DAY } from '../remains';

export interface ApplyOutingRequestType {
  student_name?: string;
  date: string;
}

export interface OutingListExcelQueryStringType {
  startDates: string;
  endDates: string;
}

export interface OutingTypeRequestType {
  titles: string[];
}

export interface AddOutingTypeRequest {
  outing_list_type_search_name?: string;
  title: string;
}

export interface SearchOutingTypeRequest {
  outing_list_type: string;
}

export interface SettingOutingRequestType {
  day_of_week: string;
  outing_time: string;
  arrival_time: string;
}

export interface EditOutingRequestType {
  outing_time: string;
  arrival_time: string;
}
