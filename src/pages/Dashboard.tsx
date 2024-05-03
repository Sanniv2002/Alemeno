import Navbar from "../components/Navbar";
import StudentInfo from "../components/StudentInfo";

export default function Dashboard(){
    return <div className="bg-gray-600 h-screen overflow-y-auto">
    <Navbar isActive={false} />
    <StudentInfo />
  </div>
}