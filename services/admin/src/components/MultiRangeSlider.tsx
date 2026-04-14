import { Text } from '@team-aliens/design-system';
import { theme } from '@team-aliens/design-system/dist/styles/theme';
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

export interface StartEndPoint {
  startPoint: number;
  endPoint: number;
}

interface PropsType {
  min: number;
  max: number;
  minVal: number;
  maxVal: number;
  state: StartEndPoint;
  setState: Dispatch<SetStateAction<StartEndPoint>>;
  markings?: (string | number)[];
  disableLeft?: boolean;
  disableRight?: boolean;
  highlightRight?: boolean;
}

export function MultiRangeSlider({
  min,
  max,
  minVal,
  maxVal,
  state,
  setState,
  markings,
  disableLeft,
  disableRight,
  highlightRight = true,
}: PropsType) {
  const gap = 1;

  const defaultMarkings = [
    '-100+',
    '-80',
    '-60',
    '-40',
    '-20',
    '0',
    '20',
    '40',
    '60',
    '80',
    '100+',
  ];

  const resolvedMarkings = markings ?? defaultMarkings;

  const onChangeValueLeft = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disableLeft) return;
    const { value } = e.target;
    const next = Number(value);
    if (!Number.isFinite(next)) return;

    if (disableRight) {
      const clamped = Math.min(Math.max(next, min), max);
      setState({ ...state, startPoint: clamped });
      return;
    }

    if (maxVal - next > gap) {
      setState({ ...state, startPoint: next });
      return;
    }

    setState({ ...state, startPoint: +maxVal - gap });
  };

  const onChangeValueRight = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disableRight) return;
    const { value } = e.target;
    const next = Number(value);
    if (Number.isFinite(next) && next - minVal > gap) {
      setState({ ...state, endPoint: next });
    } else {
      setState({ ...state, endPoint: +minVal + gap });
    }
  };

  const denom = max - min;
  const Left =
    denom === 0 ? 0 : (((+minVal > min ? +minVal : min) - min) / denom) * 100;
  const Right =
    denom === 0
      ? 0
      : 100 - (((+maxVal < max ? +maxVal : max) - min) / denom) * 100;

  return (
    <>
      <_Marking>
        {resolvedMarkings.map((res, idx) => (
          <Text
            key={idx}
            size="captionM"
            color={
              +String(res).replace('+', '') === +minVal ||
              (highlightRight && +String(res).replace('+', '') === +maxVal)
                ? 'gray8'
                : 'gray4'
            }
          >
            {res}
          </Text>
        ))}
      </_Marking>
      <_Inputs>
        <_Progress left={Left} right={Right} />
        <_Range
          onChange={onChangeValueLeft}
          type="range"
          min={min}
          max={max}
          value={minVal}
          disabled={disableLeft}
        />
        <_Range
          onChange={onChangeValueRight}
          type="range"
          min={min}
          max={max}
          value={maxVal}
          disabled={disableRight}
        />
      </_Inputs>
    </>
  );
}

export default MultiRangeSlider;

const _Marking = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  margin: 0 auto 20px auto;
  margin-bottom: 20px;
  > * {
    display: flex;
    justify-content: center;
    width: 30px;
  }
`;

const _Inputs = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 96%;
  margin: 0 auto;
  background-color: ${theme.color.primaryLighten1};
  border-radius: 5px;
  height: 5px;
  input[type='range']::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50px;
    -webkit-appearance: none;
    pointer-events: auto;
    background-color: ${theme.color.primaryDarken1};
  }
`;

const _Progress = styled.div<{ left: number; right: number }>`
  position: absolute;
  display: flex;
  align-items: center;
  left: ${({ left }) => `${left}%`};
  right: ${({ right }) => `${right}%`};
  height: 5px;
  border-radius: 50px;
  background-color: ${theme.color.primaryDarken1};
`;

const _Range = styled.input`
  position: absolute;
  background: none;
  width: 100%;
  pointer-events: none;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
`;
