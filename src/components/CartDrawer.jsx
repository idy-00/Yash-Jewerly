import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/products'

export default function CartDrawer() {
  const { items, removeItem, updateQty, totalItems, totalPrice, isOpen, closeCart } = useCart()

  const whatsappMessage = items.map(i =>
    `• ${i.name} (x${i.qty}) — ${formatPrice(i.price * i.qty)}`
  ).join('\n')

  const whatsappUrl = `https://wa.me/221774291571?text=${encodeURIComponent(
    `Bonjour Yash Jewelry,\n\nJe souhaite commander :\n\n${whatsappMessage}\n\nTotal : ${formatPrice(totalPrice)}\n\nMerci !`
  )}`

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-noir/50 z-[998] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          <motion.aside
            className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-cream z-[999] flex flex-col shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-7 py-5 border-b border-gold/12">
              <h2 className="font-playfair font-semibold text-ink text-[18px]">
                Mon Panier
                {totalItems > 0 && (
                  <span className="ml-2 font-jost font-light text-[11px] text-ink/50">
                    ({totalItems} {totalItems > 1 ? 'articles' : 'article'})
                  </span>
                )}
              </h2>
              <button
                onClick={closeCart}
                className="w-8 h-8 flex items-center justify-center text-ink/60 hover:text-ink transition-colors bg-transparent border-none cursor-pointer"
                aria-label="Fermer le panier"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-7 py-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-ink/15 mb-4">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" />
                  </svg>
                  <p className="font-cormorant italic text-ink/35 text-[16px]">Votre panier est vide</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4 pb-5 border-b border-gold/8 last:border-none">
                      <div className="w-[72px] h-[90px] flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: item.objectPosition || '50% 50%' }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-jost font-light text-[7px] tracking-[0.22em] uppercase text-gold-deep/55 mb-0.5">
                          {item.collection}
                        </p>
                        <h4 className="font-playfair font-semibold text-[13px] text-ink leading-tight mb-1 truncate">
                          {item.name}
                        </h4>
                        <p className="font-jost font-light text-[11px] text-ink/70 mb-2">
                          {formatPrice(item.price)}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-gold/15">
                            <button
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              className="w-6 h-6 flex items-center justify-center text-ink/50 hover:text-ink bg-transparent border-none cursor-pointer text-[14px]"
                            >
                              −
                            </button>
                            <span className="w-6 text-center font-jost text-[10px] text-ink">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              className="w-6 h-6 flex items-center justify-center text-ink/50 hover:text-ink bg-transparent border-none cursor-pointer text-[14px]"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="font-jost font-light text-[7px] tracking-[0.18em] uppercase text-ink/30 hover:text-red-600 transition-colors bg-transparent border-none cursor-pointer"
                          >
                            Retirer
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-7 py-5 border-t border-gold/12">
                <div className="flex justify-between items-baseline mb-5">
                  <span className="font-jost font-light text-[9px] tracking-[0.22em] uppercase text-ink/50">Total</span>
                  <span className="font-playfair font-bold text-[20px] text-ink">{formatPrice(totalPrice)}</span>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center py-3.5 bg-ink text-cream font-jost font-light text-[9px] tracking-[0.28em] uppercase no-underline hover:bg-ink/85 transition-colors duration-300"
                >
                  Commander via WhatsApp
                </a>
                <p className="font-jost font-light text-[8px] text-ink/30 text-center mt-3">
                  Paiement Wave · Orange Money · Espèces
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
