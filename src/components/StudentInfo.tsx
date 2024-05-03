import axios from "axios";
import courseModel from "../types/types";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

export default function StudentInfo() {
  const [enrolled, setEnrolled] = useState<courseModel[]>();
  //This is a just for a false mark as completed functionality, it should actually fetch from the db if the student has marked the course as completed or not
  const [completed, setCompleted] = useState<boolean[]>([false, false, false]);
  const getRandomItems = (array: courseModel[], maxItems: number) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, Math.min(maxItems, shuffledArray.length));
  };
  useEffect(() => {
    async function init() {
      const enrolled = await axios.get("https://course.up.railway.app/courses");
      setEnrolled(getRandomItems(enrolled.data, 3));
    }
    init();
  }, []);

  return (
    <div className="py-10 px-20">
      <h2 className="text-white font-bold underline text-3xl">
        Matthew Miller
      </h2>
      <h2 className="text-white pt-5 text-xl">Courses Enrolled:</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 my-5  mx-5">
        {enrolled?.map((course: courseModel, index: number) => (
          <span key={course?.id as React.Key}>
            <CourseCard course={course} />
            <button
              onClick={() => {
                const updatedCompleted = [...completed];
                updatedCompleted[index] = !updatedCompleted[index];
                setCompleted(updatedCompleted);
              }}
              type="button"
              className={`mt-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-3xl transition-colors duration-300 hover:text-white ${completed[index]? "bg-green-500 hover:bg-green-700":"bg-gray-500 hover:bg-gray-700"}`}
            >
              {!completed[index]?"Mark as completed":"Completed!"}
            </button>

            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                Progress
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">
                45%
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: "45%" }}
              >
                {" "}
                45%
              </div>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
}
