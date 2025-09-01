import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import {
  Target, Users, Globe, Award, Lightbulb, Leaf, Shield, TrendingUp,
  BatteryCharging, Recycle, Factory
} from "lucide-react";

// Import images ODD
import odd7 from "../assets/ODD/odd7.png";
import odd11 from "../assets/ODD/odd11.png";
import odd12 from "../assets/ODD/odd12.png";
import odd13 from "../assets/ODD/odd13.png";

// Typage des icônes
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface StatItem { number: string; label: string; icon: IconType; }
interface ValueItem { icon: IconType; title: string; description: string; }
interface OddItem { id: number; icon: IconType; title: string; subtitle: string; description: string; img: string; color: string; }

const stats: StatItem[] = [
  { number: "10K+", label: "Foyers connectés", icon: Users },
  { number: "95%", label: "Satisfaction client", icon: Award },
  { number: "30%", label: "Économies d'énergie", icon: TrendingUp },
  { number: "24/7", label: "Support disponible", icon: Shield },
];

const values: ValueItem[] = [
  { icon: Leaf, title: "Durabilité", description: "Solutions éco-responsables pour un avenir durable à Madagascar" },
  { icon: Shield, title: "Sécurité", description: "Protection des données et respect de la vie privée de nos utilisateurs" },
  { icon: Lightbulb, title: "Innovation", description: "Technologies de pointe adaptées au contexte local malgache" },
  { icon: Users, title: "Accessibilité", description: "Solutions intelligentes accessibles à tous les foyers malgaches" },
];

const oddData: OddItem[] = [
  { id: 7, icon: BatteryCharging, color: "#fdb713", title: "ODD 7", subtitle: "Énergie propre et d'un coût abordable", description: "La domotique optimise la consommation énergétique grâce à des systèmes intelligents de gestion de l'éclairage, du chauffage et des appareils électroménagers.", img: odd7 },
  { id: 11, icon: Factory, color: "#f99d26", title: "ODD 11", subtitle: "Ville et communautés durables", description: "Les maisons connectées contribuent à créer des quartiers intelligents et durables en optimisant les ressources urbaines.", img: odd11 },
  { id: 12, icon: Recycle, color: "#cf8d2a", title: "ODD 12", subtitle: "Consommation et production responsables", description: "La domotique permet un contrôle précis des appareils pour réduire le gaspillage et optimiser l'utilisation des ressources.", img: odd12 },
  { id: 13, icon: Leaf, color: "#48773e", title: "ODD 13", subtitle: "Mesures relatives à la lutte contre les changements climatiques", description: "Les systèmes domotiques réduisent significativement les émissions de CO2 par une gestion intelligente de l'énergie.", img: odd13 },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-[#F2F4F8] dark:bg-[#1E293B] relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#19B7A5] rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#FBAF42] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#19B7A5] rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-10 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <h2 className="font-poppins lg:text-5xl dark:text-white text-black font-bold text-3xl sm:text-5xl md:text-6xl mb-4">
            À Propos de <span className="text-[#19B7A5]">Tranon'<span className="text-[#FBAF42]">AI</span></span>
          </h2>
          <p className="font-open-sans max-w-3xl mx-auto text-gray-500 dark:text-[#9CA3AF] text-base sm:text-lg md:text-xl">
            Nous révolutionnons l'habitat malgache avec des solutions smart home innovantes, durables et accessibles à tous.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <CardMotion
            icon={Target}
            title="Notre Mission"
            color="#19B7A5"
            text="Démocratiser l'accès aux technologies smart home à Madagascar en proposant des solutions intelligentes, abordables et adaptées au contexte local."
          />
          <CardMotion
            icon={Globe}
            title="Notre Vision"
            color="#19B7A5"
            text="Faire de Madagascar un leader régional en matière de smart home, en créant un écosystème technologique local durable qui améliore la qualité de vie et renforce la sécurité."
          />
        </div>

        {/* Stats */}
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div key={i} className="text-center" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="p-4 bg-[#FBAF42]/10 rounded-lg inline-block mb-4">
                  <Icon className="w-8 h-8 text-[#FBAF42]" />
                </div>
                <div className="text-lg sm:text-xl dark:text-[#9CA3AF] text-gray-500 leading-relaxed">{stat.number}</div>
                <div className="dark:text-[#9CA3AF] text-gray-500 font-normal text-base">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values */}
        <ValuesSection values={values} />

        {/* ODD Section */}
        <ODDSection />
      </div>
    </section>
  );
}

// Composant pour Mission & Vision
function CardMotion({ icon: Icon, title, color, text }: { icon: IconType; title: string; color: string; text: string }) {
  return (
    <motion.div initial={{ opacity: 0, x: title === "Notre Mission" ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: title === "Notre Vision" ? 0.2 : 0 }}>
      <Card className="h-full" style={{ background: `linear-gradient(135deg, ${color}10, ${color}05)`, borderColor: `${color}20` }}>
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg" style={{ backgroundColor: `${color}20` }}>
              <Icon className="w-4 h-4" style={{ color }} />
            </div>
            <h3 className="dark:text-white text-black font-bold text-lg">{title}</h3>
          </div>
          <p className="dark:text-[#9CA3AF] text-gray-500 font-normal text-base">{text}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Composant Values
function ValuesSection({ values }: { values: ValueItem[] }) {
  return (
    <motion.div className="mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      <h3 className="dark:text-white text-black font-bold text-2xl sm:text-4xl md:text-5xl text-center mb-10">
        Nos <span className="text-[#19B7A5]">Valeurs</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, i) => {
          const Icon = value.icon;
          return (
            <motion.div key={i} className="text-center group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="p-4 bg-[#6BE445]/10 rounded-lg inline-block mb-4 group-hover:bg-[#6BE445]/20 transition-all duration-300">
                <Icon className="w-8 h-8 text-[#FBAF42]" />
              </div>
              <h4 className="dark:text-white text-black font-bold text-lg">{value.title}</h4>
              <p className="dark:text-[#9CA3AF] text-gray-500 font-normal text-base">{value.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// Composant ODD
function ODDSection() {
  return (
    <section className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-10">
      <h2 className="dark:text-white text-black font-bold text-2xl sm:text-4xl md:text-5xl text-center mb-4">
        Nos Engagements <span className="text-[#19B7A5]">ODD</span>
      </h2>
      <p className="text-gray-500 dark:text-[#9CA3AF] text-base sm:text-lg md:text-xl text-center max-w-3xl mb-12">
        Notre projet domotique contribue activement à l'atteinte de plusieurs Objectifs de Développement Durable des Nations Unies
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {oddData.map(({ id, icon: Icon, title, subtitle, description, img, color }) => (
          <motion.div
            key={id}
            className="border border-[#334155] rounded-2xl p-6 bg-gray-400 dark:bg-[#0F172A] hover:border-[#19B7A5] hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <img src={img} alt={title} className="w-32 h-32 mb-4 object-contain" />

            <div className="mb-4 flex items-center justify-center gap-3">
              <Icon className="w-8 h-8 pb-2" style={{ color }} />
            <p className="text-gray-600  dark:text-[#9CA3AF] font-normal text-sm sm:text-xl mb-2 transition-colors duration-200">{title}</p>
            </div>
            <p className="text-black dark:text-white text-base font-semibold sm:text-base mb-1">{subtitle}</p>
            <p className="text-gray-600 dark:text-[#9CA3AF] text-sm sm:text-base">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
