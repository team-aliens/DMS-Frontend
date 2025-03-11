import { Magnifyingglass } from '@/assets/magnifyingglass';
import { Button, Modal } from '@team-aliens/design-system';
import { color } from '@team-aliens/design-system/dist/styles/theme/color';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import { useState } from 'react';
import styled from 'styled-components';

interface PropsType {
  onClose: () => void;
}

export function EditVoteStudent({ onClose }: PropsType) {
  const [name, setName] = useState<string>('');
  const [isCheck, setIsCheck] = useState<boolean[]>(new Array(9).fill(false));

  const dummyData = [
    {
      number: 1101,
      name: '정승우',
    },
    {
      number: 1102,
      name: '지도현',
    },
    {
      number: 1103,
      name: '허영재',
    },
    {
      number: 1104,
      name: '정명우',
    },
    {
      number: 1105,
      name: '정현석',
    },
    {
      number: 1106,
      name: '이건희',
    },
    {
      number: 1107,
      name: '박태수',
    },
    {
      number: 1108,
      name: '채도훈',
    },
  ];

  const trueIndexes = isCheck
    .map((check, index) => (check ? index : -1))
    .filter((index) => index !== -1);

  const filterData = name
    ? dummyData.filter((data) => data.number.toString().includes(name))
    : trueIndexes.map((index) => dummyData[index]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCheck = (targetIndex: number) => {
    const realIndex = dummyData.indexOf(filterData[targetIndex]);
    if (realIndex === -1) return;

    setIsCheck((prev) => {
      const newCheck = [...prev];
      newCheck[realIndex] = !newCheck[realIndex];
      return newCheck;
    });
  };

  return (
    <Modal
      buttonList={[
        <Button kind="outline" onClick={onClose}>
          취소
        </Button>,
        <Button>확인</Button>,
      ]}
      close={onClose}
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
            {filterData.length !== 0 ? (
              filterData.map((data, index) => (
                <_Item
                  key={data.number}
                  onClick={() => handleCheck(index)}
                  check={isCheck[dummyData.indexOf(data)]}
                >
                  <span>{data.name}</span>
                  <span>{data.number}</span>
                </_Item>
              ))
            ) : (
              <span>아직 제외된 학생이 없습니다.</span>
            )}
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
  display: flex;
  gap: 12px;
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
  max-height: 400px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 400px;
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    font: ${font.bodyL};
    color: ${color.gray5};
    height: 100%;
  }
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
  max-height: 500px;
  overflow: hidden;
`;

const _Header = styled.header`
  font: ${font.headlineS};
`;
