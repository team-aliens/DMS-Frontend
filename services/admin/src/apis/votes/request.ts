export interface CreateVoteRequest {
  topic_name: string;
  description: string;
  vote_type: string;
  start_time: string;
  end_time: string;
}
<<<<<<< HEAD
=======
export interface CreateVoteOptionRequest {
  voting_topic_id: string;
  option_name: string;
}
>>>>>>> 2e9129e (feat: 투표 항목 api 연동)
