import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { palette } from './theme/palette';

function App() {
  return (
    <div className="min-h-screen" style={{ background: palette.navy, color: palette.offWhite }}>
      <Header />
      <Hero />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
