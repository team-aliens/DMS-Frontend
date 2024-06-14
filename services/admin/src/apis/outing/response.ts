import { OutingStatusType } from '.';

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
  outing_status: OutingStatusType;
  reason: string;
  outing_type: string;
  students: Student[];
}

export interface OutingApplication {
  outing_application_id: string;
  student_name: string;
  outing_type: string;
  outing_status?: OutingStatusType;
  outing_companion_count?: number;
  outing_time: string;
  arrival_time: string;
}

export interface OutingApplicationsResponse {
  outings: OutingApplication[];
}
