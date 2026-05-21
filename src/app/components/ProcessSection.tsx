import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Search, Target, Palette, Rocket } from 'lucide-react';

export default function ProcessSection() {
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

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Diagnóstico',
      description: 'Análise profunda do posicionamento atual'
    },
    {
      icon: Target,
      number: '02',
      title: 'Posicionamento Estratégico',
      description: 'Definição de território e diferenciais'
    },
    {
      icon: Palette,
      number: '03',
      title: 'Execução Criativa',
      description: 'Materialização da identidade premium'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Crescimento & Otimização',
      description: 'Escala e refinamento contínuo'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 lg:px-8 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Como <span className="text-[#FFD700]">elevamos</span> marcas
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-[#FFD700]/20 mb-4">
                {step.number}
              </div>
              <step.icon className="w-10 h-10 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#FFD700]/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
