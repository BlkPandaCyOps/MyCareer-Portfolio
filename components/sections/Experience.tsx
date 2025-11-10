'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import content from '@/data/content.json';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Career Experience
          </h2>

          <div className="max-w-4xl mx-auto">
            {content.experience.map((exp, index) => {
              const isEmerald = index % 2 === 0;
              const shadowColor = isEmerald 
                ? 'rgba(16, 185, 129, 0.15)' 
                : 'rgba(6, 182, 212, 0.15)';
              const hoverShadowColor = isEmerald 
                ? 'rgba(16, 185, 129, 0.3)' 
                : 'rgba(6, 182, 212, 0.3)';
              const borderColor = isEmerald ? '#10B981' : '#06B6D4';
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-8 pb-12 last:pb-0"
                  style={{
                    borderLeft: `2px solid ${borderColor}`,
                  }}
                >
                  <div 
                    className="absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-white"
                    style={{
                      backgroundColor: borderColor,
                      boxShadow: `0 0 15px ${shadowColor}`,
                    }}
                  />
                  
                  <motion.div 
                    className="glass-effect rounded-lg p-6 transition-all duration-300"
                    whileHover={{
                      x: 5,
                      boxShadow: `0 0 25px ${hoverShadowColor}, 0 8px 20px ${hoverShadowColor}`,
                    }}
                    style={{
                      boxShadow: `0 0 15px ${shadowColor}, 0 4px 12px ${shadowColor}`,
                    }}
                  >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <Briefcase className="text-primary-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 font-semibold mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {exp.location} • {exp.period}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 rounded-full text-sm font-medium hover:bg-emerald-500/20 transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
