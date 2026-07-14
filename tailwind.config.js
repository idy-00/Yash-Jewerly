/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Fonds
        cream:       '#F3ECDD',
        'cream-2':   '#EAE1CC',
        'cream-3':   '#E4D8BC',
        // Sombres — brun chaud, pas noir froid (moins oppressant)
        noir:        '#1C1810',
        'noir-2':    '#231F18',
        // Or
        gold:        '#C8A96E',
        'gold-light':'#E8CE93',
        'gold-deep': '#9C7A3C',
        // Texte
        ink:         '#1A1610',
        blanc:       '#F7F2E7',

        // ── Tokens sémantiques de lisibilité ──
        'on-light':         '#1A1610', // contraste ~14:1 sur cream ✓
        'on-light-muted':   '#4A3D2E', // contraste ~6.5:1 ✓
        'on-light-label':   '#7A5F35', // contraste ~4.9:1 AA ✓
        'on-dark':          '#F7F2E7', // contraste ~12:1 sur noir ✓
        'on-dark-muted':    '#C5B99A', // contraste ~6.8:1 ✓
        'on-dark-label':    '#C8A96E', // contraste ~5.0:1 ✓
      },
      fontFamily: {
        playfair:  ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        jost:      ['Jost', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.44em',
        widest3: '0.58em',
      },
    },
  },
  plugins: [],
}
