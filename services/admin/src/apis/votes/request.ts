export interface CreateVoteRequest {
  topic_name: string;
  description: string;
  vote_type: string;
  start_time: string;
  end_time: string;
}
export interface CreateVoteOptionRequest {
  voting_topic_id: string;
  option_name: string;
}

export interface Student {
  id: string;
  student_gcn: string;
  name: string;
  profile_image_url: string;
}
