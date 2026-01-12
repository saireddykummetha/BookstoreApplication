import React, { useEffect, useState } from 'react'
import Homecard from './Homecard'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cardfeatures from './Cardfeatures'
import toast from 'react-hot-toast'
import Filterproduct from './Filterproduct';

const Home = () => {
  const productData = useSelector((state) => state.product.productList)
  const searchQuery = useSelector((state) => state.product.searchQuery)
  const userData = useSelector((state) => state.user)
  const navigate = useNavigate()

  const isLoggedIn = userData?._id && userData?.email

  const homeproductcartlist = productData.slice(1, 50)
  const homeproductcartlistcartlist = productData.filter(
    el => el.category === 'Storybook'
  )

  const loadingArray = new Array(10).fill(null)
  const loadingArrayFeature = new Array(20).fill(null)

  const categoryList = [...new Set(productData.map(el => el.category))]
  const [datafilter, setdatafilter] = useState([])

  useEffect(() => {
    if (searchQuery) {
      const filtered = productData.filter(el =>
        el.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (el.description &&
          el.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      setdatafilter(filtered)
    } else {
      setdatafilter(productData)
    }
  }, [productData, searchQuery])

  const handlefilterproduct = (category) => {
    if (!isLoggedIn) {
      toast.error('Please login to filter books')
      navigate('/login')
      return
    }
    const filter = productData.filter(
      el => el.category.toLowerCase() === category.toLowerCase()
    )
    setdatafilter(filter)
  }

  return (
    <div className="p-2 sm:p-3 md:p-4">

      {/* AFTER LOGIN CONTENT  */}
      {isLoggedIn && (
        <>
          {/* Search Results */}
          {searchQuery && (
            <div className='mb-4 sm:mb-6'>
              <h2 className='font-bold text-base sm:text-lg md:text-xl px-2 sm:px-5 text-slate-800 mb-3 sm:mb-4'>
                Search Results for "{searchQuery}" ({datafilter.length} books)
              </h2>

              <div className='flex flex-wrap justify-center gap-3 py-5'>
                {
                  datafilter.map(el => (
                    <Cardfeatures
                      key={el._id}
                      id={el._id}
                      image={el.image}
                      name={el.name}
                      price={el.price}
                      category={el.category}
                    />
                  ))
                }
              </div>
            </div>
          )}

          {/* Filter Section */}
          {!searchQuery && (
            <>
              <h2 className='font-bold px-5 text-slate-800'>FILTER YOUR BOOK</h2>
              <div className='flex gap-5 justify-center pb-2 px-2'>
                {categoryList.map((el, index) => (
                  <Filterproduct
                    key={index}
                    category={el}
                    onClick={() => handlefilterproduct(el)}
                  />
                ))}
              </div>

              <div className='flex flex-wrap justify-center gap-4 py-5'>
                {datafilter.map(el => (
                  <Cardfeatures
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                ))}
              </div>
            </>
          )}

          {/* Popular Selling Books */}
          <h2 className='font-bold px-5'>POPULAR SELLING BOOKS</h2>
          <div className='flex gap-4 py-5 overflow-x-auto ml-20'>
            {homeproductcartlistcartlist.length > 0
              ? homeproductcartlistcartlist.map(el => (
                  <Cardfeatures
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                ))
              : loadingArrayFeature.map((index) => (
                  <Homecard key={index} loading="Loading..." />
                ))}
          </div>
        </>
      )}

      {/*  ALWAYS VISIBLE (BEFORE & AFTER LOGIN) */}
      <h2 className="text-2xl font-bold px-6 py-4">
        Popular Categories in <span className='text-blue-700'>books</span>
      </h2>

      <div className='flex flex-wrap gap-5 justify-center px-4 cursor-pointer'>
        {homeproductcartlist.length > 0
          ? homeproductcartlist.map(el => (
              <Homecard
                key={el._id}
                id={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
               
              />
            ))
          : loadingArray.map((el, index) => (
              <Homecard key={index} loading="Loading..." />
            ))}
      </div>
    </div>
  )
}

export default Home
