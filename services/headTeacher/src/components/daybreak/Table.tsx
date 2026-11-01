import { Table } from '@team-aliens/design-system';
import { HeadStudyApplication } from '@/apis/daybreak/response';

interface TeacherTableProps {
  data: HeadStudyApplication[];
  selectedIds: string[];
  handleRowClick: (id: string) => void;
  onSelectChange: (ids: string[]) => void;
}

export const TeacherTable = ({
  data,
  selectedIds,
  handleRowClick,
  onSelectChange,
}: TeacherTableProps) => {
  return (
    <Table
      variant="HEAD_TEACHER"
      data={data}
      selectedIds={selectedIds}
      onRowClick={handleRowClick}
      onSelectChange={onSelectChange}
    />
  );
};
