import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {

  return (
    <div className='bg-white overflow-hidden'>
      <Header />
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
