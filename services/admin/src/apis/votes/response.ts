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

export interface VoteResultResponse {
  voting_topic_id: string;
  options: {
    id: string;
    name: string;
    votes: number;
  }[];
}

export interface ExcludedStudentResponse {
  excluded_students: {
    id: string;
    gcn: string;
    name: string;
  }[];
}

interface VoteOption {
  id: string;
  voting_option_name: string;
}

export interface VoteOptionListResponse {
  voting_options: VoteOption[];
}

interface VoteResult {
  id: string;
  name: string;
  votes: number;
  classNumber: number | null;
}

export interface VoteResultResponse {
  votes: VoteResult[];
  voting_topic_name: string;
}
