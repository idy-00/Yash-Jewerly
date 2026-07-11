import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Divider from '../components/Divider'

const collections = [
  {
    label: 'Collection Femme',
    sub: 'Bagues · Bracelets · Sautoir · Chaîne de taille',
    to: '/boutique-femme',
    image: '/new-img-2.jpeg',
    objectPos: '50% 38%',
  },
  {
    label: 'Collection Homme',
    sub: 'Bagues Signet · Bracelets · Chapelets',
    to: '/boutique-homme',
    image: '/WhatsApp%20Image%202026-07-08%20at%203.54.37%20PM.jpeg',
    objectPos: '22% 38%',
  },
  {
    label: 'Édition Été',
    sub: 'Tropicana · Lagune · Azuréa · Boho Chic',
    to: '/edition-ete',
    image: '/new-img-3.jpeg',
    objectPos: '50% 28%',
  },
]

export default function CollectionsGrid() {
  return (
    <section className="bg-cream-2 py-24 px-8 md:px-14">
      <div className="max-w-6xl mx-auto mb-14">
        <motion.p
          className="font-jost font-light text-[9px] tracking-[0.36em] uppercase text-gold-deep mb-3"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Nos Univers
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="font-playfair font-bold text-ink leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(32px, 3.8vw, 52px)' }}
          >
            Les Collections
          </h2>
          <Divider className="justify-start" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-3">
        <CollCard col="md:col-span-7" card={collections[0]} h="h-[540px]" />
        <div className="md:col-span-5 flex flex-col gap-3">
          <CollCard card={collections[1]} h="h-[260px]" />
          <CollCard card={collections[2]} h="h-[260px]" />
        </div>
      </div>
    </section>
  )
}

function CollCard({ card, h, col = '' }) {
  return (
    <motion.div
      className={`relative overflow-hidden group ${col} ${h}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={card.to} className="block w-full h-full no-underline">
        <img
          src={card.image}
          alt={card.label}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          style={{ objectPosition: card.objectPos }}
        />
        {/* Overlay dégradé garantissant lisibilité des titres */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir/75 via-noir/20 to-transparent" />

        {/* Cadres d'angle hover */}
        <div className="absolute inset-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          {['top-0 left-0 border-t border-l','top-0 right-0 border-t border-r',
            'bottom-0 left-0 border-b border-l','bottom-0 right-0 border-b border-r'].map((c, i) => (
            <span key={i} className={`absolute border-gold-light/40 w-5 h-5 ${c}`} />
          ))}
        </div>

        <div className="absolute bottom-7 left-7 right-7 z-10">
          <p className="font-jost font-light text-[7.5px] tracking-[0.28em] uppercase text-gold/80 mb-1.5">
            {card.sub}
          </p>
          <h3 className="font-playfair font-bold text-blanc leading-tight text-[22px] drop-shadow-sm">
            {card.label}
          </h3>
          <div className="mt-3 flex items-center gap-2.5 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1.5 group-hover:translate-y-0">
            <span className="font-jost font-light text-[7.5px] tracking-[0.22em] uppercase text-gold-light">Explorer</span>
            <span className="h-px bg-gold-light w-6" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
