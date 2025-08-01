import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export const meta = {
  title: 'Data Analysis Course for Specialized School',
  date: 'May 15, 2025',
  path: '/project-e',
}

export default function ProjectE() { 
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/public/posts/project-e/project-e.md')
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