import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="pt-16 px-4">
        <div className="text-3xl font-bold text-blue-500">Tailwind is working bruv</div>
      </main>
    </>
  )
}

export default App
