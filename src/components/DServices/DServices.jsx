import { useRef } from 'react';
import './DServices.scss';
import { motion, useInView } from 'framer-motion';

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
      //   whileInView='animate'
      animate={'animate'}
      // isInView &&
      ref={ref}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
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
          <h3>Branding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quis pariatur nesciunt voluptate, natus consequatur in perspiciatis
            ab error dolor nulla obcaecati temporibus, esse accusantium
            necessitatibus modi illum est debitis!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h3>Branding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quis pariatur nesciunt voluptate, natus consequatur in perspiciatis
            ab error dolor nulla obcaecati temporibus, esse accusantium
            necessitatibus modi illum est debitis!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h3>Branding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quis pariatur nesciunt voluptate, natus consequatur in perspiciatis
            ab error dolor nulla obcaecati temporibus, esse accusantium
            necessitatibus modi illum est debitis!
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className='box'
          whileHover={{ background: 'lightgray', color: 'black' }}
        >
          <h3>Branding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            quis pariatur nesciunt voluptate, natus consequatur in perspiciatis
            ab error dolor nulla obcaecati temporibus, esse accusantium
            necessitatibus modi illum est debitis!
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
