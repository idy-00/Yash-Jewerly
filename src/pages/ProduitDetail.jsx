import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { femme, homme, formatPrice } from '../data/products'
import Divider from '../components/Divider'
import FrameCorners from '../components/FrameCorners'

const allProducts = [...femme.products, ...homme.products]
const ease = [0.22, 1, 0.36, 1]

export default function ProduitDetail() {
  const { id } = useParams()
  const product = allProducts.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <p className="font-cormorant italic text-ink/38 text-[20px] mb-5">Produit introuvable.</p>
          <Link to="/" className="font-jost font-light text-[8.5px] tracking-[0.28em] uppercase text-gold-deep no-underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  const isDark = product.id.startsWith('h-')
  const bg = isDark ? 'bg-noir-2' : 'bg-cream'
  const textMain = isDark ? 'text-blanc' : 'text-ink'
  const textMuted = isDark ? 'text-blanc/42' : 'text-ink/52'
  const textLabel = isDark ? 'text-gold/50' : 'text-gold-deep/58'
  const border = isDark ? 'border-gold/10' : 'border-gold/14'

  return (
    <div className={bg}>
      <section className={`pt-24 pb-24 px-8 md:px-14 ${bg}`}>
        <div className="max-w-6xl mx-auto">

          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 mb-12"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={isDark ? '/boutique-homme' : '/boutique-femme'}
              className={`font-jost font-light text-[8px] tracking-[0.24em] uppercase no-underline hover:text-gold transition-colors duration-250 ${textMuted}`}
            >
              {isDark ? 'Boutique Homme' : 'Boutique Femme'}
            </Link>
            <span className={`text-[8px] ${textMuted} opacity-40`}>·</span>
            <span className={`font-jost font-light text-[8px] tracking-[0.24em] uppercase ${textLabel}`}>
              {product.collection}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover ${product.placeholder ? 'opacity-40 grayscale' : ''}`}
                  style={{ objectPosition: product.objectPosition || '50% 30%' }}
                />
                {product.placeholder && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`font-jost font-light text-[8px] tracking-[0.3em] uppercase ${textMuted}`}>
                      Photo officielle à venir
                    </span>
                  </div>
                )}
                <FrameCorners light={isDark} />
              </div>
            </motion.div>

            {/* Infos */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.14, ease }}
              className="md:pt-4"
            >
              {product.badge && (
                <span className={`inline-block font-jost font-light text-[7px] tracking-[0.24em] uppercase px-3 py-1.5 border mb-5
                  ${isDark ? 'text-gold border-gold/25 bg-noir' : 'text-gold-deep border-gold/22 bg-cream-2'}`}>
                  {product.badge}
                </span>
              )}

              <h1 className={`font-playfair font-bold leading-[1.05] mb-2 ${textMain}`}
                style={{ fontSize: 'clamp(28px, 3.8vw, 48px)' }}
              >
                {product.name}
              </h1>

              {product.tagline && (
                <p className={`font-cormorant italic text-[15px] mb-4 ${textMuted}`}>
                  {product.tagline}
                </p>
              )}

              <Divider light={isDark} className="justify-start mb-6" />

              {product.description && (
                <p className={`font-jost font-light text-[12.5px] leading-[1.9] mb-8 ${textMuted}`}>
                  {product.description}
                </p>
              )}

              {/* Prix */}
              <p className={`font-playfair font-bold mb-8 ${isDark ? 'text-gold-light' : 'text-ink'}`}
                style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
              >
                {formatPrice(product.price)}
              </p>

              {/* Composition */}
              <div className={`border-t ${border} pt-5 mb-5`}>
                <p className={`font-jost font-light text-[7.5px] tracking-[0.28em] uppercase mb-2 ${textLabel}`}>
                  Composition
                </p>
                <p className={`font-jost font-light text-[12px] leading-[1.75] ${textMuted}`}>
                  {product.material}
                  {product.stone && ` · ${product.stone}`}
                </p>
              </div>

              {/* Garanties */}
              <div className={`border-t ${border} pt-5 mb-10`}>
                <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                  {[
                    ['Garantie 12 mois', 'Toutes les pièces'],
                    ['Écrin inclus', 'Prêt à offrir'],
                    ['Livraison int.', '48–72h'],
                    ['Hypoallergénique', 'Acier 316L'],
                  ].map(([val, sub]) => (
                    <div key={val}>
                      <p className={`font-jost font-light text-[10px] mb-0.5 ${textMain} opacity-70`}>{val}</p>
                      <p className={`font-jost font-light text-[8px] tracking-[0.18em] uppercase ${textLabel}`}>{sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA WhatsApp */}
              <a
                href={`https://wa.me/221774291571?text=Bonjour, je suis intéressé(e) par : ${product.name} — Collection ${product.collection}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-col gap-2 no-underline group"
                onMouseEnter={e => e.currentTarget.querySelector('.cta-bar').style.transform = 'scaleX(1)'}
                onMouseLeave={e => e.currentTarget.querySelector('.cta-bar').style.transform = 'scaleX(0.4)'}
              >
                <span className={`font-jost font-light text-[9px] tracking-[0.28em] uppercase transition-colors duration-300
                  ${isDark ? 'text-gold group-hover:text-gold-light' : 'text-ink group-hover:text-gold-deep'}`}>
                  Commander via WhatsApp
                </span>
                <span
                  className="cta-bar h-px bg-gold origin-left"
                  style={{ transform: 'scaleX(0.4)', transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1)' }}
                />
              </a>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
