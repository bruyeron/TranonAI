'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Users, Rocket, Info } from 'lucide-react'; // Importation de Info
import logoDark from '../assets/Logo_tranonai.png';
import logoLight from '../assets/Logo_sombre.png';

// Taille d'écran de référence pour Tailwind 'md'
const MD_BREAKPOINT = 768;

// Hook pour le dark mode (inchangé - Garde le dans un fichier séparé si possible)
function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    // Vérifie la préférence utilisateur si rien n'est sauvegardé
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(saved ? saved === 'dark' : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggle = useCallback(() => setIsDarkMode(prev => !prev), []);
  return [isDarkMode, toggle] as const;
}

// Hook pour détecter la taille d'écran (Optimisé)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MD_BREAKPOINT);
    };

    checkMobile(); // Vérification initiale
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// Liste des liens du menu (inchangé)
const navItems = [
  { label: "Nexora", id: "nexora", route: "/home" },
  { label: "Services", id: "services", route: "/home" },
  { label: "Tarif", id: "pricing", route: "/home" },
  { label: "À propos", route: "/about" },
];

// Composant lien navigation (inchangé)
function NavLink({ item }: { item: typeof navItems[0] }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (item.route === "/home" && item.id) {
      if (location.pathname !== "/home") {
        navigate(`/home`, { state: { scrollTo: item.id } });
      } else {
        const element = document.getElementById(item.id);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item.route);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <a
      href={item.id ? `${item.route}#${item.id}` : item.route}
      onClick={handleClick}
      className="px-4 py-2 rounded-full text-base font-normal transition duration-300
        text-gray-900 hover:bg-gray-900/10 hover:text-[#FBAF42]
        dark:text-white dark:hover:bg-white/20 dark:hover:text-[#FBAF42]"
    >
      {item.label}
    </a>
  );
}

// Composant principal de la barre de navigation
export default function NavBar() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const isMobile = useIsMobile(); // Utilisation du hook optimisé
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll automatique après navigation avec state.scrollTo (inchangé)
  useEffect(() => {
    const state = (location.state as any) || {};
    if (state.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      element?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, document.title); // nettoyer le state
    }
  }, [location]);

  // Logique du premier bouton (Rocket/Info)
  const handleFirstActionClick = () => {
    const targetRoute = isMobile ? "/about" : "/evaluation";
    navigate(targetRoute);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const FirstButtonIcon = isMobile ? Info : Rocket;
  const firstButtonLabel = isMobile ? "À propos" : "Lancer projet";

  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-4 sm:px-10 py-3
      shadow-md backdrop-blur-md transition-colors duration-300
      bg-white/90 text-gray-900 dark:bg-gray-900/80 dark:text-white">

      {/* Logo */}
      <a
        href="/home#hero"
        onClick={(e) => {
          e.preventDefault();
          navigate("/home");
          const element = document.getElementById("hero");
          element?.scrollIntoView({ behavior: "smooth" });
        }}
        className="flex items-center space-x-3"
      >
        <img src={isDarkMode ? logoDark : logoLight} alt="Logo Tranon'AI" className="w-14 h-14 object-contain" />
        <h1 className="hidden sm:block text-2xl font-bold">
          Tranon'<span className="text-[#FBAF42]">AI</span>
        </h1>
      </a>

      {/* Menu (Masqué sur mobile) */}
      <ul className="hidden md:flex items-center gap-6 px-5 py-4 rounded-full bg-gray-100/80 backdrop-blur-sm dark:bg-black/5">
        {navItems.map(item => (
          <li key={item.label}>
            <NavLink item={item} />
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4 sm:gap-6">
        
        {/* Bouton Rocket (Desktop) / Info (Mobile) */}
        <button
          aria-label={firstButtonLabel}
          onClick={handleFirstActionClick}
        >
          {/* L'icône change en fonction du mode mobile */}
          <FirstButtonIcon className="w-5 h-5 hover:border-b-2 border-[#FBAF42] transition duration-300" />
        </button>

        {/* Bouton Users → redirige vers /team */}
        <button
          aria-label="Équipe"
          onClick={() => {
            navigate("/team");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Users className="w-5 h-5 hover:border-b-2 border-[#FBAF42] transition duration-300" />
        </button>

        {/* Bouton DarkMode */}
        <button
          onClick={toggleDarkMode}
          aria-label={isDarkMode ? "Passer au mode clair" : "Passer au mode sombre"}
          className="p-2 rounded-full transition-colors duration-300
            bg-gray-900/10 hover:bg-gray-900/20
            dark:bg-white/10 dark:hover:bg-white/20"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-300" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-500" />
          )}
        </button>
      </div>
    </nav>
  );
}