import { Brain, Leaf, ShieldCheck, Wifi } from 'lucide-react';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string;
  bgImage: string;
  gradient?: string;
};

const InnovationCard = ({ icon, title, description, badge, bgImage, gradient }: CardProps) => {
  return (
    <div className={`bg-cover bg-center rounded-2xl hover:border border:transparent hover:border-[#19B7A5]`}
    style={{background: `url(${bgImage})`}}
    >
      <div className={`w-[600px] pb-3 rounded-2xl`} style={{ background: gradient }}>
        <div className="flex justify-between items-center py-3 px-5">
          {icon}
          <p className="flex items-center text-[#19B7A5] text-sm bg-[#0F172ACC] rounded-2xl h-5 px-3.5 text-center">
            {badge}
          </p>
        </div>
        <p className="font-bold text-white text-2xl mt-30 px-5 hover:text-[#19B7A5]">{title}</p>
        <p className="text-[#9CA3AF] text-base font-medium px-5">{description}</p>
      </div>
    </div>
  );
};

function Innovation() {
  const cards: CardProps[] = [
    {
      icon: <Brain className="bg-[#19B7A5] w-12 h-12 p-3 rounded-2xl" />,
      title: 'Adaptative AI Learning',
      description:
        'Our AI learns your family\'s daily patterns and automatically adjusts setting for maximum comfort and efficiency.',
      badge: 'Learn in 7 days',
      bgImage: './src/assets/AI.jpg',
      gradient: 'linear-gradient(135deg,#0F172AAA 0%,#1E293BAA 50%,#0F172A 100%)',
    },
    {
      icon: <Leaf className="bg-[#19B7A5] w-12 h-12 p-3 rounded-2xl" />,
      title: 'Eco-Smart Technology',
      description:
        'Reduce your carbon footprint with intelligent energy management that prioritizes renewable sources and minimizes waste.',
      badge: '60% less CO2',
      bgImage: './src/assets/eco-smart.jpg',
      gradient: 'linear-gradient(135deg,#0F172AAA 0%,#1E293BAA 50%,#0F172A 100%)',
    },
    {
      icon: <ShieldCheck className="bg-[#19B7A5] w-12 h-12 p-3 rounded-2xl" />,
      title: 'Privacy-First Design',
      description:
        'All data processing happens locally on your device. Your privacy is protected with end-to-end encryption.',
      badge: '100% local processing',
      bgImage: './src/assets/privacy.jpg',
      gradient: 'linear-gradient(135deg,#0F172AAA 0%,#1E293BAA 50%,#0F172A 100%)',
    },
    {
      icon: <Wifi className="bg-[#19B7A5] w-12 h-12 p-3 rounded-2xl" />,
      title: 'Mesh Network Integration',
      description:
        'Create a robust smart home network that extends coverage and ensures reliable connectivity throughout your property.',
      badge: '500m range',
      bgImage: './src/assets/network.jpg',
      gradient: 'linear-gradient(180deg,#0F172A66 0%,#1E293B59 50%,#0F172AFF 100%)',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#0F172A] py-5">
      <h1 className="text-white font-bold text-6xl py-5">
        Cutting - Edge <span className="text-[#19B7A5]">Innovations</span>
      </h1>
      <p className="text-[#9CA3AF] text-xl w-[54vw] text-center">
        Powered by breakthrough technologies that makes smart living accessible, sustainable, and secure for every Malagasy household.
      </p>
      <div className="grid grid-cols-2 gap-5 my-8">
        {cards.map((card, index) => (
          <InnovationCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Innovation;
