import { useState } from 'react'
import './app.css'

function App(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <p>Hello vite + react !</p>
        <p>
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
