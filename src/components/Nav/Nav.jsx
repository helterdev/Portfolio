import './Nav.scss';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
export const Nav = () => {
  return (
    <div className='navbar'>
      {/* sidebar */}
      <Sidebar />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Helter Velez
        </motion.span>
        <div className='social'>
          <a
            href='https://github.com/helterdev'
            rel='noopener, noreferrer'
            target='_blank'
          >
            <img src='/github.png' alt='github' />
          </a>
          <a
            href='https://www.linkedin.com/in/helter-conforme-velez-59848218b/'
            rel='noopener, noreferrer'
            target='_blank'
          >
            <img src='/linkedin.png' alt='linkedin' />
          </a>
          <a
            href='https://www.instagram.com/heltervelez_'
            rel='noopener, noreferrer'
            target='_blank'
          >
            <img src='/instagram.png' alt='instagram' />
          </a>
        </div>
      </div>
    </div>
  );
};
