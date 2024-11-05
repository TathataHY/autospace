import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [import('../../libs/ui/tailwind.config')],
  content: ['./src/**/*.{ts,tsx}', '../../libs/ui/src/**/*.{ts,tsx}'],
}
export default config
