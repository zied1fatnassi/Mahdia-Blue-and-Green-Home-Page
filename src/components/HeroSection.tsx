import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export const HeroSection = () => {
  return <section className="bg-gradient-to-br from-teal to-dark min-h-screen flex items-center relative pt-16 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'linear'
    }} className="absolute top-20 right-10 w-64 h-64 bg-yellow/10 rounded-full blur-3xl" />
      <motion.div animate={{
      scale: [1, 1.3, 1],
      rotate: [360, 180, 0]
    }} transition={{
      duration: 25,
      repeat: Infinity,
      ease: 'linear'
    }} className="absolute bottom-20 left-10 w-96 h-96 bg-lime/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: 'easeOut'
        }} className="max-w-3xl text-white">
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.8
          }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Mahdia{' '}
              <motion.span initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.5,
              duration: 0.5
            }} className="text-yellow">
                Blue
              </motion.span>{' '}
              and{' '}
              <motion.span initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              delay: 0.7,
              duration: 0.5
            }} className="text-lime">
                Green
              </motion.span>
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }} className="text-xl md:text-2xl mb-8 font-light">
              Économie Bleue, Verte et Circulaire à Mahdia
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }} className="flex flex-wrap gap-4 justify-center">
              <motion.a href="#" whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="bg-yellow text-dark px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
                Rejoindre le Mouvement
              </motion.a>
              <motion.a href="#" whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-dark transition-all">
                Découvrir le projet
              </motion.a>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.8,
            duration: 0.6
          }} className="mt-10 flex justify-center">
              <img src="/OIT_Mahdia_Bleu.png" alt="Mahdia Blue & Green - OIT Mahdia Logo" className="h-32 md:h-40 lg:h-48 w-auto object-contain" />
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1,
      y: [0, 10, 0]
    }} transition={{
      delay: 1,
      duration: 1.5,
      repeat: Infinity
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <ChevronDown size={32} />
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
};