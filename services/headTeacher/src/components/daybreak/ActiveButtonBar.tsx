import { ActionButton } from '@team-aliens/design-system';

interface ActionButtonBarProps {
  onClick: (status: 'APPROVE' | 'REJECT') => void;
}

export const ActiveButtonBar = ({ onClick }: ActionButtonBarProps) => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <ActionButton
        variant="approve"
        label=""
        onClick={() => onClick('APPROVE')}
      />
      <ActionButton
        variant="reject"
        label=""
        onClick={() => onClick('REJECT')}
      />
    </div>
  );
};
