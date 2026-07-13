import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Divider from '../components/Divider'
import FrameCorners from '../components/FrameCorners'

const ease = [0.22, 1, 0.36, 1]
const stagger = (i) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: 0.12 + i * 0.14, ease },
})

export default function Hero() {
  const imgRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(min-width: 960px)').matches) {
      const onScroll = () => {
        if (imgRef.current && window.scrollY < window.innerHeight) {
          imgRef.current.style.transform = `scale(1.04) translateY(${window.scrollY * 0.08}px)`
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="relative h-screen min-h-[680px] flex overflow-hidden">

      {/* ── PANEL GAUCHE — crème ── */}
      <div className="relative w-[42%] flex-shrink-0 bg-cream flex flex-col justify-center px-14 z-10 max-md:hidden">

        <motion.div {...stagger(0)}>
          <Divider className="mb-7 justify-start" />
        </motion.div>

        <motion.h1
          {...stagger(1)}
          className="font-playfair font-black leading-[0.88] text-ink mb-2"
          style={{ fontSize: 'clamp(88px, 9.6vw, 154px)', letterSpacing: '-0.01em' }}
        >
          YASH
        </motion.h1>

        <motion.p
          {...stagger(2)}
          className="font-jost font-extralight text-gold mb-10"
          style={{ fontSize: 'clamp(13px, 1.5vw, 21px)', letterSpacing: '0.6em' }}
        >
          JEWELRY
        </motion.p>

        <motion.p
          {...stagger(3)}
          className="font-cormorant italic font-light text-on-light-muted leading-[1.85] mb-12 max-w-[280px]"
          style={{ fontSize: 'clamp(13px, 1.15vw, 16.5px)' }}
        >
          Chaque détail est une déclaration.<br />
          Chaque pièce, une élégance intemporelle.
        </motion.p>

        <motion.div {...stagger(4)}>
          <CtaLink to="/boutique-femme" label="Découvrir les Collections" />
        </motion.div>

        <motion.p
          className="absolute bottom-9 left-14 font-jost font-extralight text-[7.5px] tracking-[0.28em] uppercase text-on-light-muted/60"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          Acier 316L &nbsp;·&nbsp; Plaqué Or 18K &nbsp;·&nbsp; Livraison Internationale
        </motion.p>
      </div>

      {/* ── PANEL DROIT — image ── */}
      <div
        className="relative flex-1 overflow-hidden"
        style={{ clipPath: 'polygon(4% 0, 100% 0, 100% 100%, 0% 100%)' }}
      >
        <img
          ref={imgRef}
          src="/new-img-1.jpeg"
          alt="Yash Jewelry — joaillerie africaine contemporaine"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '55% 18%', transform: 'scale(1.04)', transformOrigin: 'center top' }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/18 via-transparent to-transparent pointer-events-none z-10" />

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="absolute inset-0 z-20"
        >
          <FrameCorners light />
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-8 z-20 text-right"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <p className="font-cormorant italic text-[10.5px] tracking-[0.18em] text-blanc/38 leading-[1.75]">
            Every Detail Matters
          </p>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-gold/45 animate-pulse" />
          <span className="font-jost font-extralight text-[6.5px] tracking-[0.38em] uppercase text-gold/35">Scroll</span>
        </motion.div>
      </div>

      {/* ── MOBILE ── */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/new-img-1.jpeg"
          alt="Yash Jewelry"
          className="w-full h-full object-cover"
          style={{ objectPosition: '55% 15%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/20 via-noir/10 to-noir/75" />
        <div className="absolute bottom-20 left-6 right-6 z-10">
          <h1 className="font-playfair font-black text-blanc leading-[0.88] mb-1.5" style={{ fontSize: '82px' }}>
            YASH
          </h1>
          <p className="font-jost font-extralight text-gold text-[13px] tracking-[0.5em] mb-7">JEWELRY</p>
          <CtaLink to="/boutique-femme" label="Découvrir les Collections" light />
        </div>
        <FrameCorners light className="z-10" />
      </div>
    </section>
  )
}

function CtaLink({ to, label, light = false }) {
  const barRef = useRef(null)
  return (
    <Link
      to={to}
      className="inline-flex flex-col gap-2 no-underline group w-fit"
      onMouseEnter={() => barRef.current && (barRef.current.style.transform = 'scaleX(1)')}
      onMouseLeave={() => barRef.current && (barRef.current.style.transform = 'scaleX(0.36)')}
    >
      <span className={`font-jost font-light text-[9px] tracking-[0.28em] uppercase transition-colors duration-300
        ${light ? 'text-blanc/80 group-hover:text-gold-light' : 'text-ink group-hover:text-gold-deep'}`}>
        {label}
      </span>
      <span
        ref={barRef}
        className="h-px bg-gold origin-left"
        style={{ transform: 'scaleX(0.36)', transition: 'transform 0.55s cubic-bezier(0.22,1,0.36,1)' }}
      />
    </Link>
  )
}
