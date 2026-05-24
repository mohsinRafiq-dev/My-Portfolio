import { useEffect, lazy, Suspense } from 'react';
import { Header, Hero, ScrollProgressBar } from './components';
import { SectionSkeleton } from './components/Skeleton';
import { useScrollHue } from './hooks/useScrollHue';

const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Journey = lazy(() => import('./components/Journey').then(m => ({ default: m.Journey })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

function App() {
  useScrollHue();

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
      {/* Fixed Full-Page Geometric Background — hue shifts with scroll */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none overflow-hidden"
        style={{
          background: `radial-gradient(at 20% 20%, rgba(199, 120, 221, calc(0.16 - var(--scroll-progress) * 0.10)) 0%, transparent 50%),
                       radial-gradient(at 80% 80%, rgba(91, 158, 255, calc(0.06 + var(--scroll-progress) * 0.12)) 0%, transparent 55%),
                       linear-gradient(135deg, #282c33 0%, #1a1d23 50%, #282c33 100%)`
        }}
      >
        {/* Animated grid pattern */}
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
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <About />
          <Journey />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
