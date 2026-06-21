import React from 'react';
import { ArrowDown, MessageSquare, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import CoffeeAnimation from './CoffeeAnimation';

export default function Hero() {
  const handleScrollToMenu = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(href);

    if (element) {
      const topOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="hero-scroll-track" className="relative h-[108vh]">
      <section
        id="home"
        className="sticky top-0 h-screen overflow-hidden bg-black"
        
      >
        {/* Full Screen Animation */}
        <div className="absolute inset-0 z-0">
          <CoffeeAnimation />
        </div>

        {/* Content */}
       <div
  id="hero-content"
  className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center"
>
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="font-mono text-[11px] tracking-[0.25em] text-gold-300 uppercase">
                Pratap Vihar, Ghaziabad
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="font-display font-extrabold text-[40px] sm:text-[54px] md:text-[72px] leading-[1.05] mt-6 text-white"
            >
              Crafted for <br />
              <span className="gold-gradient-text">
                Coffee Lovers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-white/60 mt-6 max-w-xl"
            >
              Premium cold coffee, rich local flavors, and unforgettable café
              experiences. Every single cup is prepared with artisanal care and
              passion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex gap-4 mt-10"
            >
              <button
                onClick={(e) => handleScrollToMenu(e, '#menu')}
                className="px-8 py-4 rounded-full text-black font-semibold bg-gradient-to-r from-gold-300 to-gold-500"
              >
                Explore Menu
              </button>

              <button
                onClick={(e) => handleScrollToMenu(e, '#contact')}
                className="px-8 py-4 rounded-full text-white border border-white/20"
              >
                Visit Store
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/10 text-white/50 text-sm"
            >
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-gold-500" />
                <span>Premium Arabica Blend</span>
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-gold-500" />
                <span>Free Campus Delivery</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <ArrowDown className="w-5 h-5 text-white/50 animate-bounce" />
        </div>
      </section>
    </div>
  );
}