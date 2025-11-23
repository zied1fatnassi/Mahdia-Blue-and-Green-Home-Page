import React from 'react';
import { motion } from 'framer-motion';
import { ArticleCard } from './ArticleCard';
export const ArticlesSection = () => {
  const articles = [{
    image: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
    title: "Innovation dans l'économie bleue",
    text: "Découvrez comment les nouvelles technologies transforment l'économie maritime à Mahdia.",
    category: 'Économie Bleue'
  }, {
    image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Agriculture durable en Tunisie',
    text: "Les pratiques agricoles durables qui font une différence pour l'environnement local.",
    category: 'Économie Verte'
  }, {
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Réduire les déchets plastiques',
    text: "Initiative locale pour réduire l'impact des déchets plastiques sur les plages de Mahdia.",
    category: 'Économie Circulaire'
  }, {
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Tourisme écologique',
    text: "Comment le tourisme durable peut stimuler l'économie locale tout en préservant l'environnement.",
    category: 'Développement Durable'
  }];
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
            Derniers Articles
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => <ArticleCard key={index} {...article} index={index} />)}
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4,
        duration: 0.6
      }} className="text-center mt-12">
          <motion.a href="#" whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="inline-block px-8 py-3 bg-teal text-white rounded-lg font-semibold hover:bg-dark transition-colors shadow-lg hover:shadow-xl">
            Voir tous les articles
          </motion.a>
        </motion.div>
      </div>
    </section>;
};