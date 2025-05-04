import React from 'react'

export default function Button2({ label, width, height, fontsize, version, click }) {
  const base = "bg-blue-600 text-white hover:bg-blue-700";
  const varient = "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white";

  return (
    <button
      className={`${fontsize} ${width} ${height} rounded-md font-medium ${version === "varient" ? varient : base}`}
      onClick={click}
    >
      {label}
    </button>
  );
}
