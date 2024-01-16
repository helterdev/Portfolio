import './app.scss';
import Navbar from './components/Navbar/NAvbar';
const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
      </section>
      <section id='Services'>Parallax</section>
      <section>Services</section>
      <section id='Portfolio'>Parallax</section>
      <section>Portfolio 1</section>
      <section>2</section>
      <section>3</section>
      <section id='Contact'>Contact</section>
    </div>
  );
};

export default App;
