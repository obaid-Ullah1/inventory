import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";

export default function AppointmentRows({appointment}) {

    
  const statusStyles = {
    Scheduled: "bg-green-200 text-green-500",
    Completed: "bg-[#1AADAE] text-[#1AADAE]",
    Cancelled: "bg-red-200 text-red-500",
  }

  return (
    <>
    <tr className="bg-white rounded-lg my-10 border-b border-gray-300 font-medium text-gray-500">
      <td className="px-4 text-center text-sm 2xl:px-8 py-5">
        {appointment.No}
      </td>
      <td className="px-4 text-center text-sm 2xl:px-8 py-5 whitespace-nowrap">
        {appointment.Name}
      </td>
      <td className="px-4 text-center text-sm 2xl:px-8 py-5 whitespace-nowrap">
        {appointment.visit}
      </td>
      <td className="px-4 text-center text-sm 2xl:px-8 py-5 whitespace-nowrap">
        {appointment.AppointmentDate}
      </td>
      <td className="px-4 text-center text-sm 2xl:px-8 py-5 whitespace-nowrap">
        {appointment.AppointmentTime}
      </td>
      <td className="px-4 text-center text-sm 2xl:px-8 py-5">
      <span className={`px-4 py-1 rounded-full text-xs font-medium ${statusStyles[appointment.Status] || "bg-gray-200 text-gray-500"}`}>
    {appointment.Status}
  </span>
      </td>
      <td className="px-4 flex justify-center text-sm 2xl:px-8 py-5">
        <span className="px-4 rounded-full hover:bg-gray-200">
          <HiDotsHorizontal className="text-[#1AADAE] text-[1.8rem] cursor-pointer" />
        </span>
      </td>
    </tr>
    </>
  )
}
