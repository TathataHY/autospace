import {
  AuthProviderType,
  GetAuthProviderDocument,
  LoginDocument,
  RegisterWithProviderDocument,
} from '@autospace/network/src/generated/graphql'
import * as jwt from 'jsonwebtoken'
import { NextAuthConfig } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { default as CredentialsProvider } from 'next-auth/providers/credentials'
import { default as GoogleProvider } from 'next-auth/providers/google'
import { fetchGraphQL } from './fetch'

const MAX_AGE = 60 * 60 * 24 * 1 // 1 día en segundos

const secureCookies = process.env.NEXTAUTH_URL?.startsWith('https://')
const hostName = new URL(process.env.NEXTAUTH_URL || '').hostname
const rootDomain = 'karthicktech.com'

export const authOptions: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'openid profile',
        },
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) throw new Error('Invalid credentials')
        const { email, password } = credentials as {
          email: string
          password: string
        }

        try {
          const { data, error } = await fetchGraphQL({
            document: LoginDocument,
            variables: {
              loginInput: {
                email,
                password,
              },
            },
          })

          if (!data?.login.accessToken || error)
            throw new Error('Authentication failed: Invalid credentials')

          const uid = data.login.user.uid
          const name = data.login.user.name
          const image = data.login.user.image

          return { id: uid, name, image, email }
        } catch (error) {
          console.log(error)
        }
        return null
      },
    }),
  ],
  debug: true,
  session: {
    strategy: 'jwt',
    maxAge: MAX_AGE,
  },
  jwt: {
    maxAge: MAX_AGE,
    encode({ secret, token }): string {
      if (!token) throw new Error('Invalid token')
      const { sub, ...props } = token
      const nowInSeconds = Math.floor(Date.now() / 1000)
      const expirationTimestamp = nowInSeconds + MAX_AGE
      return jwt.sign(
        {
          uid: sub,
          ...props,
          exp: expirationTimestamp,
        },
        secret as string,
        {
          algorithm: 'HS256',
        },
      )
    },
    async decode({ secret, token }): Promise<JWT | null> {
      if (!token) throw new Error('Invalid token')
      try {
        return jwt.verify(token, secret as string, {
          algorithms: ['HS256'],
        }) as JWT
      } catch (error) {
        return null
      }
    },
  },
  cookies: {
    sessionToken: {
      name: `${secureCookies ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: secureCookies,
        domain: hostName == 'localhost' ? hostName : '.' + rootDomain, // add a . in front so that subdomains are included
      },
    },
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === 'google') {
        const { id, name, image } = user as {
          id: string
          name: string
          image: string
        }
        const { data } = await fetchGraphQL({
          document: GetAuthProviderDocument,
          variables: {
            uid: id,
          },
        })

        if (data?.getAuthProvider?.uid) {
          await fetchGraphQL({
            document: RegisterWithProviderDocument,
            variables: {
              registerWithProviderInput: {
                uid: id,
                type: AuthProviderType.Google,
                image,
                name,
              },
            },
          })
        }
      }
      return true
    },
    async session({ session, user, token }) {
      if (token) {
        session.user = {
          id: token.uid as string,
          uid: token.uid as string,
          name: token.name!,
          image: token.picture!,
          email: token.email!,
          emailVerified: null,
        }
      }
      return session
    },
  },
  pages: {
    signIn: '/signIn',
  },
}
