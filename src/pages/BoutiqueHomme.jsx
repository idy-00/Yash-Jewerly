import { useState } from 'react'
import { motion } from 'framer-motion'
import { homme } from '../data/products'
import ProductCard from '../components/ProductCard'
import Divider from '../components/Divider'

const STONES = [
  { name: 'Onyx',         color: '#111111' },
  { name: 'Cornaline',    color: '#7A1A1A' },
  { name: 'Agate Verte',  color: '#1B4332' },
  { name: 'Œil de Tigre', color: '#92400E' },
  { name: 'Nacre',        color: '#EDE0CC' },
]

export default function BoutiqueHomme() {
  const [active, setActive] = useState('Tout')
  const [stone, setStone] = useState(null)

  const products = homme.products.filter(p => {
    const catOk = active === 'Tout' || p.category === active
    const stoneOk = !stone || (p.stone || '').toLowerCase().includes(stone.toLowerCase())
    return catOk && stoneOk
  })

  return (
    <>
      {/* En-tête sombre — rupture volontaire univers homme */}
      <section className="relative bg-noir pt-28 pb-20 px-8 md:px-14 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(/WhatsApp%20Image%202026-07-08%20at%203.54.37%20PM.jpeg)`,
            backgroundPosition: '50% 30%',
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.p
            className="font-jost font-light text-[9px] tracking-[0.36em] uppercase text-gold mb-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}
          >
            Collections
          </motion.p>
          <motion.h1
            className="font-playfair font-bold text-blanc leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(40px, 5.5vw, 76px)' }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Boutique Homme
          </motion.h1>
          <Divider light className="justify-start mb-6" />
          <motion.p
            className="font-cormorant italic font-light text-blanc/45 text-[15px] leading-[1.82] max-w-lg"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          >
            Bagues signet aux pierres naturelles, bracelets d'autorité, chapelet musulman prestige.
            L'homme qui sait ce qu'il porte.
          </motion.p>
        </div>
      </section>

      {/* Sélecteur de pierre */}
      <div className="bg-noir-2 border-b border-gold/8 px-8 md:px-14 py-5">
        <div className="max-w-6xl mx-auto flex items-center gap-6 flex-wrap">
          <span className="font-jost font-light text-[8px] tracking-[0.3em] uppercase text-blanc/25 flex-shrink-0">
            Pierre
          </span>
          <button
            onClick={() => setStone(null)}
            className={`font-jost font-light text-[8.5px] tracking-[0.2em] uppercase bg-transparent border-none cursor-pointer transition-colors duration-300
              ${!stone ? 'text-gold' : 'text-blanc/30 hover:text-blanc/55'}`}
          >
            Toutes
          </button>
          {STONES.map(s => (
            <button
              key={s.name}
              onClick={() => setStone(stone === s.name ? null : s.name)}
              className={`flex items-center gap-2 font-jost font-light text-[8.5px] tracking-[0.18em] uppercase
                bg-transparent border-none cursor-pointer transition-colors duration-300
                ${stone === s.name ? 'text-gold' : 'text-blanc/30 hover:text-blanc/55'}`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: s.color, opacity: stone === s.name ? 1 : 0.6 }}
              />
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Filtres catégories */}
      <nav className="bg-noir-2 border-b border-gold/8 px-8 md:px-14" aria-label="Filtrer par catégorie">
        <div className="max-w-6xl mx-auto flex gap-0 overflow-x-auto">
          {homme.categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 font-jost font-light text-[9px] tracking-[0.24em] uppercase
                px-5 py-5 border-b transition-all duration-300 cursor-pointer bg-transparent whitespace-nowrap
                ${active === cat
                  ? 'border-gold text-gold'
                  : 'border-transparent text-blanc/25 hover:text-blanc/50'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* Grille sombre */}
      <section className="bg-noir-2 py-16 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">
          {products.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-cormorant italic text-blanc/25 text-[18px]">
                Aucune pièce pour cette sélection.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} dark={true} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
