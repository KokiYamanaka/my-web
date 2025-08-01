import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

export const meta = {
  title: 'Churn Prediction for B2B Manufacturing EdTech',
  date: 'Aug 31, 2024',
  path: '/project-churn',
}

export default function ProjectChurn() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/posts/project-churn/project-churn.md')
      .then(res => res.text())
      .then(text => setContent(text))
  }, [])

  return (
    <article>
      <h1>{meta.title}</h1>
      <div style={{ color: '#666' }}>{meta.date}</div>
      {meta.company && <div style={{ color: '#888', fontSize: '0.9em' }}>{meta.company}</div>}
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}
