import React from 'react';
import { Menu, Brain, BarChart3, Mail, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { colors } from './styles/colors';

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${colors.bg.gradient}`}>
      <nav className="fixed w-full backdrop-blur-md bg-white/10 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Brain className={`w-8 h-8 ${colors.primary.DEFAULT}`} />
              <span className="ml-2 text-xl font-bold text-white">DataAI Pro</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'services', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`transition-all ${colors.primary.hover} px-3 py-2 text-white capitalize`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;