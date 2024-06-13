import styled from 'styled-components';
import { Text, Trash } from '@team-aliens/design-system';
import { useModal } from '@/hooks/useModal';

interface PropsType {
  canDelete?: boolean;
  isDeleteListOption?: boolean;
  canClick?: boolean;
  onClick?: (title: string) => void;
  OptionSelected?: string;
  title: string;
}

export function OutingItemBox({
  canDelete = false,
  isDeleteListOption = false,
  canClick = false,
  onClick,
  OptionSelected,
  title,
}: PropsType) {
  const { selectModal } = useModal();

  const openDeletePointModal = () => {
    selectModal('DELETE_OUTING_LIST_TYPE');
  };

  return (
    <_Wrapper
      canClick={canClick}
      onClick={() => onClick && onClick(title)}
      OptionSelected={OptionSelected === title}
    >
      <Text color="gray6" margin={[0, 20]} size="BtnM">
        {title}
      </Text>
      {canDelete && (
        <_CancelWrapper>
          <_Line />
          <_Delete onClick={openDeletePointModal}>
            <Trash colorKey="gray5" />
          </_Delete>
        </_CancelWrapper>
      )}
    </_Wrapper>
  );
}

const _Wrapper = styled.div<{
  canClick?: boolean;
  OptionSelected: boolean;
}>`
  display: flex;
  cursor: ${({ canClick }) => (canClick ? 'pointer' : 'default')};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.color.gray2};
  border-radius: 4px;
  border: 2px solid
    ${({ OptionSelected, canClick }) =>
      canClick && OptionSelected ? '#3D8AFF' : '#EEEEEE'};
`;

const _Line = styled.div`
  width: 1px;
  height: 30px;
  background-color: #eeeeee;
`;

const _Delete = styled.div`
  margin: 0 26px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.gray2};
  border-radius: 50%;
`;

const _CancelWrapper = styled.div`
  display: flex;
  align-items: center;
`;
