import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { formatPrice } from '../data/products'

function PlaceholderVisual({ dark }) {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center relative
      ${dark ? 'bg-[#0e0e0e]' : 'bg-[#ede4d1]'}`}
    >
      <svg
        viewBox="0 0 120 120" fill="none"
        className="absolute inset-0 w-[65%] h-[65%] m-auto opacity-[0.08]"
        aria-hidden="true"
      >
        <circle cx="60" cy="55" r="44" stroke={dark ? '#E8CE93' : '#9C7A3C'} strokeWidth="1.2" />
        <polygon points="60,10 63,17 60,23 57,17" fill={dark ? '#E8CE93' : '#9C7A3C'} />
        <text x="22" y="82" fontFamily="Georgia,serif" fontSize="52" fontWeight="700"
          fill={dark ? '#E8CE93' : '#9C7A3C'}>Y</text>
        <text x="64" y="90" fontFamily="Georgia,serif" fontSize="40" fontWeight="400"
          fontStyle="italic" fill={dark ? '#C8A96E' : '#7A5E28'}>j</text>
      </svg>
      <span className={`relative z-10 font-jost font-light text-[7.5px] tracking-[0.32em] uppercase
        px-4 py-1.5 border
        ${dark
          ? 'text-on-dark-label border-gold/25 bg-noir/60'
          : 'text-on-light-label border-gold-deep/30 bg-cream/70'
        }`}
      >
        Bientôt disponible
      </span>
    </div>
  )
}

export default function ProductCard({ product, index = 0, dark = false }) {
  const isPlaceholder = product.placeholder

  const inner = (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: 0.06 * (index % 6), ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden aspect-[3/4] mb-3.5">
        {isPlaceholder ? (
          <PlaceholderVisual dark={dark} />
        ) : (
          <>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              style={{ objectPosition: product.objectPosition || '50% 50%' }}
            />
            <div className={`absolute inset-0 transition-colors duration-450
              ${dark ? 'bg-noir/0 group-hover:bg-noir/16' : 'bg-noir/0 group-hover:bg-noir/10'}`}
            />
            <div className="absolute inset-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-450 pointer-events-none">
              {['top-0 left-0 border-t border-l','top-0 right-0 border-t border-r',
                'bottom-0 left-0 border-b border-l','bottom-0 right-0 border-b border-r'].map((c, i) => (
                <span key={i} className={`absolute w-4 h-4 ${c} ${dark ? 'border-gold/40' : 'border-gold/45'}`} />
              ))}
            </div>
          </>
        )}

        {product.badge && (
          <span className={`absolute top-3 left-3 font-jost font-light text-[7px] tracking-[0.22em] uppercase px-2.5 py-1 border
            ${dark
              ? 'text-on-dark-label border-gold/20 bg-noir/85'
              : 'text-on-light-label border-gold-deep/25 bg-cream/90'
            }`}>
            {product.badge}
          </span>
        )}

        {product.stoneColor && !isPlaceholder && (
          <span
            className="absolute top-3 right-3 w-3 h-3 rounded-full"
            style={{ backgroundColor: product.stoneColor }}
            title={product.stone}
          />
        )}
      </div>

      <div>
        {/* Collection tag — contraste assuré selon fond */}
        <p className={`font-jost font-light text-[7px] tracking-[0.24em] uppercase mb-1
          ${dark ? 'text-on-dark-label' : 'text-on-light-label'}`}>
          {product.collection}
        </p>
        <h3 className={`font-playfair font-semibold text-[14.5px] leading-tight mb-1
          ${dark ? 'text-on-dark' : 'text-on-light'}`}>
          {product.name}
        </h3>
        <p className={`font-jost font-light text-[10.5px]
          ${dark ? 'text-on-dark-muted' : 'text-on-light-muted'}`}>
          {formatPrice(product.price)}
        </p>
      </div>
    </motion.article>
  )

  if (isPlaceholder) return inner

  return (
    <Link to={`/produit/${product.id}`} className="block">
      {inner}
    </Link>
  )
}
