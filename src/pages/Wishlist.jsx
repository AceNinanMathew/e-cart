import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


const Wishlist = () => {
  return (
    <>
    <Header />
    <div style={{paddingTop:'100px'}} className='px-5'>
      <>
      <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>
      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-5 shadow'>
          <img width={'100%'} height={'200px'} src="https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain" alt="no-img" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>Title product name</h3>
            <div className='flex justify-evenly mt-3'>
              <button className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
              <button className='text-xl'><i className='fa-solid fa-cart-plus text-green-600'></i></button>
            </div>
          </div>
        </div>
        </div>
      </>
    </div>
    </>
  )
}

export default Wishlist