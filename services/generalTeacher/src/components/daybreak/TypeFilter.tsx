import styled from 'styled-components';
import { DropDownFilter } from '@team-aliens/design-system';
import { useStudyApplicationType } from '@/hooks/useDaybreakApi';

const ALL = 'ALL';

interface TypeFilterProps {
  value: string;
  onChange: (typeId: string) => void;
}

export const TypeFilter = ({ value, onChange }: TypeFilterProps) => {
  const { data } = useStudyApplicationType();
  const items = (data?.types ?? []).map((type) => ({
    label: type.name,
    value: type.id,
  }));

  return (
    <_Anchor>
      <DropDownFilter
        items={items}
        value={value || ALL}
        placeholder="전체"
        onChange={(next) => onChange(next === ALL ? '' : next)}
      />
    </_Anchor>
  );
};

/**
 * DropDownFilter의 옵션 박스는 일반 흐름에 놓여 있어서 펼치면 아래 요소를 밀어낸다.
 * 선택 박스 크기(191x50)로 자리를 고정해 두면 옵션 박스가 넘쳐 흐르면서 겹쳐지고,
 * position/z-index로 스택 컨텍스트를 만들어 뒤따라오는 테이블 위에 그려지게 한다.
 */
const _Anchor = styled.div`
  position: relative;
  z-index: 10;
  width: 191px;
  height: 50px;
`;
