'use client';

import { motion } from "framer-motion";
import MainButton, { SecondaryButton } from "./button";

type StatItemProps = {
    value: string;
    description: string;
};

const StatItem = ({ value, description }: StatItemProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
    >
        <p className="text-[#19B7A5] font-semibold text-2xl sm:text-3xl">{value}</p>
        <p className="text-[#9CA3AF] text-sm sm:text-base">{description}</p>
    </motion.div>
);

function HeroSection() {
    const statsData = [
        { value: "40%", description: "Économies d'énergie" },
        { value: "5min", description: "Temps d'installation" },
        { value: "24/7", description: "Contrôle intelligent" },
    ];

    return (
        <div className="relative bg-[url('./assets/background.jpg')] bg-cover bg-center w-full min-h-screen overflow-hidden">
            {/* Bulles animées */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-[#0F766E] rounded-full opacity-40"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0, 1, 0],
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-black bg-[linear-gradient(135deg,#0F172A31_0%,#1E293BAA_50%,#0F172A31_100%)] w-full">
                <motion.h1
                    className="font-bold text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-tight text-center pt-14 pb-2"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Tranon'<span className="text-[#FBAF42]">AI</span>
                </motion.h1>

                <motion.p
                    className="py-2 text-xl leading-snug text-center text-gray-300 sm:text-2xl md:text-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Chez vous même quand vous n'y êtes pas
                </motion.p>

                <motion.p
                    className="text-base sm:text-lg md:text-xl text-center text-[#9CA3AF] py-4 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Transformez votre maison malgache en un écosystème intelligent. <br />
                    Contrôlez tout d'un simple geste, réduisez vos coûts énergétiques de 40% et adoptez un mode de vie durable.
                </motion.p>

                <motion.div
                    className="flex flex-col gap-4 mt-4 sm:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <MainButton>Passez à la maison connectée</MainButton>
                    <SecondaryButton>Regarder la démo</SecondaryButton>
                </motion.div>

                <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-20 px-4 mt-8 text-center sm:flex-row">
                    {statsData.map(({ value, description }) => (
                        <StatItem key={value} value={value} description={description}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
