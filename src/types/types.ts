export default interface courseModel {
  id: Number;
  name: String;
  instructor: String;
  description: String;
  enrollmentStatus: String;
  thumbnail: String;
  duration: String;
  schedule: String;
  location: String;
  likes: Number;
  prerequisites: String[];
  syllabus: { week: String; topic: String; content: String }[];
  students: {
    id: Number;
    name: String;
    email: String;
    completed: boolean;
  }[];
}