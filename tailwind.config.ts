import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        typewriter: "typewriter 20s steps(300) forwards"
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      }
    },
    colors: {
      "one": "#1F1C1C",
      "two": "#242122",
      "three": "#FF6445",
      "gr1a": "#F73232",
      "gr1b": "#FF7D16",
      "gr3":"#FF6445",
      "gr4":"FFA400"
    }
  },
  plugins: [],
}
export default config
