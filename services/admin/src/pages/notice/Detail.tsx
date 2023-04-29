import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Text, BreadCrumb, Button } from '@team-aliens/design-system';
import { NoticeDetailSummary } from '@/components/notice/NoticeDetailSummary';
import { WithNavigatorBar } from '@/components/WithNavigatorBar';
import { useModal } from '@/hooks/useModal';
import { useDeleteNotice, useNoticeDetail } from '@/hooks/useNoticeApi';
import { pathToKorean } from '@/router';

export function NoticeDetail() {
  const { noticeId } = useParams();

  const { renderModal, modalState, closeModal } = useModal();

  const { data: detail } = useNoticeDetail(noticeId);
  const deleteNotice = useDeleteNotice(noticeId);

  const deleteConfirm = () =>
    renderModal({
      content: '공지를 삭제하시겠습니까?',
      buttons: [
        <Button kind="outline" color="gray" onClick={closeModal}>
          취소
        </Button>,
        <Button kind="contained" color="error" onClick={deleteNotice.mutate}>
          삭제
        </Button>,
      ],
    });

  return (
    <>
      <WithNavigatorBar>
        <_Wrapper>
          <BreadCrumb left={366} pathToKorean={pathToKorean} />
          <Text
            size="titleM"
            color="gray10"
            display="inline-block"
            margin={['top', 160]}
          >
            {detail?.title}
          </Text>
          <NoticeDetailSummary
            onClickDeleteNotice={deleteConfirm}
            createdDate={detail?.created_at}
            noticeId={noticeId}
          />
          <_Content
            color="gray7"
            size="bodyM"
            display="inline-block"
            margin={['top', 40]}
          >
            {detail?.content}
          </_Content>
        </_Wrapper>
      </WithNavigatorBar>
    </>
  );
}

const _Wrapper = styled.div`
  width: 1030px;
  margin: 0 auto;
`;

const _Content = styled(Text)`
  white-space: pre-line;
`;
