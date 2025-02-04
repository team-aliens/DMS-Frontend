import { useState } from 'react';
import { Button } from '@team-aliens/design-system';
import { font } from '@team-aliens/design-system/dist/styles/theme/font';
import styled from 'styled-components';

export const SetVoterModal = () => {
  const [grade, setGrade] = useState([
    { text: '전체', check: false },
    { text: '1학년', check: false },
    { text: '2학년', check: false },
    { text: '3학년', check: false },
  ]);

  const [gender, setGender] = useState([
    { text: '전체', check: false },
    { text: '남자', check: false },
    { text: '여자', check: false },
  ]);

  const onClickBtn = (index: number, type: 'grade' | 'gender') => {
    if (type === 'grade') {
      setGrade((prev) => {
        if (prev[index].text === '전체') {
          const allCheck = prev.every((item) => item.check);
          return prev.map((item) => ({ ...item, check: !allCheck }));
        }
        return prev.map((item, i) =>
          i === index ? { ...item, check: !item.check } : item,
        );
      });
    } else {
      setGender((prev) => {
        if (prev[index].text === '전체') {
          const allCheck = prev.every((item) => item.check);
          return prev.map((item) => ({ ...item, check: !allCheck }));
        }
        return prev.map((item, i) =>
          i === index ? { ...item, check: !item.check } : item,
        );
      });
    }
  };
  return (
    <ModalBackground>
      <Modal>
        <Header>
          투표 항목 생성
          <Contents>
            <Box>
              학년
              <ButtonBox>
                {grade.map((data, index) => (
                  <Button
                    key={index}
                    onClick={() => onClickBtn(index, 'grade')}
                    kind={data.check ? 'contained' : 'outline'}
                  >
                    {data.text}
                  </Button>
                ))}
              </ButtonBox>
            </Box>
            <Box>
              성별
              <ButtonBox>
                {gender.map((data, index) => (
                  <Button
                    key={index}
                    onClick={() => onClickBtn(index, 'gender')}
                    kind={data.check ? 'contained' : 'outline'}
                  >
                    {data.text}
                  </Button>
                ))}
              </ButtonBox>
            </Box>
          </Contents>
        </Header>
        <Footer>
          <FooterBtnBox>
            <Button kind="outline">취소</Button>
            <Button>확인</Button>
          </FooterBtnBox>
        </Footer>
      </Modal>
    </ModalBackground>
  );
};

const Header = styled.div`
  font: ${font.headlineS};
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const Box = styled.div`
  font: ${font.bodyS};
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 16px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: right;
`;

const FooterBtnBox = styled.div`
  display: flex;
  gap: 12px;
`;

const Modal = styled.div`
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 337px;
  padding: 34px 30px 34px 28px;
  width: 600px;
`;

const ModalBackground = styled.div`
  // 나중에 CreateVoteModal에서 가져올 예정
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
