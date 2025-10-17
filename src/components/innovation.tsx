import { Brain, Leaf, ShieldCheck, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  bgImage: string;
  gradient?: string;
};

const InnovationCard = ({
  icon,
  title,
  description,
  badge,
  bgImage,
  gradient,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-2xl bg-cover bg-center outline outline-transparent hover:outline-[#19B7A5] hover:shadow-lg transition-all duration-300"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="rounded-2xl p-6 h-full flex flex-col justify-between"
        style={{ background: gradient }}
      >
        <div className="flex justify-between items-center mb-4">
          {icon}
          <span className="text-[#FBAF42] text-sm bg-[#FBAF4250] rounded-full px-3 py-1">
            {badge}
          </span>
        </div>
        <h2 className="text-white font-bold text-xl sm:text-2xl mb-2 hover:text-[#19B7A5] transition-colors">
          {title}
        </h2>
        <p className="text-[#9CA3AF] text-base sm:text-lg">{description}</p>
      </div>
    </motion.div>
  );
};

function Innovation() {
  const cards: CardProps[] = [
  {
    icon: <Brain className="bg-[#19B7A5] w-12 h-12 p-3 rounded-2xl" />,
    title: 'Apprentissage IA Adaptatif',
    description:
      "Notre IA apprend les habitudes quotidiennes de votre famille et ajuste automatiquement les paramètres pour un confort et une efficacité maximum.",
    badge: 'Apprentissage en 7 jours',
    bgImage: new URL('../assets/AI.jpg', import.meta.url).href,
    gradient:
      'linear-gradient(135deg,#0F172AAA 0%,#1E293BAA 50%,#0F172A 100%)',
  },
  {
    icon: <Leaf className="bg-[#19B7A5] w-12 h-12 p-3 rounded-2xl" />,
    title: 'Technologie Éco-Intelligente (Eco-Smart)',
    description:
      "Réduisez votre empreinte carbone grâce à une gestion intelligente de l'énergie qui privilégie les sources renouvelables et minimise le gaspillage.",
    badge: '60% de CO2 en moins',
    bgImage: new URL('../assets/eco-smart.jpg', import.meta.url).href,
    gradient:
      'linear-gradient(135deg,#0F172AAA 0%,#1E293BAA 50%,#0F172A 100%)',
  },
  {
    icon: <ShieldCheck className="bg-[#19B7A5] w-12 h-12 p-3 rounded-2xl" />,
    title: 'Conception Axée sur la Confidentialité',
    description:
      "Tout le traitement des données se fait localement sur votre appareil. Votre confidentialité est protégée par un chiffrement de bout en bout.",
    badge: 'Traitement 100% local',
    bgImage: new URL('../assets/privacy.jpg', import.meta.url).href,
    gradient:
      'linear-gradient(135deg,#0F172AAA 0%,#1E293BAA 50%,#0F172A 100%)',
  },
  {
    icon: <Wifi className="bg-[#19B7A5] w-12 h-12 p-3 rounded-2xl" />,
    title: 'Intégration de Réseau Maillé (Mesh)',
    description:
      'Créez un réseau domestique intelligent robuste qui étend la couverture et assure une connectivité fiable dans toute votre propriété.',
    badge: 'Portée de 500m',
    bgImage: new URL('../assets/network.jpg', import.meta.url).href,
    gradient:
      'linear-gradient(180deg,#0F172AF6 0%,#1E293B59 50%,#0F172AFF 100%)',
  },
];

  return (
    <section className="flex flex-col items-center dark:bg-[#0F172A] bg-[#F2F4F8] py-16 px-4 sm:px-6 lg:px-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="dark:text-white text-black font-bold text-3xl sm:text-5xl md:text-6xl text-center mb-4"
      >
        Innovations <span className="text-[#19B7A5]">de pointe.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="dark:text-[#9CA3AF] text-gray-500 text-base sm:text-lg md:text-xl text-center max-w-3xl mb-12"
      >
        Propulsées par des technologies de rupture qui rendent la vie intelligente accessible, durable et sécurisée pour chaque foyer malgache.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8 w-full max-w-6xl">
        {cards.map((card, i) => (
          <InnovationCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Innovation;
