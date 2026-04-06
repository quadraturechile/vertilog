import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'VERTILOG - Arriendo de Bodegas Modulares en Chile',
  description: 'Soluciones modulares para arriendo y venta de bodegas en Chile. Cobertura nacional de Arica a Punta Arenas. Especialistas en minería, logística, centros de distribución y embotelladoras.',
  keywords: 'arriendo bodegas modulares, bodegas modulares chile, estructuras modulares, arriendo bodegas industriales, soluciones logísticas chile',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'VERTILOG - Arriendo de Bodegas Modulares en Chile',
    description: 'Soluciones modulares para arriendo y venta de bodegas en Chile. Cobertura nacional de Arica a Punta Arenas.',
    images: ['/og-image.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
