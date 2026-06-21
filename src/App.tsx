/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import WhyChooseUs from './components/WhyChooseUs';
import VisitUs from './components/VisitUs';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-f5f5f7 overflow-x-hidden font-sans">
      {/* Decorative ambient background overlays that span the entire document height */}
      <div className="absolute inset-x-0 top-0 h-[2000px] radial-bg-gold pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-[2500px] radial-bg-coffee pointer-events-none z-0" />

      {/* Main Layout Elements */}
      <Navbar />

      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <MenuHighlights />
        <WhyChooseUs />
        <Testimonials />
        <VisitUs />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

