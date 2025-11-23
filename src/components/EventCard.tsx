import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
interface EventCardProps {
  date: string;
  title: string;
  description: string;
  location: string;
  index?: number;
}
export const EventCard = ({
  date,
  title,
  description,
  location,
  index = 0
}: EventCardProps) => {
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-100px'
  }} transition={{
    duration: 0.5,
    delay: index * 0.15
  }} whileHover={{
    y: -5,
    borderLeftWidth: '6px'
  }} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal h-full flex flex-col transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center text-teal font-semibold mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        {date}
      </div>
      <h3 className="text-xl font-bold mb-3 text-dark">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="line-clamp-1">{location}</span>
        </div>
        <motion.a href="#" whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="inline-block px-4 py-2 bg-yellow text-dark rounded-lg font-semibold hover:bg-lime transition-colors text-sm whitespace-nowrap ml-2">
          Participer
        </motion.a>
      </div>
    </motion.div>;
};