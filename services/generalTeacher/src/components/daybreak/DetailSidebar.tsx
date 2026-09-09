import { HistorySidebar } from '@team-aliens/design-system';
import { useStudyApplicationHistory } from '@/hooks/useDaybreakApi';
import { StudyApplicationHistory } from '@/apis/daybreak/response';

const toDotDate = (value: string) => value.slice(0, 10).replace(/-/g, '.');

/** 담당 선생님이 아직 정해지지 않은 신청이 있어 빈 값을 그대로 두지 않는다 */
const toTeacherName = (name?: string) => name || '미배정';

/** 뱃지 디자인에 EXPIRED가 없어 만료된 신청은 뱃지 없이 둔다 */
const toChipStatus = (status: StudyApplicationHistory['status']) =>
  status === 'EXPIRED' ? undefined : status;

interface DetailSidebarProps {
  studentId: string;
  close: () => void;
}

export const DetailSidebar = ({ studentId, close }: DetailSidebarProps) => {
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useStudyApplicationHistory(studentId);

  // 가장 최신(진행 중) 신청이 맨 앞에 오고, 사이드바가 그것을 펼쳐 보여준다
  const history = data?.pages.flatMap((page) => page.applications) ?? [];

  return (
    <HistorySidebar
      isLoading={isLoading}
      onReachEnd={() => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
      }}
      data={history.map((item) => ({
        application_id: item.application_id,
        type_name: item.type_name,
        created_at: toDotDate(item.created_at),
        start_date: toDotDate(item.start_date),
        end_date: toDotDate(item.end_date),
        reason: item.reason,
        student_name: `${item.student_gcn} ${item.student_name}`,
        student_gcn: item.student_gcn,
        teacher_name: toTeacherName(item.teacher_name),
        status: toChipStatus(item.status),
      }))}
      close={close}
    />
  );
};
