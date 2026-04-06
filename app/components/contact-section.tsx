'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import ContactForm from './contact-form'

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono',
    content: '+56 9 6840 6161',
    link: 'tel:+56968406161'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'comercial@vertilog.cl',
    link: 'mailto:comercial@vertilog.cl'
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    content: 'Santiago, Región Metropolitana',
    link: null
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: 'Chatea con nosotros',
    link: 'https://wa.me/56968406161?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20arriendo%20de%20bodegas%20modulares'
  },
]

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#575756] mb-4">
            Hablemos de tu <span className="text-[#95C11F]">Proyecto</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestro equipo está listo para asesorarte y entregar la mejor solución modular
            para tus necesidades. Contáctanos hoy mismo.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            const content = (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-[#95C11F]/5 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#95C11F]/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#95C11F]" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-[#575756] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.content}
                </p>
              </motion.div>
            )

            return item.link ? (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {content}
              </a>
            ) : (
              content
            )
          })}
        </div>

        {/* Contact Form and Manager Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </div>

          {/* Manager Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#171717] text-white rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-2">José Ignacio Munilla</h3>
            <p className="text-[#95C11F] font-semibold mb-6">Gerente Comercial</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#95C11F]" />
                <a href="tel:+56968406161" className="hover:text-[#95C11F] transition-colors">
                  +56 9 6840 6161
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#95C11F]" />
                <a href="mailto:comercial@vertilog.cl" className="hover:text-[#95C11F] transition-colors break-all">
                  comercial@vertilog.cl
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#95C11F]" />
                <span>Santiago, RM</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-400 leading-relaxed">
                Contacta directamente con nuestro gerente comercial para proyectos de gran envergadura
                o requerimientos especiales.
              </p>
            </div>

            <a
              href="https://wa.me/56968406161?text=Hola,%20me%20gustaría%20solicitar%20información%20sobre%20arriendo%20de%20bodegas%20modulares"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#95C11F] text-white rounded-md font-semibold hover:bg-[#7da519] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
