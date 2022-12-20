import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Calculator from "./components/calculator/Calculator"
import UseEffectTest from './components/UseEffectTest/UseEffect'

function App() {

  return (
    <>
    {/* <UseEffectTest/> */}
    <div className="App">
      <Calculator/>
    </div>
    
    </>
  )
}

export default App
