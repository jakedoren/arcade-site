import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Pricing from '../components/pricing/Pricing'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Pricing />
            <About name="myScrollToElement"/>
            <Footer />
        </div>
    )
}

export default Home
