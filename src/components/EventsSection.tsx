import React from 'react';
import { motion } from 'framer-motion';
import { EventCard } from './EventCard';
export const EventsSection = () => {
  const events = [{
    date: '15 Oct 2023',
    title: "Forum de l'Économie Bleue",
    description: "Rencontrez des experts et entrepreneurs de l'économie maritime et découvrez les opportunités dans ce secteur.",
    location: 'Centre Culturel, Mahdia'
  }, {
    date: '22 Oct 2023',
    title: 'Atelier: Agriculture Urbaine',
    description: 'Apprenez à cultiver vos propres légumes en milieu urbain avec des techniques durables et économiques.',
    location: 'Jardin Municipal, Mahdia'
  }, {
    date: '5 Nov 2023',
    title: 'Hackathon Économie Circulaire',
    description: "48 heures pour développer des solutions innovantes aux défis de l'économie circulaire dans notre région.",
    location: 'Tech Hub, Mahdia'
  }];
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Événements à venir
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
          }} className="h-1 bg-teal" />
          </motion.div>
          <motion.a initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} href="#" whileHover={{
          x: 5
        }} className="hidden md:inline-block text-teal font-semibold hover:text-dark transition-colors">
            Voir tous les événements →
          </motion.a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => <EventCard key={index} {...event} index={index} />)}
        </div>
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4,
        duration: 0.6
      }} className="text-center mt-8 md:hidden">
          <a href="#" className="inline-block text-teal font-semibold hover:text-dark transition-colors">
            Voir tous les événements →
          </a>
        </motion.div>
      </div>
    </section>;
};