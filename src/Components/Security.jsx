import React from 'react'
import { CiLock } from "react-icons/ci";
import PasswordField from "./PasswordField"
import CustomBtn from './Button1';

export default function Security() {
  return (
    <div className='py-4'>
        
        <div className='flex gap-x-5 items-center'>
        <CiLock className='text-[2rem]'/>    
        <h2 className='text-[1.4rem] font-medium'>Reset Password</h2>
        </div>
        <p className='font-medium text-gray-400 text-[0.8rem] leading-6 py-5'>To Change your Password, fill in the fields below. Your Password must contain at least 8 characters,<br/> It must at least include one upper case letter and one lower case letter <br/> one number and one special character</p>

        <form action="/" className='max-w-[30rem] w-full my-3'>
        
        <label htmlFor="Cpassword" className='text-[0.8rem] font-medium'>Current Password</label>
        <PasswordField position="right-5" width="max-w-[30rem]"/>
        <br />
        <label htmlFor="Npassword" className='text-[0.8rem] font-medium'>New Password</label>
        <PasswordField position="right-5" width="max-w-[30rem]"/>
        <br />
        <label htmlFor="Confirmpassword" className='text-[0.8rem] font-medium'>Confirm Password</label>
        <PasswordField position="right-5" width="max-w-[30rem]"/>
        <div className='text-center min-[440px]:text-start'>
        <CustomBtn label="Save Changes" width="max-w-full min-[440px]:max-w-[10rem] my-8" height="h-[2.6rem]"/>
        </div>
        </form>
  

      
    </div>
  )
}
