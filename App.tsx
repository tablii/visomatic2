import React from 'react';
import { SkipLink } from './components/ui/SkipLink';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Portfolio } from './components/sections/Portfolio';
import { About } from './components/sections/About';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07070A] text-white selection:bg-aurora-violet selection:text-white relative">
      <SkipLink />
      <Header />
      
      <main id="main">
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
