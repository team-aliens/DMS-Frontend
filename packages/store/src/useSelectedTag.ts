import { create } from 'zustand';

interface SelectedTagState {
  selectedTag: string;
  setSelectedTag: (pointOptionId: string) => void;
}

export const useSelectedTag = create<SelectedTagState>()((set) => ({
  selectedTag: '',
  setSelectedTag: (value) => set(() => ({ selectedTag: value })),
}));
