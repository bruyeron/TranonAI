import { Smartphone, House, ChartPie, ShieldCheck } from "lucide-react";
import { SecondaryButton } from "./button";

const features = [
  {
    icon: <House className="bg-[#19B7A5] rounded-[12px] w-14 h-10 p-2 m-1" />,
    title: "Hub de contrôle intelligent",
    badge: "Automatisation en un seul geste",
    badgeColor: "#19B7A5",
    description:
      "Gérez tous vos appareils depuis un tableau de bord intuitif : planifiez, créez des ambiances et suivez votre consommation en temps réel.",
    bg: "#19B7A51A",
    border: "#19B7A54D",
  },
  {
    icon: <ChartPie className="bg-[#334155] rounded-[12px] w-14 h-10 p-2 m-1" />,
    title: "Analyse énergétique",
    badge: "Economisez jusqu'à 40% sur vos factures",
    badgeColor: "#19B7A5",
    description:
      "Suivez vos habitudes de consommation, identifiez les opportunités d'économie, et laissez l'IA vous proposer des recommandations personnalisées.",
    bg: "#0F172A80",
    border: "#334155",
  },
  {
    icon: <ShieldCheck className="bg-[#334155] rounded-[12px] w-14 h-10 p-2 m-1" />,
    title: "Surveillance de sécurité",
    badge: "Protection 24h/24 et 7j/7",
    badgeColor: "#19B7A5",
    description:
      "Recevez des alertes instantanées en cas d'activité inhabituelle, surveillez votre maison à distance et assurez la sécurité de votre famille à tout moment.",
    bg: "#0F172A80",
    border: "#334155",
  },
];

function ControleMobile() {
  return (
    <section className="bg-[#1E293B] py-16 flex flex-col items-center">
      <h1 className="font-bold text-6xl text-white text-center px-4">
        Contrôlez tout <span className="text-[#19B7A5]">depuis votre téléphone</span>
      </h1>
      <p className="text-xl text-[#9CA3AF] text-center mt-5 px-6 leading-relaxed max-w-3xl">
        L'application mobile Tranon'AI met l'automatisation intelligente de votre maison dans votre poche. <br />
        Simple, intuitive et pensée pour les familles malgaches.
      </p>

      <div className="flex gap-14 mt-14 px-6 max-w-screen-xl mx-auto flex-wrap justify-center">
        {/* Image + Icon */}
        <div
          className="rounded-[24px] w-[384px] h-[768px] bg-cover bg-center relative"
          style={{ backgroundImage: "url('./src/assets/tranonAI-mobileApp.jpg')" }}
        >
          <Smartphone className="bg-[#19B7A5] w-18 h-18 p-5 rounded-full absolute -top-7 -right-5" />
        </div>

        <div className="flex flex-col gap-6 justify-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-[16px] p-6 flex items-start gap-5"
              style={{ background: feature.bg, border: `1px solid ${feature.border}`, width: 584, height: 164 }}
            >
              {feature.icon}
              <div>
                <p className="font-bold text-xl text-white leading-snug">
                  {feature.title}{" "}
                  <span
                    className="px-2 py-1 text-xs font-normal rounded-full ml-2"
                    style={{ backgroundColor: feature.badgeColor, color: "#0F172A" }}
                  >
                    {feature.badge}
                  </span>
                </p>
                <p className="text-base text-[#9CA3AF] mt-2">{feature.description}</p>
              </div>
            </div>
          ))}

          <div className="flex gap-3 mt-2">
            <SecondaryButton className="bg-[#334155]">Téléchargez pour iOS</SecondaryButton>
            <SecondaryButton className="bg-[#334155]">Téléchargez pour Android</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ControleMobile;
