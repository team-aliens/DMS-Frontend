import { create } from 'zustand';

interface EditVoteState {
  editingSurveyId: string | null;
  setEditingSurveyId: (id: string | null) => void;
}

export const useEditVoteStore = create<EditVoteState>()((set) => ({
  editingSurveyId: null,
  setEditingSurveyId: (id) =>
    set(() => ({
      editingSurveyId: id,
    })),
}));
