import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main'
import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full max-w-[1080]'>
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Main />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
