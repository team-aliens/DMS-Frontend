export type SexType = 'MALE' | 'FEMALE' | 'ALL';

export interface addVolunteerWorkRequest {
  name: string;
  min_score: number;
  max_score: number;
  max_applicants: number;
  available_sex: SexType;
  available_grade: string;
}

export interface editVolunteerWorkRequest {
  name: string;
  min_score: number;
  max_score: number;
  max_applicants: number;
  available_sex: SexType;
  available_grade: string;
}

export interface updateVolunteerApplicationScoreRequest {
  update_score: string;
}
