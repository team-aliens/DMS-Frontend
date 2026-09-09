type ApplicationStatus =
  | 'PENDING'
  | 'FIRST_APPROVED'
  | 'SECOND_APPROVED'
  | 'REJECTED'
  | 'EXPIRED';

export interface GetStudyApplicationsResponse<T> {
  applications: T[];
}

interface BaseStudyApplication {
  application_id: string;
  type_name: string;
  created_at: string;
  start_date: string;
  end_date: string;
  reason: string;
  student_id: string;
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

/** 이력 응답에는 student_id가 없다(경로로 이미 지정하므로) */
export interface StudyApplicationHistory
  extends Omit<BaseStudyApplication, 'student_id'> {
  teacher_name: string;
  status: ApplicationStatus;
}

export interface GetStudyApplicationType {
  types: {
    id: string;
    name: string;
  }[];
}
