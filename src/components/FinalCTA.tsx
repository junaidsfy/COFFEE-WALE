import { Coffee, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function FinalCTA() {
  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const topOffset = 85;
      const elementPos = el.getBoundingClientRect().top;
      const offsetPosition = elementPos + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden border-t border-white/[0.04]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-coffee-800/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid line guidelines to structure the background */}
      <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-white/[0.01] pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[20%] w-[1px] bg-white/[0.01] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
        
        {/* Coffee Cup floating indicator */}
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/5 text-gold-400 mb-8"
        >
          <Coffee className="w-6 h-6" />
        </motion.div>

        {/* Headline */}
        <h2 className="font-display font-extrabold text-[36px] sm:text-[48px] md:text-[60px] tracking-tight leading-[1.1] text-white">
          Ready For Your Next <br />
          <span className="gold-gradient-text">Coffee Break?</span>
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-white/50 text-sm sm:text-base max-w-lg mx-auto mt-6 leading-relaxed">
          Sip the finest signature cold brews and indulge in cheesy favorites. Our Ghaziabad café is warmed up, cozy, and ready to welcome you.
        </p>

        {/* Center CTA Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleScrollToContact}
            className="w-full sm:w-auto px-10 py-5 rounded-full text-sm font-extrabold tracking-wider text-black bg-gradient-to-r from-gold-300 to-gold-500 hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_5px_30px_-5px_rgba(223,179,37,0.5)] cursor-pointer"
          >
            Visit COFFEE WALE
          </button>
        </div>

        {/* Small Campus/Local footnote indicator */}
        <div className="mt-12 font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase">
          Serving Pratap Vihar, Block M & Nearby Areas
        </div>

      </div>
    </section>
  );
}
