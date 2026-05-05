declare module 'react-intersection-observer' {
  export function useInView(options?: any): {
    ref: (node?: Element | null) => void;
    inView: boolean;
    entry?: IntersectionObserverEntry | null;
  };
}
