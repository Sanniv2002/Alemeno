import Navbar from "../components/Navbar";
import CourseInfo from "../components/CourseInfo";
import { useParams } from "react-router-dom";

export default function Course() {
  let id = useParams().id;
  return (
    <div className="bg-gray-600 h-screen overflow-y-auto">
      <Navbar isActive={false} />
      <CourseInfo param={id!} />
    </div>
  );
}
