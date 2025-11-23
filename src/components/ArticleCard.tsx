import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
interface ArticleCardProps {
  image: string;
  title: string;
  text: string;
  category: string;
  index?: number;
}
export const ArticleCard = ({
  image,
  title,
  text,
  category,
  index = 0
}: ArticleCardProps) => {
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
    delay: index * 0.1
  }} whileHover={{
    y: -8
  }} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl h-full">
      <div className="h-48 overflow-hidden">
        <motion.img whileHover={{
        scale: 1.1
      }} transition={{
        duration: 0.4
      }} src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <motion.span initial={{
        opacity: 0,
        x: -10
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: index * 0.1 + 0.2
      }} className="inline-block px-3 py-1 text-xs font-semibold bg-teal text-white rounded-full mb-3">
          {category}
        </motion.span>
        <h3 className="text-xl font-bold mb-3 text-dark">{title}</h3>
        <p className="text-gray-600 mb-4">{text}</p>
        <motion.a href="#" whileHover={{
        x: 5
      }} className="text-teal font-semibold hover:text-dark transition-colors inline-flex items-center group">
          Lire plus
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </motion.div>;
};