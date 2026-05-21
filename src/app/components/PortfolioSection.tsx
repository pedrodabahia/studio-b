import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import caneca from '../../assets/canecas.jpeg';
import queijo from '../../assets/queijo.jpeg';
import garrafa from '../../assets/garrafa.jpeg';
import avental from '../../assets/avental.jpeg';

export default function PortfolioSection() {
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

  const projects = [
    {
      title: 'Avental',
      imagem: avental,
      metric: '+340% crescimento',
      description: 'Rebranding completo + estratégia de posicionamento'
    },
    {
      title: 'Garrafa',
      imagem : garrafa,
      metric: '2.8M faturamento',
      description: 'Identidade visual + experiência digital premium'
    },
    {
      title: 'Queijo',
      imagem : queijo,
      metric: '+180% conversão',
      description: 'Posicionamento estratégico + design system'
    },
    {
      title: 'Caneca',
      imagem : caneca,
      metric: '+180% conversão',
      description: 'Posicionamento estratégico + design system'
    }
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 px-4 lg:px-8 bg-[#1A1A1A]"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Marcas que evoluíram com <span className="text-[#FFD700]">estratégia</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-[#FFD700]/10 to-black border border-[#FFD700]/20 hover:border-[#FFD700] transition-all duration-500 cursor-pointer"
            >
              <div style={{backgroundImage : `url(${project.imagem})`, backgroundSize : '100%', backgroundPosition : 'center'}} className="aspect-video  from-[#FFD700]/20 to-transparent flex items-center justify-center">
              <div className="text-4xl font-bold text-[#FFD700]/40 group-hover:scale-110 transition-transform duration-500">
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-[#FFD700] font-semibold mb-2">{project.metric}</p>
                <p className="text-gray-400">{project.description}</p>
              </div>
              <div className="absolute inset-0 bg-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
