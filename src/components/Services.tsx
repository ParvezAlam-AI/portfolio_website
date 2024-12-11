import React from 'react';
import { LineChart, Bot, Database, Network } from 'lucide-react';
import { colors } from '../styles/colors';

const Services = () => {
  const services = [
    {
      icon: <LineChart className={`w-8 h-8 ${colors.primary.DEFAULT}`} />,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions"
    },
    {
      icon: <Bot className={`w-8 h-8 ${colors.primary.DEFAULT}`} />,
      title: "AI Solutions",
      description: "Custom AI models for your specific needs"
    },
    {
      icon: <Database className={`w-8 h-8 ${colors.primary.DEFAULT}`} />,
      title: "Data Management",
      description: "Efficient data storage and processing solutions"
    },
    {
      icon: <Network className={`w-8 h-8 ${colors.primary.DEFAULT}`} />,
      title: "Machine Learning",
      description: "Advanced ML models for automation"
    }
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Services</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} 
              className="group p-8 backdrop-blur-lg bg-white/5 rounded-xl 
                hover:bg-white/10 transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
              </div>
              <p className={`${colors.primary.light} group-hover:text-white transition-colors`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;