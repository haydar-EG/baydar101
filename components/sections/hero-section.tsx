"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/contexts/language-context"

export function HeroSection() {
  const router = useRouter()
  const { t } = useLanguage()

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-16">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white" />
      
      {/* Floating Gradient Orb */}
      <div className="absolute top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full blur-3xl opacity-30" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-sm text-gray-600 mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
              {t("hero.badge")}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-8 tracking-tight">
              {t("hero.title")}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("hero.titleHighlight")}
              </span>{" "}
              {t("hero.titleEnd")}
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              size="lg"
              onClick={() => router.push("/contact")}
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              {t("hero.startDeploying")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200"
            >
              <Play className="mr-2 h-5 w-5" />
              {t("hero.seeOurWork")}
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">99.9%</div>
              <div className="text-gray-600 text-sm">{t("hero.uptime")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">&lt;100ms</div>
              <div className="text-gray-600 text-sm">{t("hero.responseTime")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-600 text-sm">{t("hero.projectsDelivered")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">24/7</div>
              <div className="text-gray-600 text-sm">{t("hero.support")}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
