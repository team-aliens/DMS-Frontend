import styled from 'styled-components';
import { theme } from '@team-aliens/design-system/dist/styles/theme';
import { TagButton } from '@team-aliens/design-system';
import { useStudyApplicationType } from '@/hooks/useDaybreakApi';

interface TypeButtonBarProps {
  activeType: string;
  onToggle: (name: string) => void;
}

export const TypeButtonBar = ({ activeType, onToggle }: TypeButtonBarProps) => {
  const { data: typeList } = useStudyApplicationType();
  const types = typeList?.types || [];
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      <_FilterButton>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3338 33.3307C17.8616 33.3307 17.4657 33.171 17.1463 32.8516C16.8268 32.5321 16.6671 32.1363 16.6671 31.6641V21.6641L7.00046 9.33073C6.58379 8.77517 6.52129 8.19184 6.81296 7.58073C7.10463 6.96962 7.61157 6.66406 8.33379 6.66406H31.6671C32.3893 6.66406 32.8963 6.96962 33.188 7.58073C33.4796 8.19184 33.4171 8.77517 33.0005 9.33073L23.3338 21.6641V31.6641C23.3338 32.1363 23.1741 32.5321 22.8546 32.8516C22.5352 33.171 22.1393 33.3307 21.6671 33.3307H18.3338ZM20.0005 20.4974L28.2505 9.9974H11.7505L20.0005 20.4974Z"
            fill="#0F6EFE"
          />
        </svg>
      </_FilterButton>
      {types.map((type) => (
        <TagButton
          key={type.id}
          label={type.name}
          active={activeType == type.id}
          onClick={() => onToggle(type.id)}
        />
      ))}
    </div>
  );
};

const _FilterButton = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 20px 10px;
  border-radius: 12px;
  border: 1px solid ${theme.teacherColor.blue[300]};
  background: ${theme.teacherColor.blue[50]};
  font-size: ${theme.font.headlineS};
  transition: all 0.15s ease;
`;
