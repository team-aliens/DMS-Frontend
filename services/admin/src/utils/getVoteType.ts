export const getVoteType = (booleanArr: boolean[]) => {
  if (booleanArr[0]) return 'STUDENT_VOTE';
  if (booleanArr[1]) return 'APPROVAL_VOTE';
  if (booleanArr[2]) return 'OPTION_VOTE';
};
