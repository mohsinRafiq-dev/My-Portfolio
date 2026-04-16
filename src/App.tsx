import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header, Hero, About, Journey, Projects, Skills, Contact, Footer, ScrollProgressBar } from './components';

function App() {
  useEffect(() => {
    // Enable smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top on page load with fallbacks
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    scrollToTop();
    const timer = setTimeout(scrollToTop, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-[#ABB2BF] relative">
      {/* Fixed Full-Page Geometric Background */}
      <div className="fixed inset-0 -z-20 pointer-events-none bg-gradient-to-br from-[#282c33] via-[#1a1d23] to-[#282c33] overflow-hidden">
        {/* Animated background orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#c778dd]/70 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.3, 0.9, 1.2, 1],
            x: [0, 60, -30, 50, 0],
            y: [0, -40, 20, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#5b9eff]/70 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.1, 0.85, 1.15, 1],
            x: [0, -60, 30, -50, 0],
            y: [0, 40, -20, 30, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c778dd" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#5b9eff]/40 rounded-lg hidden lg:block"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-[#c778dd]/40 rounded-full hidden lg:block"
          animate={{ rotate: -360, scale: [1, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Journey Section */}
        <Journey />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
