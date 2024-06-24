import { useCallback, useEffect } from 'react'
import { useCodeMirror } from '../hooks/useCodemirror'
import '../styles/editor.css'

interface EditorProps {
  initialDoc: string
  onChange: (doc: string) => void
}

export const Editor: React.FC<EditorProps> = props => {
  const { onChange, initialDoc } = props
  const handleChange = useCallback(
    state => onChange(state.doc.toString()),
    [onChange]
  )
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // pass
    }
  }, [editorView])
  return <div className="editor-wrapper" ref={refContainer}></div>
}
