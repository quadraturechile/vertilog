'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="relative w-40 h-12 mb-4">
              <Image
                src="https://cdn.abacus.ai/images/15e44683-502a-4a71-b90e-6e32b1f5888e.png"
                alt="VERTILOG Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Soluciones modulares profesionales para arriendo y venta de bodegas en todo Chile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#95C11F]">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-gray-400 hover:text-[#95C11F] transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#cobertura" className="text-gray-400 hover:text-[#95C11F] transition-colors text-sm">
                  Cobertura Nacional
                </Link>
              </li>
              <li>
                <Link href="#especializacion" className="text-gray-400 hover:text-[#95C11F] transition-colors text-sm">
                  Especialización
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-[#95C11F] transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#95C11F]">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-[#95C11F]" />
                <a href="tel:+56968406161" className="hover:text-[#95C11F] transition-colors">
                  +56 9 6840 6161
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#95C11F]" />
                <a href="mailto:comercial@vertilog.cl" className="hover:text-[#95C11F] transition-colors break-all">
                  comercial@vertilog.cl
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#95C11F]" />
                <span>Santiago, Región Metropolitana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} VERTILOG - Vertical Logística Soluciones Modulares. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
