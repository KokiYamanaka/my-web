import { Link } from 'react-router-dom'
import { posts } from './posts'

export default function Home() {
  return (
    <>
      <h2>Posts</h2>
      {posts.map((post, idx) => (
        <div key={idx} style={{ marginBottom: '1.5rem' }}>
          <div style={{ color: '#666' }}>{post.date}</div>
          <Link to={post.path} style={{ fontSize: '1.2rem', color: '#1a0dab', textDecoration: 'none' }}>
            {post.title}
          </Link>
        </div>
      ))}
    </>
  )
}
