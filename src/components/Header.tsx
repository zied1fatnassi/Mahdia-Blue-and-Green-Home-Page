import React, { useEffect, useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: 'easeOut'
  }} className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-6 transition-all duration-300 ${isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }} className="flex items-center">
            <a href="/" className="text-white font-montserrat font-bold text-xl md:text-2xl hover:text-yellow transition-colors">
              Mahdia B&G
            </a>
          </motion.div>
          {/* Mobile menu button */}
          <motion.button whileTap={{
          scale: 0.95
        }} className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-yellow rounded-lg p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            <AnimatePresence mode="wait">
              {isMenuOpen ? <motion.div key="close" initial={{
              rotate: -90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: 90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <X size={24} />
                </motion.div> : <motion.div key="menu" initial={{
              rotate: 90,
              opacity: 0
            }} animate={{
              rotate: 0,
              opacity: 1
            }} exit={{
              rotate: -90,
              opacity: 0
            }} transition={{
              duration: 0.2
            }}>
                  <MenuIcon size={24} />
                </motion.div>}
            </AnimatePresence>
          </motion.button>
          {/* Desktop menu */}
          <motion.nav initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.3,
          duration: 0.5
        }} className="hidden md:flex items-center space-x-8">
            {['Accueil', 'Projets', 'Événements', 'À propos', 'Contact'].map((item, index) => <motion.a key={item} href="#" className="text-white hover:text-yellow transition-colors font-medium relative group" whileHover={{
            y: -2
          }} transition={{
            duration: 0.2
          }}>
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow group-hover:w-full transition-all duration-300" />
                </motion.a>)}
          </motion.nav>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && <motion.nav initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="md:hidden mt-4 bg-dark/95 backdrop-blur-md rounded-lg overflow-hidden">
              <ul className="flex flex-col">
                {['Accueil', 'Projets', 'Événements', 'À propos', 'Contact'].map((item, index) => <motion.li key={item} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.1
            }}>
                    <a href="#" className="text-white hover:text-yellow hover:bg-white/10 transition-all block py-3 px-4" onClick={() => setIsMenuOpen(false)}>
                      {item}
                    </a>
                  </motion.li>)}
              </ul>
            </motion.nav>}
        </AnimatePresence>
      </div>
    </motion.header>;
};