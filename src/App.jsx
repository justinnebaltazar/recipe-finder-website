import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectPitch } from './components/ProjectPitch'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ShowAndTell } from './components/ShowAndTell'
import { ShowAndTell2 } from './components/ShowAndTell2'
import { Carousel } from './components/Carousel'
import { TeamBreakdown } from './components/TeamBreakdown'
import { Download } from './components/Download'

function App() {
  return (
    <BrowserRouter basename="/recipe-finder">
      <Routes>
        {/* home page */}
        <Route
          path="/"
          element={
            <>
              <Navbar/>
              <Hero/>
              <ProjectPitch/>
              <Download/>
              <TeamBreakdown/>
              <div className="my-8 sm:my-16 md:my-20">
                <Carousel />
              </div>

            </>
          }
        />

        {/* previous project milestone */}
        <Route
          path="/project-milestones"
          element={
            <>
              <Navbar/>
              <ProjectPitch/>
              <ShowAndTell/>
              <ShowAndTell2/>
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
