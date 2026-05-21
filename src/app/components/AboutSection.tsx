import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import ysaPerfil from '../../assets/isabellaPerfil.jpeg'

export default function AboutSection() {;
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 lg:px-8 bg-[#1A1A1A]"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-90 m-auto h-120 aspect-square bg-gradient-to-br from-[#FFD700]/20 to-transparent rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-6xl text-[#FFD700]">
                <img className="w-100" src={ysaPerfil} />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FFD700]">10 anos</span> refinando marcas.
              <br />
              <span className="text-[#FFD700]">5 anos</span> guiando resultados.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ysabella Novais une visão criativa, experiência prática e estratégia de mercado
              para empresas que decidiram sair do comum.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
