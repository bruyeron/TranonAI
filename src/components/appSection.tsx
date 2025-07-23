"use client";

import { motion } from "framer-motion";
import { Smartphone, Mic, Eye, Users, Settings } from "lucide-react";
import MainButton, { SecondaryButton } from "./button";

const features = [
  { icon: Eye, title: "Surveillance temps réel", desc: "Monitoring continu" },
  { icon: Users, title: "Multi-utilisateurs", desc: "Gestion familiale" },
  { icon: Settings, title: "Automatisation", desc: "Scénarios intelligents" },
  { icon: Mic, title: "Contrôle vocal", desc: "Assistant NEXORA" },
];

const dashboardCards = [
  { label: "Sécurité", value: "Actif", color: "#6BE445" },
  { label: "Énergie", value: "Normal", color: "#FBAF40" },
  { label: "Température", value: "24°C", color: "#6BE445" },
  { label: "Humidité", value: "65%", color: "#FBAF40" },
];

export function AppSection() {
  return (
    <section className="py-24 bg-[#F2F4F8] text-black-300 relative overflow-hidden">
      <div className="grid items-center gap-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:grid-cols-2">
        {/* === LEFT CONTENT === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-[#19B7A5]/10 border border-[#19B7A5]/20 rounded-full text-[#19B7A5] mb-8 font-open-sans"
          >
            <Smartphone className="w-4 h-4 mr-2" />
            Application mobile
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 text-6xl font-bold lg:text-6xl font-poppins"
          >
            Contrôlez votre maison depuis <span className="text-[#19B7A5]">votre smartphone</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 text-xl text-black-600 font-open-sans"
          >
            Une application intuitive qui met le contrôle total de votre maison dans votre poche, avec NEXORA, votre assistant IA vocal.
          </motion.p>

          {/* === NEXORA Feature === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#19B7A5]/10 to-[#FBAF42]/10 rounded-2xl p-6 mb-8 border border-[#19B7A5]/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#19B7A5] rounded-xl flex items-center justify-center">
                <Mic className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-poppins">NEXORA - Assistant IA Vocal</h3>
                <p className="mb-4 text-black-600 font-open-sans">
                  Contrôlez votre maison par commandes vocales. Idéal pour les personnes avec des besoins d'accessibilité.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Commandes vocales", "Accessibilité", "Multilingue"].map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#FBAF40]/20 text-[#FBAF40] rounded-full text-sm font-open-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* === Feature List === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 mb-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="p-4 text-center"
              >
                <feature.icon className="w-8 h-8 text-[#19B7A5] mx-auto mb-2" />
                <h4 className="mb-1 text-sm font-poppins">{feature.title}</h4>
                <p className="text-xs text-gray-500 font-open-sans">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* === CTA Buttons === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <MainButton className="bg-[#19B7A5] hover:bg-[#19B7A5] text-black px-8 py-4 font-normal rounded-lg transition-all duration-300 hover:scale-105">
              Télécharger l'app
            </MainButton>
            <SecondaryButton
              className="border-[#FBAF40] text-black hover:bg-[#FBAF40] hover:text-black px-8 py-4 rounded-lg transition-all duration-300"
            >
              Voir la démo
            </SecondaryButton>
          </motion.div>
        </motion.div>

        {/* === RIGHT MOCKUP === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative max-w-md mx-auto">
            {/* Phone Mockup floating */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="bg-[#0F172A] rounded-[2.5rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Mock header */}
                  <div className="bg-[#0F172A] px-6 py-4 flex justify-between items-center">
                    <div className="text-white font-poppins">Tranon'AI</div>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-[#19B7A5] rounded-full" />
                      <div className="w-4 h-4 bg-[#FBAF42] rounded-full" />
                      <div className="w-4 h-4 bg-gray-300 rounded-full" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-[#F5F5F7]">
                    {/* NEXORA Card */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-[#19B7A5] to-[#FBAF42] rounded-2xl p-4 mb-6 text-black"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center justify-center w-10 h-10 rounded-full bg-black/20"
                        >
                          <Mic className="w-5 h-5" />
                        </motion.div>
                        <div>
                          <h4 className="font-poppins">NEXORA</h4>
                          <p className="text-sm opacity-80 font-open-sans">Assistant IA</p>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-black/10">
                        <p className="text-sm font-open-sans">
                          "Salut ! Dis-moi 'Verrouille la maison' pour sécuriser toutes les portes."
                        </p>
                      </div>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {dashboardCards.map((card, i) => (
                        <motion.div
                          key={card.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                          className="p-3 bg-white rounded-lg shadow-sm"
                        >
                          <div
                            className="w-3 h-3 mb-2 rounded-full"
                            style={{ backgroundColor: card.color }}
                          />
                          <p className="mb-1 text-xs text-gray-500 font-open-sans">{card.label}</p>
                          <p className="font-poppins text-[#0F172A]">{card.value}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Switches */}
                    {["Éclairages salon", "Mode sécurité"].map((label, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow-sm"
                      >
                        <span className="font-open-sans text-[#0F172A]">{label}</span>
                        <div className={`w-10 h-6 rounded-full relative ${i === 0 ? "bg-[#19B7A5]" : "bg-gray-300"}`}>
                          <div className={`w-4 h-4 bg-white rounded-full absolute top-1 ${i === 0 ? "right-1" : "left-1"}`} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-[#19B7A5]/20 rounded-2xl flex items-center justify-center"
            >
              <Mic className="w-8 h-8 text-[#19B7A5]" />
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#FBAF42]/20 rounded-full flex items-center justify-center"
            >
              <Smartphone className="w-6 h-6 text-[#FBAF42]" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* BG Blurs */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#6BE445]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#FBAF40]/5 rounded-full blur-3xl" />
    </section>
  );
}
