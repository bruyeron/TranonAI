"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "L'installation de Tranon'AI est-elle complexe ?",
    answer:
      "Pas du tout ! Notre équipe technique se charge de l'installation complète. Pour le kit complet, l'installation prend généralement 2-3 heures. Nous configurons tous les dispositifs et vous formons à l'utilisation. Pour les dispositifs individuels, la plupart peuvent être installés facilement par vous-même avec nos guides détaillés.",
  },
  {
    question: "Tranon'AI fonctionne-t-il avec les coupures d'électricité fréquentes ?",
    answer:
      "Oui ! Nos dispositifs sont conçus pour Madagascar. Ils incluent des batteries de secours pour maintenir les fonctions essentielles pendant les coupures. Le système se reconnecte automatiquement au retour de l'électricité et sauvegarde toutes les données localement.",
  },
  {
    question: "L'application fonctionne-t-elle sans internet ?",
    answer:
      "Les fonctions de base de l'application fonctionnent même sans internet grâce à la connexion locale. Vous pouvez contrôler vos dispositifs via WiFi local. Cependant, les notifications à distance et l'assistant NEXORA nécessitent une connexion internet.",
  },
  {
    question: "Puis-je ajouter des dispositifs progressivement ?",
    answer:
      "Absolument ! Tranon'AI est conçu pour être modulaire. Vous pouvez commencer avec quelques dispositifs et en ajouter d'autres selon vos besoins et votre budget. Tous les nouveaux dispositifs s'intègrent automatiquement à votre système existant.",
  },
  {
    question: "Quelle est la différence entre la version gratuite et Pro de l'app ?",
    answer:
      "La version gratuite permet le contrôle de base de vos dispositifs et le monitoring temps réel. La version Pro ajoute l'assistant IA NEXORA, les automatisations avancées, les analyses détaillées, la gestion multi-utilisateurs illimitée et le support prioritaire 24/7.",
  },
  {
    question: "Tranon'AI est-il compatible avec d'autres systèmes domotiques ?",
    answer:
      "Tranon'AI utilise des protocoles standards et peut s'intégrer avec la plupart des systèmes domotiques existants. Notre équipe peut vous conseiller sur les compatibilités spécifiques lors de l'évaluation de votre installation.",
  },
];

function FAQSection() {
  return (
    <section id="faq" className="relative bg-[#0F172A] py-24 overflow-hidden w-full w-fullmax-w-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FBAF42]/20 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-[#FBAF42]" />
          </div>
          <h2 className="text-6xl lg:text-6xl font-bold text-white mb-4">Questions <span className="text-[#19B7A5]">fréquentes</span></h2>
          <p className="text-gray-400 text-lg">
            Trouvez rapidement les réponses aux questions les plus courantes sur Tranon'AI
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-[#1E293B] border border-[#334155] rounded-xl px-6 hover:border-[#19B7A5]/70 transition-all"
                >
                  <AccordionTrigger className="text-left text-white py-6 hover:text-[#19B7A5] transition-colors [&[data-state=open]]:text-[#19B7A5]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="p-8 rounded-2xl border border-[#19B7A5]/20 bg-[#19B7A5]/30">
            <h3 className="text-xl text-white mb-2">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-gray-300 mb-6">
              Notre équipe support est là pour vous aider avec toutes vos questions
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 bg-[#19B7A5] hover:bg-[#19B7A5AA] text-black rounded-lg transition"
              >
                Nous contacter
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+261200000000"
                className="px-6 py-3 border border-[#FBAF42] text-[#FBAF42] hover:bg-[#FBAF42] hover:text-black rounded-lg transition"
              >
                Appeler le support
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#6BE445]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#FBAF40]/5 rounded-full blur-3xl" />
    </section>
  );
}

export default FAQSection;