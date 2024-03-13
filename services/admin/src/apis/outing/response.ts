export interface Student {
  id: string;
  name: string;
  gcn: string;
  room_number: string;
}

export interface OutingApplicationDetailResponse {
  outing_time: string;
  arrival_time: string;
  status: string;
  place: string;
  reason: string;
  type: string;
  students: Student[];
}

export interface OutingApplication {
  outing_application_id: string;
  name: string;
  outing_type: string;
  outing_time: string;
  arrival_time: string;
}

export interface OutingApplicationsResponse {
  outing_applications: OutingApplication[];
}
