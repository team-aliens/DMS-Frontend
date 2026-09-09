import { useInView } from 'react-intersection-observer';

interface InfiniteScrollState {
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

/**
 * 목록 끝에 둘 감시용 ref를 돌려준다.
 * 그 요소가 화면에 들어오면 다음 장을 불러온다.
 */
export const useInfiniteScroll = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: InfiniteScrollState) => {
  const { ref } = useInView({
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage();
    },
  });

  return ref;
};
