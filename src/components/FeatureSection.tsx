"use client";

import { motion } from "framer-motion";
import {
  Shield, Heart, Activity,
  Lock, Camera, AlertTriangle,
  Bug, Flame, Droplets, Zap,
  Monitor
} from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    id: "security",
    title: "Module Sécurité",
    subtitle: "Protection complète 24h/24",
    icon: Shield,
    color: "#19B7A5",
    bgColor: "#19B7A511",
    devices: [
      { name: "Serrure intelligente", icon: Lock, description: "Verrouillage automatique et contrôle à distance" },
      { name: "Caméra de surveillance", icon: Camera, description: "Monitoring HD avec vision nocturne" },
      { name: "Détection d'intrusion", icon: AlertTriangle, description: "Capteurs de mouvement et alertes instantanées" }
    ]
  },
  {
    id: "health",
    title: "Module Santé & Sécurité",
    subtitle: "Votre bien-être avant tout",
    icon: Heart,
    color: "#FBAF42",
    bgColor: "#FBAF4211",
    devices: [
      { name: "Anti-moustiques ultrasonique", icon: Bug, description: "Protection naturelle contre les insectes" },
      { name: "Détecteur de fuite de gaz", icon: AlertTriangle, description: "Alerte précoce pour votre sécurité" },
      { name: "Détecteur d'incendie", icon: Flame, description: "Surveillance continue et intervention rapide" }
    ]
  },
  {
    id: "utility",
    title: "Module Surveillance Utilitaires",
    subtitle: "Optimisation énergétique intelligente",
    icon: Activity,
    color: "#19B7A5",
    bgColor: "#F5F5F711",
    devices: [
      { name: "Compteur d'eau intelligent", icon: Droplets, description: "Suivi en temps réel de la consommation" },
      { name: "Compteur électrique", icon: Zap, description: "Monitoring énergétique précis" },
      { name: "Écran temps réel", icon: Monitor, description: "Dashboard avec estimation des factures" }
    ]
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl lg:text-6xl font-poppins font-bold text-white mb-4">
            Trois modules, une <span className="text-[#19B7A5]">solution complète</span>
          </h2>
          <p className="text-xl text-gray-300 font-open-sans max-w-3xl mx-auto">
            Chaque module est conçu pour être modulaire et personnalisable selon vos besoins et votre budget.
          </p>
        </motion.div>

        {/* Modules */}
        <div className="space-y-24">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Texte */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className="inline-flex items-center px-4 py-2 rounded-full mb-4"
                  style={{
                    backgroundColor: `${feature.bgColor}50`,
                    border: `1px solid ${feature.color}50`,
                  }}
                >
                  <feature.icon className="w-5 h-5 mr-2" style={{ color: feature.color}} />
                  <span className="text-sm font-open-sans" style={{ color: feature.color }}>
                    {feature.subtitle}
                  </span>
                </div>
                <h3 className="text-3xl font-poppins text-white mb-6">{feature.title}</h3>

                <div className="space-y-6">
                  {feature.devices.map((device, j) => (
                    <div key={j} className="flex items-start gap-4 group">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center bg-opacity-20 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: feature.bgColor}}
                      >
                        <device.icon className="w-6 h-6" style={{ color: feature.color
                        }} />
                      </div>
                      <div>
                        <h4 className="text-lg text-white font-poppins">{device.name}</h4>
                        <p className="text-gray-400 font-open-sans">{device.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visualisation */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <Card className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-gray-700 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${feature.color}30` }}
                      >
                        <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                      </div>
                      <div>
                        <h4 className="font-poppins text-white">Tranon'AI</h4>
                        <p className="text-xs text-gray-400 font-open-sans">{feature.title}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <span className="w-3 h-3 bg-red-500 rounded-full" />
                      <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <span className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {feature.devices.map((device, k) => (
                      <div
                        key={k}
                        className="bg-[#0F172A] p-4 rounded-lg border border-gray-700 text-center"
                      >
                        <device.icon className="w-6 h-6 mx-auto mb-2" style={{ color: feature.color }} />
                        <p className="text-xs text-gray-300 font-open-sans">{device.name}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-open-sans">
                      <span className="text-gray-400">Status</span>
                      <span className="text-green-400">Actif</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden mt-1">
                      <div
                        className="h-full rounded-full"
                        style={{ backgroundColor: feature.color, width: "85%" }}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Effets visuels */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#6BE445]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#FBAF40]/10 rounded-full blur-3xl" />
    </section>
  );
}
