import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';
import { AnimatedTitle } from './AnimatedElements';
import { SectionBackground } from './SectionBackground';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mohsinrafiq931@gmail.com',
    href: 'mailto:mohsinrafiq931@gmail.com',
    color: 'text-red-400',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 3080045805',
    href: 'tel:+923080045805',
    color: 'text-green-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Islamabad, Pakistan',
    href: '#',
    color: 'text-white',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com',
    color: 'hover:text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    color: 'hover:text-[#c778dd]',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com',
    color: 'hover:text-sky-400',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:hello@example.com',
    color: 'hover:text-red-400',
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
    emailjs.init(publicKey);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID || 'SERVICE_ID';
      const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID || 'TEMPLATE_ID';
      const contactEmail = (import.meta as any).env.VITE_CONTACT_EMAIL || 'hello@example.com';

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: contactEmail,
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (response.status === 200) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('EmailJS error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      {/* Impressive background */}
      <SectionBackground variant="contact" />
      
      <div className="container mx-auto px-4">
        {/* Section Head */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-glow font-semibold text-sm uppercase tracking-widest mb-4 block">Get In Touch</span>
          <AnimatedTitle>Let's Work Together</AnimatedTitle>
          <p className="text-gray-400 text-lg mt-4">
            Have a project in mind? Feel free to reach out. I'm always interested in hearing about new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={idx}
                    href={method.href}
                    className="glass p-4 rounded-lg flex items-start gap-4 group hover:border-glow/50 transition-colors"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`${method.color} mt-1`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{method.label}</p>
                      <p className="text-white font-semibold truncate text-sm">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 glass rounded-lg ${social.color} transition-colors`}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      viewport={{ once: true }}
                      title={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold mb-2">Name *</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-glow/50 focus:outline-none transition-colors"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-glow/50 focus:outline-none transition-colors"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>
            </div>

            {/* Subject Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold mb-2">Subject *</label>
              <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-glow/50 focus:outline-none transition-colors"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold mb-2">Message *</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-glow/50 focus:outline-none transition-colors resize-none"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div
                className="w-full bg-red-500/20 border border-red-500/50 rounded-lg px-4 py-3 text-red-400 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full btn-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!loading ? { scale: 1.05 } : {}}
                whileTap={!loading ? { scale: 0.95 } : {}}
              >
                {loading ? (
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block"
                  >
                    Sending...
                  </motion.span>
                ) : submitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400"
                  >
                    ✓ Message sent successfully!
                  </motion.span>
                ) : (
                  <span>Send Message</span>
                )}
              </motion.button>
            </motion.div>

            {/* Form Help Text */}
            <motion.p
              className="text-gray-500 text-sm text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              viewport={{ once: true }}
            >
              I'll get back to you as soon as possible.
            </motion.p>
          </motion.form>
        </div>

        {/* Response Time Info */}
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass p-6 rounded-xl inline-block">
            <p className="text-gray-400">
              <span className="text-glow font-semibold">Average response time:</span> 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
