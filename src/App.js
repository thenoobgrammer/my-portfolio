import React from 'react'
import Banner from './components/sections/Banner'
import Header from './components/sections/Header'
import About from './components/sections/About'
import Services from './components/sections/Services'

const App = () => {
  return (
    <div className='bg-white overflow-hidden'>
      <Header />
      <Banner />
      <About />
      <Services />
    </div>
  )
}

export default App;
