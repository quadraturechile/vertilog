'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Zap, Shield, Clock } from 'lucide-react'

const values = [
  {
    icon: Zap,
    title: 'Flexibilidad Total para Cada Proyecto',
    description: 'Adaptamos nuestras soluciones a las necesidades específicas de tu operación, sin importar el tamaño o complejidad del proyecto.'
  },
  {
    icon: Shield,
    title: 'Resistencia y Calidad Superior',
    description: 'Estructuras modulares diseñadas con materiales de primera calidad que garantizan durabilidad y resistencia en condiciones exigentes.'
  },
  {
    icon: Clock,
    title: 'Implementación Ágil',
    description: 'Tiempos de instalación reducidos que permiten poner en marcha tu proyecto de forma rápida y eficiente.'
  },
]

export default function ValueSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="valor" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/nuestrovaloragregado.jpeg"
                alt="Vista aérea de instalaciones modulares VERTILOG"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#95C11F]/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#575756]/10 rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#575756] mb-6">
              Nuestro Valor <span className="text-[#95C11F]">Agregado</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Lo que nos diferencia en el mercado de soluciones modulares es nuestro compromiso
              con la excelencia y la satisfacción del cliente.
            </p>

            <div className="space-y-6">
              {values.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#95C11F]/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#95C11F]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#575756] mb-2 uppercase tracking-wide">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
