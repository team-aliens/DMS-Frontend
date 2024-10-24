import { OutingStatusType } from '.';
import { DAY } from '../remains';

export interface Student {
  id: string;
  student_name: string;
  room_number: string;
  student_gcn: string;
}

export interface OutingApplicationDetailResponse {
  student_name: string;
  student_gcn: string;
  student_room_number: number;
  outing_time: string;
  arrival_time: string;
  reason: string;
  outing_type: string;
  students: Student[];
}

export interface OutingApplication {
  id: string;
  student_name: string;
  student_gcn: string
  outing_type: string;
  outing_companion_count?: number;
  outing_time: string;
  arrival_time: string;
  is_approved: boolean;
  is_returned: boolean;
}

export interface OutingApplicationsResponse {
  outings: OutingApplication[];
}

export interface OutingApplicationTimeResponse {
  id: string;
  school_id: string;
  outing_time: string;
  arrival_time: string;
  enabled: boolean;
  day_of_week: DAY;
}
