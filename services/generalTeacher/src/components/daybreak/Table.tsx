import { Table } from '@team-aliens/design-system';

interface TeacherTableProps {
  data: any[];
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
      variant="GENERAL_TEACHER"
      data={data}
      selectedIds={selectedIds}
      onRowClick={handleRowClick}
      onSelectChange={onSelectChange}
    />
  );
};
