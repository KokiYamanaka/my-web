// src/components/Layout.jsx
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '720px', margin: '2rem auto', padding: '0 1rem' }}>
        {children}
      </main>
    </>
  )
}
