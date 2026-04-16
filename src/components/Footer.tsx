import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mohsinRafiq-dev', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-mohsin-rafiq-94060333a/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/_asadmughal', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/_asadmughal/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:mohsinrafiq931@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-[#282c33] via-dark-950 to-transparent">
      {/* Animated background orbs - hidden on mobile */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            animate={{ 
              y: [0, 40, 0],
              x: [0, 30, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: 'linear-gradient(135deg, #c778dd, #5b9eff)'
            }}
          />

          <motion.div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-15"
            animate={{ 
              y: [0, -30, 0],
              x: [0, -25, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{
              background: 'linear-gradient(135deg, #5b9eff, #c778dd)'
            }}
          />
        </>
      )}
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent via-[#5b9eff] to-transparent relative z-10"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c778dd] to-transparent"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2 text-glow">Portfolio</h3>
            <p className="text-gray-400 text-sm">Full Stack Developer crafting digital experiences</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              {footerLinks.map((link, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  transition={{ ease: 'easeOut' }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-glow transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <div>
                <a href="#" className="text-gray-400 hover:text-glow transition-colors text-sm">
                  Web Development
                </a>
              </div>
              <div>
                <a href="#" className="text-gray-400 hover:text-glow transition-colors text-sm">
                  Full Stack Development
                </a>
              </div>
              <div>
                <a href="#" className="text-gray-400 hover:text-glow transition-colors text-sm">
                  UI/UX Design
                </a>
              </div>
              <div>
                <a href="#" className="text-gray-400 hover:text-glow transition-colors text-sm">
                  Consulting
                </a>
              </div>
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 p-2 rounded-lg border border-white/10 flex items-center justify-center hover:border-white/30 transition-all overflow-hidden relative"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
                    }}
                    whileHover={{ 
                      scale: 1.25, 
                      rotate: 15,
                      boxShadow: '0 0 20px rgba(199, 120, 221, 0.4)',
                      borderColor: 'rgba(199, 120, 221, 0.6)'
                    }}
                    whileTap={{ scale: 0.85 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -4, 0]
                    }}
                    transition={{
                      y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.15 },
                      default: { delay: 0.35 + idx * 0.06, duration: 0.4 }
                    }}
                    title={social.label}
                  >
                    <Icon size={18} className="relative z-10" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm">
            <p>
              © {currentYear} All rights reserved. <br className="md:hidden" />
              Made with <Heart size={14} className="inline text-red-500 mx-1" /> by Mohsin Rafiq
            </p>
          </div>

          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-glow transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-glow transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-glow transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated background particles */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-64 h-64 bg-glow/5 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ pointerEvents: 'none' }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-48 h-48 bg-[#c778dd]/5 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ pointerEvents: 'none' }}
      />
    </footer>
  );
};
