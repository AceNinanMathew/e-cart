import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'



const View = () => {

  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const [product,setProduct] = useState({})

  const {id} = useParams()
  console.log(id);
  

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      console.log(allProducts.find(item=>item.id == id));
      setProduct(allProducts.find(item=>item.id == id))
    }
  },[])

  const handleWishlist = ()=>{
    const existingProduct = userWishlist?.find(item=>item.id==id)
    if(existingProduct){
      alert("Product already in your wishlist!!")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item?.id==id)
    if(existingProduct){
      alert("product qty is incrementing")
    }else{
      alert("Product added to cart")
    }
  }
  

  return (
    <>
    <Header />
    <div className='flex flex-col mx-5 pt-14'>
      
       
        <div className='grid grid-cols-2 items-center h-screen'>
        <div>
        <img width={'450px'} height={'200px'} src={product?.thumbnail} alt="no-img" />
        <div className='flex justify-center mt-5'>
              <button className='bg-blue-600 text-white p-2 me-2' onClick={handleWishlist}>Add to wishlist</button>
              <button className=' bg-green-600 text-white p-2 ms-2' onClick={handleCart}>Add to Cart</button>
            </div>
        </div>
  
        <div>
          <h3 font-bold>PID: {product?.id}</h3>
          <h1 className='text-5xl font-bold'>{product?.title}</h1>
          <h4 className='font-bold text-red-600 text-2xl'>$ {product?.price}</h4>
          <h4>Brand : {product?.brand}</h4>
          <h4>Category : {product?.category}</h4>
          <p>
            <span className='font-bold'>Description</span>: {product?.description}
           
          </p>
          <h3 className='font-bold mt-12'>Client Reviews</h3>
          {
            product?.reviews?.length>0?
                product?.reviews?.map(item=>(
                  <div style={{width:'450px'}} key={item?.date} className='shadow border p-2 mb-2'>
                    <h5 className='mt-2 mx-2'>
                      <span className='font-bold me-1'>{item?.reviewerName}</span> 
                      :
                      <span className='ms-1'>{item?.comment}</span>
                    </h5>
                    <p className='mx-2'>Rating : {item?.rating}⭐</p>
                    </div>
                ))
            :
            <div className='flex justify-center items-center text-red-600 font-bold text-2xl'>No reviews yet.</div>
          }
        </div>
        </div>
 
   
      
    </div>
    </>
  )
}

export default View