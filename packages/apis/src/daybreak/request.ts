type ApplicationStatus =
  | 'PENDING'
  | 'FIRST_APPROVED'
  | 'SECOND_APPROVED'
  | 'REJECTED'
  | 'EXPIRED';

export interface GeneralStudyApplicationRequest {
  type_id?: string;
  page?: number;
  size?: number;
}

export interface HeadStudyApplicationRequest {
  type_id?: string;
  status?: ApplicationStatus;
  page?: number;
  size?: number;
}

export interface ManagerStudyApplicationRequest {
  grade?: number;
  page?: number;
  size?: number;
}

export interface PatchStudyApplicationStatusRequest {
  application_id_list: string[];
  status: ApplicationStatus;
}
