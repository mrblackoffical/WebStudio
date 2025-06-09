import React from 'react';
import { FileCode2, Workflow, PenSquare, ListChecks, Rocket, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

const Process: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { language } = useLanguage();

  const processIcons = [
    <MessageSquare className="h-8 w-8 text-white" />,
    <Workflow className="h-8 w-8 text-white" />,
    <PenSquare className="h-8 w-8 text-white" />,
    <FileCode2 className="h-8 w-8 text-white" />,
    <ListChecks className="h-8 w-8 text-white" />,
    <Rocket className="h-8 w-8 text-white" />
  ];

  // Check if current language is Armenian
  const isArmenian = language.code === 'hy';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="process" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="section-title-container">
          <motion.h2 
            className={`section-title ${isArmenian ? 'tracking-wide' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {language.content.process.title}
          </motion.h2>
          <motion.p 
            className={`section-subtitle ${isArmenian ? 'tracking-wide leading-relaxed' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {language.content.process.subtitle}
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {language.content.process.steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="card p-6 h-full flex flex-col">
                <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 flex items-center justify-center shadow-lg">
                  {processIcons[index]}
                </div>
                <div className="mt-8 mb-4">
                  <div className="w-12 h-1 bg-primary-600 dark:bg-primary-500 rounded-full"></div>
                </div>
                <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 ${
                  isArmenian ? 'tracking-wide leading-relaxed' : ''
                }`}>
                  {step.title}
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 ${
                  isArmenian ? 'tracking-wide leading-relaxed text-sm' : ''
                }`}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className={`btn btn-primary ${isArmenian ? 'tracking-wide' : ''}`}
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;