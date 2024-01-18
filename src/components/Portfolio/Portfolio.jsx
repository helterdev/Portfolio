import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Portfolio.scss';
const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: '/people.web',
    des: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor facilis distinctio. Error, nemo. Neque sint incidunt quaerat voluptatem, maiores ratione quod iusto nihil non quas at recusandae eos quam',
  },
  {
    id: 2,
    title: 'React Commerce',
    img: '/people.web',
    des: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor facilis distinctio. Error, nemo. Neque sint incidunt quaerat voluptatem, maiores ratione quod iusto nihil non quas at recusandae eos quam',
  },
  {
    id: 3,
    title: 'React Commerce',
    img: '/people.web',
    des: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor facilis distinctio. Error, nemo. Neque sint incidunt quaerat voluptatem, maiores ratione quod iusto nihil non quas at recusandae eos quam',
  },
  {
    id: 4,
    title: 'React Commerce',
    img: '/people.web',
    des: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor facilis distinctio. Error, nemo. Neque sint incidunt quaerat voluptatem, maiores ratione quod iusto nihil non quas at recusandae eos quam',
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
            <img src='/people.webp' alt={item.title} />
          </div>
          <motion.div className='textContainer' style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.des}</p>
            <button>See Demo</button>
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
