import React from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Homecard = ({name,image,category,price,loading}) => {
const userData=useSelector(state=>state.user)
const navigate=useNavigate();
  const handleonclick=()=>{
      if(!userData._id || !userData.email){
      toast.error('Please login')
      navigate('/login')    
    }
   }
  return (
    <div className="bg-white p-4 sm:p-3 rounded-lg h-72 sm:h-76 md:h-80 min-w-[140px] sm:min-w-[160px] md:min-w-[180px] 
    lg:min-w-[200px] max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px] overflow-hidden shadow-md hover:shadow-lg space-y-2"
     onClick={() => handleonclick()}>
     {
        name ? (
        <>
    <div className='w-full h-32 sm:h-36 md:h-45 flex justify-center items-center overflow-hidden bg-gray-100 rounded-md mb-3 mt-2'>
       <img src={image} className='h-full w-full object-contain' alt={name}/>
     </div>
     <h3 className='mt-2 sm:mt-3 font-semibold text-slate-600 capitalize text-xs sm:text-sm line-clamp-2 overflow-hidden whitespace-nowrap text-ellipsis pr-7'>{name}</h3>
    <p className='mt-1 text-slate-700 font-medium text-[10px] sm:text-xs'>{category}</p>
    <p className="mt-1 font-bold text-xs sm:text-sm"><span className="text-red-600">₹</span>{price}</p> 
    </>
    ):
    <div className='flex justify-center items-center h-full'>
    <p className='text-xs sm:text-sm'>{loading}</p>
    </div>
     }
    </div>
  )
}


export default Homecard
