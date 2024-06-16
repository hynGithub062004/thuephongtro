import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Home = () => {
  return (
    <div className='h-auto w-full m-auto'>
      <Header />
      <Navigation />
      <div className='flex justify-center'>
        <Outlet />
      </div>
     
    </div>
  )
}

export default Home
