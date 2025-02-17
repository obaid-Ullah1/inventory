import React from 'react'

export default function Button1({label, width, click, version, height}) {

  const base = "bg-[#1AADAE] text-white hover:bg-[#159C9D]";
  const varient = "bg-transparent border border-[#1AADAE] text-[#1AADAE] hover:bg-[#1AADAE] hover:text-white";
  
  
  return (
    <>
    <button className={`font-medium rounded-md ${width} ${height} w-full text-sm  ${version === "varient" ? varient : base } `} onClick={click}>{label}</button>
    </>
  )
}
