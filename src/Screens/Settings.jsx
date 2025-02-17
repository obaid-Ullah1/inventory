import React ,{useState} from 'react'
import Navbar from '../Components/Navbar'
import ProfileSetting from '../Components/ProfileSetting'
import Security from '../Components/Security'
import Notification from '../Components/Notification_Settings'

export default function Settings() {
     
  const [tab, setTab] = useState(1)

  const handleTabChange = (value) => {
    setTab(value)
  }

  return (
    <div className='p-2 sm:p-5 bg-gray-50 min-h-screen'>

      <Navbar label="Settings" />

      <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] px-2 lg:px-5">

        <div className='flex justify-between sm:justify-start sm:gap-x-20 my-10 border-b border-gray-300'>

          {/* Profile Tab */}
          <div className='group cursor-pointer' onClick={() => handleTabChange(1)}>
            <h3 className={`text-sm sm:text-base ${tab === 1 ? 'text-[#1AADAE] font-medium' : 'text-gray-300 group-hover:text-[#128C82] font-medium'}`}>
              Profile
            </h3>
            <div className={`${tab === 1 ? 'border-[#1AADAE] border-b-4' : 'border-transparent group-hover:border-[#128C82] border-b-4'} rounded-xl`}></div>
          </div>

          {/* Security Tab */}
          <div className='group cursor-pointer' onClick={() => handleTabChange(2)}>
            <h3 className={`text-sm sm:text-base ${tab === 2 ? 'text-[#1AADAE] font-medium' : 'text-gray-300 group-hover:text-[#128C82] font-medium'}`}>
              Security
            </h3>
            <div className={`${tab === 2 ? 'border-[#1AADAE] border-b-4' : 'border-transparent group-hover:border-[#128C82] border-b-4'} rounded-xl`}></div>
          </div>

          {/* Notification Tab */}
          <div className='group cursor-pointer' onClick={() => handleTabChange(3)}>
            <h3 className={`text-sm sm:text-base ${tab === 3 ? 'text-[#1AADAE] font-medium' : 'text-gray-300 group-hover:text-[#128C82] font-medium'}`}>
              Notification
            </h3>
            <div className={`${tab === 3 ? 'border-[#1AADAE] border-b-4' : 'border-transparent group-hover:border-[#128C82] border-b-4'} rounded-xl`}></div>
          </div>

        </div>

        {tab === 1 && <ProfileSetting />}
        {tab === 2 && <Security />}
        {tab === 3 && <Notification />} 

      </div>
      
    </div> 
  )
}
