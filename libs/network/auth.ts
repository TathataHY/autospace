import NextAuth from 'next-auth'
import { authOptions } from './src/auth/next-auth.config'

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions)
