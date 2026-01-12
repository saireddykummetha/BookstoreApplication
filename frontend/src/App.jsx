import { useEffect } from 'react'
import React from 'react'
import './App.css'
import Header from './Component/Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useDispatch} from 'react-redux'
import { setDataproduct } from './redux/productSlice'
import SummaryApi from './Common'


function App() {
  const dispatch=useDispatch()
  // const productdata=useSelector((state)=>state.product)
 

   const fecthdetails=async()=>{
       const res = await fetch(SummaryApi.AllBooks.url,{
      method : SummaryApi.AllBooks.method,
       // credentials : 'include'
    })
    const resdata=await res.json()
      console.log(resdata)
      dispatch(setDataproduct(resdata))
   }

  useEffect(()=>{
      fecthdetails();
    },[])
    // console.log(productdata)
  return (
    <>
    <Toaster/>
     <Header/>
     <main className='pt-14 md:pt-16 bg-slate-100 min-h-[calc(100vh)]'>
      <Outlet/>
     </main>
    </>
  )
}

export default App
