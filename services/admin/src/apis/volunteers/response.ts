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
