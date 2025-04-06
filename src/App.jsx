import './App.css'
import { Index } from './pages/Index.jsx'
import { Route, Routes } from 'react-router-dom';
import { Project } from './pages/Project.jsx';
import { ContactMe } from './pages/ContactMe.jsx';
import { AboutMe } from './pages/AboutMe.jsx';
import { AllProjects } from './pages/AllProjects.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </>
  )
}

export default App
