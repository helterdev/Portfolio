import { useRef } from 'react';
import './DServices.scss';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaBootstrap, FaGitAlt, FaCode } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiTailwindcss, SiSass, SiReactquery, SiRedux } from 'react-icons/si';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
export const DServices = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });
  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      //   animate='animate'
      whileInView='animate'
      animate={'animate'}
      // isInView &&
      ref={ref}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I focused on scalability, performance <br /> and user experience.
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='people' />
          <h2>
            <motion.b whileHover={{ color: 'orange' }}>Unique </motion.b>Ideas
          </h2>
        </div>
        <div className='title'>
          <h2>
            <motion.b whileHover={{ color: 'orange' }}>For Your </motion.b>
            Bussines
          </h2>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h3>Developer Profile</h3>
          <p>
            When creating JavaScript applications, I have the skills and
            knowledge of the most modern tools for the creation of a fast,
            scalable and satisfactory user experience product.
          </p>
          <div className='icons-container'>
            <FaCode className='icons' />
          </div>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h3>Frameworks JS</h3>
          <p>
            I work with the latest technologies in web development with react.js
            and next.js, which allows creating quality software in an agile and
            fast way.
          </p>
          <div className='icons-container'>
            <a
              href='https://es.react.dev/'
              rel='noopener, noreferrer'
              target='_blank'
              className='icons-links'
            >
              <FaReact className='icons' />
            </a>
            <a
              href='https://www.typescriptlang.org/'
              rel='noopener, noreferrer'
              target='_blank'
              className='icons-links'
            >
              <BiLogoTypescript className='icons' />
            </a>
            <a
              href='https://developer.mozilla.org/es/docs/Web/JavaScript'
              rel='noopener, noreferrer'
              target='_blank'
              className='icons-links'
            >
              <RiJavascriptFill className='icons' />
            </a>
          </div>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h3>Frameworks CSS</h3>
          <p>
            With tools like TailwindCss, bootstrap, Material UI and Scss they
            allow me to give a unique and fresh visual touch to each web page
            and web app that I have developed.
          </p>
          <div className='icons-container'>
            <a
              href='https://tailwindcss.com/'
              rel='noopener, noreferrer'
              target='_blank'
              className='icons-links'
            >
              <SiTailwindcss className='icons' />
            </a>
            <a
              href='https://getbootstrap.com/'
              rel='noopener, noreferrer'
              target='_blank'
              className='icons-links'
            >
              <FaBootstrap className='icons' />
            </a>
            <a
              href='https://sass-lang.com/'
              rel='noopener, noreferrer'
              target='_blank'
              className='icons-links'
            >
              <SiSass className='icons' />
            </a>
          </div>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h3>Extra Tools</h3>
          <p>
            Management of external libraries such as tanstack query, redux,
            among others that expand my knowledge when developing software.
          </p>
          <div className='icons-container'>
            <a
              href='https://tanstack.com/query/latest/'
              rel='noopener, noreferrer'
              target='_blank'
              className='icons-links'
            >
              <SiReactquery className='icons' />
            </a>
            <a
              href='https://redux-toolkit.js.org/'
              rel='noopener, noreferrer'
              target='_blank'
              className='icons-links'
            >
              <SiRedux className='icons' />
            </a>
            <a
              href='https://git-scm.com/'
              rel='noopener, noreferrer'
              target='_blank'
              className='icons-links'
            >
              <FaGitAlt className='icons' />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
