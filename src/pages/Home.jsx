import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  return (
    <>
    <Header insideHome={true}/>

      <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
        <div className='grid grid-cols-4 gap-4'>

        <div className='rounded border p-2 shadow'>
          <img width={'100%'} height={'200px'} src="https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain" alt="no-img" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>Title product name</h3>
            <Link className='bg-violet-600 rounded p-1 mt-3 text-white inline-block' to={'/id/view'}>View More..</Link>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}

export default Home