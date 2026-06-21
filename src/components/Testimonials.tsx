import { Star, Quote, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/[0.04]">
      {/* Dynamic light glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-coffee-800/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase font-medium">Customer Voices</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 text-white tracking-tight">
            Loved by Locals
          </h2>
          <p className="font-sans text-white/50 text-[14px] md:text-[15px] mt-4 leading-relaxed">
            Don’t just take our word for it. Here is what Students, Designers, and Families in Ghaziabad love most about the COFFEE WALE experience:
          </p>
        </div>

        {/* Testimonials Grid (3 columns, responsive, touch friendly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              key={testimonial.id}
              className="group relative p-8 rounded-2xl glass-card flex flex-col justify-between border border-white/[0.04] hover:border-gold-400/20"
            >
              
              {/* Quote icon watermark decoration */}
              <div className="absolute top-6 right-8 opacity-[0.03] group-hover:opacity-[0.07] text-white transition-opacity">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* 5-Star Rating bar list */}
                <div className="flex gap-1 mb-6 text-gold-400">
                  {Array.from({ length: testimonial.rating }).map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 fill-gold-400 stroke-transparent" />
                  ))}
                </div>

                {/* Testimonial Core Body Text */}
                <p className="font-sans text-white/70 italic text-sm md:text-[15px] leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Customer Info row */}
              <div className="pt-4 border-t border-white/[0.04] flex items-center gap-4">
                {/* Initials Avatar */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-coffee-800 to-gold-600 flex items-center justify-center font-display font-bold text-xs text-gold-100 border border-white/5 shadow-inner">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-sm text-white group-hover:text-gold-300 transition-colors">
                    {testimonial.name}
                  </span>
                  <span className="font-sans text-[10px] text-white/40 tracking-wider">
                    {testimonial.role}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Small Trust Seal */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 text-white/30 font-mono text-[10px] tracking-widest uppercase text-center">
          <MessageSquare className="w-4 h-4 text-gold-400" />
          <span>Real, raw reviews pulled directly from our guestbook logs</span>
        </div>

      </div>
    </section>
  );
}
