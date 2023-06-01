import { TagType } from '@/apis/tags/response';
import { useTagList } from '@/hooks/useTagsApi';
import { Arrow, Button, CheckBox, Text } from '@team-aliens/design-system';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components';

export function ViewItem() {
  const [click, setClick] = useState(false);

  const viewItemState = useMemo(() => {
    if (click)
      return {
        text: <Arrow size={18} colorKey="gray6" direction="top" />,
        color: 'gray',
      };
    return {
      text: <Arrow size={18} colorKey="gray6" direction="bottom" />,
      color: 'gray',
    };
  }, [click]);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setClick(false);
      }}
    >
      <_VieItem>
        <Button
          onClick={() => setClick(!click)}
          color={viewItemState.color as 'primary' | 'gray' | 'error'}
          kind="outline"
        >
          <>항목보기{viewItemState.text}</>
        </Button>
        {click && (
          <Items>
            <_Item>
              <Text color="gray5" size="captionM" cursor={'pointer'}>
                상/벌점 항목 보기
              </Text>
            </_Item>
            <_Item>
              <Text color="gray5" size="captionM" cursor={'pointer'}>
                학생 태그 항목 보기
              </Text>
            </_Item>
          </_Tags>
        )}
      </_TagDropDown>
    </OutsideClickHandler>
  );
}

const _VieItem = styled.div`
  position: relative;
`;

const Items = styled.div`
  position: absolute;
  top: 58px;
  width: 132px;
  right: -15px;
  max-height: 138px;
  background-color: ${({ theme }) => theme.color.gray1};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 101;
  overflow-y: scroll;
`;

const _Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0 8px;
  height: 46px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
`;
