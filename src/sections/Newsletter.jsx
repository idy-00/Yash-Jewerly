import { useState } from 'react'
import { motion } from 'framer-motion'
import Divider from '../components/Divider'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSent(true)
  }

  return (
    <section className="relative bg-cream-2 py-24 px-8 md:px-14 overflow-hidden">
      <div className="max-w-xl mx-auto text-center">
        <motion.p
          className="font-jost font-light text-[9px] tracking-[0.36em] uppercase text-on-light-label mb-5"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Newsletter
        </motion.p>
        <motion.h2
          className="font-playfair font-bold text-on-light mb-4 leading-[1.1]"
          style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Rejoignez la Yash Family
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="flex justify-center mb-6"
        >
          <Divider />
        </motion.div>
        <motion.p
          className="font-cormorant italic font-light text-on-light-muted text-[15px] leading-[1.8] mb-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.26 }}
        >
          Nouvelles collections, éditions limitées et offres exclusives<br />
          réservées aux membres de la Yash Family.
        </motion.p>

        {sent ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="font-jost font-light text-[10px] tracking-[0.28em] uppercase text-on-light-label mb-2">
              Merci de nous rejoindre
            </p>
            <Divider className="justify-center" />
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="flex gap-0"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.34 }}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Votre adresse e-mail"
              required
              className="flex-1 bg-transparent border border-gold/30 border-r-0 px-5 py-3.5
                font-jost font-light text-[11px] tracking-[0.1em] text-on-light
                placeholder:text-on-light-muted/50 outline-none focus:border-gold transition-colors duration-300"
            />
            <button
              type="submit"
              className="border border-gold bg-transparent px-7 py-3.5
                font-jost font-light text-[9px] tracking-[0.3em] uppercase text-on-light-label
                hover:bg-gold hover:text-noir transition-all duration-350 cursor-pointer"
            >
              S'inscrire
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}
