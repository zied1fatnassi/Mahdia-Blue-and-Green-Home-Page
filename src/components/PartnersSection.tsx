import React from 'react';
import { motion } from 'framer-motion';
export const PartnersSection = () => {
  const partners = [{
    name: 'ONU Environnement',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/UNEP_logo.svg/1200px-UNEP_logo.svg.png'
  }, {
    name: "Ministère de l'Environnement",
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/800px-Flag_of_Tunisia.svg.png'
  }, {
    name: 'Union Européenne',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/800px-Flag_of_Europe.svg.png'
  }, {
    name: 'Ville de Mahdia',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/800px-Flag_of_Tunisia.svg.png'
  }, {
    name: 'GIZ',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logo_der_GIZ.svg/1200px-Logo_der_GIZ.svg.png'
  }, {
    name: 'WWF',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/WWF_logo.svg/1200px-WWF_logo.svg.png'
  }];
  return <section className="py-16 bg-gray-50">
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
      }} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark">
            Nos Partenaires
          </h2>
          <motion.div initial={{
          width: 0
        }} whileInView={{
          width: 64
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3,
          duration: 0.6
        }} className="h-1 bg-teal mx-auto" />
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1,
          duration: 0.5
        }} whileHover={{
          scale: 1.1,
          filter: 'grayscale(0%)'
        }} className="flex justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
              <img src={partner.logo} alt={`Logo de ${partner.name}`} className="h-16 md:h-20 object-contain" />
            </motion.div>)}
        </div>
      </div>
    </section>;
};