import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
export const Footer = () => {
  const footerLinks = [{
    title: 'Liens Rapides',
    links: ['À propos', 'Projets', 'Événements', 'Actualités', 'Contact']
  }, {
    title: 'Domaines',
    links: ['Économie Bleue', 'Économie Verte', 'Économie Circulaire', 'Développement Durable', 'Innovation']
  }];
  return <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        }}>
            <h3 className="text-xl font-bold mb-4">Mahdia Blue & Green</h3>
            <p className="mb-4 text-gray-300">
              Initiative pour promouvoir l'économie bleue, verte et circulaire
              dans la région de Mahdia.
            </p>
            <div className="flex space-x-4">
              {[{
              icon: Facebook,
              label: 'Facebook'
            }, {
              icon: Twitter,
              label: 'Twitter'
            }, {
              icon: Instagram,
              label: 'Instagram'
            }].map((social, index) => <motion.a key={social.label} href="#" whileHover={{
              scale: 1.2,
              y: -2
            }} whileTap={{
              scale: 0.9
            }} className="text-white hover:text-yellow transition-colors" aria-label={social.label}>
                  <social.icon size={20} />
                </motion.a>)}
            </div>
          </motion.div>
          {footerLinks.map((section, sectionIndex) => <motion.div key={section.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: (sectionIndex + 1) * 0.1,
          duration: 0.6
        }}>
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((item, index) => <motion.li key={item} initial={{
              opacity: 0,
              x: -10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: (sectionIndex + 1) * 0.1 + index * 0.05
            }}>
                    <motion.a href="#" whileHover={{
                x: 5
              }} className="text-gray-300 hover:text-yellow transition-colors inline-block">
                      {item}
                    </motion.a>
                  </motion.li>)}
              </ul>
            </motion.div>)}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3,
          duration: 0.6
        }}>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              {[{
              icon: MapPin,
              text: '123 Rue de la Médina, Mahdia, Tunisie'
            }, {
              icon: Phone,
              text: '+216 73 123 456'
            }, {
              icon: Mail,
              text: 'contact@mahdiabluegreen.org'
            }].map((contact, index) => <motion.li key={index} initial={{
              opacity: 0,
              x: -10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3 + index * 0.1
            }} className="flex items-start">
                  <contact.icon size={20} className="mr-2 text-lime mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{contact.text}</span>
                </motion.li>)}
            </ul>
          </motion.div>
        </div>
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.5,
        duration: 0.6
      }} className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Mahdia Blue and Green. Tous droits
            réservés.
          </p>
        </motion.div>
      </div>
    </footer>;
};