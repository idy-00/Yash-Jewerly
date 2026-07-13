import { motion } from 'framer-motion'
import Divider from '../components/Divider'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="relative bg-cream-2 pt-28 pb-20 px-8 md:px-14 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="font-jost font-light text-[9px] tracking-[0.36em] uppercase text-on-light-label mb-5"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          >
            Nous joindre
          </motion.p>
          <motion.h1
            className="font-playfair font-bold text-on-light leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(38px, 5vw, 68px)' }}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Contact
          </motion.h1>
          <Divider className="justify-start" />
        </div>
      </section>

      <section className="bg-cream py-20 px-8 md:px-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

          <div>
            <p className="font-jost font-light text-[9px] tracking-[0.3em] uppercase text-on-light-label mb-8">
              Coordonnées
            </p>
            <div className="space-y-8">
              {[
                { label: 'WhatsApp',  value: '+221 77 429 15 71',        href: 'https://wa.me/221774291571' },
                { label: 'Instagram', value: '@yash.jewelry',             href: 'https://instagram.com/yash.jewelry' },
                { label: 'Email',     value: 'contact@yashjewelry.com',   href: 'mailto:contact@yashjewelry.com' },
              ].map(item => (
                <div key={item.label}>
                  <p className="font-jost font-light text-[8px] tracking-[0.28em] uppercase text-on-light-muted/65 mb-1.5">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-playfair font-semibold text-on-light text-[16px] hover:text-on-light-label transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                  <div className="h-px bg-gold/15 mt-5" />
                </div>
              ))}
            </div>
            <div className="mt-14">
              <p className="font-cormorant italic text-on-light-muted text-[15px] leading-[1.85]">
                Pour toute commande, question sur un produit ou livraison internationale — notre équipe répond sous 24h.
              </p>
            </div>
          </div>

          <div>
            <p className="font-jost font-light text-[9px] tracking-[0.3em] uppercase text-on-light-label mb-8">
              Envoyer un message
            </p>
            {sent ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="py-16 text-center">
                <Divider className="justify-center mb-6" />
                <p className="font-playfair font-semibold text-on-light text-[18px] mb-3">Message envoyé</p>
                <p className="font-cormorant italic text-on-light-muted text-[15px]">Nous vous répondrons sous 24h.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: 'nom',   label: 'Votre nom',     type: 'text' },
                  { name: 'email', label: 'Adresse e-mail', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="font-jost font-light text-[8px] tracking-[0.28em] uppercase text-on-light-muted/70 block mb-2">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      required
                      value={form[f.name]}
                      onChange={e => setForm(v => ({ ...v, [f.name]: e.target.value }))}
                      className="w-full bg-transparent border-b border-gold/25 py-3 px-0
                        font-jost font-light text-[13px] text-on-light
                        placeholder:text-on-light-muted/40 outline-none focus:border-gold transition-colors duration-300"
                    />
                  </div>
                ))}
                <div>
                  <label className="font-jost font-light text-[8px] tracking-[0.28em] uppercase text-on-light-muted/70 block mb-2">
                    Votre message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(v => ({ ...v, message: e.target.value }))}
                    className="w-full bg-transparent border-b border-gold/25 py-3 px-0
                      font-jost font-light text-[13px] text-on-light resize-none
                      placeholder:text-on-light-muted/40 outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>
                <button type="submit"
                  className="mt-4 flex flex-col gap-2 group cursor-pointer bg-transparent border-none p-0"
                >
                  <span className="font-jost font-light text-[9.5px] tracking-[0.28em] uppercase text-on-light group-hover:text-on-light-label transition-colors duration-300">
                    Envoyer le message
                  </span>
                  <span className="h-px bg-gold w-full" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}
