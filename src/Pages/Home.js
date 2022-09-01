import React from 'react'
import Content from '../Components/Content/Content'
import Content2 from '../Components/Content2/Content2'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <Content2/>
      <Footer/>
    </div>
  )
}

export default Home
