import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const redirectWhatsapp = () => {
    window.open("https://wa.me/557399008005?text=OI%C3%A1!%20Gostaia%20de%20fazer%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20na%20minha%20empresa")
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
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-4 lg:px-8 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Sua marca pode continuar comum...
          <br />
          ou <span className="text-[#FFD700]">crescer agora</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-12"
        >
          Site bom vende. Site premium seleciona cliente.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          onClick={redirectWhatsapp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#FFD700] text-black px-12 py-5 rounded-lg text-lg font-bold hover:bg-[#FFD700]/90 transition-all duration-300 hover:scale-105"
        >
          Solicitar Diagnóstico Estratégico
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-16 border-t border-[#FFD700]/20"
        >
          <p className="text-2xl font-bold mb-4">
            <span className="text-white">studio.</span>
            <span className="text-[#FFD700]">b</span>
          </p>
          <p className="text-gray-400">
            Onde estética premium encontra resultados concretos
          </p>
          <p className="text-sm text-gray-500 mt-4">
            © 2026 Studio.b - Todos os direitos reservados
          </p>
        </motion.div>
      </div>
    </section>
  );
}
