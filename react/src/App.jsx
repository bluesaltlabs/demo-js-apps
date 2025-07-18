import { useState } from 'react'
import bluesaltlabsLogo from './assets/bluesaltlabs-logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/bluesaltlabs" target="_blank">
          <img src={bluesaltlabsLogo} className="logo BlueSaltLabs" alt="BlueSaltLabs logo" />
        </a>
      </div>
      <h1>BlueSalt Labs</h1>
      <h2>( + Vite + React )</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Clicking the logo will lead to more information.
      </p>
    </>
  )
}

export default App
