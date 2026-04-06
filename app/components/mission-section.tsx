'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'

export default function MissionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-[#171717] text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#95C11F] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#95C11F] rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-[#95C11F]/20 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-[#95C11F]" />
            </div>
          </div>

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed text-gray-200">
            Nuestras soluciones modulares van más allá de lo convencional,{' '}
            <span className="text-[#95C11F] font-normal">integrando todos los servicios complementarios</span>{' '}
            necesarios para ejecutar proyectos de{' '}
            <span className="text-[#95C11F] font-normal">alta complejidad</span>{' '}
            de principio a fin.
          </blockquote>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-lg text-gray-400">
              Más que proveedores, somos <span className="text-[#95C11F] font-semibold">socios estratégicos</span> en el éxito de tu proyecto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
