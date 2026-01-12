import React from 'react'
import { FaBookOpen } from "react-icons/fa6";
const Filterproduct = ({category,onClick}) => {
  return (
    <>
    <div onClick={onClick} >
       <div className='text-2xl md:text-4xl flex p-3  md:p-5 w-16 h-16  md:w-20 md:h-20 bg-yellow-500 rounded-full 
       cursor-pointer items-center justify-center hover:bg-yellow-600 mr-2'>
              <FaBookOpen />            
        </div>
        <p className='font-medium my-1 text-xs  md:text-base text-start'>{category}</p>
        </div>
       
          
        
        
    
    </>
  )
}

export default Filterproduct
