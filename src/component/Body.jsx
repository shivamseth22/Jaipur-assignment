import React from 'react'
import Navbar from './Navbar'
import Home from './Home.jsx'
import About from './About.jsx'
import Faq from './Faq.jsx'
import NewsBlogs from './NewsBlogs.jsx'
import SignUp from './SignUp.jsx'
import Priceplan from './Priceplan.jsx'
import Footer from './Footer.jsx'
import Testimonal from './Testimonal.jsx'


const Body = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Testimonal/>
      <About/>
      {/* <MultipleItems/> */}
      <Faq/>
      <NewsBlogs/>
      <SignUp/>
      <Priceplan/>
      <Footer/>
    </div>
  )
}

export default Body