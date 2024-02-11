import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Portfolio.scss';
const items = [
  {
    id: 1,
    title: 'Remember Me App',
    img: '/Rememberme.png',
    des: '(In Progress). A tasks app with separate user registration, where you can log in and add your tasks. Developed with Next.js and NextAuth on the client side and on the server running in Node.js with Express.js and MongoDB',
    link: 'https://github.com/helterdev/Remember-me-app-client',
  },
  {
    id: 2,
    title: 'Single Page Store with Cart',
    img: '/store.png',
    des: ' Single page website that simulates an online store, where data is brought from an external API and the global state is managed with react.',
    link: 'https://technical-test-eta-brown.vercel.app/',
  },
  {
    id: 3,
    title: 'Mendoza News',
    img: '/news.png',
    des: ' National news website of Argentina, develop the responsive part and validation of registration forms and users. Additionally, I collaborated with the backend team to create endpoints and obtain and record data between client-server.',
    link: 'https://github.com/helterdev/noticias',
  },
  {
    id: 4,
    title: 'Pelifast',
    img: '/Pelifast.png',
    des: ' Website that extracts data from a public API about current movies and series.',
    link: 'https://pelifast.vercel.app/',
  },
  {
    id: 5,
    title: 'Clone Uber',
    img: '/uber.png',
    des: ' Make a clone of the Uber main page, to test the SHADCN/UI library and typescript.',
    link: 'https://landingpage-two-gold.vercel.app/',
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className='textContainer' style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.des}</p>
            <a href={item.link} rel='noopener, noreferrer' target='_blank'>
              <button type='button'>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h2>Featured Works</h2>
        <motion.div
          style={{ scaleX: scaleX }}
          className='progressBar'
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
