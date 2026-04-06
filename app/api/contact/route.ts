import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son campos obligatorios' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor, proporciona un email válido' },
        { status: 400 }
      )
    }

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        company: company?.trim() || null,
        message: message.trim(),
        status: 'new',
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Tu solicitud ha sido recibida exitosamente',
        id: submission.id,
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      {
        error: 'Error al procesar tu solicitud. Por favor, intenta nuevamente.',
        details: process.env.NODE_ENV === 'development' ? error?.message : undefined,
      },
      { status: 500 }
    )
  }
}
