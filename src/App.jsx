import React from 'react'
import Navbar from './components/Navbar'
import FeaturedItem from './components/FeaturedItem'
import Card from './components/Card'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div>
      <Navbar />
      <FeaturedItem />
      <Card />
      <Dashboard />
    </div>
  )
}

export default App