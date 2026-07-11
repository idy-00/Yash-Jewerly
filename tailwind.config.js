/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream:      '#F3ECDD',
        'cream-2':  '#EAE1CC',
        'cream-3':  '#E4D8BC',
        noir:       '#0D0D0D',
        'noir-2':   '#141210',
        ink:        '#1A1610',
        gold:       '#C8A96E',
        'gold-light':'#E8CE93',
        'gold-deep': '#9C7A3C',
        blanc:      '#F7F2E7',
      },
      fontFamily: {
        playfair:   ['"Playfair Display"', 'serif'],
        cormorant:  ['"Cormorant Garamond"', 'serif'],
        jost:       ['Jost', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.44em',
        widest3: '0.58em',
      },
    },
  },
  plugins: [],
}
