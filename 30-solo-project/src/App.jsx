import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div className='container'>
          <Info />
          {/* Foto, name, buttons, etc. */}
          <About />
          <Interests />
          <Footer />
        </div>
    </div>
  )
}

export default App
