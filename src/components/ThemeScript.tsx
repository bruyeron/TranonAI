
export default function ThemeScript() {
  // Le script s'exécute immédiatement avant le rendu du corps de la page.
  // Il vérifie si un thème a été enregistré localement, sinon il utilise le thème du système.
  // Il ajoute ensuite la classe 'dark' à l'élément <html> si nécessaire.
  const themeScript = `
    (function() {
      const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.classList.add(theme);
    })();
  `;

  return (
    <script dangerouslySetInnerHTML={{ __html: themeScript }} />
  );
}