import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaUserCircle } from "react-icons/fa";
import ChatInterface from "../Components/ChatInterface";
import MobileChatInterface from "../Components/MobileChatInterface";
import { motion } from "framer-motion"; // Import Framer Motion

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChat = (index) => {
    setSelectedChat(index);
  };

  const Chats = [
    { SenderName: "Muhammad Atif", Messages: "give me Areeba", Time: "3:14 PM", Status: "unread" },
    { SenderName: "Haseeb Khan", Messages: "Doc give me drugs", Time: "12:14 PM", Status: "read" },
    { SenderName: "Huzaifa Dilshad", Messages: "tschuss bis spater", Time: "11:14 AM", Status: "unread" },
    { SenderName: "Obaid Ullah", Messages: "Cigret to lagwa", Time: "2:14 PM", Status: "unread" },
    { SenderName: "Warisha", Messages: "Doc give me drugs", Time: "12:14 PM", Status: "read" },
    { SenderName: "Hashir", Messages: "How about using car filters", Time: "11:14 AM", Status: "unread" },
    { SenderName: "Touseef", Messages: "My kidney hurts", Time: "2:14 PM", Status: "unread" },
  ];

  return (
    <div className="p-2 sm:p-5 bg-gray-50 min-h-screen">
      <Navbar label="Messages" />

      <div className="ml-0 md:ml-[15rem] lg:ml-[17rem] xl:ml-[19rem] px-2 lg:px-5">

        {/* Recent Messages List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mt-12 flex shadow-md shadow-gray-300 rounded-b-lg h-[80vh] ${
            selectedChat !== null ? "hidden lg:flex" : "block"
          }`}
        >
          <div className="lg:max-w-[23rem] w-full border-r border-gray-200 font-poppins">
            <div className="bg-[#1AADAE] text-white rounded-t-lg lg:rounded-t-none lg:rounded-tl-lg px-5 justify-start sm:justify-center min-h-[70px] flex items-center">
              <h2 className="text-base xl:text-[1.2rem] font-medium font-poppins">Recent Messages</h2>
            </div>

            <div className="flex flex-col gap-y-2 overflow-auto max-h-[69vh] custom-scrollbar py-2">
              {Chats.map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className={`flex items-center px-5 py-4 sm:py-5 gap-x-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedChat === index
                      ? "bg-[#1AADAE]/10 border-l-4 border-[#1AADAE] shadow-md scale-105"
                      : "hover:bg-[#1AADAE]/10 hover:shadow-lg"
                  }`}
                  onClick={() => handleChat(index)}
                >
                  <FaUserCircle
                    className={`text-[3rem] transition-all ${
                      selectedChat === index ? "text-[#1AADAE]" : "text-[#1AADAE]"
                    }`}
                  />
                  <div className="flex justify-between w-full">
                    <div>
                      <h3 className="font-medium text-[0.9rem] sm:text-base">{text.SenderName}</h3>
                      <p className="text-gray-500 text-xs">{text.Messages}</p>
                    </div>
                    <span className="text-[0.7rem] text-gray-400">{text.Time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <ChatInterface Chats={Chats} selectedChat={selectedChat} />
        </motion.div>

        {/* Chat Interface for Small Screens */}
        {selectedChat !== null && (
          <MobileChatInterface Chats={Chats} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
        )}
      </div>
    </div>
  );
}
