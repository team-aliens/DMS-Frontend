import { Arrow, Button, Input, Text } from '@team-aliens/design-system';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Confirmation } from '@/components/myPage/Confirmation';
import { Verification } from '@/components/myPage/Verification';
import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { useForm } from '@/hooks/useForm';
import { useModal } from '@/hooks/useModal';
import { ChangeSchoolQnARequest } from '@/apis/schools/request';
import { useChangeQnA, useReissueSchoolCode } from '@/hooks/useSchoolsApi';
import { useMyProfileInfo } from '@/hooks/useMangersApis';
import { StudentRegistrationExcel } from '@/components/modals/StudentRegistrationExcel';
import { pagePath } from '@/utils/pagePath';
import { useAuth } from '@/hooks/useAuth';

export function MyPage() {
  const { modalState, renderModal, closeModal } = useModal();
  const { logOut } = useAuth();
  const { onHandleChange: onChange, state: qnaState } =
    useForm<ChangeSchoolQnARequest>({
      question: '',
      answer: '',
    });
  const { answer, question } = qnaState;
  const openNewQuestionModal = () =>
    renderModal({
      title: '새 확인 질문과 답변을 입력해주세요.',
      inputs: [
        <Input
          name="question"
          value={question}
          onChange={onChange}
          placeholder="질문"
        />,
        <Input
          name="answer"
          value={answer}
          onChange={onChange}
          placeholder="답변"
        />,
      ],
      buttons: [
        <Button kind="contained" onClick={changeQnA.mutate}>
          저장
        </Button>,
      ],
    });
  const logOutConfirm = () =>
    renderModal({
      title: '로그아웃 재확인',
      content: '로그아웃 하시겠습니까?',
      buttons: [
        <Button onClick={closeModal} kind="outline" color="gray">
          취소
        </Button>,
        <Button onClick={logOut} kind="contained" color="error">
          확인
        </Button>,
      ],
    });

  const openStudentExelModal = () => selectModl('STUDENT_EXEL');

  const { data: myProfileData } = useMyProfileInfo();
  const changeQnA = useChangeQnA(qnaState);
  const getNewCode = useReissueSchoolCode();

  const [code, setCode] = useState('');

  useEffect(() => {
    setCode(myProfileData?.code);
  }, [myProfileData]);

  useEffect(() => {
    if (getNewCode.data) setCode(getNewCode.data?.code);
  }, [getNewCode.isSuccess, getNewCode.data]);

  const changeSchoolCode = () => {
    renderModal({
      content: '확인코드를 새로 발급하시겠습니까?',
      buttons: [
        <Button onClick={closeModal} kind="outline" color="gray">
          취소
        </Button>,
        <Button onClick={getNewCode.mutate} kind="contained" color="error">
          확인
        </Button>,
      ],
    });
  };
  return (
    <>
      <WithNavigatorBar>
        <_Wrapper>
          <Text display="block" size="headlineM" margin={['bottom', 60]}>
            {myProfileData?.school_name}
          </Text>
          <_CardWrapper>
            <div>
              <Verification onClickNewCode={changeSchoolCode} code={code} />
              <_OptionBtn>
                <_PasswordChange to={pagePath.myPage.changePwd}>
                  <Text display="block" size="titleS">
                    비밀번호 변경
                  </Text>
                  <Arrow size={24} direction="right" />
                </_PasswordChange>
                <_Logout
                  margin={['left', 'auto']}
                  onClick={logOutConfirm}
                  display="block"
                  size="titleS"
                  color="error"
                >
                  로그아웃
                </_Logout>
              </_OptionBtn>
            </div>
            <Confirmation
              openNewQuestionModal={openNewQuestionModal}
              question={myProfileData?.question}
              answer={myProfileData?.answer}
            />
          </_CardWrapper>
          <_StudentIssuance onClick={openStudentExelModal}>
            <Text display="block" size="titleS">
              학생 등록
            </Text>
            <Arrow size={24} direction="right" />
          </_StudentIssuance>
        </_Wrapper>
      </WithNavigatorBar>
      {modalState.selectedModal === 'STUDENT_EXEL' && (
        <StudentRegistrationExcel closeModal={closeModal} />
      )}
    </>
  );
}

const _CardWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const _OptionBtn = styled.div`
  display: flex;
  margin-top: 30px;
`;

const _Wrapper = styled.div`
  margin: 160px 0 0 80px;
`;

const _PasswordChange = styled(Link)`
  width: 233px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  > div {
    margin-right: 60px;
  }
`;

const _StudentIssuance = styled.div`
  width: 500px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0 24px;
  margin-top: 25px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
`;

const _Logout = styled(Text)`
  width: 250px;
  box-shadow: 0 1px 20px rgba(204, 204, 204, 0.24);
  border-radius: 4px;
  padding: 24px 21px;
  cursor: pointer;
`;
