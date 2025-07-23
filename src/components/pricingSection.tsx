"use client";

import { motion } from "framer-motion";
import { Check, Package, Smartphone, Star, Zap } from "lucide-react";
import { Button } from "./ui/buttonVariant";
import { Card } from "./ui/card";

const productPlans = [
  {
    name: "Kit Complet",
    price: "450 000",
    currency: "Ar",
    period: "installation complète",
    description: "Solution domotique complète pour votre maison",
    features: [
      "3 modules intelligents inclus",
      "Installation professionnelle",
      "Configuration personnalisée",
      "Formation utilisateur",
      "Garantie 2 ans",
      "Support technique prioritaire",
    ],
    highlight: true,
    icon: Package,
    color: "#19B7A5",
  },
  {
    name: "Dispositifs Individuels",
    price: "À partir de 45 000",
    currency: "Ar",
    period: "par dispositif",
    description: "Achetez uniquement les dispositifs dont vous avez besoin",
    features: [
      "Choix des modules individuels",
      "Installation optionnelle",
      "Configuration de base incluse",
      "Guide d'utilisation",
      "Garantie 1 an",
      "Support technique standard",
    ],
    highlight: false,
    icon: Zap,
    color: "#FBAF42",
  },
];

const appPlans = [
  {
    name: "Version Gratuite",
    price: "0",
    currency: "Ar",
    period: "à vie",
    description: "Fonctionnalités de base pour débuter",
    features: [
      "Contrôle de base des dispositifs",
      "Monitoring temps réel",
      "1 utilisateur",
      "Notifications basiques",
      "Support communautaire",
    ],
    highlight: false,
    icon: Smartphone,
    color: "#19B7A5",
  },
  {
    name: "Version Pro",
    price: "15 000",
    currency: "Ar",
    period: "par mois",
    description: "Fonctionnalités avancées avec NEXORA et configuration personnalisée",
    features: [
      "Assistant IA NEXORA",
      "Utilisateurs illimités",
      "Automatisations avancées",
      "Analyses détaillées",
      "Configuration personnalisée",
      "Support prioritaire 24/7",
    ],
    highlight: true,
    icon: Star,
    color: "#FBAF40",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 bg-[#F2F4F8] overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-6xl font-bold text-black lg:text-6xl">
            Choisissez <span className="text-[#19B7A5]">votre solution</span>
          </h2>
          <p className="text-lg text-gray-500 md:text-xl">
            Des options flexibles pour répondre à tous les besoins et budgets
          </p>
        </motion.div>

        {/* Section des kits produits */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-2xl font-semibold text-center text-black md:text-3xl"
        >
          Kits Produits
        </motion.h3>

        <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto mb-20 sm:grid-cols-2">
          {productPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.highlight && (
                <div className="absolute -translate-x-1/2 -top-4 left-1/2">
                  <span className="bg-[#19B7A5] text-black px-4 py-1 rounded-full text-sm">
                    Recommandé
                  </span>
                </div>
              )}

              <Card
                className={`p-8 h-full transition-all duration-300 border ${
                  plan.highlight
                    ? "bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-[#19B7A5]/50"
                    : "bg-[#1E293B] border-gray-700"
                }`}
              >
                {/* Header plan */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl"
                    style={{ backgroundColor: `${plan.color}20` }}
                  >
                    <plan.icon className="w-6 h-6" style={{ color: plan.color }} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{plan.name}</h4>
                    <p className="text-sm text-gray-400">{plan.description}</p>
                  </div>
                </div>

                {/* Prix */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-lg text-gray-400">{plan.currency}</span>
                  </div>
                  <p className="text-sm text-gray-400">{plan.period}</p>
                </div>

                {/* Fonctionnalités */}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + idx * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-[#19B7A5]" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bouton */}
                <Button
                  className={`w-full py-3 font-medium transition hover:scale-105 ${
                    plan.highlight
                      ? "bg-[#19B7A5] hover:bg-[#19B7A5AA] text-black"
                      : "bg-[#FBAF40] hover:bg-[#E99A2C] text-black"
                  }`}
                  aria-label={`Sélectionner ${plan.name}`}
                >
                  {plan.highlight ? "Commencer maintenant" : "Choisir les dispositifs"}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Section Application */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-2xl font-semibold text-center text-black md:text-3xl"
        >
          Plans Application
        </motion.h3>

        <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2">
          {appPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {plan.highlight && (
                <div className="absolute -translate-x-1/2 -top-4 left-1/2">
                  <span className="bg-[#FBAF42] text-black px-4 py-1 rounded-full text-sm">
                    Populaire
                  </span>
                </div>
              )}

              <Card
                className={`p-8 h-full transition-all duration-300 border ${
                  plan.highlight
                    ? "bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-[#FBAF42]/50"
                    : "bg-[#1E293B] border-gray-700"
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-xl"
                    style={{ backgroundColor: `${plan.color}20` }}
                  >
                    <plan.icon className="w-6 h-6" style={{ color: plan.color }} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{plan.name}</h4>
                    <p className="text-sm text-gray-400">{plan.description}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-lg text-gray-400">{plan.currency}</span>
                  </div>
                  <p className="text-sm text-gray-400">{plan.period}</p>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + idx * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-[#19B7A5]" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  className={`w-full py-3 font-medium transition hover:scale-105 ${
                    plan.highlight
                      ? "bg-[#FBAF42] hover:bg-[#E99A2C] text-black"
                      : "bg-[#19B7A5] hover:bg-[#19B7A5] text-black"
                  }`}
                  aria-label={`Choisir ${plan.name}`}
                >
                  {plan.name === "Version Gratuite"
                    ? "Télécharger gratuitement"
                    : "Upgrader vers Pro"}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Décoratif */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#6BE445]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#FBAF40]/5 rounded-full blur-3xl" />
    </section>
  );
}
