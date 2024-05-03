import { useEffect } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from 'recoil'
import CourseCard from "./CourseCard";
import { coursesAtom, queryAtom  } from '../store/atoms/courses'
import courseModel from "../types/types";

export default function Courses() {  
  const [courses, setCourses] = useRecoilState(coursesAtom)
  const query = useRecoilValue(queryAtom)

  const searchCourses = (courses: courseModel[], query: String) => {
    if (!query) {
        return courses;
    }
    return courses.filter(course => {
        const courseNameMatch = course.name.toLowerCase().includes(query.toLowerCase());
        const instructorMatch = course.instructor.toLowerCase().includes(query.toLowerCase());
        return courseNameMatch || instructorMatch;
    });
};


  useEffect(() => {
    async function init() {
      const allCourses= await axios.get(
        "https://course.up.railway.app/courses"
      );
      setCourses(allCourses.data);
    }
    init();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 my-5  mx-5">
      {(searchCourses(courses, query))?.map((course: courseModel) => <span key={course?.id as React.Key}><CourseCard course={course} /></span>)}
    </div>
  );
}
