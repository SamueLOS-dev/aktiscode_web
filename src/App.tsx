import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web" element={<WebDevelopment />} />
          <Route path="/ai" element={<AIAutomation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;