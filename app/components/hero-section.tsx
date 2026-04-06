'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/img1_interior_warehouse.jpeg"
            alt="Interior de bodega modular VERTILOG"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block"
          >
            <span className="inline-block px-6 py-2 bg-[#95C11F]/20 border border-[#95C11F] rounded-full text-[#95C11F] font-semibold text-sm tracking-wide uppercase backdrop-blur-sm">
              Soluciones Modulares Profesionales
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Vertical Logística
            <br />
            <span className="text-[#95C11F]">Soluciones Modulares</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Expertos en arriendo y venta de bodegas modulares con cobertura nacional
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="#contacto"
              className="px-8 py-4 bg-[#95C11F] text-white rounded-md font-semibold text-lg hover:bg-[#7da519] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicitar Cotización
            </Link>
            <Link
              href="#cobertura"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-md font-semibold text-lg hover:bg-white hover:text-[#575756] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Conocer Más
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-white"
          >
            <span className="text-sm font-medium">Desliza para explorar</span>
            <ChevronDown size={24} className="text-[#95C11F]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
