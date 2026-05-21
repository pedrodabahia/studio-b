import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
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

  const faqs = [
    {
      question: 'Quanto custa?',
      answer: 'Nossos projetos começam a partir de R$ 15.000 e variam conforme escopo, complexidade e objetivos de negócio. Cada proposta é personalizada para entregar máximo retorno sobre investimento.'
    },
    {
      question: 'Quanto tempo leva?',
      answer: 'Projetos de branding completo levam de 6 a 12 semanas. Estratégia de marketing digital pode iniciar em 2 semanas. Priorizamos qualidade e resultados sustentáveis ao invés de prazos arbitrários.'
    },
    {
      question: 'Atendem online?',
      answer: 'Sim. Trabalhamos remotamente com clientes em todo Brasil e no exterior. Nossa metodologia digital garante entregas de excelência independente da localização.'
    },
    {
      question: 'Estratégia está inclusa?',
      answer: 'Sempre. Não existe design premium sem estratégia sólida. Todos os nossos projetos começam com diagnóstico estratégico e posicionamento de mercado.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 lg:px-8 bg-[#1A1A1A]">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Perguntas que marcas <span className="text-[#FFD700]">sérias</span> fazem
        </motion.h2>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Accordion.Item
                value={`item-${index}`}
                className="bg-black rounded-lg border border-[#FFD700]/20 overflow-hidden"
              >
                <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#FFD700]/5 transition-colors duration-300 group">
                  <span className="text-xl font-semibold">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-[#FFD700] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-4 text-gray-300 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
