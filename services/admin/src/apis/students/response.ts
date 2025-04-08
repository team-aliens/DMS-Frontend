export interface Student {
  id: string;
  student_gcn: string;
  name: string;
  profile_image_url: string;
}

export interface GetModelStudentsResponse {
  students: Student[];
}
