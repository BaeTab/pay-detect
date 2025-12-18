import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import Guide from './pages/Guide';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

import AnalyticsTracker from './components/AnalyticsTracker';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-[100dvh] bg-slate-50 flex flex-col font-sans">
      <AnalyticsTracker />
      {/* Header */}
      <header className="bg-detective-navy text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="bg-detective-yellow p-1.5 rounded-full text-detective-navy">
              <Search className="w-5 h-5 effect-stamp" /> {/* Simple effect class if needed */}
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              주휴탐정 <span className="hidden sm:inline text-sm font-normal text-slate-300 opacity-80">Holiday Pay Detective</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link to="/calculator" className="hover:text-detective-yellow transition-colors">수사 의뢰(계산기)</Link>
            <Link to="/guide" className="hover:text-detective-yellow transition-colors">수사 가이드</Link>
            <Link to="/blog" className="hover:text-detective-yellow transition-colors">탐정 일지(블로그)</Link>
            <Link to="/faq" className="hover:text-detective-yellow transition-colors">FAQ</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/calculator" className="block hover:text-detective-yellow" onClick={closeMenu}>수사 의뢰(계산기)</Link>
              <Link to="/guide" className="block hover:text-detective-yellow" onClick={closeMenu}>수사 가이드</Link>
              <Link to="/blog" className="block hover:text-detective-yellow" onClick={closeMenu}>탐정 일지(블로그)</Link>
              <Link to="/faq" className="block hover:text-detective-yellow" onClick={closeMenu}>FAQ</Link>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-slate-200 py-8 text-center text-xs text-slate-500">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-4">
            <Link to="/privacy-policy" className="hover:text-slate-800 hover:underline">개인정보처리방침</Link>
            <span className="text-slate-300">|</span>
            <Link to="/terms-of-service" className="hover:text-slate-800 hover:underline">이용약관</Link>
          </div>
          <p>© 2025 주휴탐정. All rights reserved.</p>
          <p className="mt-2 text-slate-400">
            본 서비스는 모의 계산 도구이며, 법적 효력이 없습니다.<br />
            정확한 노무 관련 상담은 전문 노무사와 진행하시기 바랍니다.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
