import React from 'react'
import Header from '../components/Header'


const View = () => {
  return (
    <>
    <Header />
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
      <img width={'450px'} height={'200px'} src="https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain" alt="no-img" />
      

      <div>
        <h3 font-bold>PID: 1</h3>
        <h1 className='text-5xl font-bold'>Product Name</h1>
        <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
        <h4>Brand : brand</h4>
        <h4>Category : category</h4>
        <p>
          <span className='font-bold'>Description</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt quidem, deleniti quod veritatis hic aut at? Nisi, officiis numquam illo officia praesentium aut dignissimos voluptates quas itaque laudantium voluptatibus.
          <div className='flex justify-around mt-5'>
            <button className='bg-blue-600 text-white p-2'>Add to wishlist</button>
            <button className=' bg-green-600 text-white p-2'>Add to Cart</button>
          </div>
        </p>
      </div>
      </div>
    </div>
    </>
  )
}

export default View