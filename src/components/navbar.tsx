import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import logoDark from '../assets/Logo_tranonai.png';
import logoLight from '../assets/Logo_sombre.png';

// Define the type for the return value of the hook
type DarkModeHook = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

// Hook de gestion du mode sombre, intégré dans le même fichier
function useDarkMode(): DarkModeHook {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check for a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // If no theme is saved, check the system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // We return the state and the setter function for toggling
  return [isDarkMode, setIsDarkMode];
}

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <nav className="
      fixed top-0 left-0 z-50 flex items-center justify-between w-full px-10 py-3
      shadow-md backdrop-blur-md transition-colors duration-300
      bg-white/90 text-gray-900
      dark:bg-gray-900/80 dark:text-white
    ">
      <a href="#" className="flex items-center space-x-3">
        <img src={isDarkMode ? logoDark : logoLight} alt="logo tranon'AI" className="object-contain w-14 h-14" />
        <h1 className="text-2xl font-bold">
          Tranon'<span className="text-[#FBAF42]">AI</span>
        </h1>
      </a>

      <div className="flex items-center gap-6">
        <ul className="flex px-5 py-4 space-x-6 rounded-full bg-gray-100/80 backdrop-blur-sm dark:bg-black/5">
          {["Home", "Services", "Pricing", "About us"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="px-4 py-2 rounded-full text-base font-normal transition duration-300
                  text-gray-900 hover:bg-gray-900/10 hover:text-[#FBAF42]
                  dark:text-white dark:hover:bg-white/20 dark:hover:text-[#FBAF42]
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label={isDarkMode ? "Passer au mode clair" : "Passer au mode sombre"}
          className="p-2 rounded-full transition-colors duration-300
            bg-gray-900/10 hover:bg-gray-900/20
            dark:bg-white/10 dark:hover:bg-white/20
          "
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