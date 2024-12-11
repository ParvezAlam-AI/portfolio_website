import React from 'react';
import { Brain, BarChart3, Cpu } from 'lucide-react';
import Card from './ui/Card';
import { colors } from '../styles/colors';

const About = () => {
  const features = [
    {
      icon: <Brain className={`w-12 h-12 ${colors.primary.DEFAULT} mb-4`} />,
      title: 'AI Expertise',
      description:
        'Leveraging cutting-edge artificial intelligence to solve complex business challenges.',
    },
    {
      icon: (
        <BarChart3 className={`w-12 h-12 ${colors.primary.DEFAULT} mb-4`} />
      ),
      title: 'Data Analytics',
      description:
        'Transform raw data into meaningful insights that drive business growth.',
    },
    {
      icon: <Cpu className={`w-12 h-12 ${colors.primary.DEFAULT} mb-4`} />,
      title: 'Machine Learning',
      description:
        'Building intelligent systems that learn and adapt to your business needs.',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          About Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              {feature.icon}
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className={colors.primary.light}>{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
