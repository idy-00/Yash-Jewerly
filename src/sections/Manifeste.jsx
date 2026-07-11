import { motion } from 'framer-motion'
import Divider from '../components/Divider'

const valeurs = [
  {
    icon: <DiamondIcon />,
    label: 'Matière Premium',
    desc: 'Acier inoxydable 316L hypoallergénique, résistant à l\'eau — qualité joaillerie.',
  },
  {
    icon: <ShieldIcon />,
    label: 'Garantie 12 Mois',
    desc: 'Chaque pièce contrôlée et garantie un an. Qualité sans compromis.',
  },
  {
    icon: <BoxIcon />,
    label: 'Écrin Élégant',
    desc: 'Livré dans un écrin Yash Jewelry. Prêt à offrir, pensé pour durer.',
  },
  {
    icon: <GlobeIcon />,
    label: 'Livraison Internationale',
    desc: 'De Dakar vers le monde entier — expédition sécurisée sous 48–72h.',
  },
]

export default function Manifeste() {
  return (
    <section className="bg-noir py-28 px-8 md:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            className="font-jost font-light text-[9px] tracking-[0.38em] uppercase text-gold mb-5"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Notre Engagement
          </motion.p>
          <motion.h2
            className="font-playfair font-bold text-blanc mb-5 leading-[1.08]"
            style={{ fontSize: 'clamp(28px, 3.6vw, 48px)' }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Pourquoi Yash Jewelry ?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-7"
          >
            <Divider light />
          </motion.div>
          <motion.p
            className="font-cormorant italic font-light text-blanc/40 max-w-md mx-auto leading-[1.88]"
            style={{ fontSize: 'clamp(13px, 1.2vw, 17px)' }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.28 }}
          >
            Parce que l'élégance n'est pas un privilège — c'est une décision.
          </motion.p>
        </div>

        {/* 4 colonnes — pas de position relative/absolute qui peut générer du z-index */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/8">
          {valeurs.map((v, i) => (
            <motion.div
              key={v.label}
              className="bg-noir px-8 py-10 group"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-gold/55 group-hover:text-gold transition-colors duration-400 mb-5">
                {v.icon}
              </div>
              <p className="font-jost font-light text-[8px] tracking-[0.28em] uppercase text-gold mb-3">
                {v.label}
              </p>
              <div className="h-px w-7 bg-gold/20 group-hover:w-full transition-all duration-700 mb-4" />
              {/* Couleur fixe blanc/35 — pas de variable CSS qui pourrait hériter d'une couleur de lien */}
              <p className="font-jost font-light text-[11.5px] leading-[1.8]" style={{ color: 'rgba(247,242,231,0.38)' }}>
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DiamondIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><polygon points="12,2 22,8.5 18,20 6,20 2,8.5" /><polyline points="2,8.5 12,14 22,8.5" /><line x1="12" y1="2" x2="12" y2="14" /></svg>
}
function ShieldIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9,12 11,14 15,10" /></svg>
}
function BoxIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27,6.96 12,12.01 20.73,6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
}
function GlobeIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
}
