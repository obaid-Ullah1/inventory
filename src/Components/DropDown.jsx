import React, { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";

export default function DropDown({ setTab }) {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  const SelectedTab = (e) => {
    setTab(e);
    setDropDown(false);
  };

  return (
    <div className="relative w-[9rem] lg:w-[12rem]">
      <button
        className="flex justify-between bg-[#1AADAE] text-sm rounded-lg px-5 py-2 font-medium text-white w-full items-center shadow-md hover:bg-[#128C82] transition-all duration-300"
        onClick={toggleDropDown}
      >
        Select
        {dropDown ? <FaSortUp /> : <FaSortDown />}
      </button>

      <ul
        className={`absolute bg-[#1AADAE] w-full top-12 left-0 font-medium text-sm text-white cursor-pointer rounded-md text-start transition-all duration-500 overflow-hidden shadow-md ${
          dropDown ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <li className="hover:bg-[#128C82] px-5 py-3 transition-all duration-300">Upcoming</li>
        <li className="hover:bg-[#128C82] px-5 py-3 transition-all duration-300" onClick={() => SelectedTab(1)}>Scheduled</li>
        <li className="hover:bg-[#128C82] px-5 py-3 transition-all duration-300" onClick={() => SelectedTab(2)}>Completed</li>
        <li className="hover:bg-[#128C82] px-5 py-3 transition-all duration-300" onClick={() => SelectedTab(3)}>Cancelled</li>
        <li className="hover:bg-[#128C82] px-5 py-3 transition-all duration-300">Requests</li>
      </ul>
    </div>
  );
}
