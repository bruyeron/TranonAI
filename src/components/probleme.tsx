import { Zap, Shield, Clock3, Sprout } from "lucide-react";

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
      "Les maisons traditionnelles gaspillent 30 à 50% d'énérgie en raison d'une automatisation inefficace et d'un contrôle manuel.",
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
    <div className="border border-[#334155] rounded-2xl p-4 w-[284px] hover:border-[#A3E635] transition-colors duration-300 bg-[#0F172A]">
      <Icon
        className="rounded-[5px] p-1.5 w-8 h-8 text-white"
        style={{ background: gradient }}
        aria-label={title}
      />
      <h1 className="text-white font-medium text-xl my-2.5 hover:text-[#A3E635]">
        {title}
      </h1>
      <p className="text-[#9CA3AF] text-base">{description}</p>
    </div>
  );
}

function Probleme() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1E293B] h-auto py-5">
      <h1 className="text-white font-bold text-6xl py-5">
        Les problèmes que nous résolvons
      </h1>
      <p className="text-[#9CA3AF] text-xl w-[50vw] text-center max-md:w-[90vw] max-md:px-4">
        Every Malagasy homeowner faces these daily challenges. Tranon'AI
        transforms these pain points into intelligent solutions.
      </p>
      <div className="grid grid-cols-4 gap-5 mx-10 my-7 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:mx-4">
        {problems.map(({ Icon, title, description, gradient }) => (
          <ProblemCard
            key={title}
            Icon={Icon}
            title={title}
            description={description}
            gradient={gradient}
          />
        ))}
      </div>
    </div>
  );
}

export default Probleme;
