import { motion } from 'framer-motion';
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
    closed: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
export const Links = () => {
  const items = ['Homepage', 'Services', 'Portfolio', 'Contact', 'About'];
  return (
    <motion.div className='links' variants={variants}>
      {items.map((item) => (
        <motion.a
          key={item}
          href={`#${item}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};
