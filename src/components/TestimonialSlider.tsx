import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}
export const TestimonialSlider = () => {
  const testimonials: Testimonial[] = [{
    quote: "Le programme Mahdia Blue and Green m'a permis de transformer mon idée en une entreprise viable qui contribue à l'économie locale tout en respectant l'environnement.",
    name: 'Sarah Ben Ali',
    role: 'Fondatrice, EcoMarine',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    quote: "Grâce à l'accompagnement reçu, j'ai pu développer des méthodes agricoles durables qui préservent nos ressources tout en améliorant les rendements.",
    name: 'Ahmed Mejri',
    role: 'Agriculteur Bio',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  }, {
    quote: "Le réseau que j'ai pu construire à travers ce programme a été crucial pour le succès de mon initiative de recyclage communautaire.",
    name: 'Leila Mansour',
    role: 'Directrice, RecycleTun',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80'
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            Témoignages
          </h2>
          <motion.div initial={{
          width: 0
        }} whileInView={{
          width: 80
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3,
          duration: 0.6
        }} className="h-1 bg-teal mx-auto" />
        </motion.div>
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 overflow-hidden">
            <Quote className="text-teal/20 w-16 h-16 mb-4" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={currentIndex} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{
              x: {
                type: 'spring',
                stiffness: 300,
                damping: 30
              },
              opacity: {
                duration: 0.2
              }
            }} className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <motion.img initial={{
                  scale: 0.8,
                  opacity: 0
                }} animate={{
                  scale: 1,
                  opacity: 1
                }} transition={{
                  delay: 0.2
                }} src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-teal shadow-lg" />
                </div>
                <div className="md:w-2/3 md:pl-8 text-center md:text-left">
                  <blockquote className="text-lg md:text-xl italic text-gray-600 mb-4">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="font-bold text-dark text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-teal font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-6 space-x-3">
            <motion.button onClick={prevSlide} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="p-2 rounded-full bg-teal text-white hover:bg-dark transition-colors shadow-lg" aria-label="Previous testimonial">
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button onClick={nextSlide} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="p-2 rounded-full bg-teal text-white hover:bg-dark transition-colors shadow-lg" aria-label="Next testimonial">
              <ChevronRight size={24} />
            </motion.button>
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => <motion.button key={index} onClick={() => {
            setDirection(index > currentIndex ? 1 : -1);
            setCurrentIndex(index);
          }} whileHover={{
            scale: 1.2
          }} className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-teal w-8' : 'bg-gray-300'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
};