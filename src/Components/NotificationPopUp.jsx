import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdNotificationsActive } from "react-icons/md";

export default function NotificationPopUp({notificationTab, notificationRef}) {
  const [tab, setTab] = useState(1);

  const All = [
    {
      Name: "Saqib",
      heading: "sent an appointment request",
    },
  ];

  const Important = [
    {
      important: "Upcoming appointment",
      Name: " with Wajahat Imran",
    },
  ];

  const unread = [
    {
      Name: "Hameed",
      heading: "has shared a report with you",
    },
  ];


  const handleTabs = (e) =>{
      
    setTab(e)

  }

  return (
    <div
    ref={notificationRef}
      className={`absolute bg-[#fbfafa] max-w-[18rem] md:max-w-[22rem] w-full rounded-lg shadow-sm shadow-gray-400 right-0 top-20 min-h-[32rem] sm:min-h-[36rem] transition-all duration-300 transform z-20 ${
        notificationTab
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      <div className="pt-5 bg-white rounded-t-lg overflow-hidden">
      <div className="flex items-center gap-x-2 px-5 text-[#1AADAE]">

        <MdNotificationsActive className="text-[1.7rem] "/>
        <h3 className="text-base sm:text-[1.2rem] font-semibold">Notifications</h3>
        </div>
        <ul className="flex justify-center mt-10 font-medium text-gray-400 min-h-[2rem] text-[0.8rem] sm:text-[0.9rem]">
          
        <li className={`cursor-pointer px-10 hover:text-black ${ tab === 1 ? "border-b-2 border-[#1AADAE]" : "hover:border-b-2 border-[#1AADAE]"}`} onClick={() => handleTabs(1)}>

            All
          </li>
          <li className={`cursor-pointer px-5 hover:text-black ${ tab === 2 ? "border-b-2 border-[#1AADAE]" : "hover:border-b-2 border-[#1AADAE]"}`} onClick={() => handleTabs(2)}>
            Important
          </li>
          <li className={`cursor-pointer px-10  hover:text-black ${ tab === 3 ? "border-b-2 border-[#1AADAE]" : "hover:border-b-2 border-[#1AADAE]"}`} onClick={() => handleTabs(3)}>
            Unread
          </li>
        </ul>
      </div>
      
      {tab === 1 && <div >
      {All.map((notification, index) => (
        <div
          key={index}
          className="px-2 py-3 md:p-5 bg-white gap-x-2 flex items-center justify-between border-t border-b border-gray-300"
        >
          <div className="flex gap-x-3">
            <FaUserCircle className="text-[2.5rem] text-[#1AADAE] flex-shrink-0" />
            <p className="text-[0.8rem] flex-grow">
              <b> {notification.Name} </b>
              {notification.heading}
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-[0.8rem] text-gray-400">1h</p>
            <HiDotsHorizontal className="text-[1.2rem]" />
          </div>
        </div>
      ))}
    </div>
 }

  {tab === 2 && 
    <div >
      {Important.map((notification, index) => (
        <div
          key={index}
          className="px-2 py-3 md:p-5 bg-white flex items-center justify-between border-t border-b border-gray-300"
        >
          <div className="flex gap-x-3 ">
            <FaUserCircle className="text-[2.5rem] text-[#1AADAE] flex-shrink-0" />
            <p className="text-[0.8rem] flex-grow">
              <b> {notification.important} </b>
              {notification.Name}
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-[0.8rem] text-gray-400">1h</p>
            <HiDotsHorizontal className="text-[1.2rem]" />
          </div>
        </div>
      ))}
    </div>
}

  {tab === 3 && 
    <div >
      {unread.map((notification, index) => (
        <div
          key={index}
          className="px-2 py-3 md:p-5 bg-white flex items-center justify-between border-t border-b border-gray-300"
        >
          <div className="flex gap-x-3">
            <FaUserCircle className="text-[2.5rem] text-blue-500 flex-shrink-0" />
            <p className="text-[0.8rem] flex-grow">
              <b> {notification.Name} </b>
              {notification.heading}
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-[0.8rem] text-gray-400">1h</p>
            <HiDotsHorizontal className="text-[1.2rem]" />
          </div>
        </div>
      ))}
    </div>
    }

    </div>
  );
}
