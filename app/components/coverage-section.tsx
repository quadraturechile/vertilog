'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Building2, Truck, CheckCircle2 } from 'lucide-react'

const coveragePoints = [
  {
    icon: MapPin,
    title: 'Llegamos donde tu proyecto lo necesite',
    description: 'Desplegamos nuestras soluciones en cualquier punto del país'
  },
  {
    icon: Building2,
    title: 'Base operativa en Santiago, RM',
    description: 'Centro de operaciones estratégico para servicio nacional'
  },
  {
    icon: Truck,
    title: 'De Arica a Punta Arenas',
    description: 'Coordinamos y ejecutamos proyectos en todo Chile'
  },
  {
    icon: CheckCircle2,
    title: 'Soluciones de alta calidad',
    description: 'Entregamos soluciones modulares eficientes y profesionales'
  },
]

export default function CoverageSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="cobertura" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#575756] mb-4">
            Cobertura a Nivel <span className="text-[#95C11F]">Nacional</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios profesionales de arriendo y venta de bodegas modulares,
            adaptándonos a las necesidades específicas de cada proyecto industrial en todo Chile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coveragePoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-[#95C11F]/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#95C11F]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#575756]">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Map Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-white rounded-lg p-8 shadow-md text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#95C11F]/10 rounded-full">
            <MapPin className="w-6 h-6 text-[#95C11F]" />
            <span className="text-lg font-semibold text-[#575756]">
              Cobertura Nacional: Desde Arica hasta Punta Arenas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
