import './App.css'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import GoToTopButton from './components/GoToTopButton'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Parallax from './components/Parallax'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {

  return (
    <>
      <Cursor />
      <section id='Homepage' className='h-screen snap-center'>
        <Navbar />
        <Hero />
      </section>
      <section id='Skills' className='h-screen snap-center'>
        <Parallax type='skills' />
      </section>
      <section className='h-screen snap-center'>
        <Skills />
      </section>
      <section id='Projects' className='h-screen snap-center'>
        <Parallax type='projects' />
      </section>
      <Projects />
      <section id='Contact' className='h-screen snap-center'>
        <Contact />
      </section>
      <GoToTopButton />
    </>
  )
}

export default App
