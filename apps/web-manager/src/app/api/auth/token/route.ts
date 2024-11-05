import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  const getCookies = await cookies()
  const isDevelopment = process.env.NODE_ENV === 'development'

  const cookieName = isDevelopment
    ? 'next-auth.session-token'
    : '__Secure-next-auth.session-token'

  const nextAuthSession = getCookies.get(cookieName)?.value || ''

  return NextResponse.json(nextAuthSession)
}
