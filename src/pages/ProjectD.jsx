import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export const meta = {
  title: 'Multi-Agent Refactor for Solar Power Modeling',
  date: 'May 28, 2025',
  path: '/project-d',
}

export default function ProjectD() { 
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/public/posts/project-d/project-d.md')
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
