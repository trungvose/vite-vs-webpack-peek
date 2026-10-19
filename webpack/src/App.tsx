import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <img src={viteLogo} alt="Vite logo" />
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </main>
  )
}

export default App
