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
        <Route path="https://drexlerguzmanportfolio.netlify.app" element={<Index />} />
        <Route path="https://drexlerguzmanportfolio.netlify.app/project/:id" element={<Project />} />
        <Route path="https://drexlerguzmanportfolio.netlify.app/contact-me" element={<ContactMe />} />
        <Route path="https://drexlerguzmanportfolio.netlify.app/about-me" element={<AboutMe />} />
        <Route path="https://drexlerguzmanportfolio.netlify.app/projects" element={<AllProjects />} />
      </Routes>
    </>
  )
}

export default App
