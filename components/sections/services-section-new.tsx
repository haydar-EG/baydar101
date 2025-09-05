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
import { useLanguage } from "@/lib/contexts/language-context"

export function ServicesSection() {
  const router = useRouter()
  const { t } = useLanguage()

  const services = [
    {
      icon: Globe,
      titleKey: "services.webDev.title",
      descriptionKey: "services.webDev.description",
      featureKeys: [
        "services.webDev.feature1",
        "services.webDev.feature2", 
        "services.webDev.feature3",
        "services.webDev.feature4"
      ],
      highlightKey: "services.webDev.highlight"
    },
    {
      icon: Brain,
      titleKey: "services.ai.title",
      descriptionKey: "services.ai.description",
      featureKeys: [
        "services.ai.feature1",
        "services.ai.feature2",
        "services.ai.feature3", 
        "services.ai.feature4"
      ],
      highlightKey: "services.ai.highlight"
    },
    {
      icon: Database,
      titleKey: "services.custom.title",
      descriptionKey: "services.custom.description",
      featureKeys: [
        "services.custom.feature1",
        "services.custom.feature2",
        "services.custom.feature3",
        "services.custom.feature4"
      ],
      highlightKey: "services.custom.highlight"
    },
    {
      icon: Zap,
      titleKey: "services.performance.title",
      descriptionKey: "services.performance.description",
      featureKeys: [
        "services.performance.feature1",
        "services.performance.feature2",
        "services.performance.feature3",
        "services.performance.feature4"
      ],
      highlightKey: "services.performance.highlight"
    },
    {
      icon: Palette,
      titleKey: "services.design.title",
      descriptionKey: "services.design.description",
      featureKeys: [
        "services.design.feature1",
        "services.design.feature2",
        "services.design.feature3",
        "services.design.feature4"
      ],
      highlightKey: "services.design.highlight"
    }
  ]

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
            {t("services.title")}
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("services.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("services.description")}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
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
                    <CardTitle className="text-xl font-bold text-black">{t(service.titleKey)}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {t(service.descriptionKey)}
                  </CardDescription>
                  <div className="mt-3 px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full inline-block">
                    {t(service.highlightKey)}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {service.featureKeys.map((featureKey, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{t(featureKey)}</span>
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
            {t("services.startProject")}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
