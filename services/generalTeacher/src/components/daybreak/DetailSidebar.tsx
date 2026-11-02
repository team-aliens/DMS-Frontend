import { HistorySidebar } from '@team-aliens/design-system';
import { useStudyApplicationHistory } from '@/hooks/useDaybreakApi';
import {
  GeneralStudyApplication,
  StudyApplicationHistory,
} from '@/apis/daybreak/response';

const toDotDate = (value: string) => value.slice(0, 10).replace(/-/g, '.');

/** 이름이 비어 있으면 빈칸 대신 '-'로 둔다 */
const toTeacherName = (name?: string) => name || '-';

/** 뱃지 디자인에 EXPIRED가 없어 만료된 신청은 뱃지 없이 둔다 */
const toChipStatus = (status: StudyApplicationHistory['status']) =>
  status === 'EXPIRED' ? undefined : status;

const toSidebarItem = (item: StudyApplicationHistory) => ({
  application_id: item.application_id,
  type_name: item.type_name,
  created_at: toDotDate(item.created_at),
  dates: item.dates,
  reason: item.reason,
  student_name: `${item.student_gcn} ${item.student_name}`,
  student_gcn: item.student_gcn,
  teacher_name: toTeacherName(item.teacher_name),
  status: toChipStatus(item.status),
});

interface DetailSidebarProps {
  application: GeneralStudyApplication;
  close: () => void;
}

export const DetailSidebar = ({ application, close }: DetailSidebarProps) => {
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useStudyApplicationHistory(application.student_id);

  const allHistory = data?.pages.flatMap((page) => page.applications) ?? [];

  // 이력 API는 최종 승인·만료만 주므로, 펼쳐 보여줄 신청은 목록에서 누른 값을 쓴다
  const history = allHistory
    .filter((item) => item.application_id !== application.application_id)
    .map(toSidebarItem);

  return (
    <HistorySidebar
      isLoading={isLoading}
      onReachEnd={() => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
      }}
      data={[toSidebarItem(application), ...history]}
      close={close}
    />
  );
};
