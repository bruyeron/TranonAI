"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/buttonVariant";

const testimonials = [
  {
    id: 1,
    name: "Randrianarisoa Michel",
    role: "Propriétaire, Antananarivo",
    avatar: "M",
    content:
      "Tranon'AI a transformé notre quotidien ! Plus de stress pour l'oubli des lumières ou la sécurité. L'assistant NEXORA est impressionnant, mes enfants adorent lui parler en malgache.",
    rating: 5,
    highlight: "Parfait pour les familles",
  },
  {
    id: 2,
    name: "Hery Rakotomanga",
    role: "Entrepreneur, Fianarantsoa",
    avatar: "H",
    content:
      "J'étais sceptique au début, mais après 6 mois d'utilisation, ma facture d'électricité a diminué de 30% ! Le système de surveillance me permet de garder un œil sur mon entreprise même en déplacement.",
    rating: 5,
    highlight: "Économies significatives",
  },
  {
    id: 3,
    name: "Faratiana Razafy",
    role: "Retraitée, Toamasina",
    avatar: "F",
    content:
      "L'installation a été très simple et l'équipe très professionnelle. Le contrôle vocal m'aide beaucoup avec mes problèmes de mobilité. C'est vraiment une technologie accessible à tous.",
    rating: 5,
    highlight: "Accessibilité remarquable",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const changeIndex = (direction: "prev" | "next") => {
    setCurrentIndex((prev) =>
      direction === "next"
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <section className="w-full py-24 bg-[#1E293B] text-[#ffffff] relative overflow-hidden w-fullmax-w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-4xl lg:text-6xl font-bold font-poppins">
            Ce que disent <span className="text-[#19B7A5]">nos client</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mt-4 font-open-sans">
            Découvrez les témoignages de familles malgaches qui ont adopté Tranon'AI
          </p>
        </motion.div>

        {/* Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative h-auto min-h-[400px]">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: i === currentIndex ? 1 : 0,
                  x: i === currentIndex ? 0 : 50,
                  display: i === currentIndex ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Card className="bg-[#19B7A520] p-6 md:p-8 shadow-md border border-[#19B7A5] h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="w-10 h-10 text-[#19B7A5]" />
                      <div className="flex gap-1">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star
                            key={j}
                            className="w-5 h-5 fill-[#FBAF40] text-[#FBAF40]"
                          />
                        ))}
                      </div>
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="text-base md:text-lg text-gray-300 leading-relaxed font-open-sans mb-6"
                    >
                      "{t.content}"
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="inline-flex items-center px-4 py-2 bg-[#19B7A5]/10 border border-[#6BE445]/20 rounded-full text-[#19B7A5] mb-6 text-sm font-semibold"
                    >
                      {t.highlight}
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#6BE445] to-[#FBAF40] rounded-full flex items-center justify-center text-xl text-black font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-poppins font-semibold">{t.name}</h4>
                      <p className="text-sm text-gray-600">{t.role}</p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => changeIndex("prev")}
              className="border-[#19B7A5AA] text-[#19B7A5] hover:bg-[#19B7A511] hover:text-[#19B7A5FF] w-10 h-10 md:w-12 md:h-12 rounded-full"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setIsAutoPlaying(false);
                  }}
                  aria-label={`Témoignage ${i + 1}`}
                  className={`w-3 h-3 rounded-full ${
                    i === currentIndex ? "bg-[#19B7A5]" : "bg-gray-300"
                  } transition-all`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => changeIndex("next")}
              className="border-[#19B7A5] text-[#19B7A5] hover:bg-[#19B7A511] hover:text-[#19B7A5FF] w-10 h-10 md:w-12 md:h-12 rounded-full"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-center"
        >
          {[
            { number: "500+", label: "Familles équipées" },
            { number: "98%", label: "Satisfaction client" },
            { number: "30%", label: "Économies moyennes" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl md:text-3xl font-bold text-[#19B7A5] mb-1">{stat.number}</div>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Backgrounds */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#6BE445]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FBAF40]/5 rounded-full blur-3xl" />
    </section>
  );
}
