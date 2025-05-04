import React from 'react';

export default function ToggleSwitch() {
  return (
    <label className="w-10 h-5 relative cursor-pointer block">
      <input type="checkbox" className="sr-only peer" />
      <div className="bg-gray-200 peer-checked:bg-blue-500 w-full h-full rounded-full transition-all duration-300"></div>
      <span className="w-4 h-4 bg-white rounded-full absolute top-[2px] left-1 transition-all duration-300 peer-checked:left-5 shadow-md"></span>
    </label>
  );
}
