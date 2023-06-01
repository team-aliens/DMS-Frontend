import { create } from 'zustand';

interface DeleteTagIdState {
  deleteTagId: string;
  setDeleteTagId: (val: string) => void;
}
export const useDeleteTagIdStore = create<DeleteTagIdState>((set) => ({
  deleteTagId: '',
  setDeleteTagId: (value) => set(() => ({ deleteTagId: value })),
}));
