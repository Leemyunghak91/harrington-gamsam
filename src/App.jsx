import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Premium from './components/Premium'
import FloorPlans from './components/FloorPlans'
import SmartSystems from './components/SmartSystems'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Premium />
        <FloorPlans />
        <SmartSystems />
      </main>
      <Footer />
    </div>
  )
}

export default App
