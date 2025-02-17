import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import CustomBtn from '../Components/Button1'
import { IoCloudUpload } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { FaFileImage } from "react-icons/fa";

export default function Scanner() {
  const [files, setFiles] = useState([]);

  const navigate = useNavigate()

  const UploadClickRef = useRef(null);

  const handleUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files).map((files) => ({
      name: files.name,
      date: new Date().toLocaleDateString(),
    }));

    setFiles([...files, ...uploadedFiles]);
  };


  const handleRemoveFile = (index) => {
       
    const updatedFiles = files.filter((_,i) => i !== index)
       
    setFiles(updatedFiles)

  }

  const handleAnalyze = () => {

     navigate('/Report')

  }

  return (
    <div className="p-2 sm:p-5 bg-gray-50 min-h-screen">

   <Navbar label="Scanner" />

      <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] px-2 lg:px-5">

        <div className="py-10">
          <h3 className="text-[1rem] xl:text-[1.2rem] font-semibold">Upload CT scans</h3>
          <p className="text-gray-400 text-sm py-2">
            Upload a clear image of the CT scan of your kidney and we will
            analyze it for you
          </p>

          <div className="flex flex-col gap-5 xl:gap-x-10 lg:flex-row items-center lg:gap-y-0 lg:items-start lg:justify-around py-7 ">

            <div className="flex flex-col flex-1 justify-center items-center gap-y-5 h-[20rem] border-dashed border-2 border-gray-300 py-10 max-w-[100%] lg:max-w-[50%] w-full rounded-md ">
              <IoCloudUpload className="text-[4rem] xl:text-[5rem] text-gray-200" />
              <h4 className="text-[1.1rem] font-medium">Drag and drop here</h4>

              <div>
                <button
                  className="bg-blue-500 py-2 rounded-lg text-white font-medium w-[8rem] text-sm flex items-center justify-evenly hover:bg-blue-700"
                  onClick={() => UploadClickRef.current.click()}
                >
                  <FaCloudUploadAlt />
                  Upload File
                </button>

                <input
                  type="file"
                  ref={UploadClickRef}
                  className="hidden"
                  multiple
                  onChange={handleUpload}
                />
              </div>
            </div>

            <div className="max-w-[100%] lg:max-w-[50%] w-full min-h-[14rem] flex-1">
              <h3 className="text-[1rem] xl:text-[1.2rem] font-medium pb-5">Uploaded Files</h3>
              <div className="flex justify-center lg:justify-start space-y-5 max-h-[15rem] overflow-y-auto custom-scrollbar p-2 ">
                {files.length > 0 ? (
                files.map((UpFiles, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center flex-1 bg-white rounded-xl px-5 py-3 max-w-[32rem] shadow-sm shadow-gray-400 my-5"
                  >
                    <div className="flex gap-x-5 items-center">
                      <FaFileAlt className="text-blue-600 text-[1.6rem] xl:text-[1.8rem]" />
                      <div className="space-y-1">
                        <h4 className="text-blue-500 font-medium text-sm xl:text-base">
                          {UpFiles.name}
                        </h4>
                        <p className="text-gray-400 text-xs xl:text-sm">{UpFiles.date}</p>
                      </div>
                    </div>

                    <div className="flex gap-x-5">
                      <GrStatusGood className="text-green-500 text-[1.4rem] xl:text-[1.5rem]" />
                      <RxCross2 className="text-gray-400 pointer cursor-pointer text-[1.4rem] xl:text-[1.5rem] hover:text-black" onClick={() => handleRemoveFile(index)} />
                    </div>
                  </div>
                ))):(  

               <div className="flex justify-center md:justify-start items-center w-full gap-x-3 py-10">  
                 <FaFileImage className="text-[1.8rem] text-gray-200"/>
                 <h2 className="text-[1.4rem] font-semibold text-gray-200">No File Uploaded</h2>
                </div>
                )}
              </div>
              <div className="text-center lg:text-start">
                <CustomBtn label="Analyze" width="max-w-[33rem]" click={handleAnalyze} height="h-[2.7rem]"/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
