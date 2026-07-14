import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { label: 'Femme',    to: '/boutique-femme' },
  { label: 'Homme',    to: '/boutique-homme' },
  { label: 'Été',      to: '/edition-ete' },
  { label: 'Histoire', to: '/histoire' },
  { label: 'Contact',  to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-8 md:px-14 py-2 bg-[#FDFBF7] border-b border-gold/20">

        {/* Logo transparent sur fond crème */}
        <Link to="/" className="flex-shrink-0" aria-label="Accueil Yash Jewelry">
          <img
            src="/logo-yj-transparent.png"
            alt="Yash Jewelry"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop links — text-on-light pour contraste sur fond crème */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`font-jost font-light text-[9px] tracking-[0.22em] uppercase transition-colors duration-200
                  ${pathname === l.to
                    ? 'text-on-light-label'
                    : 'text-on-light-muted hover:text-on-light'}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          {/* CTA Boutique */}
          <li>
            <Link
              to="/boutique-femme"
              className="font-jost font-light text-[8.5px] tracking-[0.22em] uppercase
                border border-gold/60 px-4 py-2 text-on-light-label
                hover:bg-gold hover:text-noir transition-all duration-300"
            >
              Boutique
            </Link>
          </li>
        </ul>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span className="block w-[22px] h-px bg-ink" />
          <span className="block w-[22px] h-px bg-ink" />
          <span className="block w-[22px] h-px bg-ink" />
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[190] bg-noir flex flex-col items-start justify-center px-10 gap-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src="/logo-yj-transparent.png" alt="Yash Jewelry" className="h-14 w-auto mb-4 brightness-90" />
            {[...links, { label: 'Boutique', to: '/boutique-femme' }].map((l, i) => (
              <motion.div key={l.to + l.label} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.06 }}>
                <Link to={l.to} className="font-playfair font-semibold text-[26px] text-on-dark hover:text-on-dark-label">
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <button
              className="absolute top-6 right-8 font-jost font-light text-[8px] tracking-[0.32em] uppercase text-on-dark-muted bg-transparent border-none cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Fermer
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
