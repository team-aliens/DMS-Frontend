import { create } from 'zustand';
import { SeatStatusType, StudyRoom } from '@/apis/studyRooms/request';
import {
  SeatPreview,
  SeatType,
  StudyRoomDetailResponse,
} from '@/apis/studyRooms/response';

export interface PreviewSeat {
  width_location: number;
  height_location: number;
  number: number | null;
  type: SeatType | null;
  status: SeatStatusType;
}

interface SeatState extends StudyRoom {
  seats: SeatPreview[];
  seat: PreviewSeat;
}

interface SeatSettingState extends SeatState {
  selectSeat: (x: number, y: number) => void;
  setSeat: (seat: PreviewSeat) => void;
  cancelSetSeat: () => void;
  confirmSetSeat: () => void;
  setStudyRoomOption: (studyRoom: StudyRoom) => void;
  initialValue: (payload?: StudyRoomDetailResponse) => void;
}

const seatInitialValue: PreviewSeat = {
  status: 'AVAILABLE',
  width_location: null,
  height_location: null,
  type: null,
  number: null,
};

const seatDefaultValue: SeatState = {
  floor: 0,
  name: '',
  total_width_size: 0,
  total_height_size: 0,
  east_description: '',
  west_description: '',
  south_description: '',
  north_description: '',
  available_sex: 'ALL',
  available_grade: 0,
  seats: [],
  seat: seatInitialValue,
  time_slots: [],
  time_slot_ids: [],
};

export const useSeatSettingStore = create<SeatSettingState>()((set) => ({
  ...seatDefaultValue,
  selectSeat: (x, y) =>
    set((state) => ({
      seat: {
        ...state.seat,
        width_location: x,
        height_location: y,
      },
    })),
  setSeat: (seat) =>
    set(() => ({
      seat,
    })),
  cancelSetSeat: () =>
    set(() => ({
      seat: seatInitialValue,
    })),
  confirmSetSeat: () =>
    set((state) => ({
      seats: state.seats
        .filter(
          (i) =>
            !(
              (i.height_location === state.seat.height_location + 1 &&
                i.width_location === state.seat.width_location + 1) ||
              (i.status !== 'UNAVAILABLE' &&
                i.status !== 'EMPTY' &&
                state.seat.status !== 'EMPTY' &&
                state.seat.status !== 'UNAVAILABLE' &&
                i.type.name === state.seat.type.name &&
                i.number === state.seat.number)
            )
        )
        .concat({
          ...state.seat,
          width_location: state.seat.width_location + 1,
          height_location: state.seat.height_location + 1,
        }),
    })),
  setStudyRoomOption: (studyRoom) =>
    set((state) => ({
      ...state,
      ...studyRoom,
    })),
  initialValue: (payload) =>
    set(() => {
      if (payload) {
        return {
          ...seatDefaultValue,
          ...payload,
        };
      }
      return {
        ...seatDefaultValue,
      };
    }),
}));
