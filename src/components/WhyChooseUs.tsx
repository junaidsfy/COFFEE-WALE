import React from 'react';
import { Coffee, Sparkles, Compass, Zap, Tag, Smile } from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURES } from '../data';

// Map icon name strings to Lucide Component icons securely
const iconMap: Record<string, React.ComponentType<any>> = {
  Coffee: Coffee,
  Sparkles: Sparkles,
  Compass: Compass,
  Zap: Zap,
  Tag: Tag,
  Smile: Smile,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.04]">
      {/* Background soft particles */}
      <div className="absolute top-1/2 left-1/4 w-3 bg-white/20 h-3 rounded-full particle-float opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-2 bg-gold-400/30 h-2 rounded-full particle-float opacity-30 pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs tracking-[0.25em] text-gold-400 uppercase font-medium">Why COFFEE WALE</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 text-white tracking-tight">
            Crafting Perfection
          </h2>
          <p className="font-sans text-white/50 text-[14px] md:text-[15px] mt-4 leading-relaxed">
            We are dedicated to bringing an elite, premium coffee standard to the Ghaziabad community. Here’s why we stand apart:
          </p>
        </div>

        {/* Features Bento/Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || Coffee;

            return (
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                key={feature.id}
                className="group relative p-8 rounded-2xl glass-card flex flex-col items-start border border-white/[0.04] hover:border-gold-400/20"
              >
                {/* Premium Animated Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-gold-400 group-hover:text-black group-hover:bg-gradient-to-tr group-hover:from-gold-300 group-hover:to-gold-500 group-hover:border-transparent group-hover:scale-105 transition-all duration-300 shadow-md mb-6">
                  <IconComponent className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-500" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-gold-300 transition-colors duration-300 tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-white/40 text-xs sm:text-[13px] leading-relaxed mt-3 pr-2">
                  {feature.description}
                </p>

                {/* Technical Index watermarks for luxury aesthetic */}
                <span className="absolute bottom-6 right-8 font-mono text-[10px] text-white/[0.02] group-hover:text-white/[0.05] transition-colors">
                  0{index + 1}
                </span>

                {/* Bottom decorative glowing beam */}
                <span className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold-500/0 group-hover:via-gold-500/20 to-transparent transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
