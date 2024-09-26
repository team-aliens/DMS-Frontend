export interface getVolunteersResponse {
  volunteers: volunteer[];
}

export interface volunteer {
  id: string;
  name: string;
  content: string;
  point: number;
  optional_point: number;
  max_applicants: number;
  available_sex: string;
  available_grade: string;
}

export interface getApplicationVolunteerStudentsResponse {
  applicants: applicant[];
}

export interface applicant {
  id: string;
  gcd: string;
  name: string;
}

export interface getVolunteerCurrentResponse {
  volunteers: currentVolunteer[];
}

export interface currentVolunteer {
  volunteer_name: string;
  available_sex: string;
  available_grade: string;
  applicants: applicant[];
}
