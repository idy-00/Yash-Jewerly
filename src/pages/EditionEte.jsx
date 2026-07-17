import { motion } from 'framer-motion'
import Divider from '../components/Divider'

export default function EditionEte() {
  return (
    <>
      <section className="relative min-h-[52vh] bg-noir flex items-end pb-16 overflow-hidden">
        <img
          src="/editorial-plage.jpeg"
          alt="Édition Été — Yash Jewelry"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '50% 22%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/5 via-transparent to-noir/70" />
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
            Collection estivale en préparation — bientôt disponible.
          </motion.p>
        </div>
      </section>

      <section className="bg-cream py-24 px-8 md:px-14">
        <div className="max-w-md mx-auto text-center">
          <p className="font-cormorant italic text-ink/35 text-[18px] mb-6">
            La collection Été arrive bientôt avec de nouvelles pièces exclusives.
          </p>
          <p className="font-jost font-light text-[8.5px] tracking-[0.24em] uppercase text-gold-deep/50">
            Restez connecté pour la révélation
          </p>
        </div>
      </section>
    </>
  )
}
