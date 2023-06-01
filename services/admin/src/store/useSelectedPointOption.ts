import { create } from 'zustand';

interface SelectedPointOptionState {
  selectedPointOption: string;
  setSelectedPointOption: (pointOptionId: string) => void;
}

export const useSelectedPointOptionStore = create<SelectedPointOptionState>()(
  (set) => ({
    selectedPointOption: '',
    setSelectedPointOption: (value) =>
      set(() => ({ selectedPointOption: value })),
  }),
);
