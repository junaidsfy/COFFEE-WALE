import { useState } from 'react';
import { Coffee, Flame, Heart, Sparkles, Utensils, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

export default function MenuHighlights() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'favorites' | 'refreshers'>('all');

  const categories = [
    { id: 'all', label: 'All Delights', icon: Sparkles },
    { id: 'coffee', label: 'Cold & Classic Coffee', icon: Coffee },
    { id: 'favorites', label: 'Café Favorites', icon: Utensils },
    { id: 'refreshers', label: 'Refreshers & Shakes', icon: Zap },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-coffee-800/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-full bg-coffee-950 border border-gold-500/20 flex items-center justify-center mb-4"
          >
            <Coffee className="w-5 h-5 text-gold-400" />
          </motion.div>
          <span className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase font-medium">
            Handcrafted Flavors
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 text-white tracking-tight">
            Our Menu Highlights
          </h2>
          <p className="font-sans text-white/50 text-[14px] md:text-[15px] mt-4 leading-relaxed">
            Sip premium cold coffees whipped to frothy luxury and bite into golden toasted, cheesy creations. Expertly prepped using farm-fresh cream, organic greens, and gourmet beans.
          </p>
        </div>

        {/* Categories Tab Selector (Apple Switch style, fully touch-optimized) */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-3xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 pointer-events-auto cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black shadow-[0_4px_20px_-3px_rgba(223,179,37,0.4)] scale-102 font-bold'
                    : 'bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border border-white/[0.05]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-gold-400'}`} />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Menu Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={item.id}
                className="group relative rounded-2xl overflow-hidden glass-card p-6 flex flex-col justify-between border border-white/[0.04] hover:border-gold-400/20 transition-all duration-400"
              >
                {/* Floating Hot-Seller / Premium Badge */}
                {item.tag && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-coffee-800 to-gold-600 rounded-full border border-white/10 shadow-lg">
                    <Flame className="w-3 h-3 text-gold-300 animate-pulse" />
                    <span className="font-mono text-[9px] uppercase font-bold text-gold-100 tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                )}

                <div>
                  {/* Category tiny label */}
                  <span className="font-mono text-[10px] text-gold-400/70 tracking-widest uppercase block mb-2">
                    {item.category === 'coffee' ? 'COFFEE LOOPS' : item.category === 'favorites' ? 'CAFE FAVS' : 'REFRESHERS'}
                  </span>

                  {/* Name */}
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-gold-300 transition-colors duration-300 tracking-tight flex items-center justify-between">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-white/40 text-xs leading-relaxed mt-3 pr-2">
                    {item.description}
                  </p>
                </div>

                {/* Price and Action row */}
                <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  {/* Price */}
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-white/30 uppercase tracking-wider">Price</span>
                    <span className="font-display font-extrabold text-xl text-gold-400 group-hover:scale-105 transition-transform duration-300">
                      {item.price}
                    </span>
                  </div>

                  {/* Fast order / WhatsApp redirect indicator */}
                  <button 
                    onClick={() => {
                      const message = encodeURIComponent(`Hi COFFEE WALE, I'd love to order your *${item.name}* (${item.price}). Please tell me if details are ready!`);
                      window.open(`https://wa.me/91XXXXXXXXXX?text=${message}`, '_blank');
                    }}
                    className="w-9 h-9 rounded-full bg-white/[0.03] group-hover:bg-gold-500 hover:text-black border border-white/5 group-hover:border-transparent flex items-center justify-center text-white/60 group-hover:text-black transition-all duration-300 hover:scale-105 focus:outline-none"
                    title="Order on WhatsApp"
                  >
                    <Heart className="w-4 h-4 fill-transparent group-hover:fill-black/10" />
                  </button>
                </div>

                {/* Corner Decoration to emphasize geometric luxury */}
                <span className="absolute bottom-0 right-0 w-8 h-8 rounded-tl-full bg-gradient-to-br from-transparent to-white/[0.01]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fine Notice in the bottom area */}
        <div className="mt-12 text-center">
          <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
            * 100% Vegetarian Menu • Freshly prepared on-demand *
          </p>
        </div>

      </div>
    </section>
  );
}
