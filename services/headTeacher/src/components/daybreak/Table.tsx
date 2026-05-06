import { Table } from '@team-aliens/design-system';

interface TeacherTableProps {
  variant: 'HEAD_TEACHER' | 'GENERAL_TEACHER' | 'DORMITORY_TEACHER';
  data: any[];
  selectedIds: string[];
  handleRowClick: (id: string) => void;
  onSelectChange: (ids: string[]) => void;
}

export const TeacherTable = ({
  variant,
  data,
  selectedIds,
  handleRowClick,
  onSelectChange,
}: TeacherTableProps) => {
  if (variant === 'DORMITORY_TEACHER') {
    return <Table variant={variant} data={data} onRowClick={handleRowClick} />;
  }

  return (
    <Table
      variant={variant}
      data={data}
      selectedIds={selectedIds}
      onRowClick={handleRowClick}
      onSelectChange={onSelectChange}
    />
  );
};
