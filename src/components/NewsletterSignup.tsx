import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-2xl mx-auto bg-gradient-to-r from-teal to-dark rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Recevoir les nouveautés
              </h2>
              <p className="text-white/80 mb-6">
                Restez informé des dernières actualités, événements et
                opportunités.
              </p>
            </motion.div>
            <AnimatePresence mode="wait">
              {!isSubmitted ? <motion.form key="form" initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow relative">
                    <label htmlFor="email" className="sr-only">
                      Adresse email
                    </label>
                    <motion.input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} placeholder="Votre adresse email" animate={{
                  scale: isFocused ? 1.02 : 1
                }} transition={{
                  duration: 0.2
                }} className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow transition-all" required aria-label="Email address" />
                  </div>
                  <motion.button type="submit" whileHover={{
                scale: 1.05,
                y: -2
              }} whileTap={{
                scale: 0.95
              }} className="bg-yellow text-dark px-6 py-3 rounded-lg font-bold hover:bg-lime transition-colors flex items-center justify-center shadow-lg hover:shadow-xl">
                    S'inscrire
                    <Send size={18} className="ml-2" />
                  </motion.button>
                </motion.form> : <motion.div key="success" initial={{
              opacity: 0,
              scale: 0.8
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0,
              scale: 0.8
            }} className="flex items-center justify-center py-4 text-white">
                  <CheckCircle className="mr-2 text-lime" size={24} />
                  <span className="text-lg font-semibold">
                    Merci pour votre inscription!
                  </span>
                </motion.div>}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>;
};