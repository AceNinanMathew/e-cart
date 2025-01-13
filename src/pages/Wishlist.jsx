import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const Wishlist = () => {

const dispatch = useDispatch()
const userWishlist = useSelector(state=>state.wishlistReducer)
const userCart = useSelector(state=>state.cartReducer)

const handleCart = (product)=>{
    dispatch(removeItem(product.id))
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item?.id==product.id)
    if(existingProduct){
      alert("product qty is incrementing")
    }else{
      alert("Product added to cart")
    }
  }

  return (
    <>
    <Header />
    <div style={{paddingTop:'100px'}} className='px-5'>
     {
      userWishlist?.length>0 ?
        <>
        <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>
        <div className='grid grid-cols-4 gap-4'>
          {
            userWishlist.map(item=>(
          <div key={item?.id} className='rounded border p-5 shadow mt-4'>
            <img width={'100%'} height={'200px'} src={item?.thumbnail} alt="no-img" />
            <div className='text-center'>
              <h3 className='text-xl font-bold'>{item?.title}</h3>
              <div className='flex justify-evenly mt-3'>
                <button className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-600' onClick={()=>dispatch(removeItem(item?.id))}></i></button>
                <button className='text-xl'><i className='fa-solid fa-cart-plus text-green-600' onClick={()=>handleCart(item)}></i></button>
              </div>
            </div>
          </div>
          ))
        }
          </div>
        </>
      :
      <div className='flex flex-col justify-center items-center'>
        <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
        <h1 className='mt-3 text-3xl font-bold text-red-600'>Your Wishlist is Empty!!</h1>
      </div>
     }
    </div>
    </>
  )
}

export default Wishlist