import './sass/main.scss'
import { Navbar } from './Navbar'
import {Home} from './Homepage'
import AboutMe from './AboutMe'
import { Projects } from './Projects'
import { ContactMe } from './ContactMe'

function App() {
  return (
    <>
      <div className='myBody'>
      <Navbar />
      <Home />
      <AboutMe/>
      <Projects />
      <ContactMe />     
      </div>
     
    </>
  )
}

export default App
