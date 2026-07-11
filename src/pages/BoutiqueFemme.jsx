import { useState } from 'react'
import { motion } from 'framer-motion'
import { femme } from '../data/products'
import ProductCard from '../components/ProductCard'
import Divider from '../components/Divider'

export default function BoutiqueFemme() {
  const [active, setActive] = useState('Tout')

  const products = active === 'Tout'
    ? femme.products
    : femme.products.filter(p => p.category === active)

  return (
    <>
      {/* Hero page — image lifestyle bracelets */}
      <section className="relative bg-cream-2 pt-28 pb-20 px-8 md:px-14 overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-[40%] bg-cover bg-center max-md:hidden"
          style={{ backgroundImage: 'url(/new-img-2.jpeg)', backgroundPosition: '50% 38%' }}
        />
        <div className="absolute right-0 top-0 bottom-0 w-[52%] bg-gradient-to-r from-cream-2 to-transparent max-md:hidden" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.p
            className="font-jost font-light text-[9px] tracking-[0.36em] uppercase text-gold-deep mb-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}
          >
            Collections
          </motion.p>
          <motion.h1
            className="font-playfair font-bold text-ink leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(38px, 5vw, 70px)' }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Boutique Femme
          </motion.h1>
          <Divider className="justify-start mb-5" />
          <motion.p
            className="font-cormorant italic font-light text-ink/48 text-[15px] leading-[1.82] max-w-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          >
            Bagues, bracelets, sautoir, chaîne de taille —
            chaque pièce pensée pour vous accompagner chaque jour.
          </motion.p>
        </div>
      </section>

      {/* Filtres */}
      <nav className="bg-cream border-b border-gold/10 px-8 md:px-14">
        <div className="max-w-6xl mx-auto flex overflow-x-auto">
          {femme.categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex-shrink-0 font-jost font-light text-[8.5px] tracking-[0.22em] uppercase
                px-5 py-4 border-b transition-all duration-250 cursor-pointer bg-transparent whitespace-nowrap
                ${active === cat
                  ? 'border-gold text-gold-deep'
                  : 'border-transparent text-ink/32 hover:text-ink/60'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* Grille */}
      <section className="bg-cream py-14 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} dark={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
