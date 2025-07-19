import { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Banner from './components/sections/Banner/Banner'
import AboutMe from './components/sections/AboutMe/AboutMe'
import Description from './components/sections/Description/Description'
import Footer from './components/sections/Footer/Footer'

function App() {
  return (
    <LanguageProvider>
      <Banner/>
      <AboutMe/>
      <Description/>
      <Footer/>
    </LanguageProvider>
  )
}

export default App
