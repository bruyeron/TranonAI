
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Mail, Linkedin, Github } from "lucide-react";

import meikImage from "../assets/equipe/meik.jpg";
import cedrickImage from "../assets/equipe/maitre.jpeg";
import mendrikaImage from "../assets/equipe/mendrika.jpeg";
import christianeImage from "../assets/equipe/christiane.jpeg";
import mihajaImage from "../assets/equipe/mihaja.jpeg";
import ninaImage from "../assets/equipe/nina.jpeg";
import tsioryImage from "../assets/equipe/tsiory.jpeg";
import princiImage from "../assets/equipe/princi.jpeg";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  email: string;
  linkedin?: string;
  github?: string;
}

// === Données de l'équipe ===
const teamMembers: TeamMember[] = [
  {
    name: "Ben Johnson Meik",
    role: "Porteur de projet",
    description:
      "Expert en IoT et intelligence artificielle avec 8 ans d'expérience dans les solutions smart home.",
    image: meikImage,
    email: "andry@tranonai.mg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "RANDRIAFARA Cedrick Bruyeron",
    role: "Développeur",
    description:
      "Ingénieur logiciel spécialisé dans l'IA conversationnelle et les systèmes embarqués.",
    image: cedrickImage,
    email: "crandriafara@gmail.com",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Mendrika",
    role: "UX/UI Designer",
    description:
      "Experte en stratégie digitale avec un focus sur l'adoption technologique en milieu urbain malgache.",
    image: mendrikaImage,
    email: "miora@tranonai.mg",
    linkedin: "#",
  },
  {
    name: "Mihaja",
    role: "Développeur Fullstack / IA",
    description:
      "Développeur full-stack passionné par les technologies émergentes et l'UX/UI moderne.",
    image: mihajaImage,
    email: "ravo@tranonai.mg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Tsiory",
    role: "DevSecOps",
    description:
      "Ingénieur spécialisé dans la sécurité applicative et l’optimisation des pipelines CI/CD.",
    image: tsioryImage,
    email: "lalaina@tranonai.mg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Christiane",
    role: "Responsable IoT",
    description:
      "Ingénieure électronique focalisée sur la conception de capteurs IoT économes en énergie.",
    image: christianeImage,
    email: "soa@tranonai.mg",
    linkedin: "#",
  },
  {
    name: "Princi",
    role: "Brand Strategist",
    description:
      "Spécialiste en communication visuelle et identité de marque.",
    image: princiImage,
    email: "princi@tranonai.mg",
    linkedin: "#",
  },
  {
    name: "Nina",
    role: "Marketing Digital",
    description:
      "Experte en marketing digital et en stratégies de croissance.",
    image: ninaImage,
    email: "nina@tranonai.mg",
    linkedin: "#",
  },
];

// === Composant ===
export function TeamSection() {
  return (
    <section className="py-20 bg-[#F2F4F8] dark:bg-[#1E293B] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#19B7A5] rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#FBAF42] rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#19B7A5] rounded-full" />
      </div>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="team"
    >
      <h3 className="dark:text-white text-black font-bold text-2xl sm:text-4xl md:text-5xl text-center mb-10 mt-10">
        Notre <span className="text-[#19B7A5]">Équipe</span>
      </h3>

      <p className="font-open-sans text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Une équipe passionnée de professionnels malgaches dédiés à l'innovation
        technologique et à l'amélioration de l'habitat local.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-xl">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group"
          >
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden z-10 group-hover:scale-105">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={`Portrait de ${member.name}`}
                    className="w-full h-74 object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="dark:text-white text-black font-bold text-lg">
                    {member.name}
                  </h4>
                  <Badge
                    variant="secondary"
                    className="mb-3 bg-[#19B7A5]/20 text-[#19B7A5] border-[#19B7A5]/30"
                  >
                    {member.role}
                  </Badge>
                  <p className="dark:text-[#9CA3AF] text-gray-500 font-normal text-base">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
    </section>
  );
}
