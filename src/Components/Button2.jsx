import React from 'react'

export default function Button2({label,width,height,fontsize,version,click}) {

  const base = "bg-[#1AADAE] text-white hover:bg-[#159C9D]";
  const varient = "bg-transparent border border-[#1AADAE] text-[#1AADAE] hover:bg-[#1AADAE] hover:text-white";  

  return (
    <>
      <button className={`${fontsize} ${width} ${height} rounded-md font-medium ${version === "varient" ? varient : base } `} onClick={click}>{label}</button>
    </>
  )
}
