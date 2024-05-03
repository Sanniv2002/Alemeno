import { useEffect, useState } from "react";
import courseModel from "../types/types";
import axios from "axios";

export default function CourseInfo(props: { param: string }) {
  const [course, setCourse] = useState<courseModel>();
  const [open, setOpen] = useState<boolean>(false);
  const [forceRender, setForceRender] = useState<boolean>(false)

  useEffect(() => {
    async function init() {
      const course = await axios.get(
        `https://course.up.railway.app/courses/${props.param}`
      );
      setCourse(course.data[0]);
    }
    init();
  }, [forceRender]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 m-10">
      <img
        width="500px"
        className="rounded-xl"
        //src should be assigned to "course.thumbnail"
        src={course?.thumbnail as string}
      />
      <div className="text-white mt-5 sm:mt-0">
        <div className="flex">
          <h2 className="text-bold text-2xl underline mb-4">{course?.name}</h2>
          <div className="py-2 px-4 flex gap-1">
            <svg
            className="cursor-pointer hover:shadow-2xl"
            onClick={async () => {
                await axios.put(`https://course.up.railway.app/courses/like?id=${props.param}`)
                setForceRender(!forceRender)
            }}
              width="20px"
              height="20px"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9752 12.1852L20.2361 12.0574L20.9752 12.1852ZM20.2696 16.265L19.5306 16.1371L20.2696 16.265ZM6.93777 20.4771L6.19056 20.5417L6.93777 20.4771ZM6.12561 11.0844L6.87282 11.0198L6.12561 11.0844ZM13.995 5.22142L14.7351 5.34269V5.34269L13.995 5.22142ZM13.3323 9.26598L14.0724 9.38725V9.38725L13.3323 9.26598ZM6.69814 9.67749L6.20855 9.10933H6.20855L6.69814 9.67749ZM8.13688 8.43769L8.62647 9.00585H8.62647L8.13688 8.43769ZM10.5181 4.78374L9.79208 4.59542L10.5181 4.78374ZM10.9938 2.94989L11.7197 3.13821V3.13821L10.9938 2.94989ZM12.6676 2.06435L12.4382 2.77841L12.4382 2.77841L12.6676 2.06435ZM12.8126 2.11093L13.042 1.39687L13.042 1.39687L12.8126 2.11093ZM9.86195 6.46262L10.5235 6.81599V6.81599L9.86195 6.46262ZM13.9047 3.24752L13.1787 3.43584V3.43584L13.9047 3.24752ZM11.6742 2.13239L11.3486 1.45675V1.45675L11.6742 2.13239ZM3.9716 21.4707L3.22439 21.5353L3.9716 21.4707ZM3 10.2342L3.74721 10.1696C3.71261 9.76945 3.36893 9.46758 2.96767 9.4849C2.5664 9.50221 2.25 9.83256 2.25 10.2342H3ZM20.2361 12.0574L19.5306 16.1371L21.0087 16.3928L21.7142 12.313L20.2361 12.0574ZM13.245 21.25H8.59635V22.75H13.245V21.25ZM7.68498 20.4125L6.87282 11.0198L5.3784 11.149L6.19056 20.5417L7.68498 20.4125ZM19.5306 16.1371C19.0238 19.0677 16.3813 21.25 13.245 21.25V22.75C17.0712 22.75 20.3708 20.081 21.0087 16.3928L19.5306 16.1371ZM13.2548 5.10015L12.5921 9.14472L14.0724 9.38725L14.7351 5.34269L13.2548 5.10015ZM7.18773 10.2456L8.62647 9.00585L7.64729 7.86954L6.20855 9.10933L7.18773 10.2456ZM11.244 4.97206L11.7197 3.13821L10.2678 2.76157L9.79208 4.59542L11.244 4.97206ZM12.4382 2.77841L12.5832 2.82498L13.042 1.39687L12.897 1.3503L12.4382 2.77841ZM10.5235 6.81599C10.8354 6.23198 11.0777 5.61339 11.244 4.97206L9.79208 4.59542C9.65573 5.12107 9.45699 5.62893 9.20042 6.10924L10.5235 6.81599ZM12.5832 2.82498C12.8896 2.92342 13.1072 3.16009 13.1787 3.43584L14.6307 3.05921C14.4252 2.26719 13.819 1.64648 13.042 1.39687L12.5832 2.82498ZM11.7197 3.13821C11.7548 3.0032 11.8523 2.87913 11.9998 2.80804L11.3486 1.45675C10.8166 1.71309 10.417 2.18627 10.2678 2.76157L11.7197 3.13821ZM11.9998 2.80804C12.1345 2.74311 12.2931 2.73181 12.4382 2.77841L12.897 1.3503C12.3873 1.18655 11.8312 1.2242 11.3486 1.45675L11.9998 2.80804ZM14.1537 10.9842H19.3348V9.4842H14.1537V10.9842ZM4.71881 21.4061L3.74721 10.1696L2.25279 10.2988L3.22439 21.5353L4.71881 21.4061ZM3.75 21.5127V10.2342H2.25V21.5127H3.75ZM3.22439 21.5353C3.2112 21.3828 3.33146 21.25 3.48671 21.25V22.75C4.21268 22.75 4.78122 22.1279 4.71881 21.4061L3.22439 21.5353ZM14.7351 5.34269C14.8596 4.58256 14.8241 3.80477 14.6307 3.0592L13.1787 3.43584C13.3197 3.97923 13.3456 4.54613 13.2548 5.10016L14.7351 5.34269ZM8.59635 21.25C8.12244 21.25 7.72601 20.887 7.68498 20.4125L6.19056 20.5417C6.29852 21.7902 7.3427 22.75 8.59635 22.75V21.25ZM8.62647 9.00585C9.30632 8.42 10.0392 7.72267 10.5235 6.81599L9.20042 6.10924C8.85404 6.75767 8.3025 7.30493 7.64729 7.86954L8.62647 9.00585ZM21.7142 12.313C21.9695 10.8365 20.8341 9.4842 19.3348 9.4842V10.9842C19.9014 10.9842 20.3332 11.4959 20.2361 12.0574L21.7142 12.313ZM3.48671 21.25C3.63292 21.25 3.75 21.3684 3.75 21.5127H2.25C2.25 22.1953 2.80289 22.75 3.48671 22.75V21.25ZM12.5921 9.14471C12.4344 10.1076 13.1766 10.9842 14.1537 10.9842V9.4842C14.1038 9.4842 14.0639 9.43901 14.0724 9.38725L12.5921 9.14471ZM6.87282 11.0198C6.8474 10.7258 6.96475 10.4378 7.18773 10.2456L6.20855 9.10933C5.62022 9.61631 5.31149 10.3753 5.3784 11.149L6.87282 11.0198Z"
                fill="#1C274C"
              />
            </svg>
            <h2 className="text-white">{course?.likes.toString()}</h2>
          </div>
        </div>

        <h2 className="text-md text-gray-100 my-0.5">
          Instructor:{" "}
          <span className="text-gray-200">{course?.instructor}</span>
        </h2>
        <h2 className="text-md text-gray-100 my-0.5">
          Description:{" "}
          <span className="text-gray-200">{course?.description}</span>
        </h2>
        <h2 className="text-gray-100 text-md">
          Enrollment Status:{" "}
          {course?.enrollmentStatus === "Open" ? (
            <span className="text-green-500">Open</span>
          ) : (
            <span className="text-red-500">Closed</span>
          )}
        </h2>
        <h2 className="text-md text-gray-100 my-0.5">
          Duration: <span className="text-gray-200">{course?.duration}</span>
        </h2>
        <h2 className="text-md text-gray-100 my-0.5">
          Schedule: <span className="text-gray-200">{course?.schedule}</span>
        </h2>
        <h2 className="text-md text-gray-100 my-0.5">
          Location: <span className="text-gray-200">{course?.location}</span>
        </h2>
        <h2 className="text-md text-gray-100 my-0.5">
          Prerequisites:{" "}
          {course?.prerequisites.map((prerequisite, index) => (
            <span key={index} className="text-gray-200">
              {prerequisite}
              {index !== course.prerequisites.length - 1 && ", "}
            </span>
          ))}
        </h2>
        <button
          onClick={() => setOpen(!open)}
          className={`p-2 rounded-md hover:bg-gray-400 transition-colors duration-200 my-0.5 ${
            open ? "bg-gray-400" : "bg-gray-500 "
          }`}
        >
          Syllabus
        </button>
        {open ? (
          <div className="p-2 my-1 rounded-md bg-gray-500">
            {course?.syllabus.map((topic, index) => (
              <div key={index}>
                <p>Week: {topic.week}</p>
                <p className="pl-5 text-gray-200">Topic: {topic.topic}</p>
                <p className="pl-5 text-gray-200">Content: {topic.content}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
