import { useState, useCallback } from 'react'
import './app.css'
import { Editor } from './components/Editor'
import { Preview } from './components/Preview'

function App(): JSX.Element {
  const [doc, setDoc] = useState<string>('# Hello, World!')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])
  return (
    <div className="app">
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
