import { ChangeEvent } from 'react';
import { PreviewSeat, useSeatSettingStore } from '@/store/useSeatSettingStore';
import {
  gradeKoreanToEng,
  GradeToKorean,
  sexKoreanToEng,
  SexToKorean,
} from '@/utils/translate';
import { StudyRoomDetailResponse } from '@/apis/studyRooms/response';

export const useStudyRoom = () => {
  const studyRoomState = useSeatSettingStore();
  const {
    initialValue: storeInitialValue,
    setSeat,
    setStudyRoomOption,
    confirmSetSeat,
  } = useSeatSettingStore();

  const initalValue = (state?: StudyRoomDetailResponse) => {
    storeInitialValue(state && { ...state });
  };

  const onChangeSeatSetting = (state: Partial<PreviewSeat>) => {
    setSeat({
      ...studyRoomState.seat,
      ...state,
    });
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setStudyRoomOption({
      ...studyRoomState,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSex = (sex: SexToKorean) => {
    setStudyRoomOption({
      ...studyRoomState,
      available_sex: sexKoreanToEng(sex),
    });
  };

  const onChangeGrade = (grade: GradeToKorean) => {
    setStudyRoomOption({
      ...studyRoomState,
      available_grade: gradeKoreanToEng(grade),
    });
  };

  const confirmSetting = () => {
    confirmSetSeat();
  };

  const onChangeStudyTime = (times_id: string[]) => {
    setStudyRoomOption({
      ...studyRoomState,
      time_slot_ids: times_id,
    });
  };

  return {
    studyRoomState,
    onChangeGrade,
    onChangeSex,
    onChangeInput,
    onChangeSeatSetting,
    confirmSetting,
    onChangeStudyTime,
    initalValue,
  };
};

export type { PreviewSeat };
