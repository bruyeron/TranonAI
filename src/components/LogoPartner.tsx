export function LogoPartner() {
  const logos = [
    "./src/assets/ODC-logo.jpg",
    "./src/assets/aws-logo.jpg",
    "./src/assets/meta-sombre.jpg",
    "./src/assets/OSC-logo.jpg",
    "./src/assets/EY-sombre.jpg",
    "./src/assets/orange.jpg",
  ];

  const keyframes = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <div className="relative flex justify-center w-full py-6 overflow-hidden bg-gray-300">
      {/* Injecte les keyframes */}
      <style>{keyframes}</style>

      <div
        className="flex space-x-12 w-[60%]"
        style={{
          animation: "scroll 10s linear infinite",
          display: "flex",
          width: "max-content",
        }}
      >
        {/* Duplique les logos une fois pour l'effet infini */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partenaire ${index + 1}`}
            className="object-contain transition duration-300 h-26 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
}
