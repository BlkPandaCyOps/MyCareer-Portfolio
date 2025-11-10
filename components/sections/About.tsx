'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            About Me
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {content.personal.bio.intro}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Focus:
              </h3>
              <ul className="space-y-4">
                {content.personal.bio.focus.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary-600 font-bold mt-1">•</span>
                    <div>
                      <span className="font-semibold text-gray-900">
                        {item.title}:
                      </span>
                      <span className="text-gray-700"> {item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Approach:
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {content.personal.bio.approach}
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {content.personal.bio.closing}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
