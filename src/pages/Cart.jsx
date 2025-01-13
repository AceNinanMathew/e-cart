import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'

const Cart = () => {

  const navigate = useNavigate()
  const [cartTotal,setCartTotal] = useState(0)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a,b)=>a+b))
    }
  },[userCart])

  const handleDecrementQuantity =(item)=>{
    if(item?.quantity>1){
      dispatch(decrementQuantity(item?.id))
    }else{
      dispatch(removeCartItem(item?.id))
    }
  }

  const checkOut = ()=>{
    dispatch(emptyCart())
    alert("Order Confirmed..Thank You!")
    //redirect to home
    navigate("/")
  }

  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5'>
{
  userCart?.length>0?
      <>
      <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
      <div className='grid grid-cols-3 gap-4 mt-5 '>
        <div className='col-span-2 shadow rounded border p-5'>
          <table className='table-auto w-full'>
            <thead>
              <tr>
                <td className='font-semibold'>#</td>
                <td className='font-semibold'>Name</td>
                <td className='font-semibold'>Image</td>
                <td className='font-semibold'>Quantity</td>
                <td className='font-semibold'>Price</td>
                <td className='font-semibold'>...</td>
              </tr>
            </thead>
            <tbody>
              {
                userCart?.map((item,index)=>(
                  <tr key={item?.key} className='mt-3'>
                <td>{index}</td>
                <td>{item?.title}</td>
                <td><img width={'70px'} height={'70px'} src={item?.thumbnail} alt="" /></td>
                <td>
                  <div className='flex'>
                    <button className='font-bold' onClick={()=>dispatch(handleDecrementQuantity(item))}>-</button>
                    <input type="text" style={{width:'40px'}} className='border p-1 rounded mx-2' value={item?.quantity} readOnly />
                    <button className='font-bold' onClick={()=>dispatch(incrementQuantity(item?.id))}>+</button>
                  </div>
                </td>
                <td>{item?.totalPrice}</td>
                <td><button className='text-red-600' onClick={()=>dispatch(removeCartItem(item?.id))}><i className='fa-solid fa-trash'></i></button></td>
              </tr>
                ))
              }
            </tbody>
          </table>
          <div className='float-right mt-5'>
            <button className='bg-red-600 rounded p-2 text-white' onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
            <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop More</Link>
          </div>
        </div>

        <div className='col-span-1'>
          <div className='border rounded shadow p-5'>
            <h2 className='text-2xl font-bold my-4'>Total Amount : <span>$ {cartTotal}</span></h2>
            <hr />
            <button className='bg-green-600 rounded p-2 text-white w-full mt-4' onClick={checkOut}>Checkout</button>
          </div>
        </div>

      </div>
      </>
      :
      <div className='flex flex-col justify-center items-center'>
        <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
        <h1 className='mt-3 text-3xl font-bold text-red-600'>Your Cart is Empty!!</h1>
      </div>
}
    </div>
    </>
  )
}

export default Cart