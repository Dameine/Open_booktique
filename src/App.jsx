import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header/Header'
import { CinemaSeach } from './Components/CinemaSearch/CinemaSearch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CinemaSeach/>
    </>
  )
}

export default App
