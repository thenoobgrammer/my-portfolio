import React from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'

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
