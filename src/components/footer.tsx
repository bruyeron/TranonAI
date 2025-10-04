'use client';

import { useNavigate, useLocation } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { LogoPartner } from "./LogoPartner";
import { useEffect } from "react";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll fluide après navigation si on passe par un state
  useEffect(() => {
    const state = (location.state as any) || {};
    if (state.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      element?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState({}, document.title); // nettoyage du state
    }
  }, [location]);

  const linkStyle =
    "dark:text-[#9CA3AF] text-gray-600 font-normal text-base hover:text-[#FBAF42] transition";

  // Fonction générique de navigation
  const handleNavigation = (
    e: React.MouseEvent,
    route: string,
    sectionId?: string
  ) => {
    e.preventDefault();

    if (route === "/home" && sectionId) {
      // Si on est déjà sur /home, on scroll directement
      if (location.pathname === "/home") {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Sinon on navigue vers /home et on scroll après
        navigate("/home", { state: { scrollTo: sectionId } });
      }
    } else {
      navigate(route);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="dark:bg-[#0F172A] bg-[#F2F4F8] text-gray-600 border-t-4 border-[#334155] pb-10">
      {/* Sections principales */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 px-4 sm:px-10 w-full max-w-[1200px] mx-auto border-b-2 border-[#334155]">
        {/* Brand + Socials */}
        <div>
          <h1 className="text-black dark:text-white font-semibold text-2xl mb-3">
            Tranon'<span className="text-[#FBAF42]">AI</span>
          </h1>
          <p className="dark:text-[#9CA3AF] text-gray-600 text-base leading-8 mb-5">
            Rendre chaque foyer malgache plus intelligent, plus efficace et plus
            respectueux de l’environnement.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram].map((Icon, index) => (
              <Icon
                key={index}
                strokeWidth={1}
                className="dark:text-white text-black bg-white dark:bg-[#1E293B] border border-[#475569] rounded-2xl p-2 w-10 h-10 hover:text-[#FBAF42] transition cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Produits */}
        <div className="flex flex-col gap-2">
          <h2 className="dark:text-white text-black font-bold text-lg mb-3">
            Produits
          </h2>
          {[
            { name: "Nexora", route: "/home", id: "nexora" },
            { name: "Application Mobile", route: "/home", id: "mobile" },
            { name: "Accessoires", route: "/home", id: "services" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.id ? `${item.route}#${item.id}` : item.route}
              onClick={(e) => handleNavigation(e, item.route, item.id)}
              className={linkStyle}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Support */}
        <div className="flex flex-col gap-2">
          <h2 className="dark:text-white text-black font-bold text-lg mb-3">
            Support
          </h2>
          {[
            { name: "Installation Guide", route: "/home", id: "installation" },
            { name: "User Manual", route: "/home", id: "manual" },
            { name: "Troubleshooting", route: "/home", id: "troubleshooting" },
            { name: "Warranty", route: "/home", id: "warranty" },
          ].map((item, i) => (
            <a
              key={i}
              href={`${item.route}#${item.id}`}
              onClick={(e) => handleNavigation(e, item.route, item.id)}
              className={linkStyle}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Entreprise */}
        <div className="flex flex-col gap-2">
          <h2 className="dark:text-white text-black font-bold text-lg mb-3">
            Entreprise
          </h2>
          {[
            { name: "À propos", route: "/about" },
            { name: "Services", route: "/home", id: "services" },
            { name: "Notre équipe", route: "/team" },
            { name: "Investor", route: "/investor" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.route}
              onClick={(e) => handleNavigation(e, item.route, item.id)}
              className={linkStyle}
            >
              {item.name}
            </a>
          ))}
        </div>
      </section>

      {/* Partenaires */}
      <LogoPartner />

      {/* Bas de page */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 w-full max-w-[1200px] mx-auto mt-5 gap-4 text-center md:text-left">
        <p className="text-sm dark:text-[#9CA3AF] text-gray-600">
          © 2025 Tranon'AI. All rights reserved. Made with ❤️ in Madagascar.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm dark:text-[#9CA3AF] text-gray-600">
          {[
            { name: "Privacy Policy", route: "/privacy" },
            { name: "Terms of Service", route: "/terms" },
            { name: "Cookie Policy", route: "/cookies" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.route}
              onClick={(e) => handleNavigation(e, item.route)}
              className="hover:text-[#FBAF42] transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
