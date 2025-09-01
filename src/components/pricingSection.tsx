"use client";

import { motion } from "framer-motion";
import { Check, Package, Smartphone, Star, Minus } from "lucide-react";
import { Button } from "./ui/buttonVariant";
import { Card } from "./ui/card";

// 🔹 Données
const productPlans = [
  {
    name: "Kit Standard (Limité)",
    price: "450 000",
    currency: "Ar",
    period: "installation complète",
    description: "Solution domotique complète pour votre maison",
    features: [
      { label: "3 modules intelligents inclus", included: true },
      { label: "Installation professionnelle", included: true },
      { label: "Configuration personnalisée", included: true },
      { label: "Formation utilisateur", included: true },
      { label: "Garantie 1 an", included: true },
      { label: "Support technique prioritaire", included: false },
    ],
    highlight: false,
    badge: "Recommandé",
    icon: Package,
    color: "#FBAF42",
  },
  {
    name: "Kit Standard (Complet)",
    price: "450 000",
    currency: "Ar",
    period: "installation complète",
    description: "Solution domotique complète pour votre maison",
    features: [
      { label: "3 modules intelligents inclus", included: true },
      { label: "Installation professionnelle", included: true },
      { label: "Configuration personnalisée", included: true },
      { label: "Formation utilisateur", included: true },
      { label: "Garantie 1 an", included: false },
      { label: "Support technique prioritaire", included: true },
    ],
    highlight: true,
    badge: "Recommandé",
    icon: Package,
    color: "#19B7A5",
  },
  {
    name: "Kit Entreprise",
    price: "450 000",
    currency: "Ar",
    period: "installation complète",
    description: "Solution domotique complète pour votre maison",
    features: [
      { label: "3 modules intelligents inclus", included: true },
      { label: "Installation professionnelle", included: true },
      { label: "Configuration personnalisée", included: true },
      { label: "Formation utilisateur", included: true },
      { label: "Garantie 1 an", included: true },
      { label: "Support technique prioritaire", included: true },
    ],
    highlight: false,
    badge: "Recommandé",
    icon: Package,
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
      { label: "Contrôle totale des dispositifs", included: true },
      { label: "Assistant IA Nexora", included: true },
      { label: "Utilisateurs", included: true },
      { label: "Notifications basiques", included: true },
    ],
    highlight: false,
    badge: "Populaire",
    icon: Smartphone,
    color: "#19B7A5",
  },
  {
    name: "Kit complet",
    price: "À partir de 500 000",
    currency: "Ar",
    period: "À vie",
    description: "Fonctionnalités avancées avec NEXORA et configuration personnalisée",
    features: [
      { label: "Application mobile ", included: true },
      { label: "Module sécurité", included: true },
      { label: "Module santé", included: true },
      { label: "Module surveillance conso", included: true },
      { label: "Installation personnalisée", included: true },
      { label: "Garanti 1 an", included: true },
    ],
    highlight: true,
    badge: "Populaire",
    icon: Star,
    color: "#19B7A5",
  },
];

// 🔹 Composant générique
function PlanCard({ plan, index }: { plan: any; index: number }) {
  return (
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
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className="px-4 py-1 rounded-full text-sm"
            style={{ backgroundColor: plan.color, color: "#000" }}
          >
            {plan.badge}
          </span>
        </div>
      )}

      <Card
        className={`p-8 h-full transition-all duration-300 border ${
          plan.highlight
            ? `bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-[${plan.color}]/50`
            : "bg-[#1E293B] border-gray-700"
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
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
            <span className="text-3xl text-white font-bold">{plan.price}</span>
            <span className="text-lg text-gray-400">{plan.currency}</span>
          </div>
          <p className="text-sm text-gray-400">{plan.period}</p>
        </div>

        {/* Fonctionnalités */}
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature: any, idx: number) => (
            <motion.li
              key={feature.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + idx * 0.1,
              }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              {feature.included ? (
                <Check className="w-5 h-5 text-[#19B7A5]" />
              ) : (
                <Minus className="w-5 h-5 text-gray-400" />
              )}
              <span className="text-gray-300">{feature.label}</span>
            </motion.li>
          ))}
        </ul>

        {/* Bouton */}
        <Button
          className={`w-full py-3 font-medium transition hover:scale-105 ${
            plan.highlight
              ? `bg-[${plan.color}] hover:opacity-90 text-black`
              : "bg-[#FBAF40] hover:bg-[#E99A2C] text-black"
          }`}
        >
          {plan.highlight ? "Commencer maintenant" : "Voir"}
        </Button>
      </Card>
    </motion.div>
  );
}

// 🔹 Section principale
export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-24 dark:bg-[#0F172A] bg-[#F2F4F8] overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-bold dark:text-white text-black mb-4">
            Choisissez <span className="text-[#19B7A5]">votre solution</span>
          </h2>
          <p className="text-lg md:text-xl dark:text-gray-300 text-gray-500">
            Des options flexibles pour répondre à tous les besoins et budgets
          </p>
        </motion.div>

        {/* Abonnements */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center dark:text-white text-black mb-12"
        >
          Abonnements
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {productPlans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Plans Application */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center dark:text-white text-black mb-12"
        >
          Nos dispositifs
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {appPlans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>

      {/* Décor */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#6BE445]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#FBAF40]/5 rounded-full blur-3xl" />
    </section>
  );
}
