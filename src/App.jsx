import './app.scss';
import { DServices } from './components/DServices/DServices';
import { Hero } from './components/Hero/Hero';
import Navbar from './components/Navbar/NAvbar';
import { Parallax } from './components/Parallax/Parallax';
const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <section>
        <DServices />
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <section>Portfolio 1</section>
      <section>2</section>
      <section>3</section>
      <section id='Contact'>Contact</section>
      <section id='About'></section>
    </div>
  );
};

export default App;
