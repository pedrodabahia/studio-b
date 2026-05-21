import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function QuizSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const redirectFuncition = () => {
    window.open("https://form.respondi.app/7FCPEc5z", "_blank");
    }

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

  return (
    <section ref={sectionRef} className="py-24 px-4 lg:px-8 bg-[#FFD700]">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-black"
        >
          Sua marca acelera… ou freia?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-black/80 mb-8"
        >
          Responda 5 perguntas rápidas e descubra o nível atual do seu posicionamento digital.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          onClick={redirectFuncition}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-black text-[#FFD700] px-8 py-4 rounded-lg font-semibold hover:bg-black/90 transition-all duration-300 hover:scale-105"
        >
          Iniciar Diagnóstico Gratuito
        </motion.button>
      </div>
    </section>
  );
}
