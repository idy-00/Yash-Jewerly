import { useState } from 'react'
import { motion } from 'framer-motion'
import { homme } from '../data/products'
import ProductCard from '../components/ProductCard'
import Divider from '../components/Divider'

export default function BoutiqueHomme() {
  const [active, setActive] = useState('Tout')

  const products = homme.products.filter(p =>
    active === 'Tout' || p.category === active
  )

  return (
    <>
      {/* Hero sombre — univers homme */}
      <section className="relative bg-noir pt-28 pb-20 px-8 md:px-14 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/WhatsApp%20Image%202026-07-08%20at%203.54.37%20PM.jpeg)', backgroundPosition: '50% 30%' }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.p
            className="font-jost font-light text-[9px] tracking-[0.36em] uppercase text-on-dark-label mb-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            Collections
          </motion.p>
          <motion.h1
            className="font-playfair font-bold text-on-dark leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(40px, 5.5vw, 76px)' }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Boutique Homme
          </motion.h1>
          <Divider light className="justify-start mb-6" />
          <motion.p
            className="font-cormorant italic font-light text-on-dark-muted text-[15px] leading-[1.82] max-w-lg"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          >
            Bagues signet aux pierres naturelles, bracelets d'autorité, chapelet musulman prestige.
            L'homme qui sait ce qu'il porte.
          </motion.p>
        </div>
      </section>

      {/* Filtres catégories — trait fin, pas de couleurs parasites */}
      <nav className="bg-noir-2 px-8 md:px-14" aria-label="Filtres">
        <div className="max-w-6xl mx-auto flex gap-0 overflow-x-auto">
          {homme.categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 font-jost font-light text-[9px] tracking-[0.24em] uppercase
                px-5 py-4 border-b transition-all duration-300 cursor-pointer bg-transparent whitespace-nowrap
                ${active === cat
                  ? 'border-gold/30 text-on-dark'
                  : 'border-transparent text-on-dark-muted/50 hover:text-on-dark-muted'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      <section className="bg-noir-2 py-16 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">
          {products.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-cormorant italic text-on-dark-muted/50 text-[18px]">
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
