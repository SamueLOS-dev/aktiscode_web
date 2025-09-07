import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import WebVitals from './components/WebVitals';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import FinalCTA from './components/FinalCTA';
import WebDevelopment from './pages/WebDevelopment';
import AIAutomation from './pages/AIAutomation';
import Applications from './pages/Applications';
import Contact from './pages/Contact';
import Demo from './pages/Demo';

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Home page component wrapper
const HomePage = () => (
  <>
    <SEOHead />
    <Hero />
    <ProblemSolution />
    <Services />
    <Process />
    <WhyUs />
    <FinalCTA />
  </>
);

function App() {
  return (
    <>
      <WebVitals />
      <Router>
        <div className="min-h-screen">
          <ScrollToTop />
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/ai-automatizacie" element={<AIAutomation />} />
              <Route path="/aplikacie" element={<Applications />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/demo" element={<Demo />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;