import React from 'react'
import Navbar from '../Components/Navbar'
import { FaImage } from "react-icons/fa";
import CustomBtn from '../Components/Button1'

export default function Report({title}) {


  return (
    <div className="p-2 sm:p-5 bg-gray-50 min-h-screen">

    <Navbar label={title} />

    <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] px-2 sm:px-5 pt-10">

      <h3 className='text-[1.2rem] font-medium underline'>Scan Result</h3>
      <p className='py-3 text-sm text-gray-400 leading-6'>Report generated of patient based on provided pictures of CT scan this report is about the current condition of kidney and have details about stone.<br/>Do consult with doctor after getting the report. </p>
      <div className='flex justify-center py-5'>
        <FaImage className='text-[14rem] text-gray-300'/>
      </div>
      <div>
        <h4 className='text-[1.1rem] underline font-medium'>Analysis Result</h4>
        <div className='p-3 sm:p-5 my-5 bg-white shadow-sm shadow-gray-300 rounded-lg'>
          <p className='text-sm'><b>Scan Id:</b> 789823</p>
          <div className='flex flex-wrap min-[510px]:flex-nowrap gap-x-10 lg:gap-x-20'>
          <div className='flex justify-between items-center max-w-[100%] min-[510px]:max-w-[50%] w-full text-sm py-5'>
            <ul className='space-y-3 font-medium'>
              <li>Stone Presence:</li>
              <li>Number of Stone:</li>
              <li>Stone Size:</li>
            </ul>

            <ul className='space-y-3 text-red-500 text-end'>
              <li>Yes</li>
              <li>01</li>
              <li className='whitespace-nowrap'>Approx 4mm</li>
            </ul>
          </div>

          <div className='flex justify-between items-center max-w-[100%] min-[510px]:max-w-[50%] w-full text-sm py-5'>
            <ul className='space-y-3 font-medium'>
            <li>Stone Loaction:</li>
              <li>Stone Shape</li>
              <li>Date:</li>
            </ul>

            <ul className='space-y-3 text-red-500 text-end'>
            <li>Oval</li>
              <li>Right Kidney</li>
              <li>24/10/2024</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
     
     <div>
       <h4 className='text-[1.1rem] underline font-medium'>Doctor's Report</h4>

       <div className='p-5 sm:p-10 my-5 bg-white shadow-sm shadow-gray-300 rounded-lg'>
           
           <div className='text-sm flex items-center gap-x-10'>
             <ul className='font-medium space-y-3'>
              <li>Doctor's Name:</li>
              <li>Date:</li>
             </ul>
             <ul className='space-y-3'>
              <li>Dr. Anayatullah</li>
              <li>24/10/2024</li>
             </ul>
           </div>
            
            <div className='space-y-5 py-10'>
              <div className='space-y-3'>
              <h5 className='font-medium text-blue-500'>Critical Observation:</h5>
              <input type="text" className='p-2 text-sm border border-gray-300 rounded-lg max-w-[40rem] w-full' placeholder='Increase in Stone Size etc'/>
              </div>
              <div  className='space-y-3'>
               <h5 className='font-medium text-blue-500'>Doctors Notes:</h5>
              <textarea rows="5" className='border border-gray-300 rounded-lg p-2 max-w-[40rem] w-full'></textarea>
              </div>
              <div  className='space-y-3'>
              <h5 className='font-medium text-blue-500'>Recomendations:</h5>
              <textarea rows="3" className='border border-gray-300 rounded-lg p-2 max-w-[40rem] w-full'></textarea>
              </div>
            </div>
             
            <CustomBtn label="Save Report" width="max-w-full sm:max-w-[10rem]" height="h-[2.3rem]"/> 
       </div>

     </div>

    </div>
      
    </div>
  )
}
