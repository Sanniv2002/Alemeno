import Navbar from "../components/Navbar";
import Courses from "../components/Courses";

export default function Home(){
    return <div className="bg-gray-600 h-screen overflow-y-auto">
    <Navbar isActive={true} />
    <Courses />
  </div>
}