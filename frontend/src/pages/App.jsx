import { useState } from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

function App() {  
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />

      <h1>EHE</h1>
    </>
  )
}

export default App
