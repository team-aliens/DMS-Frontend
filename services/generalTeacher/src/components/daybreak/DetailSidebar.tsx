import { HistorySidebar } from '@team-aliens/design-system';
import { useStudyApplicationHistory } from '@/hooks/useDaybreakApi';
import {
  GeneralStudyApplication,
  StudyApplicationHistory,
} from '@/apis/daybreak/response';

const toDotDate = (value: string) => value.slice(0, 10).replace(/-/g, '.');

/** 목록 응답에 teacher_name이 없어 이름을 모를 때는 잘못된 값 대신 '-'로 둔다 */
const toTeacherName = (name?: string) => name || '-';

/** 뱃지 디자인에 EXPIRED가 없어 만료된 신청은 뱃지 없이 둔다 */
const toChipStatus = (status: StudyApplicationHistory['status']) =>
  status === 'EXPIRED' ? undefined : status;

const toSidebarItem = (
  item: Omit<GeneralStudyApplication, 'student_id'>,
  teacherName?: string
) => ({
  application_id: item.application_id,
  type_name: item.type_name,
  created_at: toDotDate(item.created_at),
  dates: item.dates,
  reason: item.reason,
  student_name: `${item.student_gcn} ${item.student_name}`,
  student_gcn: item.student_gcn,
  teacher_name: toTeacherName(teacherName),
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
    .map((item) => toSidebarItem(item, item.teacher_name));

  // 담당 선생님 목록 응답에는 teacher_name이 없어, 이력에 같은 신청이 있을 때만 채운다
  const openedTeacherName = allHistory.find(
    (item) => item.application_id === application.application_id
  )?.teacher_name;

  return (
    <HistorySidebar
      isLoading={isLoading}
      onReachEnd={() => {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
      }}
      data={[toSidebarItem(application, openedTeacherName), ...history]}
      close={close}
    />
  );
};
