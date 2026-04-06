'use client'

import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setFormState({
          status: 'success',
          message: '¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        })
      } else {
        setFormState({
          status: 'error',
          message: data?.error || 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.',
        })
      }
    } catch (error: any) {
      setFormState({
        status: 'error',
        message: 'Error de conexión. Por favor, verifica tu conexión a internet.',
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 shadow-md">
      <h3 className="text-2xl font-bold text-[#575756] mb-6">Solicitar Cotización</h3>

      {formState.status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-800">{formState.message}</p>
        </div>
      )}

      {formState.status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{formState.message}</p>
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#575756] mb-2">
            Nombre Completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#95C11F] focus:border-transparent outline-none transition-all bg-white"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#575756] mb-2">
            Correo Electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#95C11F] focus:border-transparent outline-none transition-all bg-white"
            placeholder="correo@ejemplo.cl"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#575756] mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#95C11F] focus:border-transparent outline-none transition-all bg-white"
            placeholder="+56 9 1234 5678"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-[#575756] mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#95C11F] focus:border-transparent outline-none transition-all bg-white"
            placeholder="Nombre de tu empresa"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#575756] mb-2">
            Mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#95C11F] focus:border-transparent outline-none transition-all resize-none bg-white"
            placeholder="Describe tu proyecto o requerimiento..."
          />
        </div>

        <button
          type="submit"
          disabled={formState.status === 'loading'}
          className="w-full px-6 py-4 bg-[#95C11F] text-white rounded-md font-semibold text-lg hover:bg-[#7da519] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {formState.status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar Solicitud
            </>
          )}
        </button>
      </div>

      <p className="mt-4 text-xs text-gray-500 text-center">
        Al enviar este formulario, aceptas que almacenemos tu información para contactarte.
      </p>
    </form>
  )
}
