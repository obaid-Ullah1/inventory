import React from 'react'
import CustomBtn from './Button1'
import ToggleSwitch from './ToggleSwitch'

export default function Notification_Settings() {

    const settings = [

        {
           heading:"Appointment Request",
           description: "Allow notification for Appointment Requests" 
        }
        ,
        {
            heading:"Text Notification",
            description: "Allow notification of New Messages" 
         }
         ,
         {
            heading:"Appointment Reminder",
            description: "Receive notification of Upcomming Appointments" 
         }
         ,
         {
            heading:"Urgent Observation",
            description: "Patient Request an urgent observation" 
         }

    ]


  return (
    <div className='py-6 '>

        <h1 className='text-[1.3rem] font-medium'>Notification Settings</h1>

         <div className='flex flex-wrap mt-10 mb-5 gap-y-5 md:gap-10'>

           {settings.map((content) => (
           <div className='space-y-2 p-3 sm:p-5 bg-white shadow-sm shadow-gray-300 rounded-lg max-w-[30rem] w-full flex items-center justify-between'>
            <div className='space-y-2'>
            <h3 className='text-[1rem] font-medium'>{content.heading}</h3>
            <p className='text-gray-400 text-[0.8rem]'>{content.description}</p>
            </div>
            <div>
            <ToggleSwitch/>
            </div>
           </div>
           ))}
        </div>
         
         <CustomBtn label="Save Changes" width="max-w-full min-[440px]:max-w-[10rem] my-8" height="h-[2.6rem]"/>

      
    </div>
  )
}
