export type SexType = 'MALE' | 'FEMALE' | 'ALL';

export interface addVolunteerWorkRequest {
  name: string;
  score: number;
  optional_score: number;
  max_applicants: number;
  available_sex: SexType;
  available_grade: string;
}

export interface editVolunteerWorkRequest {
  name: string;
  score: number;
  optional_score: number;
  max_applicants: number;
  available_sex: SexType;
  available_grade: string;
}
