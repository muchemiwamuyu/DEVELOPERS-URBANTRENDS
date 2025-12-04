import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { LandingPage } from './components/LandingPage'
import { Dashboard } from './components/Dashboard'
import { ProjectsListing } from './components/ProjectsListings'
import { ProjectDetails } from './components/ProjectDetails'
import { AddProject } from './components/AddProjects'
import { Notifications } from './components/Notifications'
import { Settings } from './components/Settings'
import { Header } from './components/Header'
import { Toaster } from 'sonner'

function App() {
  return (
        <div className='min-h-screen bg-background text-text-primary'>
        <Routes>
          <Route path='/' element={<LandingPage />}/>

          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/projects" element={<ProjectsListing />} />
                  <Route path="/project/:id" element={<ProjectDetails />} />
                  <Route path="/add-project" element={<AddProject />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </>
            }
          />
          
        </Routes>

        <Toaster position='top-right' theme='dark'/>

      </div>
      

  )
}

export default App