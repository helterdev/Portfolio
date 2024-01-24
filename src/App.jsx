import './app.scss';
import { Contact } from './components/Contact/Contact';
import { Cursor } from './components/Cursor/Cursor';
import { DServices } from './components/DServices/DServices';
import { Hero } from './components/Hero/Hero';
import { Parallax } from './components/Parallax/Parallax';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Nav } from './components/Nav/Nav';
const App = () => {
  return (
    <div>
      <Cursor />
      <section id='Homepage'>
        <Nav />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <section className='section-mobile'>
        <DServices />
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <Portfolio />
      <section id='Contact' className='section-mobile'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
