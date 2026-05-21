import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
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

  const testimonials = [
    {
      name: 'Rafael Costa',
      business: 'E-commerce Premium',
      result: 'Dobramos o faturamento em 6 meses com o reposicionamento estratégico da Studio.b'
    },
    {
      name: 'Marina Silva',
      business: 'Tech Startup',
      result: 'A identidade visual criada pela Studio.b nos posicionou como referência no mercado'
    },
    {
      name: 'Lucas Mendes',
      business: 'Consultoria Executiva',
      result: 'Transformaram nossa marca de commodity em autoridade premium no setor'
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
          O que nossas marcas dizem {' '}
          <span className="text-[#FFD700]">depois</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#1A1A1A] p-8 rounded-lg border border-[#FFD700]/20 hover:border-[#FFD700]/60 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#FFD700] mb-4" />
              <p className="text-gray-300 mb-6 italic">"{testimonial.result}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-[#FFD700]">{testimonial.business}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
