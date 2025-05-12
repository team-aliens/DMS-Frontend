import React, { createContext, Dispatch, useReducer } from 'react';

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
}

type SelectModalAction = {
  type: 'SELECT';
  selected: SelectedModalType;
};

type DeleteModalAction = {
  type: 'DELETE';
};

const modalDefaultValue: ModalState = {
  selectedModal: '',
};

export const ModalStateContext = createContext<ModalState>(modalDefaultValue);

type ActionTypes = SelectModalAction | DeleteModalAction;

type SelectModalDispatch = Dispatch<ActionTypes>;

export const ModalDispatchContext = createContext<SelectModalDispatch>(
  () => null,
);

const modalReducer = (state: ModalState, action: ActionTypes): ModalState => {
  switch (action.type) {
    case 'SELECT':
      return {
        ...state,
        selectedModal: action.selected,
      };
    case 'DELETE':
      return {
        ...state,
        selectedModal: '',
      };
    default:
      return state;
  }
};

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [selectedModal, changeModalDispatch] = useReducer(
    modalReducer,
    modalDefaultValue,
  );
  return (
    <ModalStateContext.Provider value={selectedModal}>
      <ModalDispatchContext.Provider value={changeModalDispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}
