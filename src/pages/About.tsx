import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Target, Users, Globe, Award, Lightbulb, Leaf, Shield, TrendingUp,
  Mail, Linkedin, Github
} from "lucide-react";
import meikImage from "../assets/equipe/meik.jpg";
import cedrickImage from "../assets/equipe/maitre.jpeg";
import mendrikaImage from "../assets/equipe/mendrika.jpeg";
import christianeImage from "../assets/equipe/christiane.jpeg";
import mihajaImage from "../assets/equipe/mihaja.jpeg";
import ninaImage from "../assets/equipe/nina.jpeg";
import tsioryImage from "../assets/equipe/tsiory.jpeg";
import princiImage from "../assets/equipe/princi.jpeg";

// Typage des icônes
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// Interfaces
interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  email: string;
  linkedin?: string;
  github?: string;
}

interface StatItem {
  number: string;
  label: string;
  icon: IconType;
}

interface ValueItem {
  icon: IconType;
  title: string;
  description: string;
}

// Données
const teamMembers: TeamMember[] = [
  {
    name: "Ben Johnson Meik",
    role: "Porteur de projet",
    description: "Expert en IoT et intelligence artificielle avec 8 ans d'expérience dans les solutions smart home.",
    image: meikImage,
    email: "andry@tranonai.mg",
    linkedin: "#",
    github: "#"
  },
  {
    name: "RANDRIAFARA Cedrick Bruyeron",
    role: "Developeur", 
    description: "Ingénieur logiciel spécialisé dans l'IA conversationnelle et les systèmes embarqués.",
    image: cedrickImage,
    email: "crandriafara@gmail.com",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Mendrika",
    role: "UX/UI Design",
    description: "Experte en stratégie digitale avec un focus sur l'adoption technologique en milieu urbain malgache.",
    image: mendrikaImage,
    email: "miora@tranonai.mg",
    linkedin: "#"
  },
  {
    name: "Mihaja",
    role: "Developer fullstack / IA",
    description: "Développeur full-stack passionné par les technologies émergentes et l'UX/UI moderne.",
    image: mihajaImage,
    email: "ravo@tranonai.mg",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Tsiory",
    role: "DevSecOps",
    description: "Ingénieur électronique spécialisé dans la conception de capteurs IoT économes en énergie.",
    image: tsioryImage,
    email: "lalaina@tranonai.mg",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Christiane",
    role: "Responsable IoT",
    description: "Designer créative focalisée sur l'accessibilité et l'expérience utilisateur inclusive.",
    image: christianeImage,
    email: "soa@tranonai.mg",
    linkedin: "#"
  },
  {
    name: "Princi",
    role: "Brand maveriks",
    description: "Designer créative focalisée sur l'accessibilité et l'expérience utilisateur inclusive.",
    image: princiImage,
    email: "soa@tranonai.mg",
    linkedin: "#"
  },
  {
    name: "Nina",
    role: "Bomboclatt",
    description: "Designer créative focalisée sur l'accessibilité et l'expérience utilisateur inclusive.",
    image: ninaImage,
    email: "soa@tranonai.mg",
    linkedin: "#"
  },
  {
    name: "Christiane",
    role: "Responsable IoT",
    description: "Designer créative focalisée sur l'accessibilité et l'expérience utilisateur inclusive.",
    image: christianeImage,
    email: "soa@tranonai.mg",
    linkedin: "#"
  }
];

const stats: StatItem[] = [
  { number: "10K+", label: "Foyers connectés", icon: Users },
  { number: "95%", label: "Satisfaction client", icon: Award },
  { number: "30%", label: "Économies d'énergie", icon: TrendingUp },
  { number: "24/7", label: "Support disponible", icon: Shield }
];

const values: ValueItem[] = [
  { icon: Leaf, title: "Durabilité", description: "Solutions éco-responsables pour un avenir durable à Madagascar" },
  { icon: Shield, title: "Sécurité", description: "Protection des données et respect de la vie privée de nos utilisateurs" },
  { icon: Lightbulb, title: "Innovation", description: "Technologies de pointe adaptées au contexte local malgache" },
  { icon: Users, title: "Accessibilité", description: "Solutions intelligentes accessibles à tous les foyers malgaches" }
];

// Composant AboutSection
export function AboutSection() {
  return (
    <section className="py-20 bg-[#F2F4F8] dark:bg-[#1E293B] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#19B7A5] rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-[#FBAF42] rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#19B7A5] rounded-full" />
      </div>

      <div className="container mx-auto py-10 px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <h2 className="font-poppins lg:text-5xl dark:text-white text-black font-bold text-3xl sm:text-5xl md:text-6xl text-center mb-4">À Propos de <span className="text-[#19B7A5]">Tranon'<span className="text-[#FBAF42]">AI</span></span></h2>
          <p className="font-open-sans max-w-3xl mx-auto text-gray-500 dark:text-[#9CA3AF] text-base sm:text-lg md:text-xl">
            Nous révolutionnons l'habitat malgache avec des solutions smart home innovantes, durables et accessibles à tous.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <CardMotion icon={Target} title="Notre Mission" color="#19B7A5" text="Démocratiser l'accès aux technologies smart home à Madagascar en proposant des solutions intelligentes, abordables et adaptées au contexte local. Nous croyons que chaque foyer malgache mérite de bénéficier des avantages de la domotique moderne." />
          <CardMotion icon={Globe} title="Notre Vision" color="#19B7A5" text="Faire de Madagascar un leader régional en matière de smart home, en créant un écosystème technologique local durable qui améliore la qualité de vie, optimise l'énergie et renforce la sécurité des foyers malgaches." />
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
              <div className="p-4 bg-[#FBAF42]/10 rounded-lg inline-block mb-4">
                <stat.icon className="w-8 h-8 text-[#FBAF42]" />
              </div>
              <div className="text-lg sm:text-xl dark:text-[#9CA3AF] text-gray-500 leading-relaxed">{stat.number}</div>
              <div className="dark:text-[#9CA3AF] text-gray-500 font-normal text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <ValuesSection values={values} />

        {/* Team */}
        <TeamSection teamMembers={teamMembers} />
      </div>
    </section>
  );
}

// Composants réutilisables
function CardMotion({ icon: Icon, title, color, text }: { icon: IconType; title: string; color: string; text: string }) {
  return (
    <motion.div initial={{ opacity: 0, x: title === "Notre Mission" ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: title === "Notre Vision" ? 0.2 : 0 }}>
      <Card className={`bg-gradient-to-br from-[${color}]/10 to-[${color}]/5 border-[${color}]/20 h-full`}>
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 bg-[${color}]/20 rounded-lg`}>
              <Icon className={`w-4 h-4 text-[${color}]`} />
            </div>
            <h3 className="dark:text-white text-black font-bold text-lg">{title}</h3>
          </div>
          <p className="dark:text-[#9CA3AF] text-gray-500 font-normal text-base">{text}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ValuesSection({ values }: { values: ValueItem[] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-20">
      <h3 className="dark:text-white text-black font-bold text-2xl sm:text-4xl md:text-5xl text-center mb-10">Nos <span className="text-[#19B7A5]">Valeurs</span></h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center group">
            <div className="p-4 bg-[#6BE445]/10 rounded-lg inline-block mb-4 group-hover:bg-[#6BE445]/20 transition-all duration-300">
              <value.icon className="w-8 h-8 text-[#FBAF42]" />
            </div>
            <h4 className="dark:text-white text-black font-bold text-lg">{value.title}</h4>
            <p className="dark:text-[#9CA3AF] text-gray-500 font-normal text-base">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function TeamSection({ teamMembers }: { teamMembers: TeamMember[] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      <h3 className="dark:text-white text-black font-bold text-2xl sm:text-4xl md:text-5xl text-center mb-10">Notre <span className="text-[#19B7A5]">Équipe</span></h3>
      <p className="font-open-sans text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Une équipe passionnée de professionnels malgaches dédiés à l'innovation technologique et à l'amélioration de l'habitat local.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-xl">
        {teamMembers.map((member, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group">
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden z-10 group-hover:scale-105">
              <CardContent className="p-0">
                <div className="relative">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover  transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={`mailto:${member.email}`} className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                    {member.linkedin && <a href={member.linkedin} className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"><Linkedin className="w-4 h-4 text-white" /></a>}
                    {member.github && <a href={member.github} className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"><Github className="w-4 h-4 text-white" /></a>}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="dark:text-white text-black font-bold text-lg">{member.name}</h4>
                  <Badge variant="secondary" className="mb-3 bg-[#19B7A5]/20 text-[#19B7A5] border-[#19B7A5]/30">{member.role}</Badge>
                  <p className="dark:text-[#9CA3AF] text-gray-500 font-normal text-base">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
