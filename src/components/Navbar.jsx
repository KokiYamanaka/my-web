import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #ddd' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', fontSize: '1.5rem', color: '#333', fontWeight: 500 }}>
          Koki Yamanaka
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>
          About Me 
        </Link>
      </nav>
    </header>
  )
}
