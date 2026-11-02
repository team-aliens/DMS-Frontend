type ApplicationStatus =
  | 'PENDING'
  | 'FIRST_APPROVED'
  | 'SECOND_APPROVED'
  | 'REJECTED';

type HistoryStatus = ApplicationStatus | 'EXPIRED';

export interface GetStudyApplicationsResponse<T> {
  applications: T[];
}

interface BaseStudyApplication {
  application_id: string;
  type_name: string;
  created_at: string;
  dates: string[];
  reason: string;
  student_id: string;
  student_name: string;
  student_gcn: string;
  teacher_name: string;
}

export interface GeneralStudyApplication extends BaseStudyApplication {
  status: ApplicationStatus;
}

export type HeadStudyApplication = BaseStudyApplication;

export type ManagerStudyApplication = BaseStudyApplication;

/** 이력 응답에는 student_id가 없다(경로로 이미 지정하므로) */
export interface StudyApplicationHistory
  extends Omit<BaseStudyApplication, 'student_id'> {
  status: HistoryStatus;
}

export interface GetStudyApplicationType {
  types: {
    id: string;
    name: string;
  }[];
}
