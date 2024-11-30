import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import GetData from './services/api'
import ProductCard from './components/ProductCard'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)
  const {data,loading,error} = GetData()

  function logData() {
    console.log(data['products'][0].title);
    
  }
  
  // console.log(data);
  return (
    <>
    <button onClick={logData}>Get</button>
    <Header/>
    <Home/>
    </>
  )
}

export default App
