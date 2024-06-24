import { useState, useCallback } from 'react'
import './app.css'
import { Editor } from './components/Editor'

function App(): JSX.Element {
  const [doc, setDoc] = useState<string>('# Hello, World!')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])
  return (
    <div className="app">
      <h2>Markdown editor</h2>
      <Editor onChange={handleDocChange} initialDoc={doc} />
    </div>
  )
}

export default App
