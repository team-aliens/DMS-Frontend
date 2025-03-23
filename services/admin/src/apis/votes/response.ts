export interface VoteListResponse {
  voting_topics: {
    id: string;
    topic_name: string;
    description: string;
    start_time: string;
    end_time: string;
    vote_type: string;
  }[];
}

export interface ExcludedStudentResponse {
  excluded_students: {
    student_id: string;
    gcn: string;
    name: string;
  };
}
