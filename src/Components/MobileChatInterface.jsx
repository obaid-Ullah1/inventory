import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { TiAttachment } from "react-icons/ti";
import { IoMdSend } from "react-icons/io";

export default function MobileChatInterface({Chats, selectedChat, setSelectedChat}) {
  return (
    <div className="lg:hidden text-white w-full relative block shadow-sm shadow-gray-300 mt-14 lg:mt-0">
            <div className="flex items-center min-h-[70px] gap-x-5 border-l border-white px-3 lg:px-8 bg-[#1AADAE] rounded-t-lg lg:rounded-tr-lg">

              <IoArrowBack className="text-[1.5rem] sm:text-[1.7rem]" onClick={() => setSelectedChat(null)} />
              <div className="relative">
                <FaUserCircle className=" text-[2.2rem] sm:text-[2.7rem]" />
                <div className="w-3 h-3 bg-green-500 rounded-full border border-black absolute bottom-0 right-0"></div>
              </div>
              <div>
                <h4>{Chats[selectedChat]?.SenderName}</h4>
                <p className="text-xs font-medium">Active</p>
              </div>
            </div>

            <div className="my-5 overflow-auto custom-scrollbar h-[75vh]">
              {/* Chat Messages */}
              <div className="flex items-start px-5 py-3 gap-x-3 hover:bg-gray-100 font-roboto">
              <FaUserCircle className="text-[2.2rem] text-[#1AADAE]" />

                <div className="space-y-1 w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-sm text-black">ObaidUllah</h3>
                    <span className="text-[0.62rem] text-black">01:20 PM</span>
                  </div>
                  <p className="text-gray-400 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos, dolor eaque blanditiis!
                  </p>
                </div>
              </div>
              <div className="flex items-start px-5 py-3 gap-x-3 hover:bg-gray-100 font-roboto">
                <FaUserCircle className="text-[2.2rem] text-blue-200" />
                <div className="space-y-1 w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-sm text-black">Dr David</h3>
                    <span className="text-[0.62rem] text-black">01:25 PM</span>
                  </div>
                  <p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
            {/* Chat Input */}
            <div className="absolute bottom-5 w-full">
              <div className="bg-gray-100 rounded-xl flex items-center gap-x-3 xl:gap-x-5 px-5  mx-2 sm:mx-5">
                <input type="text" name="Message" placeholder="Message" className="bg-transparent outline-none text-sm sm:text-base text-black flex-1 py-4" />
                <TiAttachment className="text-[#3d3d3d] text-[1.4rem] xl:text-[1.7rem] cursor-pointer" />
                <IoMdSend className="text-[#1AADAE] text-[1.2rem] xl:text-[1.5rem] cursor-pointer" />

              </div>
            </div>
          </div>

  )
}
