import { Check } from "lucide-react";
import MainButton from "./button";
import { motion } from "framer-motion";
import PrototypeTranonai from "../assets/Prototype-TranonAI.jpg";

type FeatureProps = {
  title: string;
  description: string;
};

const FeatureItem = ({ title, description }: FeatureProps) => (
  <motion.li
    className="flex gap-4"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
  >
    <Check className="bg-[#FBAF42] rounded-full p-1 w-6 h-6 mt-1" />
    <div>
      <p className="dark:text-white text-black font-bold text-lg">{title}</p>
      <p className="dark:text-[#9CA3AF] text-gray-500 font-normal text-base">{description}</p>
    </div>
  </motion.li>
);

function QuickInstall() {
  return (
    <section className="flex justify-center dark:bg-[#0F172A] bg-[#F2F4F8] px-6 md:px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl w-full">
        {/* LEFT TEXT CONTENT */}
        <motion.div
          className="pl-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold dark:text-white text-black leading-tight">
            Installation{" "}
            <span className="text-[#19B7A5]">simple & rapide</span>
          </h1>

          <p className="text-lg sm:text-xl dark:text-[#9CA3AF] text-gray-500 leading-relaxed mt-6 mb-8">
            Le hub Tranon'AI se connecte à votre système électrique existant
            en quelques minutes, pas en heures. Aucun câblage à refaire,
            aucun travaux, aucun tracas. Juste une automatisation intelligente
            qui apprend votre mode de vie.
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

          <motion.div
            className="mt-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MainButton>
              Découvrir les spécifications techniques
            </MainButton>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center rounded-2xl shadow-md"
          style={{
            backgroundImage: `url(${PrototypeTranonai})`,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="absolute -top-4 -right-4 bg-[#FBAF42] text-[#0F172A] text-sm px-4 py-2 rounded-full shadow">
            5min Setup
          </p>
          <p className="absolute -bottom-4 -left-4 bg-[#1E293B] text-[#D1D5DB] text-sm px-4 py-2 rounded-full shadow">
            Aucun outil requis
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default QuickInstall;
