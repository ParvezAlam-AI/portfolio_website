import React from 'react';
import { colors } from '../styles/colors';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Contact Us</h2>
        
        <div className="backdrop-blur-lg bg-white/10 rounded-xl p-8">
          <form className="space-y-6">
            <div>
              <label className={`block ${colors.primary.light} mb-2`}>Name</label>
              <input
                type="text"
                className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${colors.border.DEFAULT} 
                  text-white focus:outline-none ${colors.border.focus}`}
              />
            </div>
            
            <div>
              <label className={`block ${colors.primary.light} mb-2`}>Email</label>
              <input
                type="email"
                className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${colors.border.DEFAULT} 
                  text-white focus:outline-none ${colors.border.focus}`}
              />
            </div>
            
            <div>
              <label className={`block ${colors.primary.light} mb-2`}>Message</label>
              <textarea
                rows={4}
                className={`w-full px-4 py-2 rounded-lg bg-white/5 border ${colors.border.DEFAULT} 
                  text-white focus:outline-none ${colors.border.focus}`}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className={`w-full py-3 ${colors.button.DEFAULT} text-white rounded-lg ${colors.button.hover} 
                transition-all transform hover:scale-105`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;