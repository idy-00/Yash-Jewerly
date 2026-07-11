// Logo YJ — monogramme SVG fidèle aux assets
// Variantes : light (or clair, fond transparent) | dark (or profond, fond transparent)
export default function Logo({ variant = 'light', size = 42, className = '' }) {
  const gold   = variant === 'light' ? '#E8CE93' : '#9C7A3C'
  const goldMid = variant === 'light' ? '#C8A96E' : '#7A5E28'

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Yash Jewelry"
    >
      {/* Cercle extérieur */}
      <circle cx="50" cy="50" r="46" stroke={gold} strokeWidth="1.4" />

      {/* Arc ouvert en haut — comme sur le logo réel */}
      <path
        d="M 50 4 A 46 46 0 1 1 49.9 4"
        stroke={gold}
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Losange / diamant centré en haut */}
      <polygon points="50,8 54.5,14 50,19 45.5,14" fill={gold} />

      {/* Y */}
      <text
        x="24"
        y="64"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="48"
        fontWeight="700"
        fill={gold}
      >
        Y
      </text>

      {/* j — décalé à droite, légèrement plus bas, italic */}
      <text
        x="57"
        y="72"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="38"
        fontWeight="400"
        fontStyle="italic"
        fill={goldMid}
      >
        j
      </text>
    </svg>
  )
}
