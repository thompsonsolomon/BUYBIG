import React from 'react'
import Hero from '../components/Home/Hero'
import SuggestedVendors from '../components/Home/SuggestedVendors'
import { vendors } from '../utils/data'

function Home() {
  return (
   <div>
    <Hero />
    <SuggestedVendors vendors={vendors} />
   </div>
  )
}

export default Home