'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import content from '@/data/content.json';

export default function Education() {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications'>('education');
  const [showAllCerts, setShowAllCerts] = useState(false);
  const visibleCerts = showAllCerts ? content.certifications : content.certifications.slice(0, 4);

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
            Education & Certifications
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="glass-effect rounded-lg p-1 inline-flex gap-1">
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white text-gray-800 hover:bg-emerald-50'
                }`}
                style={
                  activeTab === 'education'
                    ? { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }
                    : {}
                }
              >
                <GraduationCap size={20} />
                Education
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'certifications'
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white text-gray-800 hover:bg-emerald-50'
                }`}
                style={
                  activeTab === 'certifications'
                    ? { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }
                    : {}
                }
              >
                <Award size={20} />
                Certifications ({content.certifications.length})
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Education Tab */}
            {activeTab === 'education' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {content.education.map((edu, index) => {
                const isEmerald = index % 2 === 0;
                const shadowColor = isEmerald 
                  ? 'rgba(16, 185, 129, 0.15)' 
                  : 'rgba(6, 182, 212, 0.15)';
                const hoverShadowColor = isEmerald 
                  ? 'rgba(16, 185, 129, 0.25)' 
                  : 'rgba(6, 182, 212, 0.25)';
                
                return (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      x: 5,
                      boxShadow: `0 0 25px ${hoverShadowColor}, 0 8px 20px ${hoverShadowColor}`,
                    }}
                    className="glass-effect rounded-lg p-6 mb-4 transition-all duration-300"
                    style={{
                      boxShadow: `0 0 15px ${shadowColor}, 0 4px 12px ${shadowColor}`,
                    }}
                  >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-primary-600 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    {edu.location} • {edu.period}
                  </p>
                  {edu.grade && (
                    <p className="text-gray-700 font-medium text-sm mb-3">
                      {edu.grade}
                    </p>
                  )}
                  {edu.modules && edu.modules.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        Key Modules:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.modules.map((module) => (
                          <span
                            key={module}
                            className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 rounded text-xs font-medium hover:bg-emerald-500/20 transition-all"
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  </motion.div>
                );
              })}
              </motion.div>
            )}

            {/* Certifications Tab */}
            {activeTab === 'certifications' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  {visibleCerts.map((cert, index) => {
                    const isEmerald = index % 2 === 0;
                    const shadowColor = isEmerald 
                      ? 'rgba(16, 185, 129, 0.12)' 
                      : 'rgba(6, 182, 212, 0.12)';
                    const hoverShadowColor = isEmerald 
                      ? 'rgba(16, 185, 129, 0.25)' 
                      : 'rgba(6, 182, 212, 0.25)';
                    
                    return (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: `0 0 25px ${hoverShadowColor}, 0 8px 20px ${hoverShadowColor}`,
                        }}
                        className="glass-effect rounded-lg p-5 transition-all duration-300"
                        style={{
                          boxShadow: `0 0 15px ${shadowColor}, 0 4px 12px ${shadowColor}`,
                        }}
                      >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-base font-bold text-gray-900 flex-1">
                          {cert.name}
                        </h4>
                        {cert.badgeUrl && (
                          <a
                            href={cert.badgeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-700 transition-colors"
                            title="View Badge"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                      <p className="text-primary-600 font-semibold mb-1 text-sm">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-600 text-xs">
                        {cert.year}
                      </p>
                    </motion.div>
                  );
                  })}
                </div>

                {content.certifications.length > 4 && (
                  <button
                    onClick={() => setShowAllCerts(!showAllCerts)}
                    className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}
                  >
                    {showAllCerts ? (
                      <>
                        Show Less <ChevronUp size={20} />
                      </>
                    ) : (
                      <>
                        Show More ({content.certifications.length - 4} more) <ChevronDown size={20} />
                      </>
                    )}
                  </button>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
