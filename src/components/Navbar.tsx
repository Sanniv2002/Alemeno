import { useRecoilValue, useSetRecoilState } from "recoil";
import Avatar from "../assets/profile-picture-5.jpg"
import { queryAtom } from "../store/atoms/courses";
import { useNavigate } from "react-router-dom";

export default function Navbar(props: { isActive: boolean }) {
    const setSearch = useSetRecoilState(queryAtom)
    const search = useRecoilValue(queryAtom)
    const navigate = useNavigate()
  return (
    <div className="bg-gray-900 flex justify-between px-5">
      <h2 onClick={() => navigate("/")} className="text-white text-2xl font-bold my-5 cursor-pointer">Courses</h2>
      <div className="flex my-5 gap-2">
        {props.isActive ? (
          <input
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
            className="pl-2 w-28 sm:w-52 bg-gray-500 rounded-md text-white hover:bg-gray-600 transition-colors duration-300 focus:bg-gray-600"
            placeholder="search"
          />
        ) : null}

        <img
        onClick={() =>  navigate("/dashboard")}
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer hover:ring-gray-700 transition-colors duration-300"
          src={Avatar}
          alt="Bordered avatar"
        ></img>
      </div>
    </div>
  );
}
