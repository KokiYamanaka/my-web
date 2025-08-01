import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export const meta = {
  title: 'Better Hello Fresh',
  date: 'Jul 20, 2025',
  path: '/project-a',
}

export default function ProjectA() { 
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/posts/project-a/project-a.md')
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
