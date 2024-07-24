import { OutingApplicationDetailResponse } from '@/apis/outing/response';
import { Text } from '@team-aliens/design-system';
import styled from 'styled-components';

interface InfoDataProps {
  label: string;
  detail: string;
  isTag: boolean;
  tagColor: string;
  tagBackGroundColor: string;
  text: string;
}

interface PropsType {
  tagColor: string;
  tagBackGroundColor: string;
  text?: string;
  detailInfoData?: OutingApplicationDetailResponse;
}

export function OutingInfoWrapper({
  tagColor,
  tagBackGroundColor,
  text,
  detailInfoData,
}: PropsType) {
  const outingInfoList = [
    {
      label: '예정 시간',
      detail: `${detailInfoData?.outing_time} ~ ${detailInfoData?.arrival_time}`,
    },
    { label: '외출 유형', detail: `${detailInfoData?.outing_type}` },
    { label: '상태', detail: `${detailInfoData?.outing_status}`, isTag: true },
  ];

  return (
    <_OutingInFoWrapper>
      {outingInfoList.map((info: InfoDataProps, idx: number) => (
        <Info
          key={idx}
          label={info.label}
          detail={info.detail}
          isTag={info.isTag}
          tagColor={tagColor}
          tagBackGroundColor={tagBackGroundColor}
          text={text}
        />
      ))}
    </_OutingInFoWrapper>
  );
}

function Info({ label, ...props }: InfoDataProps) {
  return (
    <_DataInfo>
      <Text size="bodyM" color="gray6">
        {label}
      </Text>
      {props.isTag ? (
        <_Tag
          tagColor={props.tagColor}
          tagBackGroundColor={props.tagBackGroundColor}
        >
          {props.text}
        </_Tag>
      ) : (
        <div>
          <_Detail>{props.detail}</_Detail>
        </div>
      )}
    </_DataInfo>
  );
}

const _OutingInFoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const _DataInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const _Detail = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 0 10px;
  height: 31px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const _Tag = styled.div<PropsType>`
  position: relative;
  display: flex;
  align-items: center;
  height: 26px;
  border-radius: 13px;
  padding: 10px;
  gap: 4px;
  width: auto;
  background-color: ${(props) => props.tagBackGroundColor};
  color: ${(props) => props.tagColor};
  ${({ theme }) => theme.font.captionM};
  cursor: default;
`;
