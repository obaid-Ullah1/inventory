import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomBtn from '../Components/Button1';
import { MdDashboard } from "react-icons/md";
import { IoMdQrScanner } from "react-icons/io";
import { FaClipboard } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BsClockFill } from "react-icons/bs";
import { IoChatboxSharp } from "react-icons/io5";
import Logo2 from "../Assets/UroVision_logo2.png";
import { IoLogOutSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function SideMenu({ sideBar, toggleSideBar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const MenuRef = useRef(null);

  const [screenDim, setScreenDim] = useState(false);

  const handleScreenDim = () => setScreenDim(true);
  const handleCancelBtn = () => setScreenDim(false);
  const handleLogout = () => navigate("/");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (MenuRef.current && !MenuRef.current.contains(event.target)) {
        toggleSideBar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggleSideBar]);

  const MenuItems = useMemo(() => [
    { id: 0, icon: <MdDashboard />, label: "Packed paper Rim", path: "/DashBoard" },
    { id: 1, icon: <BsClockFill />, label: "Rolled Paper Rim", path: "/" },
    { id: 2, icon: <IoMdQrScanner />, label: "Packed Card Rims", path: "/Scanner" },
    { id: 3, icon: <IoChatboxSharp />, label: "Title Cards", path: "/Messages" },
    { id: 4, icon: <FaClipboard />, label: "Final Goods", path: "/PatientRecord" },
    { id: 5, icon: <IoMdSettings />, label: "Settings", path: "/Settings" }
  ], []);

  return (
    <>
      {/* Logout Modal */}
      <div className={`${screenDim ? "fixed inset-0 bg-[rgba(45,43,43,0.61)] z-20 flex justify-center items-center opacity-100 transition-opacity duration-500" : "hidden opacity-0"}`}>
        <div className="mx-5 sm:max-w-[30rem] w-full bg-white px-5 py-7 rounded-lg shadow-lg shadow-gray-500 transform transition-all duration-500 scale-95 hover:scale-105">
          <div className="space-y-5 text-center">
            <h1 className="text-[1.5rem] font-semibold">LogOut</h1>
            <h3 className="text-sm">Are you sure you want to Logout?</h3>
          </div>
          <div className="flex gap-x-5 pt-5 justify-center">
            <CustomBtn label="Cancel" version="varient" width="max-w-[8rem]" click={handleCancelBtn} height="h-[2.5rem]" />
            <CustomBtn label="Yes" click={handleLogout} width="max-w-[8rem]" height="h-[2.5rem]" />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div ref={MenuRef} className={`bg-gradient-to-b flex flex-col justify-between from-[#2563EB] to-[#1D4ED8] fixed top-0 left-0 md:top-5 md:left-5 z-10 rounded-none md:rounded-lg h-[100vh] md:h-[95%] w-[16rem] md:w-[14rem] lg:w-[16rem] xl:w-[18rem] transition-transform duration-500 ease-in-out transform ${sideBar ? "translate-x-0 opacity-100 scale-100" : "-translate-x-full opacity-100 scale-100"} md:translate-x-0`}>
        
        <div>
          <div className="flex justify-end md:hidden p-3">
            <RxCross2 className="text-white text-[1.4rem] cursor-pointer transition-transform duration-200 hover:scale-125" onClick={() => toggleSideBar(false)} />
          </div>
          <div className="py-0 md:py-4 flex justify-center">
            <img src={Logo2} alt="UroVision" className="w-[13rem] md:w-[17rem] transition-transform duration-500 hover:scale-110" />
          </div>
          <div className="border-t-2 border-white mx-6"></div>

          {/* Menu Items */}
          <ul className="text-white font-medium mx-3 space-y-6 text-[0.9rem] lg:text-[1rem] py-10">
            {MenuItems.map((item, index) => (
              <Link
                to={item.path}
                key={item.id}
                className={`flex items-center px-6 gap-x-3 rounded-full cursor-pointer py-2 transition-all duration-500 transform ${
                  location.pathname === item.path
                    ? "bg-white text-[#2563EB] scale-110 shadow-lg" // Active
                    : "hover:text-[#2563EB] hover:bg-white hover:scale-105" // Hover
                }`}
              >
                <div className="text-[1.2rem] lg:text-[1.4rem]">{item.icon}</div>
                {item.label}
              </Link>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <div
          className="flex mx-3 text-[0.9rem] lg:text-[1rem] mb-14 sm:mb-6 items-center font-medium text-white px-6 gap-x-3 rounded-full hover:text-[#1D4ED8] hover:bg-white py-2 cursor-pointer transform transition-all duration-500 hover:scale-110"
          onClick={handleScreenDim}
        >
          <IoLogOutSharp className="text-[1.2rem] lg:text-[1.4rem]" />
          Logout
        </div>
      </div>
    </>
  );
}
