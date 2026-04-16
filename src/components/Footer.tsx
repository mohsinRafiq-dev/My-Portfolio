import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Instagram } from 'lucide-react';

export const Footer = () => {
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
    <footer className="relative overflow-hidden bg-gradient-to-t from-dark-950 via-dark-950 to-transparent">
      {/* Animated divider */}
      <motion.div
        className="h-1 bg-gradient-to-r from-transparent via-glow to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

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
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:text-glow transition-colors"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
                  >
                    <Icon size={18} />
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
