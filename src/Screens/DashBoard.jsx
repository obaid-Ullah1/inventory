import React from "react";
import Navbar from "../Components/Navbar";
import { FaUserInjured } from "react-icons/fa6";
import { FaRegCalendarTimes, FaCalendarAlt } from "react-icons/fa";
import { BsCalendar2CheckFill } from "react-icons/bs";

export default function DashBoard() {
  const status_data = [
    {
      icon: <FaRegCalendarTimes />,
      label: "Cancelled Appointments",
      Number: 2,
    },
    {
      icon: <FaUserInjured />,
      label: "Total Patients",
      Number: 30,
    },
    {
      icon: <FaCalendarAlt />,
      label: "Pending Appointments",
      Number: 5,
    },
    {
      icon: <BsCalendar2CheckFill />,
      label: "Total Consultations",
      Number: 20,
    },
  ];

  const disease_scanners = [
    {
      title: "Brain Tumor Detection",
      price: "Rs 1000",
      oldPrice: "Rs 2400",
      image: "/brainTumor.png", // Image from public folder
    },
    {
      title: "Pneumonia Detection",
      price: "Rs 1000",
      oldPrice: "Rs 2400",
      image: "/pneumonia.png", // Image from public folder
    },
    {
      title: "Heart Disease Detection",
      price: "Rs 1000",
      oldPrice: "Rs 2400",
      image: "/heartDisease.png", // Image from public folder
    },
  ];

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <Navbar label="DashBoard" />

      <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] px-4 lg:px-6 font-poppins">
        {/* Dashboard Welcome Section */}
        <div className="my-7 p-6 bg-gradient-to-r from-[#128C82] to-[#1AADAE] text-white space-y-4 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold">Welcome Dr. Haseeb Khan</h2>
          <p className="font-medium text-sm">Your patients are waiting for you. Let's get started!</p>
        </div>

        {/* Quick Status */}
        <h2 className="text-xl font-semibold">Quick Status</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
          {status_data.map((data, index) => (
            <div key={index} className="bg-white flex items-center gap-4 shadow-md p-4 rounded-xl transform hover:scale-105 transition duration-300">
              <div className="text-[#1AADAE] text-3xl">{data.icon}</div>
              <div className="text-center">
                <p className="text-gray-500 font-medium text-sm">{data.label}</p>
                <h1 className="text-2xl font-semibold text-[#1AADAE]">{data.Number}</h1>
              </div>
            </div>
          ))}
        </div>

        {/* Disease Scanners */}
        <h2 className="text-xl font-semibold mt-10">Disease Scanners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
          {disease_scanners.map((scanner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 p-4">
              
              {/* Image Section */}
              <div className="w-full h-48 flex justify-center">
                <img src={scanner.image} alt={scanner.title} className="w-full h-full object-cover rounded-lg" />
              </div>

              {/* Text & Button Section */}
              <div className="text-left mt-4 px-2">
                <h3 className="text-lg font-semibold">{scanner.title}</h3>
                <p className="text-[#1AADAE] font-semibold mt-2">
                  {scanner.price} <span className="line-through text-gray-400 text-sm">{scanner.oldPrice}</span>
                </p>
              </div>

              {/* Button Section (Placed Outside Image) */}
              <div className="mt-4 px-2">
                <button className="w-full bg-[#1AADAE] text-white px-6 py-2 rounded-full hover:bg-[#128C82] transition">
                  Scan Now
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
