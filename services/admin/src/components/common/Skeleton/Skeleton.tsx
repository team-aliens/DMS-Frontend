import styled, { keyframes, css } from 'styled-components';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

export interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  animation?: boolean;
}

interface StyledSkeletonProps {
  $width: string | number;
  $height: string | number;
  $borderRadius: string | number;
  $animation: boolean;
}
export function Skeleton({
  variant = 'rectangular',
  width = '100%',
  height,
  borderRadius,
  animation = true,
}: SkeletonProps) {
  const getDefaultHeight = () => {
    switch (variant) {
      case 'text':
        return '1em';
      case 'circular':
        return width;
      default:
        return '100px';
    }
  };

  const getDefaultBorderRadius = () => {
    if (borderRadius !== undefined) return borderRadius;

    switch (variant) {
      case 'text':
        return '4px';
      case 'circular':
        return '50%';
      case 'rounded':
        return '8px';
      default:
        return '0';
    }
  };

  return (
    <_Skeleton
      $width={width}
      $height={height || getDefaultHeight()}
      $borderRadius={getDefaultBorderRadius()}
      $animation={animation}
    />
  );
}

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const _Skeleton = styled.div<StyledSkeletonProps>`
  display: inline-block;
  width: ${({ $width }) =>
    typeof $width === 'number' ? `${$width}px` : $width};
  height: ${({ $height }) =>
    typeof $height === 'number' ? `${$height}px` : $height};
  border-radius: ${({ $borderRadius }) =>
    typeof $borderRadius === 'number' ? `${$borderRadius}px` : $borderRadius};
  background-color: ${({ theme }) => theme.color.gray2 || '#e0e0e0'};

  ${({ $animation }) =>
    $animation &&
    css`
      animation: ${shimmer} 1.5s ease-in-out infinite;
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-size: 468px 100%;
      background-repeat: no-repeat;
    `}
`;
