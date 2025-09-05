'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ru'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services", 
    "nav.aiDemo": "AI Demo",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "nav.getStarted": "Get Started",
    
    // Hero Section
    "hero.badge": "Now with AI-powered development",
    "hero.title": "Build and deploy",
    "hero.titleHighlight": "modern",
    "hero.titleEnd": "websites",
    "hero.description": "We provide the developer tools and cloud infrastructure to build, scale, and secure faster, more personalized web experiences.",
    "hero.startDeploying": "Start Deploying",
    "hero.seeOurWork": "See Our Work",
    "hero.uptime": "Uptime",
    "hero.responseTime": "Response Time", 
    "hero.projectsDelivered": "Projects Delivered",
    "hero.support": "Support",
    
    // Services Section
    "services.title": "Ship faster with",
    "services.titleHighlight": "best practices",
    "services.description": "From rapid prototypes to enterprise solutions, we handle every aspect of modern web development and AI integration.",
    "services.startProject": "Start Your Project",
    
    // Service Cards
    "services.webDev.title": "Web Development",
    "services.webDev.description": "Modern, fast, and scalable web applications",
    "services.webDev.highlight": "From localhost to production in minutes",
    "services.webDev.feature1": "Next.js & React applications",
    "services.webDev.feature2": "High-performance backends",
    "services.webDev.feature3": "API design & integration", 
    "services.webDev.feature4": "Progressive Web Apps",
    
    "services.ai.title": "AI Integration",
    "services.ai.description": "Intelligent features powered by cutting-edge AI",
    "services.ai.highlight": "Deploy AI that actually works",
    "services.ai.feature1": "ChatGPT & LLM integration",
    "services.ai.feature2": "Workflow automation",
    "services.ai.feature3": "Intelligent content generation",
    "services.ai.feature4": "AI-powered search",
    
    "services.custom.title": "Custom Solutions",
    "services.custom.description": "Tailored systems for your specific needs",
    "services.custom.highlight": "Built for your unique requirements",
    "services.custom.feature1": "Custom model training",
    "services.custom.feature2": "Vector database setup",
    "services.custom.feature3": "Document processing",
    "services.custom.feature4": "Knowledge base integration",
    
    "services.performance.title": "Performance",
    "services.performance.description": "Optimized for speed and reliability",
    "services.performance.highlight": "99.9% uptime guaranteed",
    "services.performance.feature1": "Core Web Vitals optimization",
    "services.performance.feature2": "CDN & caching strategies",
    "services.performance.feature3": "Database performance tuning",
    "services.performance.feature4": "Load testing & monitoring",
    
    "services.design.title": "Design Systems",
    "services.design.description": "Consistent, accessible user experiences",
    "services.design.highlight": "Design once, deploy everywhere",
    "services.design.feature1": "Component libraries",
    "services.design.feature2": "Design token systems",
    "services.design.feature3": "Accessibility compliance",
    "services.design.feature4": "Cross-platform consistency",
    
    // Contact Page
    "contact.backToHome": "Back to Home",
    "contact.title": "Let's Build Something",
    "contact.titleHighlight": "Amazing",
    "contact.description": "Ready to transform your vision into reality? Let's discuss your project and create a custom solution that exceeds your expectations.",
    "contact.formTitle": "Start Your Project",
    "contact.formDescription": "Fill out the form below and we'll get back to you within 24 hours.",
  },
  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.aiDemo": "AI Демо",
    "nav.portfolio": "Портфолио",
    "nav.contact": "Контакты",
    "nav.getStarted": "Начать",
    
    // Hero Section
    "hero.badge": "Теперь с разработкой на основе ИИ",
    "hero.title": "Создавайте и развертывайте",
    "hero.titleHighlight": "современные",
    "hero.titleEnd": "веб-сайты",
    "hero.description": "Мы предоставляем инструменты разработчика и облачную инфраструктуру для создания, масштабирования и защиты более быстрых и персонализированных веб-решений.",
    "hero.startDeploying": "Начать Развертывание",
    "hero.seeOurWork": "Посмотреть Работы",
    "hero.uptime": "Время работы",
    "hero.responseTime": "Время отклика",
    "hero.projectsDelivered": "Выполненных проектов",
    "hero.support": "Поддержка",
    
    // Services Section
    "services.title": "Доставляйте быстрее с",
    "services.titleHighlight": "лучшими практиками",
    "services.description": "От быстрых прототипов до корпоративных решений, мы обрабатываем каждый аспект современной веб-разработки и интеграции ИИ.",
    "services.startProject": "Начать Проект",
    
    // Service Cards
    "services.webDev.title": "Веб-разработка",
    "services.webDev.description": "Современные, быстрые и масштабируемые веб-приложения",
    "services.webDev.highlight": "От локального хоста до продакшена за минуты",
    "services.webDev.feature1": "Next.js и React приложения",
    "services.webDev.feature2": "Высокопроизводительные бэкенды",
    "services.webDev.feature3": "Дизайн и интеграция API",
    "services.webDev.feature4": "Прогрессивные веб-приложения",
    
    "services.ai.title": "Интеграция ИИ",
    "services.ai.description": "Интеллектуальные функции на основе передового ИИ",
    "services.ai.highlight": "Развертывание ИИ, которое действительно работает",
    "services.ai.feature1": "Интеграция ChatGPT и LLM",
    "services.ai.feature2": "Автоматизация рабочих процессов",
    "services.ai.feature3": "Интеллектуальная генерация контента",
    "services.ai.feature4": "Поиск на основе ИИ",
    
    "services.custom.title": "Индивидуальные решения",
    "services.custom.description": "Системы, адаптированные под ваши конкретные потребности",
    "services.custom.highlight": "Создано для ваших уникальных требований",
    "services.custom.feature1": "Обучение пользовательских моделей",
    "services.custom.feature2": "Настройка векторной базы данных",
    "services.custom.feature3": "Обработка документов",
    "services.custom.feature4": "Интеграция базы знаний",
    
    "services.performance.title": "Производительность",
    "services.performance.description": "Оптимизировано для скорости и надежности",
    "services.performance.highlight": "Гарантированное время работы 99.9%",
    "services.performance.feature1": "Оптимизация Core Web Vitals",
    "services.performance.feature2": "Стратегии CDN и кэширования",
    "services.performance.feature3": "Настройка производительности БД",
    "services.performance.feature4": "Нагрузочное тестирование и мониторинг",
    
    "services.design.title": "Дизайн-системы",
    "services.design.description": "Согласованный, доступный пользовательский опыт",
    "services.design.highlight": "Спроектируйте один раз, развертывайте везде",
    "services.design.feature1": "Библиотеки компонентов",
    "services.design.feature2": "Системы дизайн-токенов",
    "services.design.feature3": "Соответствие доступности",
    "services.design.feature4": "Кроссплатформенная согласованность",
    
    // Contact Page
    "contact.backToHome": "Вернуться на главную",
    "contact.title": "Давайте создадим что-то",
    "contact.titleHighlight": "Потрясающее",
    "contact.description": "Готовы воплотить свое видение в реальность? Давайте обсудим ваш проект и создадим индивидуальное решение, которое превзойдет ваши ожидания.",
    "contact.formTitle": "Начать ваш проект",
    "contact.formDescription": "Заполните форму ниже, и мы свяжемся с вами в течение 24 часов.",
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['en', 'ru'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
