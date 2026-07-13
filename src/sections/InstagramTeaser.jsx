import { motion } from 'framer-motion'
import Divider from '../components/Divider'

// Uniquement photos lifestyle — pas de screenshots catalogue
const feed = [
  { src: '/new-img-1.jpeg', pos: '55% 18%' },
  { src: '/new-img-2.jpeg', pos: '50% 38%' },
  { src: '/new-img-3.jpeg', pos: '50% 28%' },
  { src: '/new-img-4.jpeg', pos: '50% 40%' },
]

export default function InstagramTeaser() {
  return (
    <section className="bg-cream py-24 px-8 md:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <motion.p
              className="font-jost font-light text-[9px] tracking-[0.36em] uppercase text-on-light-label mb-3"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            >
              Instagram
            </motion.p>
            <motion.h2
              className="font-playfair font-bold text-on-light leading-[1.08]"
              style={{ fontSize: 'clamp(26px, 3vw, 40px)' }}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              @yash.jewelry
            </motion.h2>
            <Divider className="justify-start mt-4" />
          </div>
          <a
            href="https://instagram.com/yash.jewelry"
            target="_blank" rel="noreferrer"
            className="inline-flex flex-col gap-1.5 group w-fit mb-1"
          >
            <span className="font-jost font-light text-[9px] tracking-[0.26em] uppercase text-on-light-label transition-colors duration-300 group-hover:text-on-light">
              Suivre sur Instagram
            </span>
            <span className="h-px bg-on-light-label origin-left transition-transform duration-500 group-hover:scale-x-[1.25]" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {feed.map((f, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/yash.jewelry"
              target="_blank" rel="noreferrer"
              className="block relative overflow-hidden group aspect-square"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.07 * i }}
            >
              <img
                src={f.src}
                alt={`Yash Jewelry Instagram ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                style={{ objectPosition: f.pos }}
              />
              <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/28 transition-colors duration-400" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
