import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{minHeight:'250px',marginTop:'100px',position:'absolute', bottom:'0'}} className='mt-5 w-full bg-violet-600 text-white p-4'>
      <div className='flex justify-between p-4'>
        <div style={{width:'400px'}} className='intro'>
          <h5 className='text-xl font-bold'><i className='fa-solid fa-truck-fast me-2'></i>E Cart</h5>
          <p className='text-bold mt-3'>Designed and built with all love in the world by my team with help of our contributors.</p>
          <p className='text-bold mt-3'>Code licensed E Cart, docs CC BY 3.0</p>
          <p className='text-bold mt-3'>Currently v5.3.2.</p>
        </div>
        <div style={{width:'300px',marginLeft:'100px'}} className='intro'>
          <h5 className='text-xl font-bold mt-2'>Links</h5>
          <div className="flex flex-col">
          <Link className='mt-3' style={{textDecoration:'none',color:'white'}} to={'/'}>Landing Page</Link>
          <Link className='mt-3' style={{textDecoration:'none',color:'white'}} to={'/wishlist'}>Wishlist Page</Link>
          <Link className='mt-3' style={{textDecoration:'none',color:'white'}} to={'/cart'}>Cart Page</Link>
          </div>
        </div>
        <div style={{width:'300px'}} className='intro'>
          <h5 className='text-xl font-bold mt-2'>Details</h5>
          <p className='mt-2'><a className='text-nowrap' href="#">View</a></p>
          <p className='mt-2'><a href="#">Shop</a></p>
          <p className='mt-2'><a href="#">Track Now</a></p>
          <p className='mt-2'><a href="#">Contact</a></p>
        </div>
        <div style={{width:'300px'}} className='intro'>
          <h5 className='text-xl font-bold mt-2'>Contact US</h5>
          <div className='flex mt-3'>
            <input type="text" className='border rounded shadow p-2' />
            <button className='bg-violet-600 color-white ms-3 rounded border p-2'><i className='fa-solid fa-arrow-right color-white'></i></button>
          </div>
          <div style={{width:'280px'}} className='flex mt-5 justify-between'>
            <a  href="" style={{textDecoration:'none',color:'white'}} target='blank'><i className='fa-brands fa-instagram'></i></a>
            <a  href="" style={{textDecoration:'none',color:'white'}} target='blank'><i className='fa-brands fa-facebook'></i></a>
            <a  href="" style={{textDecoration:'none',color:'white'}} target='blank'><i className='fa-brands fa-github'></i></a>
            <a  href="" style={{textDecoration:'none',color:'white'}} target='blank'><i className='fa-brands fa-twitter'></i></a>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer