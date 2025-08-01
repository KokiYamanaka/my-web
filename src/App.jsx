import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectA from './pages/ProjectA'
import ProjectB from './pages/ProjectB'
import ProjectC from './pages/ProjectC'
import ProjectD from './pages/ProjectD'
import ProjectE from './pages/ProjectE'
import ProjectF from './pages/ProjectF'
import ProjectChurn from './pages/ProjectChurn'
import ProjectEView from './pages/ProjectEView'
import About from './pages/About'; // <-- Add this
 
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-a" element={<ProjectA />} />
        <Route path="/project-b" element={<ProjectB />} />
        <Route path="/project-c" element={<ProjectC />} />
        <Route path="/project-d" element={<ProjectD />} />
        <Route path="/project-e" element={<ProjectE />} />
        <Route path="/project-f" element={<ProjectF />} />
        <Route path="/project-churn" element={<ProjectChurn />} />
        <Route path="/project-eview" element={<ProjectEView />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Layout>
  )
}
