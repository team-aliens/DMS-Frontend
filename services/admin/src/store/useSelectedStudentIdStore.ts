import { create } from 'zustand';

interface SelectedStudentIdState {
  selectedStudentId: string[];
  resetStudentId: () => void;
  appendStudentId: (studentId: string) => void;
  deleteStudentId: (studentId: string) => void;
}

export const useSelectedStudentIdStore = create<SelectedStudentIdState>()(
  (set) => ({
    selectedStudentId: [],
    resetStudentId: () =>
      set(() => ({
        selectedStudentId: [],
      })),
    appendStudentId: (studentId) =>
      set((state) => ({
        selectedStudentId: [...state.selectedStudentId, studentId],
      })),
    deleteStudentId: (studentId) =>
      set((state) => ({
        selectedStudentId: state.selectedStudentId.filter(
          (element) => element !== studentId,
        ),
      })),
  }),
);
