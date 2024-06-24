import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkReact from 'remark-react'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'
import rehypeRemark from 'rehype-remark'
import rehypeStringify from 'rehype-stringify'
import 'github-markdown-css/github-markdown.css'
import '../styles/preview.css'

interface PreviewProps {
  doc: string
}

export const Preview: React.FC<PreviewProps> = props => {
  const mdResult = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)

  const htmlString = mdResult.processSync(props.doc).toString()

  //   return <div className="preview.markdown-body">{mdResult.result}</div>
  return (
    <div
      className="preview markdown-body"
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  )
}
