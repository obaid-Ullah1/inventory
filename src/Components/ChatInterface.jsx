import React from 'react';
import { TiAttachment } from "react-icons/ti";
import { IoMdSend } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

export default function ChatInterface({ Chats, selectedChat }) {
  return (
    <div className="hidden lg:block text-white max-w-[80%] w-full relative">
      
      {/* Chat Header */}
      <div className="flex items-center min-h-[70px] gap-x-4 border-l border-[#1AADAE] px-8 bg-[#1AADAE] rounded-tr-lg">
        <div className="relative">
          <FaUserCircle className="text-[2.7rem] text-white" />
          <div className="w-3 h-3 bg-green-500 rounded-full border border-white absolute bottom-0 right-0"></div>
        </div>
        <div>
          <h4 className="text-white font-medium">{Chats[selectedChat]?.SenderName}</h4>
          <p className="text-xs text-gray-200">Active</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="my-5 overflow-auto custom-scrollbar">
        
        <div className="flex items-start px-5 py-3 gap-x-3 hover:bg-[#1AADAE]/10 font-roboto">
          <FaUserCircle className="text-[2.2rem] text-[#1AADAE]" />
          <div className="space-y-1 w-full">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm text-black">ObaidUllah</h3>
              <span className="text-[0.62rem] text-gray-500">01:20 PM</span>
            </div>
            <p className="text-gray-600 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos, dolor eaque blanditiis!
            </p>
          </div>
        </div>

        <div className="flex items-start px-5 py-3 gap-x-3 hover:bg-[#1AADAE]/10 font-roboto">
          <FaUserCircle className="text-[2.2rem] text-[#1AADAE]" />
          <div className="space-y-1 w-full">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sm text-black">Dr David</h3>
              <span className="text-[0.62rem] text-gray-500">01:25 PM</span>
            </div>
            <p className="text-gray-600 text-xs">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

      </div>

      {/* Chat Input */}
      <div className="absolute bottom-5 w-full">
        <div className="bg-[#F0F0F0] rounded-xl flex items-center gap-x-3 xl:gap-x-5 px-5 mx-5">
          <input
            type="text"
            name="Message"
            placeholder="Message"
            className="bg-transparent outline-none text-black flex-1 py-4"
          />
          <TiAttachment className="text-[#1AADAE] text-[1.4rem] xl:text-[1.7rem] cursor-pointer" />
          <IoMdSend className="text-[#1AADAE] text-[1.2rem] xl:text-[1.5rem] cursor-pointer" />
        </div>
      </div>

    </div>
  );
}
