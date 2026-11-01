import { Table } from '@team-aliens/design-system';
import { ManagerStudyApplication } from '@/apis/daybreak/response';

interface TeacherTableProps {
  data: ManagerStudyApplication[];
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
