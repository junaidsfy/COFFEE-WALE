import { MapPin, Clock, Phone, MessageSquare, ArrowUpRight, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function VisitUs() {
  const addressLines = [
    'SHOP NO 1, MS-58,',
    'Sector 12, Block M,',
    'Pratap Vihar,',
    'Ghaziabad,',
    'Uttar Pradesh 201009',
    'India'
  ];

  const hours = [
    { days: 'Monday – Friday', timing: '9:00 AM – 10:00 PM' },
    { days: 'Saturday – Sunday', timing: '9:00 AM – 11:30 PM' },
  ];

  const handleDirections = () => {
    // Open genuine coordinate queries to Google Maps to bypass placeholders securely
    const searchQuery = encodeURIComponent('COFFEE WALE, Sector 12, Pratap Vihar, Ghaziabad');
    window.open(`https://www.google.com/maps/search/?api=1&query=${searchQuery}`, '_blank');
  };

  const handleContact = () => {
    const textMsg = encodeURIComponent("Hi COFFEE WALE! I'd love to ask about your menu and seating lines.");
    window.open(`https://wa.me/91XXXXXXXXXX?text=${textMsg}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/[0.04]">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-coffee-800/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10-grid">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Beautiful details block */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-sm tracking-[0.2em] text-gold-400 uppercase font-medium">Find our Oasis</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 text-white tracking-tight">
              Visit COFFEE WALE
            </h2>
            <p className="font-sans text-white/50 text-[14px] leading-relaxed mt-4">
              We are nested comfortably in Pratap Vihar. Follow the deep scent of freshly slow-churned sweet cold coffee and warm toasted sourdough directly to our doors.
            </p>

            {/* Address Cards */}
            <div className="flex gap-4 mt-10 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center border border-gold-400/20 text-gold-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-sm text-white/80">
                <strong className="font-display font-semibold text-white mb-1">COFFEE WALE</strong>
                {addressLines.map((line, idx) => (
                  <span key={idx} className="leading-relaxed text-white/60 text-xs sm:text-sm">{line}</span>
                ))}
              </div>
            </div>

            {/* Timings */}
            <div className="flex gap-4 mt-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <div className="w-10 h-10 rounded-full bg-gold-400/10 flex items-center justify-center border border-gold-400/20 text-gold-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-sm text-white/80 w-full">
                <strong className="font-display font-semibold text-white mb-2">Operating Hours</strong>
                {hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between w-full border-b border-white/[0.03] py-1 text-xs">
                    <span className="text-white/50">{item.days}</span>
                    <span className="font-mono text-gold-300 font-medium">{item.timing}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interaction Buttons Layout */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <button
                onClick={handleDirections}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold tracking-wider text-black bg-gradient-to-r from-gold-300 to-gold-500 hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Get Directions
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleContact}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold tracking-wider text-white bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 border border-white/[0.08] flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-gold-400" />
                Contact us
              </button>
            </div>
          </div>

          {/* Right: High-End Custom Interactive Maps Vector Placeholder */}
          <div className="lg:col-span-7 w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden glass-card relative border border-white/[0.05]">
            {/* Interactive maps cover/visual backdrop with grid overlay */}
            <div className="absolute inset-0 bg-neutral-950 opacity-40 selection:bg-transparent pointer-events-none" />
            
            {/* Map lines decoration */}
            <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Simulated roads in Ghaziabad block */}
              <path d="M -50 200 L 800 200" stroke="#dfb325" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
              <path d="M 250 -50 L 250 600" stroke="#8c4c23" strokeWidth="6" strokeLinecap="round" opacity="0.25" />
              <path d="M 120 -50 L 120 600" stroke="rgba(255,255,255,0.4)" strokeWidth="1" opacity="0.4" />
              <path d="M -50 350 L 800 350" stroke="rgba(255,255,255,0.3)" strokeWidth="2" opacity="0.4" />
              <path d="M -50 100 L 800 450" stroke="rgba(255,255,255,0.2)" strokeWidth="1" opacity="0.3" strokeDasharray="3,3" />
            </svg>

            {/* Glowing Map pin representing COFFEE WALE */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="absolute left-[34%] sm:left-[35%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center cursor-pointer"
              onClick={handleDirections}
            >
              {/* Glowing Pulse Rings */}
              <div className="absolute w-12 h-12 rounded-full bg-gold-400/20 animate-ping -mt-3.5" />
              
              {/* Beautiful custom metal pin */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-coffee-950 to-coffee-750 flex items-center justify-center border-2 border-gold-400 shadow-xl">
                <MapPin className="w-5 h-5 text-gold-300" />
              </div>
              
              {/* Tooltip Label */}
              <div className="mt-2.5 px-3 py-1 bg-black border border-gold-400/40 rounded-full shadow-2xl flex flex-col items-center">
                <span className="font-display font-black text-[9px] uppercase tracking-[0.15em] text-white">COFFEE WALE</span>
                <span className="font-mono text-[8px] text-gold-400 font-medium tracking-tight -mt-0.5">TAP FOR DIRECTIONS</span>
              </div>
            </motion.div>

            {/* Sector 12 Landmark Label */}
            <div className="absolute left-[55%] top-[25%] pointer-events-none opacity-40 text-[10px] font-mono text-white tracking-widest uppercase">
              Sector 12 Park
            </div>
            
            {/* Pratap Vihar local road */}
            <div className="absolute right-[15%] bottom-[30%] pointer-events-none opacity-45 text-[10px] font-mono text-white tracking-widest uppercase rotate-90">
              Pratap Vihar Rd
            </div>

            {/* Map bottom panel mock */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-mono text-[8px] text-gold-300 tracking-widest uppercase">Sector 12, Ghaziabad</span>
                <p className="font-display font-medium text-xs text-white">Pratap Vihar neighborhood hotspot</p>
              </div>
              <button
                onClick={handleDirections}
                className="px-4 py-2 rounded-full text-[10px] font-semibold text-black bg-gold-400 hover:bg-gold-500 transition-colors uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
              >
                Go
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Overlay notification reminding people it is a placeholder that maps to real Google Maps */}
            <div className="absolute top-4 left-4 py-1.5 px-3 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[8px] text-white/50 tracking-wider">MAP FULLY ROUTE-ACTIVE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
