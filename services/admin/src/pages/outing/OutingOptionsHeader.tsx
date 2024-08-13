import { MegaPhone, Button } from '@team-aliens/design-system';
import { Divider } from '../../components/main/Divider';
import styled from 'styled-components';
import { useModal } from '@/hooks/useModal';
import OutingTimeModal from '../../components/outings/OutingTimeModal';
import OutingAddTimeModal from '@/components/outings/OutingAddTimeModal';
import { Link } from 'react-router-dom';
import OutingDisabledTime from '@/components/outings/OutingDisabledTime';
import Slider, { Settings } from 'react-slick';
import { IsDisabledApplicationTime } from './OutingTimeSet';
import { useToast } from '@/hooks/useToast';
import OutingEditTimeModal from '@/components/outings/OutingEditTimeModal';
import { useState } from 'react';

interface PropsType {
  timeSlotId: string | null;
  outingTimesProps?: IsDisabledApplicationTime[];
  SelectedDay: string;
}

const dayOfWeekMessages = {
  MONDAY: '월요일',
  TUESDAY: '화요일',
  WEDNESDAY: '수요일',
  THURSDAY: '목요일',
  FRIDAY: '금요일',
  SATURDAY: '토요일',
  SUNDAY: '일요일',
};

export function OutingOptionsHeader({
  timeSlotId,
  outingTimesProps,
}: PropsType) {
  const { selectModal, closeModal, modalState } = useModal();
  const { toastDispatch } = useToast();

  const sliderProperties: Settings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: false,
    vertical: true,
  };

  const renderOutingTime = (item) => {
    const dayMessage = dayOfWeekMessages[item.day_of_week];
    if (!dayMessage) return null;

    const handleClick = () => {
      if (timeSlotId !== null && timeSlotId === item.id) {
        selectModal('OUTING_EDIT_TIME');
      } else {
        toastDispatch({
          toastType: 'INFORMATION',
          actionType: 'APPEND_TOAST',
          message:
            '아래의 해당 요일의 외출 가능 시간 목록을 선택 후 다시 이용해 주세요.',
        });
      }
    };

    return (
      <>
        <_Text disabled={!item.enabled}>
          {dayMessage} 외출 가능 시간은 {item.outing_time} ~ {item.arrival_time}{' '}
          입니다.
        </_Text>
        <Button
          kind="text"
          color="primary"
          margin={['left', 'auto']}
          onClick={handleClick}
        >
          수정
        </Button>
      </>
    );
  };

  return (
    <>
      <_Wrapper>
        <_ApplyAbleTime>
          <MegaPhone fill={false} colorKey="primary" />
          <Slider {...sliderProperties}>
            {outingTimesProps.map((item) => (
              <_SwiperSlide key={item.id}>
                {renderOutingTime(item)}
              </_SwiperSlide>
            ))}
          </Slider>
        </_ApplyAbleTime>
        <div className="buttonWrapper">
          <Button
            color="gray"
            onClick={() => selectModal('OUTING_DISABLED_TIME')}
          >
            외출 비활성화
          </Button>
          <Button
            kind="outline"
            color="gray"
            onClick={() => selectModal('OUTING_ADD_TIME')}
          >
            항목 추가
          </Button>
          <Divider height={43} width={2} margin="0" />
          <Link to={'/outing'}>
            <Button>외출 현황</Button>
          </Link>
        </div>
      </_Wrapper>
      {modalState.selectedModal === 'OUTING_TIME' && <OutingTimeModal />}
      {modalState.selectedModal === 'OUTING_ADD_TIME' && (
        <OutingAddTimeModal closeModal={closeModal} />
      )}
      {modalState.selectedModal === 'OUTING_DISABLED_TIME' && (
        <OutingDisabledTime />
      )}
    </>
  );
}

const _Wrapper = styled.div`
  display: flex;
  .buttonWrapper {
    display: flex;
    margin-left: auto;
    gap: 12px;
    position: relative;
  }
`;

const _ApplyAbleTime = styled.div`
  display: flex;
  align-items: center;
  min-width: 460px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.gray1};
  padding-left: 15px;
  box-shadow: 0 1px 20px rgba(238, 238, 238, 0.8);
  overflow: hidden;
`;

const _SwiperSlide = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #999999;
  height: 55px;
  white-space: nowrap;
  margin-left: 220px;
  gap: 20px;
`;

const _Text = styled.div<{ disabled: boolean }>`
  font-size: 14px;
  text-decoration: ${(props) => (props.disabled ? 'line-through' : 'none')};
`;
