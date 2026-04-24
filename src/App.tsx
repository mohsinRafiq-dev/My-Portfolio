import { useEffect } from 'react';
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
        {/* Animated grid pattern - Only on large screens */}
        <div className="absolute inset-0 opacity-10 pointer-events-none hidden lg:block">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c778dd" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>


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
