import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Users, Building2, Leaf } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
interface CounterProps {
  value: number;
  duration?: number;
}
const Counter = ({
  value,
  duration = 2
}: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const {
    ref,
    inView
  } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration
      });
      return controls.stop;
    }
  }, [inView, count, value, duration]);
  return <motion.span ref={ref} className="text-4xl md:text-5xl font-bold text-dark">
      {rounded}
    </motion.span>;
};
export const CounterSection = () => {
  const counters = [{
    icon: <Users size={48} className="text-dark" />,
    count: 50,
    label: 'porteurs de projets accompagnés'
  }, {
    icon: <Building2 size={48} className="text-dark" />,
    count: 10,
    label: 'entreprises créées'
  }, {
    icon: <Leaf size={48} className="text-dark" />,
    count: 3,
    label: 'domaines Durables'
  }];
  return <section className="py-20 bg-lime relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div animate={{
      backgroundPosition: ['0% 0%', '100% 100%']
    }} transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: 'reverse'
    }} className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'radial-gradient(circle, #2f3e46 1px, transparent 1px)',
      backgroundSize: '50px 50px'
    }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {counters.map((counter, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2,
          duration: 0.5
        }} whileHover={{
          scale: 1.05,
          y: -5
        }} className="text-center p-6 rounded-lg bg-white/20 backdrop-blur-sm">
              <motion.div initial={{
            y: 20,
            opacity: 0
          }} whileInView={{
            y: 0,
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2 + 0.2
          }} className="flex justify-center mb-4">
                {counter.icon}
              </motion.div>
              <div className="mb-2">
                <Counter value={counter.count} />
              </div>
              <motion.p initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2 + 0.4
          }} className="text-dark font-medium text-lg">
                {counter.label}
              </motion.p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};