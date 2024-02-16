import { useState,useRef,useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Acceuil from './components/acceuil'
import Product from './components/Product'
import Card from './components/Card'
import Footer from './components/Footer'
function App() {
  // const canvasRef = useRef()

  // useEffect(() => {
  //   const canvas = canvasRef.current
  //   const context = canvas.getContext('2d')

  //   context.fillStyle = 'rgba(59, 108, 212, 0.5)'
  //   context.fillRect(10, 10, 50, 50)

  //   context.fillStyle = 'rgb(59, 108, 212)'
  //   context.fillRect(20, 10, 50, 50)
  // }, [])
  return (
    <main>
    <Navbar/>
    <Acceuil/>
    <Product/>
    <div className='main-card'>

      <Card image = "/food (8).jpg"/>
      <Card image = "/food (6).jpg"/>
      <Card image = "/food (5).jpg"/>
      <div className="bg-card">
      <div className="basket">
        <img src="/icons8_joyent_64.png" alt="" />
      </div>
      </div>
      <Card image = "/food (11).jpg"/>
      <Card image = "/food (13).jpg"/>
      <Card image = "/food (15).jpg"/>

    </div>
    
      {/* <canvas ref={canvasRef} /> */}
      <Footer/>
    </main>
  )
}

export default App
