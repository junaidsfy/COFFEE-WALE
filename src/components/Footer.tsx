import React from 'react';
import { Coffee, Instagram, Facebook, MessageCircle, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/coffee_wale', icon: Instagram },
    { name: 'Facebook', url: 'https://facebook.com/coffeewale', icon: Facebook },
    { name: 'WhatsApp', url: 'https://wa.me/91XXXXXXXXXX', icon: MessageCircle },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#020202] text-white/50 border-t border-white/[0.05] pt-16 pb-12 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.04]">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a 
              href="#home" 
              onClick={(e) => handleQuickLink(e, '#home')}
              className="flex items-center gap-2 mb-4 focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-coffee-800 to-gold-600 flex items-center justify-center border border-white/10">
                <Coffee className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-widest uppercase">
                COFFEE WALE
              </span>
            </a>
            <p className="text-xs text-white/40 leading-relaxed max-w-sm">
              Artisanal coffee experience situated in Pratap Vihar, Ghaziabad. We blend premium single-origin Arabica roasts and delicious fast-cafe bites in an Apple-inspired minimalist ambient space.
            </p>
            
            {/* Social Icons row */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/[0.03] hover:bg-gold-500 hover:text-black border border-white/5 hover:border-transparent flex items-center justify-center text-white/50 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-gold-500"
                    aria-label={`Follow on ${social.name}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col items-start md:pl-8">
            <h4 className="font-display font-semibold text-xs tracking-widest text-white uppercase mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              <a 
                href="#home" 
                onClick={(e) => handleQuickLink(e, '#home')}
                className="text-xs hover:text-white transition-colors py-1 focus:outline-none focus:text-gold-400"
              >
                Home Base
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleQuickLink(e, '#about')}
                className="text-xs hover:text-white transition-colors py-1 focus:outline-none focus:text-gold-400"
              >
                About Our Craft
              </a>
              <a 
                href="#menu" 
                onClick={(e) => handleQuickLink(e, '#menu')}
                className="text-xs hover:text-white transition-colors py-1 focus:outline-none focus:text-gold-400"
              >
                Menu Highlights
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleQuickLink(e, '#contact')}
                className="text-xs hover:text-white transition-colors py-1 focus:outline-none focus:text-gold-400"
              >
                Find & Contact Us
              </a>
            </div>
          </div>

          {/* Column 3: Local Coordinates */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="font-display font-semibold text-xs tracking-widest text-white uppercase mb-4">
              Local Coordinates
            </h4>
            <p className="text-xs leading-relaxed text-white/40">
              Pratap Vihar, Ghaziabad<br />
              SHOP NO 1, MS-58, Sector 12, Block M<br />
              Uttar Pradesh 201009, India
            </p>
            
            <div className="mt-4 pt-4 border-t border-white/[0.03] w-full">
              <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest block">Inquiries / Support</span>
              <a 
                href="mailto:support@coffeewale.in" 
                className="text-xs text-gold-400/80 hover:text-white transition-colors font-mono mt-1 block"
              >
                support@coffeewale.in
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright and scroll-to-top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-center sm:text-left text-[11px] text-white/30">
          <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} COFFEE WALE. All rights reserved.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span className="flex items-center gap-1">
              Crafted in Ghaziabad with <Heart className="w-3 h-3 text-red-500 fill-red-500/20" />
            </span>
          </div>

          {/* Return map button */}
          <button
            onClick={handleScrollToTop}
            className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/5 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.08] transition-all focus:outline-none cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
