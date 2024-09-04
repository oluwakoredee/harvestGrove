// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

  return (
    <div className='overflow-hidden xl:px-5'>
      <Navbar />
      <Hero/>
    </div>
  )
}

export default App
