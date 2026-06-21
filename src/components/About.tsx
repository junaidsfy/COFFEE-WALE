import { ArrowUpRight, Award, Compass, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { IMAGES } from '../data';

export default function About() {
  const stats = [
    { value: '100%', label: 'Single-Origin Arabica', detail: 'Sourced from legendary estates' },
    { value: '2°C', label: 'Chilled Perfection', detail: 'Our signature cold-churned recipe' },
    { value: '4.9★', label: 'Local Rating', detail: 'Hundreds of happy Ghaziabad reviews' },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/[0.04]">
      {/* Background radial overlays */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-coffee-800/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Asymmetric Premium Image Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            {/* Background glowing circle for luxurious illumination */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gold-600/10 blur-3xl pointer-events-none" />

            {/* Major Card 1: Warm Ambiance */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="col-span-7 rounded-2xl overflow-hidden glass-card shadow-2xl relative group border border-white/[0.08]"
            >
              <img 
                src={IMAGES.cafeInterior} 
                alt="COFFEE WALE interior" 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-56 md:h-64 object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                <span className="font-mono text-[9px] text-gold-400 tracking-widest uppercase">The Vibe</span>
                <p className="font-display font-semibold text-xs text-white/90">Cosy Minimalist Spaces</p>
              </div>
            </motion.div>

            {/* Major Card 2: Barista Action */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="col-span-5 rounded-2xl overflow-hidden glass-card shadow-2xl relative group mt-12 border border-white/[0.08]"
            >
              <img 
                src={IMAGES.baristaBrewing} 
                alt="Coffee craft preparation" 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-44 md:h-52 object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/85 to-transparent">
                <span className="font-mono text-[9px] text-coffee-300 tracking-widest uppercase">The Craft</span>
                <p className="font-display font-semibold text-xs text-white/90 font-medium">Pulled On-Demand</p>
              </div>
            </motion.div>

            {/* Small Overlay badge mapping local coordinates */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 right-6 md:right-12 glass-card p-4 rounded-xl flex items-center gap-3 border border-gold-400/20"
            >
              <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center border border-gold-400/20">
                <Award className="w-5 h-5 text-gold-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xs text-white">Ghaziabad, IN</span>
                <span className="font-sans text-[10px] text-white/40">Local Craft Brand</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Captivating Content & Narratives */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-mono text-sm tracking-[0.2em] text-gold-400 uppercase font-medium">
              Our Philosophy
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-3 text-white">
              More Than Coffee
            </h2>
            
            <p className="font-sans text-white/60 text-[15px] sm:text-[16px] leading-relaxed mt-6">
              COFFEE WALE is a neighborhood café built around quality coffee, refreshing cold brews, and a welcoming atmosphere. From classic favorites to signature creations, every cup is prepared with care and passion.
            </p>

            <p className="font-sans text-white/40 text-[14px] mt-4 leading-relaxed border-l-2 border-gold-500/40 pl-4 py-1">
              We started with a single modest dream: to elevate the coffee craft in Ghaziabad, pairing international design standards and luxury taste, while maintaining local warmth and incredibly friendly rates.
            </p>

            {/* Quick Core Pillars inside the Content column */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/[0.06]">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-display font-extrabold text-2xl md:text-3xl text-gold-300">
                    {stat.value}
                  </span>
                  <span className="font-display font-semibold text-[11px] text-white/80 mt-1 uppercase tracking-wide">
                    {stat.label}
                  </span>
                  <span className="font-sans text-[10px] text-white/40 mt-0.5 leading-tight">
                    {stat.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Action link */}
            <div className="mt-10 self-start">
              <a 
                href="#menu" 
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#menu');
                  if (target) {
                    const topOffset = 85;
                    const elementPos = target.getBoundingClientRect().top;
                    const offsetPosition = elementPos + window.pageYOffset - topOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="group inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-wider uppercase hover:text-white transition-colors duration-300"
              >
                Browse Our Menu Highlights
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
