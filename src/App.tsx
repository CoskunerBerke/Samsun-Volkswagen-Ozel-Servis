import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutWorkshop } from './components/AboutWorkshop';
import { Services } from './components/Services';
import { WorkshopGallery } from './components/WorkshopGallery';
import { ReviewRiver } from './components/ReviewRiver';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutWorkshop />
        <Services />
        <WorkshopGallery />
        <ReviewRiver />
        <ContactSection />
      </main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
}

export default App;
