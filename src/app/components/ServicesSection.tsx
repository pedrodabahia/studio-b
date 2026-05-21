import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Sparkles, TrendingUp, Monitor } from 'lucide-react';

export default function ServicesSection() {
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

  const services = [
    {
      icon: Sparkles,
      title: 'Branding',
      description: 'Identidade visual, posicionamento, naming, linguagem de marca e guia de uso.'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Estratégico',
      description: 'Gestão orientada a posicionamento, aquisição e escala.'
    },
    {
      icon: Monitor,
      title: 'Experiência Digital',
      description: 'Sites e interfaces que transformam visitas em oportunidades reais.'
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 px-4 lg:px-8 bg-black"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Ecossistema de <span className="text-[#FFD700]">Crescimento</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#1A1A1A] p-8 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300 group hover:scale-105"
            >
              <service.icon className="w-12 h-12 text-[#FFD700] mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
