import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '@/utils/queryKeys';
import { DaybreakModal } from '@team-aliens/design-system';
import { useModal } from '@/hooks/useModal';
import {
  GetStudyApplicationsResponse,
  GeneralStudyApplication,
} from '@/apis/daybreak/response';

interface ModalProps {
  selectedId: string;
}

export const TeacherModal = ({ selectedId }: ModalProps) => {
  const { closeModal } = useModal();
  const queryClient = useQueryClient();

  const queries = queryClient.getQueriesData(queryKeys.일반자습신청조회 as any);
  const source: GeneralStudyApplication[] = queries.flatMap(([, payload]) => {
    if (!payload) return [];
    const p: any = payload;
    if (Array.isArray(p.pages)) {
      return p.pages.flatMap((page: any) => page.applications ?? []);
    }
    return p.applications ?? [];
  });

  const data = source.find(
    (item) => String(item.application_id) === String(selectedId),
  );

  console.log(data);

  if (!data) return null;

  return (
    <DaybreakModal
      title={data.student_name ?? ''}
      content={data.reason ?? ''}
      textCount={(data.reason && data.reason.length) || 0}
      close={closeModal}
    />
  );
};
