import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import DropDown from "../Components/DropDown";
import AppointmentRows from "../Components/AppointmentRows";

export default function Appointment() {
  const [tab, setTab] = useState(1);

  const scheduled = [
    {
      No: "1",
      Name: "Obaidullah",
      visit: "Report Review",
      AppointmentDate: "24 Nov 2024",
      AppointmentTime: "10:00 AM",
      Status: "Scheduled",
    },
    {
      No: "2",
      Name: "Asadullah",
      visit: "CheckUp",
      AppointmentDate: "24 Nov 2024",
      AppointmentTime: "10:00 AM",
      Status: "Scheduled",
    },
  ];

  const completed = [
    {
      No: "1",
      Name: "Wajahat",
      visit: "CheckUp",
      AppointmentDate: "24 Nov 2024",
      AppointmentTime: "10:00 AM",
      Status: "Completed",
    },
  ];

  const cancelled = [
    {
      No: "1",
      Name: "Dildar",
      visit: "Report",
      AppointmentDate: "24 Nov 2024",
      AppointmentTime: "11:00 AM",
      Status: "Cancelled",
    },
  ];

  return (
    <div className="p-2 sm:p-5 bg-gray-50 min-h-screen">
      <Navbar label="Appointments" />

      <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] px-2 lg:px-5">
        <div className="py-10">
          <div className="flex justify-between py-10">
            <h3 className="font-medium">Result:</h3>
            <DropDown setTab={setTab} />
          </div>

          <div className="rounded-lg overflow-x-auto custom-scrollbar w-full hide-scrollbar">
            <table className="w-full">
              <thead className="bg-[#1AADAE] w-full">
                <tr className="text-white">
                  <th
                    className="px-4 text-center text-sm 2xl:px-8 py-5 font-medium"
                    scope="col"
                  >
                    S.No
                  </th>
                  <th
                    className="px-4 text-center text-sm 2xl:px-8 py-5 font-medium"
                    scope="col"
                  >
                    Name
                  </th>
                  <th
                    className="px-4 text-center text-sm 2xl:px-8 py-5 font-medium"
                    scope="col"
                  >
                    Visit
                  </th>
                  <th
                    className="px-4 text-center text-sm 2xl:px-8 py-5 font-medium whitespace-nowrap"
                    scope="col"
                  >
                    Appointment Date
                  </th>
                  <th
                    className="px-4 text-center w-[20%] text-sm 2xl:px-8 py-5 font-medium whitespace-nowrap"
                    scope="col"
                  >
                    Appointment Time
                  </th>
                  <th
                    className="px-4 text-center text-sm 2xl:px-8 py-5 font-medium"
                    scope="col"
                  >
                    Status
                  </th>
                  <th
                    className="px-4 text-center text-sm 2xl:px-8 py-5 font-medium"
                    scope="col"
                  >
                    Options
                  </th>
                </tr>
              </thead>
              <tbody className={`${tab === 1 ? "" : "hidden"}`}>
                {scheduled.map((appointment) => (
                 <AppointmentRows key={appointment.No} appointment={appointment}/>
                ))}
              </tbody>
              <tbody className={`${tab === 2 ? "" : "hidden"}`}>
                {completed.map((appointment) => (
                  <AppointmentRows key={appointment.No} appointment={appointment}/>
                ))}
              </tbody>
              <tbody className={`${tab === 3 ? "" : "hidden"}`}>
                {cancelled.map((appointment) => (
                  <AppointmentRows key={appointment.No} appointment={appointment}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
