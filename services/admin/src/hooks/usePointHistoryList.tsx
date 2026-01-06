import {
  AllPointsOptionType,
  StudentPointHistoryType,
} from '@/apis/points/response';
import { usePointHistoryListStore } from '@/store/usePointHistoryListStore';

export const usePointHistoryList = () => {
  const {
    recentlySelectedStudent,
    pointHistoryList,
    selectStudent,
    addStudent,
    removeStudent,
    addPointToSelectedStudents,
    reset,
  } = usePointHistoryListStore();

  const updateRecentlyStudentInfo = (info: {
    studentId: string;
    name: string;
    gcn: string;
  }) => {
    selectStudent(info);
  };

  const addStudentPointHistory = (history: StudentPointHistoryType[]) => {
    addStudent(history || []);
  };

  const addPointOptionToStudents = (option: AllPointsOptionType) => {
    addPointToSelectedStudents(option);
  };

  const resetStudentLists = () => {
    reset();
  };

  const removeStudentId = (id: string) => {
    removeStudent(id);
  };

  return {
    state: { recentlySelectedStudent, pointHistoryList },
    updateRecentlyStudentInfo,
    addStudentPointHistory,
    addPointOptionToStudents,
    resetStudentLists,
    pointHistoryList,
    removeStudentId,
  };
};
