'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function Interests() {
  return (
    <section id="interests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Interests & Passions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {[...content.interests.sports, ...content.interests.professional].map((interest, index) => {
              // Alternate between cyan and emerald colors
              const isEmerald = index % 2 === 0;
              const shadowColor = isEmerald 
                ? 'rgba(16, 185, 129, 0.2)' 
                : 'rgba(6, 182, 212, 0.2)';
              const hoverShadowColor = isEmerald 
                ? 'rgba(16, 185, 129, 0.4)' 
                : 'rgba(6, 182, 212, 0.4)';
              
              return (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: `0 0 30px ${hoverShadowColor}, 0 8px 20px ${hoverShadowColor}`,
                  }}
                  className="glass-effect rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer border border-transparent hover:border-opacity-30 transition-all duration-300"
                  style={{
                    boxShadow: `0 0 15px ${shadowColor}, 0 4px 10px ${shadowColor}`,
                    borderColor: isEmerald ? 'rgba(16, 185, 129, 0.1)' : 'rgba(6, 182, 212, 0.1)',
                  }}
                >
                  <span className="text-4xl mb-3">{interest.icon}</span>
                  <span className="text-sm font-medium text-gray-700">
                    {interest.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
