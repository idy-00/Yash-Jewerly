import { motion } from 'framer-motion'
import { femme } from '../data/products'
import ProductCard from '../components/ProductCard'
import Divider from '../components/Divider'

const eteProducts = femme.products.filter(p => p.category === 'Édition Été')

export default function EditionEte() {
  return (
    <>
      <section className="relative min-h-[52vh] bg-noir flex items-end pb-16 overflow-hidden">
        <img
          src="/new-img-3.jpeg"
          alt="Édition Été — Yash Jewelry"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '50% 22%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/10 via-transparent to-noir/85" />
        <div className="max-w-6xl mx-auto px-8 md:px-14 relative z-10 pt-28">
          <motion.p
            className="font-jost font-light text-[9px] tracking-[0.36em] uppercase text-gold mb-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            Collections Saisonnières
          </motion.p>
          <motion.h1
            className="font-playfair font-bold text-blanc leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Édition Été
          </motion.h1>
          <Divider light className="justify-start mb-4" />
          <motion.p
            className="font-cormorant italic font-light text-blanc/50 text-[15px] leading-[1.82] max-w-lg"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          >
            Tropicana, Lagune, Corail Chic, Azuréa, Boho Chic, Fleur d'Été —
            l'éclat doré de l'été, capturé en métal.
          </motion.p>
        </div>
      </section>

      <div className="bg-cream border-b border-gold/10 px-8 md:px-14 py-3">
        <p className="max-w-6xl mx-auto font-jost font-light text-[8px] tracking-[0.2em] uppercase text-gold/50">
          Photos de la collection à venir
        </p>
      </div>

      <section className="bg-cream py-14 px-8 md:px-14">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-12">
          {eteProducts.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} dark={false} />
          ))}
        </div>
      </section>
    </>
  )
}
