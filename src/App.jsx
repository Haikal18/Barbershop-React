import React from 'react';
import Navbar from './components/Navbar'
import BannerSection from './components/BannerSection'
import WhyChooseClassicShaves from './components/WhyChooseClassicShaves'

const App = () => {
  return (
    <div>
      <Navbar/>
      <BannerSection/>  
      <WhyChooseClassicShaves/>
    </div>
  );
};

export default App;
