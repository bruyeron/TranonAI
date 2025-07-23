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
        className="flex flex-col justify-between h-full p-6 rounded-2xl"
        style={{ background: gradient }}
      >
        <div className="flex items-center justify-between mb-4">
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
      title: 'Adaptative AI Learning',
      description:
        "Our AI learns your family's daily patterns and automatically adjusts settings for maximum comfort and efficiency.",
      badge: 'Learn in 7 days',
      bgImage: new URL('../assets/AI.jpg', import.meta.url).href,
      gradient:
        'linear-gradient(135deg,#0F172AAA 0%,#1E293BAA 50%,#0F172A 100%)',
    },
    {
      icon: <Leaf className="bg-[#19B7A5] w-12 h-12 p-3 rounded-2xl" />,
      title: 'Eco-Smart Technology',
      description:
        'Reduce your carbon footprint with intelligent energy management that prioritizes renewable sources and minimizes waste.',
      badge: '60% less CO2',
      bgImage: new URL('../assets/eco-smart.jpg', import.meta.url).href,
      gradient:
        'linear-gradient(135deg,#0F172AAA 0%,#1E293BAA 50%,#0F172A 100%)',
    },
    {
      icon: <ShieldCheck className="bg-[#19B7A5] w-12 h-12 p-3 rounded-2xl" />,
      title: 'Privacy-First Design',
      description:
        'All data processing happens locally on your device. Your privacy is protected with end-to-end encryption.',
      badge: '100% local processing',
      bgImage: new URL('../assets/privacy.jpg', import.meta.url).href,
      gradient:
        'linear-gradient(135deg,#0F172AAA 0%,#1E293BAA 50%,#0F172A 100%)',
    },
    {
      icon: <Wifi className="bg-[#19B7A5] w-12 h-12 p-3 rounded-2xl" />,
      title: 'Mesh Network Integration',
      description:
        'Create a robust smart home network that extends coverage and ensures reliable connectivity throughout your property.',
      badge: '500m range',
      bgImage: new URL('../assets/network.jpg', import.meta.url).href,
      gradient:
        'linear-gradient(180deg,#0F172AF6 0%,#1E293B59 50%,#0F172AFF 100%)',
    },
  ];

  return (
    <section className="flex flex-col items-center bg-[#F2F4F8] py-16 px-4 sm:px-6 lg:px-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-3xl font-bold text-center text-black sm:text-5xl md:text-6xl"
      >
        Cutting-Edge <span className="text-[#19B7A5]">Innovations</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mb-12 text-base text-center text-gray-500 sm:text-lg md:text-xl"
      >
        Powered by breakthrough technologies that make smart living accessible,
        sustainable, and secure for every Malagasy household.
      </motion.p>

      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-2">
        {cards.map((card, i) => (
          <InnovationCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Innovation;
