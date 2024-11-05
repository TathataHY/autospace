'use client'

import { ApolloProvider } from '@autospace/network/src/providers/apollo-provider'
import { SessionProvider } from '@autospace/ui/src/components/molecules/SessionProvider'

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ApolloProvider>{children}</ApolloProvider>
    </SessionProvider>
  )
}
