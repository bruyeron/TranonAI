import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import logo from '../assets/Logo_tranonai.jpg';

// Hook de gestion du mode sombre
export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : true;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode] as const;
}

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <nav className={`
      fixed top-0 left-0 z-50 flex items-center justify-between w-full px-10 py-3
      shadow-md backdrop-blur-md transition-colors duration-300
      ${isDarkMode ? 'bg-gray-900/80 text-white' : 'bg-white/90 text-gray-900'}
    `}>
      <a href="#" className="flex items-center space-x-3">
        <img src={logo} alt="logo tranon'AI" className="object-contain w-14 h-14" />
        <h1 className="text-2xl font-bold">
          Tranon'<span className="text-[#FBAF42]">AI</span>
        </h1>
      </a>

      <div className="flex items-center gap-6">
        <ul className={`flex px-5 py-4 space-x-6 rounded-full
          ${isDarkMode ? 'bg-black/5' : 'bg-gray-100/80'} backdrop-blur-sm`}>
          {["Home", "Services", "Pricing", "About us"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`px-4 py-2 rounded-full text-base font-normal transition duration-300
                  ${isDarkMode
                    ? 'text-white hover:bg-white/20 hover:text-[#FBAF42]'
                    : 'text-gray-900 hover:bg-gray-900/10 hover:text-[#FBAF42]'}
                `}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label={isDarkMode ? "Passer au mode clair" : "Passer au mode sombre"}
          className={`p-2 rounded-full transition-colors duration-300
            ${isDarkMode
              ? 'bg-white/10 hover:bg-white/20'
              : 'bg-gray-900/10 hover:bg-gray-900/20'}
          `}
        >
          {isDarkMode
            ? <Sun className="w-5 h-5 text-yellow-300" />
            : <Moon className="w-5 h-5 text-indigo-500" />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
