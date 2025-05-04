import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";

export default function NotificationPopUp({ notificationTab, notificationRef, lowStock = [] }) {
  return (
    <div
      ref={notificationRef}
      className={`absolute bg-[#fbfafa] max-w-[18rem] md:max-w-[22rem] w-full rounded-lg shadow-sm shadow-gray-400 right-0 top-20 min-h-[20rem] transition-all duration-300 transform z-20 ${
        notificationTab
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      {/* Header */}
      <div className="pt-5 bg-white rounded-t-lg overflow-hidden">
        <div className="flex items-center gap-x-2 px-5 text-blue-600">
          <MdNotificationsActive className="text-[1.7rem]" />
          <h3 className="text-base sm:text-[1.2rem] font-semibold">Notifications</h3>
        </div>
        <hr className="mt-4 border-gray-300" />
      </div>

      {/* Notification List */}
      <div className="overflow-y-auto max-h-[20rem]">
        {lowStock.length === 0 ? (
          <div className="text-center text-gray-400 py-10">
            <p className="text-sm">No low stock alerts</p>
          </div>
        ) : (
          lowStock.map((item, index) => (
            <div
              key={index}
              className="px-4 py-4 bg-white flex items-start gap-x-3 border-t border-b border-gray-200"
            >
              <FaBoxOpen className="text-[1.8rem] text-red-500 flex-shrink-0 mt-1" />
              <div className="flex-grow text-sm text-gray-700">
                <p>
                  <strong>{item.name}</strong> is running low. Only <strong>{item.quantity}</strong>{" "}
                  left in stock.
                </p>
                <p className="text-xs text-gray-400 mt-1">Check and restock soon.</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
