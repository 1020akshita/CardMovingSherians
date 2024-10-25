// import React, { useState } from 'react'
// import { FaRegFileAlt } from "react-icons/fa";
// import { MdOutlineFileDownload } from "react-icons/md";
// import { motion } from "framer-motion"

// const Card = () => {
//     const data = [
//         { des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, optio.", fileSize: "0.4mb", close: true },
//         { des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ", fileSize: "1mb", close: true },
//         { des: "Lorem ipsum dolor, sit amet consectetur.", fileSize: "0.5mb", close: true },
//         { des: "Lorem ipsum dolor, sit amet.", fileSize: "0.7mb", close: true },
//     ]

//     // const [val, setVal] = useState([data])
//     return (
//         <>
//             <motion.div drag className='bg-zinc-800 px-8 py-10 w-60 h-72 rounded-[30px] text-white relative overflow-hidden'>
//                 <h1 ><FaRegFileAlt /></h1>
//                 <p className='text-xs  mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
//                 <div className='absolute  bottom-0  w-full  left-0   '>
//                     <div className='flex justify-between items-center px-8  py-3 mb-3'>
//                         <h1>.4mb</h1>
//                         <h1 className='text-xl bg-zinc-500 text-white rounded-full p-1 '><MdOutlineFileDownload /></h1>
//                     </div>
//                     <div className='w-full py-4 flex justify-center items-center bg-green-400'> download now</div>
//                 </div>
//             </motion.div>
//         </>
//     )
// }

// export default Card

import React, { useState } from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({refrence}) => {
  const data = [
    { des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, optio.", fileSize: "0.4mb", close: true },
    { des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ", fileSize: "1mb", close: true },
    { des: "Lorem ipsum dolor, sit amet consectetur.", fileSize: "0.5mb", close: true },
    { des: "Lorem ipsum dolor, sit amet.", fileSize: "0.7mb", close: true },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((file, index) => (
          <motion.div
            drag
            dragConstraints={refrence}
            whileDrag={{ scale: 1.1 }}
            key={index}
            className='bg-zinc-800 px-8 py-10 w-60 h-72 rounded-[30px] text-white relative overflow-hidden'
          >
            <h1><FaRegFileAlt /></h1>
            <p className='text-xs mt-5'>{file.des}</p>
            <div className='absolute bottom-0 w-full left-0'>
              <div className='flex justify-between items-center px-8 py-3 mb-3'>
                <h1>{file.fileSize}</h1>
                <h1 className='text-xl bg-zinc-500 text-white rounded-full p-1'>
                  <MdOutlineFileDownload />
                </h1>
              </div>
              <div className='w-full py-4 flex justify-center items-center bg-green-400 cursor-pointer'>
                Download Now
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Card;

