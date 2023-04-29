import React, { createContext, Dispatch, useReducer } from 'react';

export interface ModalRenderState {
  title?: string;
  content?: string;
  inputs?: React.ReactElement[];
  buttons?: React.ReactElement[];
  children?: React.ReactNode;
  onClose?: () => void;
}

interface ModalState extends ModalRenderState {
  isOpened: boolean;
}

type RenderModal = {
  type: 'RENDER';
  contents: ModalRenderState;
};

type CloseModal = {
  type: 'CLOSE';
};

const modalDefaultValue: ModalState = {
  isOpened: false,
  title: '',
  content: '',
  inputs: [],
  buttons: [],
  onClose: () => {},
};

export const ModalStateContext = createContext<ModalState>(modalDefaultValue);

type ActionTypes = RenderModal | CloseModal;

type SelectModalDispatch = Dispatch<ActionTypes>;

export const ModalDispatchContext = createContext<SelectModalDispatch>(
  () => null,
);

const modalReducer = (
  state: ModalRenderState,
  action: ActionTypes,
): ModalState => {
  switch (action.type) {
    case 'RENDER':
      return {
        ...state,
        ...action.contents,
        isOpened: true,
      };
    case 'CLOSE':
    default:
      return {
        ...state,
        isOpened: false,
      };
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
