import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Options from './components/Options'
import ShoesContainer from './components/ShoesContainer'

const App = () => {
  return (
    <div className='bg-[#fffafa] m-0 pt-6'>
      <Header />
      <Hero />
      <ShoesContainer />
      <Options />

    </div>
  )
}

export default App