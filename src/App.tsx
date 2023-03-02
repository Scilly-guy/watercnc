import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Collage from './components/Collage'
import ExperienceSection from './components/ExperienceSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Collage/>
      <ExperienceSection/>
    </>
  )
}

export default App
