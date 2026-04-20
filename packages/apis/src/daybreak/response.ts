type ApplicationStatus =
  | 'PENDING'
  | 'FIRST_APPROVED'
  | 'SECOND_APPROVED'
  | 'REJECTED'
  | 'EXPIRED';

export interface GetStudyApplicationResponse<T> {
  application: T[];
}

interface BaseStudyApplication {
  application_id: string;
  type_name: string;
  created_at: string;
  start_date: string;
  end_date: string;
  reason: string;
  student_name: string;
  student_gcn: string;
}

export interface GeneralStudyApplication extends BaseStudyApplication {
  status: ApplicationStatus;
}

export interface HeadStudyApplication extends BaseStudyApplication {
  teacher_name: string;
}

export interface ManagerStudyApplication extends BaseStudyApplication {
  teacher_name: string;
}

export interface GetStudyApplicationType {
  types: {
    id: string;
    name: string;
  }[];
}
