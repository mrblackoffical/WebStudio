import React, { createContext, useContext, useState } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  content: {
    header: {
      logo: string;
      nav: {
        home: string;
        services: string;
        process: string;
        portfolio: string;
        testimonials: string;
        contact: string;
      };
      cta: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: {
        primary: string;
        secondary: string;
      };
    };
    services: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
        features: string[];
      }>;
    };
    process: {
      title: string;
      subtitle: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    portfolio: {
      title: string;
      subtitle: string;
      categories: {
        all: string;
        ecommerce: string;
        business: string;
        realEstate: string;
        healthcare: string;
        mobile: string;
        education: string;
      };
      projects: Array<{
        title: string;
        description: string;
        longDescription: string;
        features: string[];
      }>;
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: Array<{
        content: string;
        name: string;
        role: string;
        company: string;
      }>;
    };
    contact: {
      title: string;
      subtitle: string;
      info: {
        phone: string;
        email: string;
        address: string;
      };
      form: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
        submit: string;
        success: string;
      };
      social: {
        follow: string;
      };
    };
  };
}

const allLanguages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    content: {
      header: {
        logo: 'WebCraft Pro',
        nav: {
          home: 'Home',
          services: 'Services',
          process: 'Process',
          portfolio: 'Portfolio',
          testimonials: 'Testimonials',
          contact: 'Contact'
        },
        cta: 'Get Started'
      },
      hero: {
        title: 'Professional Web Development Services',
        subtitle: 'We create stunning, responsive websites that drive results for your business',
        cta: {
          primary: 'Start Your Project',
          secondary: 'View Our Work'
        }
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive web solutions tailored to your needs',
        items: [
          {
            title: 'Custom Web Development',
            description: 'Tailored websites built from scratch to meet your specific requirements',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile First']
          },
          {
            title: 'E-commerce Solutions',
            description: 'Complete online stores with secure payment processing and inventory management',
            features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Analytics']
          },
          {
            title: 'Web Application Development',
            description: 'Complex web applications with advanced functionality and user interactions',
            features: ['User Authentication', 'Database Integration', 'API Development', 'Real-time Features']
          }
        ]
      },
      process: {
        title: 'Our Process',
        subtitle: 'How we bring your vision to life',
        steps: [
          {
            title: 'Discovery & Planning',
            description: 'We understand your goals, target audience, and project requirements'
          },
          {
            title: 'Design & Prototyping',
            description: 'Create wireframes and visual designs that align with your brand'
          },
          {
            title: 'Development & Testing',
            description: 'Build your website with clean code and thorough testing'
          },
          {
            title: 'Launch & Support',
            description: 'Deploy your site and provide ongoing maintenance and support'
          }
        ]
      },
      portfolio: {
        title: 'Our Portfolio',
        subtitle: 'Recent projects we\'ve completed for our clients',
        categories: {
          all: 'All',
          ecommerce: 'E-commerce',
          business: 'Business',
          realEstate: 'Real Estate',
          healthcare: 'Healthcare',
          mobile: 'Mobile',
          education: 'Education'
        },
        projects: [
          {
            title: 'E-commerce Platform',
            description: 'Modern online store with advanced features',
            longDescription: 'A comprehensive e-commerce solution built with React and Node.js, featuring real-time inventory management, secure payment processing, and advanced analytics.',
            features: ['Payment Integration', 'Inventory Management', 'Analytics Dashboard', 'Mobile Responsive']
          },
          {
            title: 'Business Website',
            description: 'Professional corporate website',
            longDescription: 'A sleek corporate website designed to showcase services and drive conversions, built with modern web technologies and optimized for search engines.',
            features: ['SEO Optimized', 'Contact Forms', 'Service Showcase', 'Blog Integration']
          },
          {
            title: 'Real Estate Portal',
            description: 'Property listing and management system',
            longDescription: 'A comprehensive real estate platform allowing property listings, virtual tours, and client management, built with advanced search and filtering capabilities.',
            features: ['Property Search', 'Virtual Tours', 'Client Portal', 'Map Integration']
          }
        ]
      },
      testimonials: {
        title: 'What Our Clients Say',
        subtitle: 'Don\'t just take our word for it',
        items: [
          {
            content: 'WebCraft Pro delivered exactly what we needed. Their attention to detail and professional approach made the entire process smooth and enjoyable.',
            name: 'Sarah Johnson',
            role: 'Marketing Director',
            company: 'TechStart Inc.'
          },
          {
            content: 'The team exceeded our expectations. Our new website has significantly improved our online presence and customer engagement.',
            name: 'Michael Chen',
            role: 'CEO',
            company: 'Digital Solutions'
          },
          {
            content: 'Professional, reliable, and creative. They transformed our vision into a beautiful, functional website that our customers love.',
            name: 'Emily Rodriguez',
            role: 'Founder',
            company: 'Creative Studio'
          }
        ]
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Ready to start your project? Let\'s discuss your needs',
        info: {
          phone: '+1 (555) 123-4567',
          email: 'hello@webcraftpro.com',
          address: '123 Web Street, Digital City, DC 12345'
        },
        form: {
          name: 'Full Name',
          email: 'Email Address',
          phone: 'Phone Number',
          subject: 'Subject',
          message: 'Message',
          submit: 'Send Message',
          success: 'Thank you! Your message has been sent successfully.'
        },
        social: {
          follow: 'Follow Us'
        }
      }
    }
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    content: {
      header: {
        logo: 'WebCraft Pro',
        nav: {
          home: 'Inicio',
          services: 'Servicios',
          process: 'Proceso',
          portfolio: 'Portafolio',
          testimonials: 'Testimonios',
          contact: 'Contacto'
        },
        cta: 'Comenzar'
      },
      hero: {
        title: 'Servicios Profesionales de Desarrollo Web',
        subtitle: 'Creamos sitios web impresionantes y responsivos que generan resultados para tu negocio',
        cta: {
          primary: 'Iniciar Tu Proyecto',
          secondary: 'Ver Nuestro Trabajo'
        }
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones web integrales adaptadas a tus necesidades',
        items: [
          {
            title: 'Desarrollo Web Personalizado',
            description: 'Sitios web hechos a medida desde cero para cumplir con tus requisitos específicos',
            features: ['Diseño Responsivo', 'Optimizado SEO', 'Carga Rápida', 'Mobile First']
          },
          {
            title: 'Soluciones E-commerce',
            description: 'Tiendas online completas con procesamiento seguro de pagos y gestión de inventario',
            features: ['Integración de Pagos', 'Gestión de Inventario', 'Seguimiento de Pedidos', 'Analíticas']
          },
          {
            title: 'Desarrollo de Aplicaciones Web',
            description: 'Aplicaciones web complejas con funcionalidad avanzada e interacciones de usuario',
            features: ['Autenticación de Usuario', 'Integración de Base de Datos', 'Desarrollo API', 'Características en Tiempo Real']
          }
        ]
      },
      process: {
        title: 'Nuestro Proceso',
        subtitle: 'Cómo damos vida a tu visión',
        steps: [
          {
            title: 'Descubrimiento y Planificación',
            description: 'Entendemos tus objetivos, audiencia objetivo y requisitos del proyecto'
          },
          {
            title: 'Diseño y Prototipado',
            description: 'Creamos wireframes y diseños visuales que se alinean con tu marca'
          },
          {
            title: 'Desarrollo y Pruebas',
            description: 'Construimos tu sitio web con código limpio y pruebas exhaustivas'
          },
          {
            title: 'Lanzamiento y Soporte',
            description: 'Desplegamos tu sitio y proporcionamos mantenimiento y soporte continuo'
          }
        ]
      },
      portfolio: {
        title: 'Nuestro Portafolio',
        subtitle: 'Proyectos recientes que hemos completado para nuestros clientes',
        categories: {
          all: 'Todos',
          ecommerce: 'E-commerce',
          business: 'Negocios',
          realEstate: 'Bienes Raíces',
          healthcare: 'Salud',
          mobile: 'Móvil',
          education: 'Educación'
        },
        projects: [
          {
            title: 'Plataforma E-commerce',
            description: 'Tienda online moderna con características avanzadas',
            longDescription: 'Una solución e-commerce integral construida con React y Node.js, con gestión de inventario en tiempo real, procesamiento seguro de pagos y analíticas avanzadas.',
            features: ['Integración de Pagos', 'Gestión de Inventario', 'Panel de Analíticas', 'Responsivo Móvil']
          },
          {
            title: 'Sitio Web Empresarial',
            description: 'Sitio web corporativo profesional',
            longDescription: 'Un elegante sitio web corporativo diseñado para mostrar servicios y generar conversiones, construido con tecnologías web modernas y optimizado para motores de búsqueda.',
            features: ['Optimizado SEO', 'Formularios de Contacto', 'Showcase de Servicios', 'Integración de Blog']
          },
          {
            title: 'Portal Inmobiliario',
            description: 'Sistema de listado y gestión de propiedades',
            longDescription: 'Una plataforma inmobiliaria integral que permite listados de propiedades, tours virtuales y gestión de clientes, construida con capacidades avanzadas de búsqueda y filtrado.',
            features: ['Búsqueda de Propiedades', 'Tours Virtuales', 'Portal de Clientes', 'Integración de Mapas']
          }
        ]
      },
      testimonials: {
        title: 'Lo Que Dicen Nuestros Clientes',
        subtitle: 'No solo tomes nuestra palabra',
        items: [
          {
            content: 'WebCraft Pro entregó exactamente lo que necesitábamos. Su atención al detalle y enfoque profesional hizo que todo el proceso fuera suave y agradable.',
            name: 'Sarah Johnson',
            role: 'Directora de Marketing',
            company: 'TechStart Inc.'
          },
          {
            content: 'El equipo superó nuestras expectativas. Nuestro nuevo sitio web ha mejorado significativamente nuestra presencia online y el engagement de clientes.',
            name: 'Michael Chen',
            role: 'CEO',
            company: 'Digital Solutions'
          },
          {
            content: 'Profesionales, confiables y creativos. Transformaron nuestra visión en un sitio web hermoso y funcional que nuestros clientes aman.',
            name: 'Emily Rodriguez',
            role: 'Fundadora',
            company: 'Creative Studio'
          }
        ]
      },
      contact: {
        title: 'Ponte en Contacto',
        subtitle: '¿Listo para comenzar tu proyecto? Hablemos de tus necesidades',
        info: {
          phone: '+1 (555) 123-4567',
          email: 'hola@webcraftpro.com',
          address: '123 Web Street, Digital City, DC 12345'
        },
        form: {
          name: 'Nombre Completo',
          email: 'Dirección de Email',
          phone: 'Número de Teléfono',
          subject: 'Asunto',
          message: 'Mensaje',
          submit: 'Enviar Mensaje',
          success: '¡Gracias! Tu mensaje ha sido enviado exitosamente.'
        },
        social: {
          follow: 'Síguenos'
        }
      }
    }
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    content: {
      header: {
        logo: 'WebCraft Pro',
        nav: {
          home: 'Accueil',
          services: 'Services',
          process: 'Processus',
          portfolio: 'Portfolio',
          testimonials: 'Témoignages',
          contact: 'Contact'
        },
        cta: 'Commencer'
      },
      hero: {
        title: 'Services Professionnels de Développement Web',
        subtitle: 'Nous créons des sites web époustouflants et responsifs qui génèrent des résultats pour votre entreprise',
        cta: {
          primary: 'Démarrer Votre Projet',
          secondary: 'Voir Notre Travail'
        }
      },
      services: {
        title: 'Nos Services',
        subtitle: 'Solutions web complètes adaptées à vos besoins',
        items: [
          {
            title: 'Développement Web Personnalisé',
            description: 'Sites web sur mesure construits de zéro pour répondre à vos exigences spécifiques',
            features: ['Design Responsif', 'Optimisé SEO', 'Chargement Rapide', 'Mobile First']
          },
          {
            title: 'Solutions E-commerce',
            description: 'Boutiques en ligne complètes avec traitement sécurisé des paiements et gestion des stocks',
            features: ['Intégration Paiements', 'Gestion Inventaire', 'Suivi Commandes', 'Analytiques']
          },
          {
            title: 'Développement d\'Applications Web',
            description: 'Applications web complexes avec fonctionnalités avancées et interactions utilisateur',
            features: ['Authentification Utilisateur', 'Intégration Base de Données', 'Développement API', 'Fonctionnalités Temps Réel']
          }
        ]
      },
      process: {
        title: 'Notre Processus',
        subtitle: 'Comment nous donnons vie à votre vision',
        steps: [
          {
            title: 'Découverte et Planification',
            description: 'Nous comprenons vos objectifs, votre public cible et les exigences du projet'
          },
          {
            title: 'Design et Prototypage',
            description: 'Créer des wireframes et des designs visuels qui s\'alignent avec votre marque'
          },
          {
            title: 'Développement et Tests',
            description: 'Construire votre site web avec du code propre et des tests approfondis'
          },
          {
            title: 'Lancement et Support',
            description: 'Déployer votre site et fournir une maintenance et un support continus'
          }
        ]
      },
      portfolio: {
        title: 'Notre Portfolio',
        subtitle: 'Projets récents que nous avons complétés pour nos clients',
        categories: {
          all: 'Tous',
          ecommerce: 'E-commerce',
          business: 'Entreprise',
          realEstate: 'Immobilier',
          healthcare: 'Santé',
          mobile: 'Mobile',
          education: 'Éducation'
        },
        projects: [
          {
            title: 'Plateforme E-commerce',
            description: 'Boutique en ligne moderne avec fonctionnalités avancées',
            longDescription: 'Une solution e-commerce complète construite avec React et Node.js, avec gestion d\'inventaire en temps réel, traitement sécurisé des paiements et analytiques avancées.',
            features: ['Intégration Paiements', 'Gestion Inventaire', 'Tableau de Bord Analytiques', 'Responsive Mobile']
          },
          {
            title: 'Site Web d\'Entreprise',
            description: 'Site web corporatif professionnel',
            longDescription: 'Un site web corporatif élégant conçu pour présenter les services et générer des conversions, construit avec des technologies web modernes et optimisé pour les moteurs de recherche.',
            features: ['Optimisé SEO', 'Formulaires Contact', 'Vitrine Services', 'Intégration Blog']
          },
          {
            title: 'Portail Immobilier',
            description: 'Système de listing et gestion de propriétés',
            longDescription: 'Une plateforme immobilière complète permettant les listings de propriétés, visites virtuelles et gestion clients, construite avec des capacités avancées de recherche et filtrage.',
            features: ['Recherche Propriétés', 'Visites Virtuelles', 'Portail Clients', 'Intégration Cartes']
          }
        ]
      },
      testimonials: {
        title: 'Ce Que Disent Nos Clients',
        subtitle: 'Ne nous croyez pas sur parole',
        items: [
          {
            content: 'WebCraft Pro a livré exactement ce dont nous avions besoin. Leur attention aux détails et approche professionnelle ont rendu tout le processus fluide et agréable.',
            name: 'Sarah Johnson',
            role: 'Directrice Marketing',
            company: 'TechStart Inc.'
          },
          {
            content: 'L\'équipe a dépassé nos attentes. Notre nouveau site web a considérablement amélioré notre présence en ligne et l\'engagement client.',
            name: 'Michael Chen',
            role: 'PDG',
            company: 'Digital Solutions'
          },
          {
            content: 'Professionnels, fiables et créatifs. Ils ont transformé notre vision en un site web beau et fonctionnel que nos clients adorent.',
            name: 'Emily Rodriguez',
            role: 'Fondatrice',
            company: 'Creative Studio'
          }
        ]
      },
      contact: {
        title: 'Entrer en Contact',
        subtitle: 'Prêt à démarrer votre projet ? Discutons de vos besoins',
        info: {
          phone: '+1 (555) 123-4567',
          email: 'bonjour@webcraftpro.com',
          address: '123 Web Street, Digital City, DC 12345'
        },
        form: {
          name: 'Nom Complet',
          email: 'Adresse Email',
          phone: 'Numéro de Téléphone',
          subject: 'Sujet',
          message: 'Message',
          submit: 'Envoyer Message',
          success: 'Merci ! Votre message a été envoyé avec succès.'
        },
        social: {
          follow: 'Suivez-nous'
        }
      }
    }
  }
];

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(allLanguages[0]);

  const value = {
    language,
    setLanguage,
    languages: allLanguages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;