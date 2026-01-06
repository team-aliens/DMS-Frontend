import { create } from 'zustand';

export type SelectedModalType =
  | 'DELETE_NOTICE'
  | 'NEW_QNA'
  | 'LOGOUT'
  | 'ADD_SEAT_TYPE'
  | 'APPLICATION_TIME'
  | 'DELETE_STUDY_ROOM'
  | 'POINT_FILTER'
  | 'DELETE_POINT_LIST'
  | 'ADD_STUDY_ROOM_TIME'
  | 'EDIT_STUDY_ROOM_TIME'
  | 'DELETE_STUDY_ROOM_TIME'
  | 'STUDENT_EXEL'
  | 'DELETE_STUDENT'
  | 'POINT_OPTIONS'
  | 'GIVE_POINT'
  | 'DELETE_POINT_OPTION'
  | 'SET_REMAIN_TIME'
  | 'CREATE_REMAIN_ITEM'
  | 'EDIT_REMAIN_ITEM'
  | 'DELETE_REMAIN_ITEM'
  | 'SCHOOL_CHECKING_CODE'
  | 'PRINT_STUDY_ROOM_APPLY'
  | 'SET_STUDY_ROOM_APPLY_TIME'
  | 'SET_STUDY_TIME'
  | 'DELETE_STUDENT_TAG'
  | 'GIVE_TAG_OPTIONS'
  | 'VIEW_TAG_OPTIONS'
  | 'DELETE_TAG'
  | 'STUDENT_EDIT_ROOM_EXCEL'
  | 'STUDENT_EDIT_GRADE_EXCEL'
  | 'OUTING_REQUESTED'
  | 'OUTING_DONE'
  | 'DONE_MODAL'
  | 'OUTING_EXCEL'
  | 'OUTING_TYPE'
  | 'DELETE_OUTING_LIST_TYPE'
  | 'OUTING_TIME'
  | 'OUTING_ADD_TIME'
  | 'OUTING_EDIT_TIME'
  | 'DELETE_OUTING_TIME'
  | 'OUTING_DISABLED_TIME'
  | 'VOLUNTEER_ADD'
  | 'CREATE_VOTE'
  | 'SET_VOTE_DEAD_LINE'
  | '';

interface ModalState {
  selectedModal: SelectedModalType;
  selectModal: (modal: SelectedModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  selectedModal: '',
  selectModal: (modal) =>
    set(() => ({
      selectedModal: modal,
    })),
  closeModal: () =>
    set(() => ({
      selectedModal: '',
    })),
}));
