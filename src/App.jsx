import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnp from './pages/Pnf'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/:id/view' element={<View/>} />
        <Route path='/*' element={<Pnp/>} />
      </Routes>

    {/* Footer */}
    <Footer />

    </>
  )
}

export default App
