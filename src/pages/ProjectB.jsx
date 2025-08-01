import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export const meta = {
  title: 'Automated Quotation for Construction Supplier',
  date: 'Jul 15, 2025',
  path: '/project-b',
}

export default function ProjectB() { 
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/posts/project-b/project-b.md')
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
