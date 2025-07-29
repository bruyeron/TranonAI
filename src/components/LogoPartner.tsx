import ODCLogo from "../assets/ODC-logo.jpg";
import AWSLogo from "../assets/aws-logo.jpg";
import MetaSombre from "../assets/meta-sombre.jpg";
import OSCLogo from "../assets/OSC-logo.jpg";
import EYSombre from "../assets/EY-sombre.jpg";
import OrangeLogo from "../assets/orange.jpg";

export function LogoPartner() {
  const logos = [
    ODCLogo,
    AWSLogo,
    MetaSombre,
    OSCLogo,
    EYSombre,
    OrangeLogo,
  ];

  const keyframes = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <div className="relative flex justify-center w-full py-6 overflow-hidden bg-gray-300 dark:bg-[#0F172A]">
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