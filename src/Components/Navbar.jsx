import React, { useState, useEffect, useRef } from 'react';
import { GoBellFill } from "react-icons/go";
import { RiMenu2Fill } from "react-icons/ri";
import NotificationPopUp from './NotificationPopUp';
import SideMenu from './SideMenu';

export default function Navbar({ label }) {
  const [NotificationTab, setNotificationTab] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const bellIconRef = useRef(null);
  const notificationRef = useRef(null);

  const toggleSideBar = (event) => {
    setSideBar(event);
  };

  const toggleNotification = () => {
    setNotificationTab(!NotificationTab);
  };

  const handleOutsideClick = (event) => {
    if (
      bellIconRef.current &&
      !bellIconRef.current.contains(event.target) &&
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setNotificationTab(false); // Close popup only if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <SideMenu sideBar={sideBar} toggleSideBar={toggleSideBar} />

      <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] flex justify-between items-center relative px-2 lg:px-5 py-5">
        
        {/* Sidebar Toggle Icon */}
        <RiMenu2Fill
          className="text-[1.4rem] sm:text-[1.7rem] block md:hidden hover:text-[#1AADAE] cursor-pointer transition-all"
          onClick={() => toggleSideBar(true)}
        />

        {/* Navbar Title */}
        <h1 className="text-[1.3rem] sm:text-[1.5rem] lg:text-[1.7rem] font-bold">{label}</h1>

        {/* Notification Bell */}
        <div
          className="rounded-xl p-2 bg-white inline-block shadow-sm shadow-gray-400 cursor-pointer transition-all hover:bg-[#1AADAE]/10"
          onClick={toggleNotification}
          ref={bellIconRef}
        >
          <GoBellFill className="text-[1.3rem] lg:text-[1.5rem] text-[#1AADAE] hover:text-[#159C9D]" />
        </div>

        {/* Notification PopUp */}
        <NotificationPopUp notificationTab={NotificationTab} notificationRef={notificationRef} />
      </div>
    </>
  );
}
