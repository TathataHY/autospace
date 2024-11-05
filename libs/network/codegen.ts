import type { CodegenConfig } from '@graphql-codegen/cli'

const documentsPattern = 'graphql/**/*.graphql'

const plugins = [
  'named-operations-object',
  'typed-document-node',
  'typescript',
  'typescript-operations',
]

const config: CodegenConfig = {
  schema: '../../apps/api/src/schema.gql',

  generates: {
    './src/generated/graphql.ts': {
      plugins,
      documents: `./src/${documentsPattern}`,
    },
  },

  overwrite: true,
  watch: true,
}

export default config
