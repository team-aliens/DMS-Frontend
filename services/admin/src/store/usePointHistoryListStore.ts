import { create } from 'zustand';
import {
  AllPointsOptionType,
  StudentPointHistoryType,
} from '@/apis/points/response';

export interface StudentSummary {
  studentId: string;
  name: string;
  gcn: string;
}

export interface PointHistoryList extends StudentSummary {
  list: StudentPointHistoryType[];
}

interface PointHistoryListState {
  recentlySelectedStudent: StudentSummary;
  pointHistoryList: PointHistoryList[];
  selectStudent: (info: StudentSummary) => void;
  addStudent: (pointHistory: StudentPointHistoryType[]) => void;
  removeStudent: (studentId: string) => void;
  addPointToSelectedStudents: (point: AllPointsOptionType) => void;
  reset: () => void;
}

const initialStudent: StudentSummary = {
  name: '',
  gcn: '',
  studentId: '',
};

export const usePointHistoryListStore = create<PointHistoryListState>()(
  (set) => ({
    recentlySelectedStudent: initialStudent,
    pointHistoryList: [],
    selectStudent: (info) =>
      set(() => ({
        recentlySelectedStudent: info,
      })),
    addStudent: (pointHistory) =>
      set((state) => ({
        pointHistoryList: state.pointHistoryList
          .filter(
            (i) => i.studentId !== state.recentlySelectedStudent.studentId,
          )
          .concat({
            list: pointHistory,
            ...state.recentlySelectedStudent,
          }),
      })),
    removeStudent: (studentId) =>
      set((state) => ({
        pointHistoryList: state.pointHistoryList.filter(
          (list) => list.studentId !== studentId,
        ),
      })),
    addPointToSelectedStudents: (point) =>
      set((state) => ({
        pointHistoryList: state.pointHistoryList.map((history) => ({
          ...history,
          list: [
            {
              ...point,
              point_history_id: point.point_option_id,
            },
            ...history.list,
          ],
        })),
      })),
    reset: () =>
      set(() => ({
        pointHistoryList: [],
      })),
  }),
);
