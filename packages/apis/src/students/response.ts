export interface Student {
  id: string;
  gcn: string;
  name: string;
  profile_image_url: string;
}

export interface GetModelStudentsResponse {
  students: Student[];
}
