import { Smartphone, House, ChartPie, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import prototype from "../assets/prototype.jpg";

const features = [
  {
    icon: <House className="bg-[#19B7A5] rounded-[12px] w-14 h-10 p-2 m-1" />,
    title: "Hub de contrôle intelligent",
    badge: "Automatisation en un seul geste",
    badgeColor: "#FBAF42",
    description:
      "Gérez tous vos appareils depuis un tableau de bord intuitif : planifiez, créez des ambiances et suivez votre consommation en temps réel.",
    bg: "#19B7A51A",
    border: "#19B7A54D",
  },
  {
    icon: <ChartPie className="bg-[#334155] rounded-[12px] w-14 h-10 p-2 m-1" />,
    title: "Analyse énergétique",
    badge: "Economisez jusqu'à 40% sur vos factures",
    badgeColor: "#FBAF42",
    description:
      "Suivez vos habitudes de consommation, identifiez les opportunités d'économie, et laissez l'IA vous proposer des recommandations personnalisées.",
    bg: "white/20",
    border: "#334155",
  },
  {
    icon: <ShieldCheck className="bg-[#334155] rounded-[12px] w-14 h-10 p-2 m-1" />,
    title: "Surveillance de sécurité",
    badge: "Protection 24h/24 et 7j/7",
    badgeColor: "#FBAF42",
    description:
      "Recevez des alertes instantanées en cas d'activité inhabituelle, surveillez votre maison à distance et assurez la sécurité de votre famille à tout moment.",
    bg: "white/20",
    border: "#334155",
  },
];

function ControleMobile() {
  return (
    <section id="mobile" className="dark:bg-[#1E293B] bg-[#F2F4F8] py-16 px-4 sm:px-8 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-3xl font-bold text-center dark:text-white text-black sm:text-5xl lg:text-6xl"
      >
        Contrôlez tout{" "}
        <span className="text-[#19B7A5]">depuis votre téléphone</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-base sm:text-lg lg:text-xl dark:text-[#9CA3AF] text-black-600 text-center mt-6 leading-relaxed max-w-2xl"
      >
        L'application mobile Tranon'AI met l'automatisation intelligente de votre
        maison dans votre poche. Simple, intuitive et pensée pour les familles malgaches.
      </motion.p>

      <div className="flex flex-col items-center justify-center w-full gap-10 lg:flex-row mt-14 max-w-7xl">
        {/* IMAGE MOBILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-[24px] w-[260px] sm:w-[300px] md:w-[340px] lg:w-[384px] aspect-[9/16] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${prototype})`,
          }}
        >
          <Smartphone className="bg-[#FBAF42] w-16 h-16 sm:w-18 sm:h-18 p-4 sm:p-5 rounded-full absolute -top-7 -right-5" />
        </motion.div>

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col w-full max-w-2xl gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-[16px] p-4 sm:p-6 flex items-start gap-4"
              style={{
                background: feature.bg,
                border: `1px solid ${feature.border}`,
              }}
            >
              {feature.icon}
              <div>
                <p className="text-lg font-bold leading-snug dark:text-white text-black sm:text-xl">
                  {feature.title}{" "}
                  <span
                    className="px-2 py-1 ml-2 text-xs font-normal rounded-full"
                    style={{
                      backgroundColor: feature.badgeColor,
                      color: "#0F172A",
                    }}
                  >
                    {feature.badge}
                  </span>
                </p>
                <p className="text-sm sm:text-base dark:text-[#9CA3AF] text-[#717274] mt-2">{feature.description}</p>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}

export default ControleMobile;
