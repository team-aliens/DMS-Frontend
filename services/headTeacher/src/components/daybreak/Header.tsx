import { Header } from '@team-aliens/design-system';

interface HeaderProps {
  onLogout: () => void;
}

export const TeacherHeader = ({ onLogout }: HeaderProps) => {
  return <Header variant="HEAD_TEACHER" onLogout={onLogout} />;
};
