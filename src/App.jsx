import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Integrations } from './components/Integrations';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-oceanic font-sans selection:bg-forsythia selection:text-oceanic">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Integrations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
