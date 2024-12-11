import React from 'react';
import { ChevronDown } from 'lucide-react';
import { colors } from '../styles/colors';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Data Analytics & AI Solutions
        </h1>
        <p className={`text-xl ${colors.primary.light} mb-8 animate-slide-up`}>
          Transforming Data into Actionable Insights
        </p>
        <button
          className={`px-8 py-3 ${colors.button.DEFAULT} text-white rounded-full ${colors.button.hover} transition-all transform hover:scale-105`}
        >
          Get Started
        </button>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;
