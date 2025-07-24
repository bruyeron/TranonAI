import { Zap, Shield, Clock3, Sprout } from "lucide-react";
import { motion } from "framer-motion";

type Problem = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  gradient: string;
};

const problems: Problem[] = [
  {
    Icon: Zap,
    title: "Vos factures explosent?",
    description:
      "Les maisons traditionnelles gaspillent 30 à 50% d'énergie en raison d'une automatisation inefficace et d'un contrôle manuel.",
    gradient: "linear-gradient(90deg, #EF4444 0%, #DC2626 100%)",
  },
  {
    Icon: Shield,
    title: "Problèmes de sécurité",
    description:
      "La surveillance limitée de la maison et les alertes tardives mettent en danger les familles et les biens.",
    gradient: "linear-gradient(90deg, #F97316 0%, #EA580C 100%)",
  },
  {
    Icon: Clock3,
    title: "Gestion manuelle",
    description:
      "Régler sans cesse les lumières, la température et les appareils fait perdre un temps précieux chaque jour.",
    gradient: "linear-gradient(90deg, #EAB308 0%, #CA8A04 100%)",
  },
  {
    Icon: Sprout,
    title: "Impact environnemental",
    description:
      "Les habitations inefficaces augmentent l'empreinte carbone et contribuent à la dégradation de l'environnement.",
    gradient: "linear-gradient(90deg, #22C55E 0%, #16A34A 100%)",
  },
];

function ProblemCard({
  Icon,
  title,
  description,
  gradient,
}: Problem) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-[#334155] rounded-2xl p-6 bg-[#0F172A] hover:border-[#19B7A5] hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
    >
      <Icon
        className="rounded-[5px] p-1.5 w-10 h-10 text-white"
        style={{ background: gradient }}
        aria-label={title}
      />
      <h2 className="text-white font-semibold text-lg sm:text-xl my-3 hover:text-[#19B7A5] transition-colors duration-200">
        {title}
      </h2>
      <p className="text-[#9CA3AF] text-sm sm:text-base">{description}</p>
    </motion.div>
  );
}

function Probleme() {
  return (
    <section className="flex flex-col items-center bg-[#1E293B] py-16 px-4 sm:px-6 lg:px-10 w-full">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-white font-bold text-3xl sm:text-5xl md:text-6xl text-center mb-4"
      >
        Les problèmes que nous résolvons
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-[#9CA3AF] text-base sm:text-lg md:text-xl text-center max-w-3xl mb-12"
      >
        Every Malagasy homeowner faces these daily challenges. Tranon'AI
        transforms these pain points into intelligent solutions.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {problems.map((props, index) => (
          <ProblemCard key={index} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Probleme;
