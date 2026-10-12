import { HistorySidebar } from '@team-aliens/design-system';
import { useStudyApplicationHistory } from '@/hooks/useDaybreakApi';
import {
  HeadStudyApplication,
  StudyApplicationHistory,
} from '@/apis/daybreak/response';

type ApplicationStatus = StudyApplicationHistory['status'];

const toDotDate = (value: string) => value.slice(0, 10).replace(/-/g, '.');

/** 담당 선생님이 아직 정해지지 않은 신청이 있어 빈 값을 그대로 두지 않는다 */
const toTeacherName = (name?: string) => name || '미배정';

/** 뱃지 디자인에 EXPIRED가 없어 만료된 신청은 뱃지 없이 둔다 */
const toChipStatus = (status: ApplicationStatus) =>
  status === 'EXPIRED' ? undefined : status;

const toSidebarItem = (
  item: Omit<HeadStudyApplication, 'student_id'>,
  status: ApplicationStatus
) => ({
  application_id: item.application_id,
  type_name: item.type_name,
  created_at: toDotDate(item.created_at),
  start_date: toDotDate(item.start_date),
  end_date: toDotDate(item.end_date),
  reason: item.reason,
  student_name: `${item.student_gcn} ${item.student_name}`,
  student_gcn: item.student_gcn,
  teacher_name: toTeacherName(item.teacher_name),
  status: toChipStatus(status),
});

interface DetailSidebarProps {
  application: HeadStudyApplication;
  /** 부장 목록 응답에는 status가 없어 조회할 때 쓴 상태를 받는다 */
  status: ApplicationStatus;
  close: () => void;
}

export const DetailSidebar = ({
  application,
  status,
  close,
}: DetailSidebarProps) => {
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useStudyApplicationHistory(application.student_id);

  // 이력 API는 최종 승인·만료만 주므로, 펼쳐 보여줄 신청은 목록에서 누른 값을 쓴다
  const history = (data?.pages.flatMap((page) => page.applications) ?? [])
    .filter((item) => item.application_id !== application.application_id)
    .map((item) => toSidebarItem(item, item.status));

  return (
    <HistorySidebar
      isLoading={isLoading}
      onReachEnd={() => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
      }}
      data={[toSidebarItem(application, status), ...history]}
      close={close}
    />
  );
};
