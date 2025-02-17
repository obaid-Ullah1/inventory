import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { FcDocument } from "react-icons/fc";

export default function PatientRecordProfile() {
  const Navigator = useNavigate();

  const handleMedicalRecord = () => {
    Navigator("/MedicalRecord");
  };

  return (
    <div className="p-2 sm:p-5 bg-gray-50 min-h-screen">
      <Navbar />

      <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] px-5">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-y-10 min-[525px]:justify-start gap-x-5 py-10">
          <div>
            <FaUserCircle className="text-gray-300 text-[7rem]" />
          </div>
          <div className="space-y-3 text-center min-[525px]:text-start">
            <h2 className="text-[1.5rem] font-medium px-7">Obiadullah</h2>

            <div className="flex py-5">
              <div className="border-r text-center border-gray-300 px-7">
                <p className="text-sm ">Gender</p>
                <p className="pt-3 text-base sm:text-[1.3rem] font-semibold">
                  Male
                </p>
              </div>

              <div className="border-r text-center border-gray-300 px-10">
                <p className="text-sm ">Age</p>
                <p className="pt-3 text-base sm:text-[1.3rem] font-semibold">
                  22
                </p>
              </div>

              <div className="border-r text-center border-gray-300 px-10">
                <p className="text-sm ">Weight</p>
                <p className="pt-3 text-base sm:text-[1.3rem] font-semibold">
                  65kg
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 flex flex-wrap lg:flex-nowrap gap-y-10 justify-between lg:gap-x-20 ">
          <div className="max-w-[100%] lg:max-w-[50%] w-full">
            <div className="border-b border-gray-300">
              <h3 className="text-[1.2rem] font-medium">Appointment History</h3>
              <div className="py-10">
                <div className="text-[#1AADAE] flex gap-x-10 items-center p-5">
                  <h1 className="w-32">10 Jan 2024</h1>
                  <div className="border-b-2 border-[#1AADAE] w-full"></div>
                </div>
                <div className="px-6 space-y-3">
                  <div className="flex gap-x-5 items-center">
                    <FaCircle className="text-gray-300" />
                    <p className="text-sm text-gray-400">8:30 AM - 9:00 AM</p>
                  </div>
                  <div className="text-sm font-medium space-y-2">
                    <p>Stone Condition Analysis</p>
                    <p className="text-gray-400">Dr. Haseeb Khan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[100%] lg:max-w-[50%] w-full">
            <h3 className="text-[1.2rem] font-medium">Medical History</h3>

            <div
              className="flex justify-between items-center shadow-sm shadow-gray-300 rounded-lg p-4 my-4 bg-white cursor-pointer hover:bg-slate-100"
              onClick={handleMedicalRecord}
            >
              <FcDocument className="text-[2rem]" />
              <p className="text-sm font-medium">Report Session-01</p>
              <p className="text-sm font-medium">23-Sep-2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
