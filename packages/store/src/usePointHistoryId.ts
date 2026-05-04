import { create } from 'zustand';

interface PointHistoryIdState {
  pointHistoryId: string;
  setPointHistoryId: (val: string) => void;
}
export const usePointHistoryId = create<PointHistoryIdState>((set) => ({
  pointHistoryId: '',
  setPointHistoryId: (value) => set(() => ({ pointHistoryId: value })),
}));
