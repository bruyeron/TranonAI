import { Check } from "lucide-react";
import MainButton from "./button";

type FeatureProps = {
  title: string;
  description: string;
};

const FeatureItem = ({ title, description }: FeatureProps) => (
  <li className="flex gap-4">
    <Check className="bg-[#19B7A5] rounded-full p-1 w-6 h-6 mt-1" />
    <div>
      <p className="text-white font-bold text-lg">{title}</p>
      <p className="text-[#9CA3AF] font-normal text-base">{description}</p>
    </div>
  </li>
);

function QuickInstall() {
  return (
    <section className="flex justify-center bg-[#0F172A] px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl w-full">
        <div className="pl-2">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Installation <span className="text-[#19B7A5]">simple & rapide</span>
          </h1>
          <p className="text-xl text-[#9CA3AF] font-normal leading-[32.5px] my-8">
            Le hub Tranon'AI se connecte à votre système électrique existant en quelques minutes, pas en heures. Aucun câblage à refaire, aucun travaux, aucun tracas. Juste une automatisation intelligente qui apprend votre mode de vie.
          </p>

          <ul className="flex flex-col gap-5">
            <FeatureItem
              title="Compatibilité universelle"
              description="Fonctionne avec tous les types de systèmes électriques, des installations traditionnelles aux plus modernes."
            />
            <FeatureItem
              title="Apprentissage intelligent"
              description="S'adapte automatiquement à vos habitudes et préférences quotidiennes grâce à l'IA."
            />
            <FeatureItem
              title="Traitement local"
              description="Fonctionne hors ligne, garantissant confidentialité et performance constante."
            />
          </ul>

          <MainButton className="mt-10">
            Découvrir les spécifications techniques
          </MainButton>
        </div>

        <div
          className="relative bg-cover bg-center w-full h-[500px] rounded-2xl shadow-md"
          style={{
            backgroundImage: "url('/src/assets/Prototype-TranonAI.jpg')",
          }}
        >
          <p className="absolute -top-4 -right-4 bg-[#19B7A5] text-[#0F172A] text-sm px-4 py-2 rounded-full shadow">
            5min Setup
          </p>
          <p className="absolute -bottom-4 -left-4 bg-[#1E293B] text-[#D1D5DB] text-sm px-4 py-2 rounded-full shadow">
            Aucun outil requis
          </p>
        </div>
      </div>
    </section>
  );
}

export default QuickInstall;
