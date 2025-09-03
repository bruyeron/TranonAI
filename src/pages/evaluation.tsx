import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Users, Shield, Heart, Zap,
  CheckCircle2, ArrowRight
} from "lucide-react";

interface FormData {
  housingType: string;
  rooms: string;
  kitchen: string;
  occupants: string;
  priorities: string[];
  budget: string;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
}

interface Recommendation {
  category: string;
  devices: string[];
  quantity: number;
  icon: any;
}

export function NeedsAssessmentSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    housingType: "",
    rooms: "",
    kitchen: "",
    occupants: "",
    priorities: [],
    budget: "",
    contact: { name: "", email: "", phone: "" }
  });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const generateRecommendations = () => {
    const rooms = parseInt(formData.rooms) || 0;
    const kitchen = parseInt(formData.kitchen) || 0;
    const occupants = parseInt(formData.occupants) || 0;
    
    const newRecommendations: Recommendation[] = [];

    if (formData.priorities.includes("security") || rooms > 0) {
      newRecommendations.push({
        category: "Sécurité",
        devices: ["Caméras intelligentes", "Détecteurs de mouvement", "Serrures connectées", "Alarmes"],
        quantity: Math.max(2, Math.ceil(rooms * 0.5) + 2),
        icon: Shield
      });
    }

    if (formData.priorities.includes("health") || occupants > 0) {
      newRecommendations.push({
        category: "Santé & Sécurité",
        devices: ["Détecteurs de fumée", "Qualité de l'air", "Détecteurs de fuite", "Capteurs CO2"],
        quantity: Math.max(3, rooms + kitchen),
        icon: Heart
      });
    }

    if (formData.priorities.includes("utility") || formData.housingType) {
      const baseDevices = Math.max(4, Math.ceil((rooms + kitchen) * 0.8));
      newRecommendations.push({
        category: "Monitoring Utilitaire",
        devices: ["Prises intelligentes", "Compteurs énergie", "Thermostats", "Éclairage smart"],
        quantity: baseDevices,
        icon: Zap
      });
    }

    setRecommendations(newRecommendations);
    setShowRecommendations(true);
  };

  const handlePriorityToggle = (priority: string) => {
    setFormData(prev => ({
      ...prev,
      priorities: prev.priorities.includes(priority)
        ? prev.priorities.filter(p => p !== priority)
        : [...prev.priorities, priority]
    }));
  };

  const totalDevices = recommendations.reduce((sum, rec) => sum + rec.quantity, 0);
  const estimatedPrice = totalDevices * 15000;

  // Classe commune pour Select et Input dark/light mode
  const sharedInputClasses = "bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100";

  return (
    <section className="py-20 bg-[#F5F5F7] dark:bg-gray-900">
      <div className="container mx-auto px-6 py-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="lg:text-5xl text-[#0F172A] dark:text-gray-300  font-bold text-3xl sm:text-5xl md:text-6xl text-center mb-4 mt-10">
            Évaluons <span className="text-[#19B7A5]">vos besoins</span>
          </h2>
          <p className="mx-auto text-gray-500 dark:text-[#9CA3AF] text-base sm:text-lg md:text-xl text-center max-w-3xl mb-12">
            Répondez à quelques questions simples et recevez une recommandation personnalisée 
            de dispositifs intelligents pour votre maison.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                {[1,2,3,4].map((step) => (
                  <div key={step} className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${currentStep >= step ? "bg-[#19B7A5] border-[#0e5e54aa] text-gray-600 dark:text-gray-300" : "border-gray-300 text-gray-400"}`}>
                    {currentStep > step ? <CheckCircle2 className="w-6 h-6" /> : step}
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-[#19B7A5] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>

            <Card className="border-none shadow-xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl dark:text-gray-300 text-gray-600">
                  {currentStep === 1 && "Informations sur votre logement"}
                  {currentStep === 2 && "Composition du foyer"}
                  {currentStep === 3 && "Priorités et budget"}
                  {currentStep === 4 && "Vos coordonnées"}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* STEP 1 */}
                {currentStep === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="dark:text-gray-300 text-gray-600 text-xl">Type de logement</Label>
                        <Select
                          value={formData.housingType}
                          onValueChange={(value) =>
                            setFormData(prev => ({ ...prev, housingType: value }))
                          }
                        >
                          <SelectTrigger className={sharedInputClasses}>
                            <SelectValue placeholder="Sélectionnez..." />
                          </SelectTrigger>
                          <SelectContent className={sharedInputClasses}>
                            <SelectItem value="appartement">Appartement</SelectItem>
                            <SelectItem value="maison">Maison individuelle</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="duplex">Duplex</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="dark:text-gray-300 text-gray-600 text-xl">Nombre de chambres</Label>
                        <Select
                          value={formData.rooms}
                          onValueChange={(value) =>
                            setFormData(prev => ({ ...prev, rooms: value }))
                          }
                        >
                          <SelectTrigger className={sharedInputClasses}>
                            <SelectValue placeholder="Sélectionnez..." />
                          </SelectTrigger>
                          <SelectContent className={sharedInputClasses}>
                            <SelectItem value="1">1 chambre</SelectItem>
                            <SelectItem value="2">2 chambres</SelectItem>
                            <SelectItem value="3">3 chambres</SelectItem>
                            <SelectItem value="+4">4 chambres</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="dark:text-gray-300 text-gray-600 text-xl">Nombre de cuisine</Label>
                        <Select
                          value={formData.kitchen}
                          onValueChange={(value) =>
                            setFormData(prev => ({ ...prev, kitchen: value }))
                          }
                        >
                          <SelectTrigger className={sharedInputClasses}>
                            <SelectValue placeholder="Sélectionnez..." />
                          </SelectTrigger>
                          <SelectContent className={sharedInputClasses}>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="dark:text-gray-300 text-gray-600 text-xl">Nombre d'étage</Label>
                        <Select
                          value={formData.rooms}
                          onValueChange={(value) =>
                            setFormData(prev => ({ ...prev, rooms: value }))
                          }
                        >
                          <SelectTrigger className={sharedInputClasses}>
                            <SelectValue placeholder="Sélectionnez..." />
                          </SelectTrigger>
                          <SelectContent className={sharedInputClasses}>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">+3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {currentStep === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="space-y-2">
                      <Label className="dark:text-gray-300 text-gray-600 text-xl">Nombre d'occupants</Label>
                      <Select
                        value={formData.occupants}
                        onValueChange={(value) =>
                          setFormData(prev => ({ ...prev, occupants: value }))
                        }
                      >
                        <SelectTrigger className={sharedInputClasses}>
                          <SelectValue placeholder="Sélectionnez..." />
                        </SelectTrigger>
                        <SelectContent className={sharedInputClasses}>
                          <SelectItem value="1">1 personne</SelectItem>
                          <SelectItem value="2">2 personnes</SelectItem>
                          <SelectItem value="3">3 personnes</SelectItem>
                          <SelectItem value="4">+4 personnes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-[#6ebeb5]/40 rounded-lg">
                      <Users className="w-8 h-8 text-[#19B7A5]" />
                      <div>
                        <h4 className="font-poppins text-[#0F172A] dark:text-gray-900 mb-2">Conseil personnalisé</h4>
                        <p className="text-gray-600 dark:text-gray-900 text-sm">
                          Le nombre d'occupants nous aide à déterminer le niveau de sécurité 
                          et de monitoring optimal pour votre foyer.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 */}
                {currentStep === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="space-y-4">
                      <Label className="dark:text-gray-300 text-gray-600 text-xl">Quelles sont vos priorités ? (Sélectionnez plusieurs options)</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { key: "security", label: "Sécurité", icon: Shield, color: "bg-[#FBAF4299] border-[#FBAF42]" },
                          { key: "health", label: "Santé & Sécurité", icon: Heart, color: "bg-[#FBAF4299] border-[#FBAF42]" },
                          { key: "utility", label: "Économies d'énergie", icon: Zap, color: "bg-[#FBAF42AA] border-[#FBAF4299]" }
                        ].map(({ key, label, icon: Icon, color }) => (
                          <div
                            key={key}
                            onClick={() => handlePriorityToggle(key)}
                            className={`cursor-pointer p-4 border-2 rounded-lg transition-all duration-200 ${formData.priorities.includes(key) ? "border-[#19B7A5] bg-[#19B7A5]/10" : color}`}
                          >
                            <Icon className="w-8 h-8 text-[#FBAF42] mb-2" />
                            <h4 className="font-poppins text-[#0F172A] dark:text-gray-600 mb-1">{label}</h4>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="dark:text-gray-300 text-gray-600 text-xl">Budget approximatif (Ariary)</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          setFormData(prev => ({ ...prev, budget: value }))
                        }
                      >
                        <SelectTrigger className={sharedInputClasses}>
                          <SelectValue placeholder="Sélectionnez votre budget..." />
                        </SelectTrigger>
                        <SelectContent className={sharedInputClasses}>
                          <SelectItem value="100000-300000">500 000 - 600 000 AR</SelectItem>
                          <SelectItem value="300000-500000">600 000 - 800 000 Ar</SelectItem>
                          <SelectItem value="500000-1000000">800 000 - 1 000 000 Ar</SelectItem>
                          <SelectItem value="1000000+">Plus de 1 000 000 Ar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4 */}
                {currentStep === 4 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="dark:text-gray-300 text-gray-600 text-xl">Nom complet</Label>
                        <Input
                          value={formData.contact.name}
                          onChange={(e) =>
                            setFormData(prev => ({
                              ...prev,
                              contact: { ...prev.contact, name: e.target.value }
                            }))
                          }
                          placeholder="Votre nom"
                          className={sharedInputClasses}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="dark:text-gray-300 text-gray-600 text-xl">Email</Label>
                        <Input
                          type="email"
                          value={formData.contact.email}
                          onChange={(e) =>
                            setFormData(prev => ({
                              ...prev,
                              contact: { ...prev.contact, email: e.target.value }
                            }))
                          }
                          placeholder="votre@email.com"
                          className={sharedInputClasses}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="dark:text-gray-300 text-gray-600 text-xl">Téléphone</Label>
                      <Input
                        value={formData.contact.phone}
                        onChange={(e) =>
                          setFormData(prev => ({
                            ...prev,
                            contact: { ...prev.contact, phone: e.target.value }
                          }))
                        }
                        placeholder="+261 XX XXX XX XX"
                        className={sharedInputClasses + " max-w-xs"}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                    disabled={currentStep === 1}
                    className="border-gray-300 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Précédent
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      onClick={() => setCurrentStep(prev => prev + 1)}
                      className="bg-[#19B7A5] hover:bg-[#137468] text-gray-900 border-none"
                    >
                      Suivant <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={generateRecommendations}
                      className="bg-[#19B7A5] hover:bg-[#137468] text-gray-600 border-none"
                    >
                      Obtenir mes recommandations
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            {showRecommendations && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12"
              >
                <Card className="border-none shadow-xl bg-gradient-to-r from-[#6BE445]/10 to-[#FBAF40]/10">
                  <CardHeader className="text-center">
                    <CardTitle className="font-poppins text-3xl text-[#0F172A] dark:text-gray-300 mb-4">
                      Vos Recommandations Personnalisées
                    </CardTitle>
                    <div className="flex items-center justify-center gap-6">
                      <div className="text-center">
                        <div className="text-2xl text-[#19B7A5] mb-1">{totalDevices}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Dispositifs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl text-[#FBAF42] mb-1">
                          {estimatedPrice.toLocaleString()} Ar
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Prix estimé</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {recommendations.map((rec, index) => (
                        <motion.div
                          key={rec.category}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gray-300 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700"
                        >
                          <rec.icon className="w-10 h-10 text-[#19B7A5] mb-4" />
                          <h4 className="font-poppins text-xl text-[#0F172A] dark:text-gray-300 mb-2">{rec.category}</h4>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-2">
                            {rec.devices.map((device) => (
                              <li key={device}>{device}</li>
                            ))}
                          </ul>
                          <Badge className="bg-[#6BE445]/20 text-[#19B7A5] border-none">
                            Quantité: {rec.quantity}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
