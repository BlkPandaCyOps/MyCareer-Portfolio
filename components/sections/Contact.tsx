'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { MapPin, Send, CheckCircle, AlertCircle, Shield } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import content from '@/data/content.json';
import { sanitizeInput, isValidEmail } from '@/lib/env';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState(''); // Bot detection
  const captchaRef = useRef<HCaptcha>(null);

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleCaptchaExpire = () => {
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      console.log('Bot detected');
      setStatus('success'); // Fake success to fool bots
      return;
    }

    // Check if captcha is verified
    if (!captchaToken) {
      setStatus('captcha-required');
      return;
    }

    // Validate API key exists
    if (!process.env.NEXT_PUBLIC_WEB3FORMS_KEY) {
      setStatus('error');
      console.error('Web3Forms API key not configured. Please add NEXT_PUBLIC_WEB3FORMS_KEY to your environment variables.');
      return;
    }

    // Sanitize and validate inputs
    const sanitizedName = sanitizeInput(formData.name, 100);
    const sanitizedEmail = sanitizeInput(formData.email, 100);
    const sanitizedMessage = sanitizeInput(formData.message, 5000);

    // Validate email format
    if (!isValidEmail(sanitizedEmail)) {
      setStatus('invalid-email');
      return;
    }

    // Validate required fields
    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      setStatus('invalid-input');
      return;
    }

    setStatus('sending');

    try {
      // Using Web3Forms - Get your access key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: sanitizedName,
          email: sanitizedEmail,
          message: sanitizedMessage,
          subject: `New Contact Form Submission from ${sanitizedName}`,
          'h-captcha-response': captchaToken,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
        // Auto-clear success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      }
    } catch {
      setStatus('error');
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-700 mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-teal-50 dark:bg-gray-700 rounded-lg">
                    <svg
                      className="text-teal-700 dark:text-teal-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">LinkedIn</p>
                    <a
                      href={content.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 font-medium hover:text-teal-600 transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-teal-50 rounded-lg">
                    <MapPin className="text-teal-700" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-gray-900 font-medium">
                      {content.personal.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              className="glass-effect rounded-lg p-8 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.3), 0 10px 25px rgba(6, 182, 212, 0.2)',
              }}
              style={{
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.15), 0 4px 15px rgba(6, 182, 212, 0.1)',
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users, catches bots */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    maxLength={100}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    maxLength={5000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.message.length}/5000 characters
                  </p>
                </div>

                {/* hCaptcha */}
                <div className="flex justify-center">
                  {process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ? (
                    <HCaptcha
                      ref={captchaRef}
                      sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                      onVerify={handleCaptchaVerify}
                      onExpire={handleCaptchaExpire}
                      theme="light"
                    />
                  ) : (
                    <div className="text-red-600 text-sm p-3 bg-red-50 rounded-lg">
                      ⚠️ hCaptcha not configured. Please add NEXT_PUBLIC_HCAPTCHA_SITE_KEY to environment variables.
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || !captchaToken}
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}
                >
                  <Send size={20} />
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {!captchaToken && status !== 'sending' && status !== 'success' && (
                  <p className="text-sm text-gray-600 text-center flex items-center justify-center gap-2">
                    <Shield size={16} />
                    Please complete the captcha to send your message
                  </p>
                )}

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg"
                  >
                    <CheckCircle size={20} />
                    <span className="font-medium">Message sent successfully! I&apos;ll get back to you soon.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg"
                  >
                    <AlertCircle size={20} />
                    <span className="font-medium">Failed to send message. Please try again or reach out via LinkedIn.</span>
                  </motion.div>
                )}
                {status === 'captcha-required' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-lg"
                  >
                    <Shield size={20} />
                    <span className="font-medium">Please complete the captcha verification first.</span>
                  </motion.div>
                )}
                {status === 'invalid-email' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg"
                  >
                    <AlertCircle size={20} />
                    <span className="font-medium">Please enter a valid email address.</span>
                  </motion.div>
                )}
                {status === 'invalid-input' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg"
                  >
                    <AlertCircle size={20} />
                    <span className="font-medium">Please fill in all required fields.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
