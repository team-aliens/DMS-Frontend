export type Features =
  | 'notice_service'
  | 'point_service'
  | 'survey_service'
  | 'meal_service'
  | 'lost_service'
  | 'remain_service'
  | 'study_room_service'
  | 'outing_service'
  | 'volunteer_service';

export type IsUseAbleFeature = {
  [key in Features]: boolean;
};

export interface AuthorizationResponse {
  access_token: string;
  access_token_expired_at: Date;
  refresh_token: string;
  refresh_token_expired_at: Date;
  features: IsUseAbleFeature;
}

export interface EmailDuplicateCheckResponse {
  email: string;
}
