"use client";

import { motion } from "framer-motion";
import { Smartphone, Mic, Eye, Users, Settings } from "lucide-react";
import { Button } from "./ui/buttonVariant";

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
    <section className="relative overflow-hidden bg-[#F5F5F7] py-24 text-[#0F172A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
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
              className="mb-8 inline-flex items-center rounded-full border border-[#6BE445]/20 bg-[#6BE445]/10 px-4 py-2 text-[#6BE445] font-open-sans"
            >
              <Smartphone className="mr-2 h-4 w-4" /> Application mobile
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 text-4xl font-poppins lg:text-5xl"
            >
              Contrôlez votre maison depuis votre smartphone
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 text-xl text-gray-600 font-open-sans"
            >
              Une application intuitive qui met le contrôle total de votre maison dans votre poche, avec NEXORA, votre assistant IA vocal.
            </motion.p>

            {/* NEXORA Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 rounded-2xl border border-[#6BE445]/20 bg-gradient-to-r from-[#6BE445]/10 to-[#FBAF40]/10 p-6"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6BE445]"
                >
                  <Mic className="h-6 w-6 text-black" />
                </motion.div>
                <div>
                  <h3 className="mb-2 text-xl font-poppins">
                    NEXORA - Assistant IA Vocal
                  </h3>
                  <p className="mb-4 text-gray-600 font-open-sans">
                    Contrôlez votre maison par commandes vocales. Idéal pour les personnes avec des besoins d'accessibilité.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Commandes vocales", "Accessibilité", "Multilingue"].map(tag => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#6BE445]/20 px-3 py-1 text-sm text-[#6BE445] font-open-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 grid grid-cols-2 gap-4"
            >
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="p-4 text-center"
                >
                  <Icon className="mx-auto mb-2 h-8 w-8 text-[#6BE445]" />
                  <h4 className="mb-1 text-sm font-poppins">{title}</h4>
                  <p className="text-xs text-gray-500 font-open-sans">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="rounded-lg bg-[#6BE445] px-8 py-4 text-black transition-all duration-300 hover:scale-105 hover:bg-[#5BC63A] font-open-sans"
              >
                Télécharger l'app
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-lg border-[#FBAF40] px-8 py-4 text-[#FBAF40] transition-all duration-300 hover:bg-[#FBAF40] hover:text-black font-open-sans"
              >
                Voir la démo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Implement mockup rendering here (optimized similarly) */}
            {/* ... */}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-[#6BE445]/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-[#FBAF40]/5 blur-3xl" />
    </section>
  );
}
