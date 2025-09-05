"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Globe, 
  Brain, 
  Database, 
  Zap, 
  Palette, 
  ArrowRight,
  Check
} from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, fast, and scalable web applications",
    features: [
      "Next.js & React applications",
      "High-performance backends", 
      "API design & integration",
      "Progressive Web Apps"
    ],
    highlight: "From localhost to production in minutes"
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Intelligent features powered by cutting-edge AI",
    features: [
      "ChatGPT & LLM integration",
      "Workflow automation",
      "Intelligent content generation", 
      "AI-powered search"
    ],
    highlight: "Deploy AI that actually works"
  },
  {
    icon: Database,
    title: "Custom Solutions",
    description: "Tailored systems for your specific needs",
    features: [
      "Custom model training",
      "Vector database setup",
      "Document processing",
      "Knowledge base integration"
    ],
    highlight: "Built for your unique requirements"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized for speed and reliability",
    features: [
      "Core Web Vitals optimization",
      "CDN & caching strategies",
      "Database performance tuning",
      "Load testing & monitoring"
    ],
    highlight: "99.9% uptime guaranteed"
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Consistent, accessible user experiences",
    features: [
      "Component libraries",
      "Design token systems",
      "Accessibility compliance",
      "Cross-platform consistency"
    ],
    highlight: "Design once, deploy everywhere"
  }
]

export function ServicesSection() {
  const router = useRouter()

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Ship faster with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              best practices
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From rapid prototypes to enterprise solutions, we handle every aspect 
            of modern web development and AI integration.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-gray-300 bg-white h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-gray-100 text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="mt-3 px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full inline-block">
                    {service.highlight}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => router.push("/contact")}
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
