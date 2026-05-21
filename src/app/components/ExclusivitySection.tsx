import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

export default function ExclusivitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const exclusions = [
    'Para quem investe em posicionamento',
    'Para quem quer crescer com estratégia',
    'Para quem pensa no longo prazo'
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 lg:px-8 bg-[#1A1A1A]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            A Studio.b é para quem já decidiu <span className="text-[#FFD700]">ser referência</span>
          </h2>
          <p className="text-xl text-gray-300">
            Escolhemos marcas prontas para crescer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {exclusions.map((exclusion, index) => (
            <motion.div
              key={exclusion}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black p-8 rounded-lg border-2 border-green-600/50 hover:border-red-600 transition-all duration-300"
            >
              <Check className="w-12 h-12 text-green-600 mb-4 mx-auto" />
              <p className="text-xl font-semibold text-center">{exclusion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
