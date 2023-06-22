import { useState } from 'react'
import Main from './components/Main'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full'>
      <NavBar/>
      <Main/>
    </div>
  )
}

export default App
