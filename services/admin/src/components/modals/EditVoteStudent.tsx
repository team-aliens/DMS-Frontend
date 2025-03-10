import { Magnifyingglass } from '@/assets/magnifyingglass';
import { Button, Modal } from '@team-aliens/design-system';
import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import { useState } from 'react';
import styled from 'styled-components';

export function EditVoteStudent() {
  const [name, setName] = useState<string>('');
  const [isCheck, setIsCheck] = useState<boolean[]>([]);
  const dummyData = [1101, 1102, 1103, 1104, 2213, 2201, 3201, 3311, 3412];

  const trueIndexes = isCheck
    .map((check, index) => (check ? index : -1))
    .filter((index) => index !== -1);

  const filterData = name
    ? dummyData.filter((data) => data.toString().includes(name))
    : trueIndexes.map((data) => dummyData[data]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const handleCheck = (index: number) => {
    setIsCheck((prev) => {
      const newCheck = [...prev];
      newCheck[index] = !newCheck[index];
      return newCheck;
    });
  };

  return (
    <Modal
      buttonList={[<Button kind="outline">취소</Button>, <Button>확인</Button>]}
      close={null}
      width="1150px"
    >
      <_Wrapper>
        <_Header>제외 학생 지정</_Header>
        <_Contents>
          <_Input>
            <Magnifyingglass />
            <input type="text" onChange={onChange} value={name} />
          </_Input>
          <_Students>
            {filterData.map((data, index) => (
              <_Item
                key={data}
                onClick={() => handleCheck(index)}
                check={isCheck[index] || false}
              >
                <span>{data}</span>
              </_Item>
            ))}
          </_Students>
        </_Contents>
      </_Wrapper>
    </Modal>
  );
}

const _Item = styled.div<{ check: boolean }>`
  padding: 21px 0 21px 36px;
  border-radius: 4px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
  width: 770px;
  background-color: ${(props) =>
    props.check ? color.primaryDarken1 : 'transparent'};
  color: ${(props) => (props.check ? 'white' : 'inherit')};

  cursor: pointer;
  > span {
    font: ${font.bodyL};
  }
  &:hover {
    background-color: ${color.primaryDarken1};
    color: white;
  }
`;

const _Students = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const _Input = styled.div`
  border-radius: 30px;
  background-color: ${color.gray1};
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
  width: 241px;
  padding: 10px 0px 9px 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  > input {
    font: ${font.bodyL};
  }
`;

const _Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const _Header = styled.header`
  font: ${font.headlineS};
`;
