import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ArticlesSection } from './components/ArticlesSection';
import { EventsSection } from './components/EventsSection';
import { CounterSection } from './components/CounterSection';
import { TestimonialSlider } from './components/TestimonialSlider';
import { NewsletterSignup } from './components/NewsletterSignup';
import { PartnersSection } from './components/PartnersSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ArticlesSection />
      <EventsSection />
      <CounterSection />
      <TestimonialSlider />
      <NewsletterSignup />
      <PartnersSection />
      <Footer />
    </div>;
}