import { motion } from 'framer-motion'
import Divider from '../components/Divider'

const ease = [0.22, 1, 0.36, 1]

const POURQUOI = [
  { label: 'Acier inoxydable 316L', desc: 'Résistant et durable' },
  { label: 'Hypoallergénique',      desc: 'Pensé pour toutes les peaux' },
  { label: 'Packaging luxueux',     desc: 'Un écrin digne du bijou' },
  { label: 'Design intemporel',     desc: 'Des lignes qui traversent les saisons' },
  { label: "Résistant à l'eau",     desc: 'Se porte au quotidien, sans exception' },
  { label: 'Ne noircit pas',        desc: 'Un éclat qui dure dans le temps' },
  { label: 'Garantie qualité',      desc: 'Chaque pièce est contrôlée' },
  { label: 'Fabrication soignée',   desc: 'Finitions faites à la main' },
]

const CHIFFRES = [
  { val: '+50',     label: 'Modèles' },
  { val: '4',       label: 'Collections' },
  { val: '316L',    label: 'Acier inoxydable' },
  { val: '12 mois', label: 'Garantie' },
]

const SAVOIRFAIRE = ['Plaqué or 18K', 'Finition anti-ternissure', 'Monogramme YJ gravé', 'Fabrication soignée']

export default function Histoire() {
  return (
    <>
      {/* Hero — fond sombre */}
      <section className="relative min-h-[58vh] bg-noir flex items-end pb-16 overflow-hidden">
        <img src="/new-img-1.jpeg" alt="Yash Jewelry — Notre Histoire"
          className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: '55% 15%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/20 via-transparent to-noir/70" />
        <div className="max-w-6xl mx-auto px-8 md:px-14 relative z-10 pt-28">
          <motion.p className="font-jost font-light text-[9px] tracking-[0.36em] uppercase text-on-dark-label mb-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            La Maison
          </motion.p>
          <motion.h1 className="font-playfair font-bold text-on-dark leading-[1.05]"
            style={{ fontSize: 'clamp(36px, 5.2vw, 68px)' }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}>
            Notre Histoire
          </motion.h1>
        </div>
      </section>

      {/* Vision + chiffres — fond clair */}
      <section className="bg-cream py-24 px-8 md:px-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">

          <motion.div className="md:col-span-5"
            initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.95, ease }}>
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img src="/WhatsApp%20Image%202026-07-08%20at%204.02.47%20PM.jpeg"
                alt="Sautoir Yash — Every Detail Matters"
                className="w-full h-full object-cover" style={{ objectPosition: '10% 4%' }} />
              <div className="absolute inset-5 pointer-events-none">
                {['top-0 left-0 border-t border-l','top-0 right-0 border-t border-r',
                  'bottom-0 left-0 border-b border-l','bottom-0 right-0 border-b border-r'].map((c, i) => (
                  <span key={i} className={`absolute border-gold/28 w-5 h-5 ${c}`} />
                ))}
              </div>
            </div>
            <div className="mt-5">
              <Divider className="justify-start mb-4" />
              <p className="font-cormorant italic text-on-light-muted text-[14.5px] leading-[1.88]">
                "Every Detail Matters.<br />Timeless Elegance."
              </p>
              <p className="font-jost font-light text-[7.5px] tracking-[0.26em] uppercase text-on-light-label mt-2.5">
                — Fatima Yashba, Fondatrice
              </p>
            </div>
          </motion.div>

          <div className="md:col-span-7 md:pt-6">
            <motion.div className="mb-10"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.85, ease }}>
              <p className="font-jost font-light text-[8px] tracking-[0.32em] uppercase text-on-light-label mb-4">
                01 — Notre Histoire
              </p>
              {/* Placeholder discret — pas de bordure wireframe */}
              <p className="font-cormorant italic text-on-light-muted/55 text-[15px] leading-[1.9]">
                Ce texte sera complété prochainement par Fatima Yashba.
              </p>
            </motion.div>

            <motion.div className="mb-10"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease }}>
              <p className="font-jost font-light text-[8px] tracking-[0.32em] uppercase text-on-light-label mb-4">
                02 — Notre Vision
              </p>
              <p className="font-playfair font-semibold text-on-light text-[18px] leading-[1.4] mb-4">
                Devenir la référence africaine de la joaillerie premium, puis rayonner à l'international.
              </p>
              <p className="font-jost font-light text-[12.5px] leading-[1.9] text-on-light-muted">
                Grâce à un savoir-faire alliant élégance, qualité et innovation, Yash Jewelry ambitionne
                de porter haut la joaillerie africaine — et de faire de chaque bijou une carte de visite,
                portée dans le monde entier.
              </p>
            </motion.div>

            <div className="h-px bg-gold/15 mb-9" />

            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.22 }}>
              {CHIFFRES.map(({ val, label }) => (
                <div key={label} className="text-center">
                  <p className="font-playfair font-bold text-on-light-label" style={{ fontSize: 'clamp(20px, 2.6vw, 32px)' }}>
                    {val}
                  </p>
                  <p className="font-jost font-light text-[7px] tracking-[0.22em] uppercase text-on-light-muted mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi Yash — fond clair cream-2 */}
      <section className="bg-cream-2 py-24 px-8 md:px-14">
        <div className="max-w-6xl mx-auto">
          <motion.p className="font-jost font-light text-[9px] tracking-[0.36em] uppercase text-on-light-label mb-4"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            03 — Pourquoi Yash Jewelry
          </motion.p>
          <motion.h2 className="font-playfair font-bold text-on-light leading-[1.08] mb-5"
            style={{ fontSize: 'clamp(26px, 3vw, 42px)' }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1, ease }}>
            Pourquoi choisir Yash Jewelry ?
          </motion.h2>
          <Divider className="justify-start mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
            {POURQUOI.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.06 * i, ease }}>
                <div className="flex items-center gap-2 mb-2">
                  {/* ✓ dans la couleur label — pas de couleur parasite */}
                  <span style={{ color: '#7A5F35', fontSize: '9px' }}>✓</span>
                  <p className="font-jost font-light text-[8px] tracking-[0.22em] uppercase text-on-light-label">
                    {item.label}
                  </p>
                </div>
                <p className="font-jost font-light text-[11.5px] leading-[1.75] pl-4 text-on-light-muted">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Savoir-faire — fond sombre */}
      <section className="bg-noir py-24 px-8 md:px-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}
            initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.95, ease }}>
            <img src="/WhatsApp%20Image%202026-07-08%20at%203.58.28%20PM.jpeg"
              alt="Chapelet — Savoir-faire Yash Jewelry"
              className="w-full h-full object-cover" style={{ objectPosition: '50% 48%' }} />
            <div className="absolute inset-5 pointer-events-none">
              {['top-0 left-0 border-t border-l','top-0 right-0 border-t border-r',
                'bottom-0 left-0 border-b border-l','bottom-0 right-0 border-b border-r'].map((c, i) => (
                <span key={i} className={`absolute border-gold-light/32 w-5 h-5 ${c}`} />
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.14, ease }}>
            <p className="font-jost font-light text-[9px] tracking-[0.36em] uppercase text-on-dark-label mb-5">
              10 — Savoir-Faire
            </p>
            <h2 className="font-playfair font-bold text-on-dark leading-[1.08] mb-5"
              style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>
              Le détail fait la pièce.
            </h2>
            <Divider light className="justify-start mb-8" />
            <p className="font-jost font-light text-[12.5px] leading-[1.9] text-on-dark-muted mb-9">
              Chaque bijou est conçu en acier inoxydable premium et bénéficie de finitions minutieuses,
              pensées pour traverser le temps sans perdre leur éclat. Chaque anneau, chaque maillon porte
              la marque discrète du monogramme YJ.
            </p>
            <ul className="space-y-3.5">
              {SAVOIRFAIRE.map((item, i) => (
                <motion.li key={item} className="flex items-center gap-3.5"
                  initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.28 + 0.07 * i, ease }}>
                  <span className="text-on-dark-label text-[8px]">◆</span>
                  <span className="font-jost font-light text-[11px] tracking-[0.16em] uppercase text-on-dark-muted">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  )
}
