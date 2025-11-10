'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import content from '@/data/content.json';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  // Define category filters (only show these as filter buttons)
  const categoryFilters = ['All', 'Web Dev', 'App', 'Cyber'];
  
  // Filter projects based on category
  const filteredProjects = filter === 'All' 
    ? content.projects 
    : content.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Projects
          </h2>

          {/* Filter Buttons - Category Based */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categoryFilters.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2.5 rounded-lg font-semibold transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white/5 border border-emerald-500/30 text-gray-300 hover:bg-emerald-500/10 hover:border-emerald-500/50'
                }`}
                style={
                  filter === category
                    ? { boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }
                    : {}
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const isEmerald = index % 2 === 0;
              const shadowColor = isEmerald 
                ? 'rgba(16, 185, 129, 0.15)' 
                : 'rgba(6, 182, 212, 0.15)';
              const hoverShadowColor = isEmerald 
                ? 'rgba(16, 185, 129, 0.3)' 
                : 'rgba(6, 182, 212, 0.3)';
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 0 30px ${hoverShadowColor}, 0 10px 25px ${hoverShadowColor}`,
                  }}
                  className="glass-effect rounded-lg overflow-hidden transition-all duration-300"
                  style={{
                    boxShadow: `0 0 20px ${shadowColor}, 0 4px 15px ${shadowColor}`,
                  }}
                >
                  <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <span className="text-6xl">💻</span>
                  </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded text-sm font-medium hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
                        style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.1)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
