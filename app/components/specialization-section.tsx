'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Pickaxe, Package, Warehouse, Factory } from 'lucide-react'

const specializations = [
  {
    icon: Pickaxe,
    title: 'Minería y Cargas de Proyectos',
    description: 'Soluciones robustas para el sector minero y proyectos de gran envergadura'
  },
  {
    icon: Package,
    title: 'Operadores Logísticos',
    description: 'Espacios flexibles para operaciones logísticas y distribución'
  },
  {
    icon: Warehouse,
    title: 'Centros de Distribución',
    description: 'Infraestructura modular para centros de almacenamiento y distribución'
  },
  {
    icon: Factory,
    title: 'Embotelladoras',
    description: 'Bodegas especializadas para plantas embotelladoras e industria alimentaria'
  },
]

export default function SpecializationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="especializacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#575756] mb-6">
              Áreas de <span className="text-[#95C11F]">Especialización</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Brindamos soluciones modulares especializadas para diversos sectores industriales,
              adaptándonos a los requerimientos específicos de cada industria.
            </p>

            <div className="space-y-6">
              {specializations.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#95C11F]/10 rounded-lg flex items-center justify-center group-hover:bg-[#95C11F]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[#95C11F]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#575756] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/img2_exterior_warehouse.jpeg"
                alt="Instalaciones exteriores de bodegas modulares VERTILOG"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#95C11F]/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#575756]/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
