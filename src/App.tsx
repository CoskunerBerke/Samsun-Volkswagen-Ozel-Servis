import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutWorkshop from './components/AboutWorkshop';
import Services from './components/Services';
import ReviewRiver from './components/ReviewRiver';
import WorkshopGallery from './components/WorkshopGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileQuickBar from './components/MobileQuickBar';

export function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-500 selection:text-slate-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutWorkshop />
        <Services />
        <ReviewRiver />
        <WorkshopGallery />
        <ContactSection />
      </main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
}

export default App;
