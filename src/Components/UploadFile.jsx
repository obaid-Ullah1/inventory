import React, {useRef, useState} from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";

export default function UploadFile() {
      
    const fileInputRef = useRef(null)
    const [fileName, setFileName] = useState("No file chosen")

    const HandleFileInputClick = () => {
      
        fileInputRef.current.click()

    }


  return (
    <div className='flex gap-x-4'>
      <button className='flex items-center gap-x-3 bg-[#1AADAE] text-white font-medium px-4 py-1 text-[0.7rem]  rounded-md'
      onClick={HandleFileInputClick}
      type='button'>
        <FaCloudUploadAlt/>
        Choose File
      </button>

      <span className='text-[0.7rem] text-gray-400 '>{fileName}</span>

      <input type="file" 
      ref={fileInputRef}
      className='hidden' 
      onChange={(e) => {

        const file = e.target.files[0]

        if(file){
            setFileName(file.name)
        }
        else{
          setFileName("No file chosen")
        }

      }}

      />


    </div>
  )
}
