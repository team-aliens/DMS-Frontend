import { Table } from '@team-aliens/design-system';

interface TeacherTableProps {
  data: any[];
  handleRowClick: (id: string) => void;
}

export const TeacherTable = ({ data, handleRowClick }: TeacherTableProps) => {
  return (
    <Table
      variant="DORMITORY_TEACHER"
      data={data}
      onRowClick={handleRowClick}
    />
  );
};
