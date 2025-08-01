import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export const meta = {
  title: 'Organizational Chart for B2B Manufacturing EdTech',
  date: 'June 15, 2024',
  path: '/project-eview',
}

export default function ProjectEView() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/posts/project-eview/project-eview.md')
      .then(res => res.text())
      .then(text => setContent(text))
  }, [])

  return (
    <article>
      <h1>{meta.title}</h1>
      <div style={{ color: '#666' }}>{meta.date}</div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}
