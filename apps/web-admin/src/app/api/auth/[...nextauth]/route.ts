import { authOptions } from '@autospace/network/src/auth/next-auth.config'
import NextAuth from 'next-auth'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
