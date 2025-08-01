import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export const meta = {
  title: 'Freelancer-Job Matching Engine',
  date: 'Jul 10, 2025',
  path: '/project-c',
}

export default function ProjectC() { 
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/public/posts/project-c/project-c.md')
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
