import React , { useRef} from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";

export default function UploadButton({height}) {

    const UploadClickRef = useRef(null);

    const handleUpload = () => {
      UploadClickRef.current.click();
    };

  return (
    <div>
            <button
             className={`bg-[#1AADAE] ${height} rounded-lg text-white text-sm font-medium w-[8rem] flex items-center justify-evenly hover:bg-[#128C82]`}

              onClick={handleUpload}
            >
              <FaCloudUploadAlt />
              Upload File
            </button>

            <input type="file" ref={UploadClickRef} className="hidden" />
          </div>
  )
}
