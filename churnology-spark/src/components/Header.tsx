
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-500 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v7a1 1 0 01-1 1h-1v2a1 1 0 01-1 1h-1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2H5a1 1 0 01-1-1v-2H3a1 1 0 01-1-1V3zm1 0v7h1V3H4zm6 9v2H8v-2h2zm2-2v4h-2v-4h2zm2-2v2h-2v-2h2zm-6 0v2H6v-2h2zm6-5H6v3h8V5z" clipRule="evenodd" />
            </svg>
          </div>
          <Link to="/" className="text-xl font-semibold text-gray-900">Churnology</Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
          >
            Home
          </Link>
          <Link 
            to="/dashboard" 
            className={`text-sm font-medium ${location.pathname === '/dashboard' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
          >
            Dashboard
          </Link>
          <Link 
            to="/analytics" 
            className={`text-sm font-medium ${location.pathname === '/analytics' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
          >
            Analytics
          </Link>
          <Link 
            to="/documentation" 
            className={`text-sm font-medium ${location.pathname === '/documentation' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
          >
            Documentation
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-sm font-medium px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

