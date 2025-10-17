import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Shield, Heart, Zap, CheckCircle2, ArrowRight } from "lucide-react";

interface FormData {
  housingType: string;
  rooms: string;
  kitchen: string;
  occupants: string;
  floors: string;
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
    floors: "",
    priorities: [],
    budget: "",
    contact: { name: "", email: "", phone: "" }
  });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  // ✅ Nouvelle fonction de génération selon ta logique métier
  const generateRecommendations = () => {
    const rooms = parseInt(formData.rooms) || 0;
    const kitchen = parseInt(formData.kitchen) || 0;
    const occupants = parseInt(formData.occupants) || 0;
    const floors = parseInt(formData.floors) || 1;

    const newRecommendations: Recommendation[] = [];

    // --- Boîtier principal Tranon’AI ---
    const mainBoxQuantity = Math.max(1, floors); // 1 minimum, +1 par étage
    newRecommendations.push({
      category: "Boîtier Principal Tranon’AI",
      devices: ["Affichage de la consommation électrique", "Analyse des données énergétiques"],
      quantity: mainBoxQuantity,
      icon: Zap,
    });

    // --- Boîtier détecteur ---
    const detectorQuantity = Math.max(1, kitchen); // 1 minimum, +1 par cuisine
    newRecommendations.push({
      category: "Boîtier Détecteur",
      devices: ["Capteur de mouvement", "Détection de fumée et fuite"],
      quantity: detectorQuantity,
      icon: Shield,
    });

    // --- Boîtier caméra intelligente ---
    let cameraQuantity = 1; // Par défaut au moins une caméra
    if (occupants > 3 && rooms > 0) {
      cameraQuantity = rooms; // 1 par chambre si +3 occupants
    }

    newRecommendations.push({
      category: "Caméra Intelligente",
      devices: ["Surveillance intelligente", "Détection de présence humaine"],
      quantity: cameraQuantity,
      icon: Heart,
    });

    setRecommendations(newRecommendations);
    setShowRecommendations(true);
  };

  const totalDevices = recommendations.reduce((sum, rec) => sum + rec.quantity, 0);
  const estimatedPrice = totalDevices * 15000;

  const sharedInputClasses = "bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-gray-100";

  return (
    <section className="py-20 bg-[#F5F5F7] dark:bg-gray-900">
      <div className="container mx-auto px-6 py-5">
        {/* --- Titre principal --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="lg:text-5xl text-[#0F172A] dark:text-gray-300 font-bold text-3xl sm:text-5xl md:text-6xl text-center mb-4 mt-10">
            Évaluons <span className="text-[#19B7A5]">vos besoins</span>
          </h2>
          <p className="mx-auto text-gray-500 dark:text-[#9CA3AF] text-base sm:text-lg md:text-xl text-center max-w-3xl mb-12">
            Remplissez le formulaire pour obtenir une recommandation automatique adaptée à votre logement.
          </p>
        </motion.div>

        {/* --- Formulaire --- */}
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            
            {/* Barre de progression */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      currentStep >= step
                        ? "bg-[#19B7A5] border-[#0e5e54aa] text-gray-600 dark:text-gray-300"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
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

            {/* --- Étapes du formulaire --- */}
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
                {/* Étape 1 */}
                {currentStep === 1 && (
                  <motion.div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Type de logement</Label>
                        <Select
                          value={formData.housingType}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, housingType: value }))}
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
                        <Label>Nombre de chambres</Label>
                        <Select
                          value={formData.rooms}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, rooms: value }))}
                        >
                          <SelectTrigger className={sharedInputClasses}>
                            <SelectValue placeholder="Sélectionnez..." />
                          </SelectTrigger>
                          <SelectContent className={sharedInputClasses}>
                            <SelectItem value="1">1 chambre</SelectItem>
                            <SelectItem value="2">2 chambres</SelectItem>
                            <SelectItem value="3">3 chambres</SelectItem>
                            <SelectItem value="4">4 chambres ou +</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Nombre de cuisines</Label>
                        <Select
                          value={formData.kitchen}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, kitchen: value }))}
                        >
                          <SelectTrigger className={sharedInputClasses}>
                            <SelectValue placeholder="Sélectionnez..." />
                          </SelectTrigger>
                          <SelectContent className={sharedInputClasses}>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4 ou +</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Nombre d’étages</Label>
                        <Select
                          value={formData.floors}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, floors: value }))}
                        >
                          <SelectTrigger className={sharedInputClasses}>
                            <SelectValue placeholder="Sélectionnez..." />
                          </SelectTrigger>
                          <SelectContent className={sharedInputClasses}>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4 ou +</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Étape 2 */}
                {currentStep === 2 && (
                  <motion.div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Nombre d'occupants</Label>
                      <Select
                        value={formData.occupants}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, occupants: value }))}
                      >
                        <SelectTrigger className={sharedInputClasses}>
                          <SelectValue placeholder="Sélectionnez..." />
                        </SelectTrigger>
                        <SelectContent className={sharedInputClasses}>
                          <SelectItem value="1">1 personne</SelectItem>
                          <SelectItem value="2">2 personnes</SelectItem>
                          <SelectItem value="3">3 personnes</SelectItem>
                          <SelectItem value="4">4 personnes ou +</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {/* Étape 3 */}
                {currentStep === 3 && (
                  <motion.div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Budget approximatif (Ariary)</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                      >
                        <SelectTrigger className={sharedInputClasses}>
                          <SelectValue placeholder="Sélectionnez..." />
                        </SelectTrigger>
                        <SelectContent className={sharedInputClasses}>
                          <SelectItem value="500000-600000">500 000 - 600 000 Ar</SelectItem>
                          <SelectItem value="600000-800000">600 000 - 800 000 Ar</SelectItem>
                          <SelectItem value="800000-1000000">800 000 - 1 000 000 Ar</SelectItem>
                          <SelectItem value="1000000+">Plus de 1 000 000 Ar</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </motion.div>
                )}

                {/* Étape 4 */}
                {currentStep === 4 && (
                  <motion.div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label>Nom complet</Label>
                        <Input
                          value={formData.contact.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, name: e.target.value } }))}
                          placeholder="Votre nom"
                          className={sharedInputClasses}
                        />
                      </div>
                      <div>
                        <Label>Email</Label>
                        <Input
                          type="email"
                          value={formData.contact.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, email: e.target.value } }))}
                          placeholder="votre@email.com"
                          className={sharedInputClasses}
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Téléphone</Label>
                      <Input
                        value={formData.contact.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, contact: { ...prev.contact, phone: e.target.value } }))}
                        placeholder="+261 XX XXX XX XX"
                        className={sharedInputClasses + " max-w-xs"}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Boutons navigation */}
                <div className="flex justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                    disabled={currentStep === 1}
                  >
                    Précédent
                  </Button>

                  {currentStep < 4 ? (
                    <Button onClick={() => setCurrentStep(prev => prev + 1)} className="bg-[#19B7A5] text-white">
                      Suivant <ArrowRight className="ml-2" />
                    </Button>
                  ) : (
                    <Button onClick={generateRecommendations} className="bg-[#19B7A5] text-white">
                      Obtenir mes recommandations
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* --- Résultats des recommandations --- */}
            {showRecommendations && (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-12">
                <Card className="border-none shadow-xl bg-gradient-to-r from-[#6BE445]/10 to-[#FBAF40]/10">
                  <CardHeader className="text-center">
                    <CardTitle className="font-poppins text-3xl text-[#0F172A] dark:text-gray-300 mb-4">
                      Vos Recommandations Personnalisées
                    </CardTitle>
                    <div className="flex justify-center gap-10">
                      <div className="text-center">
                        <div className="text-2xl text-[#19B7A5]">{totalDevices}</div>
                        <div className="text-sm text-gray-600">Dispositifs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl text-[#FBAF42]">{estimatedPrice.toLocaleString()} Ar</div>
                        <div className="text-sm text-gray-600">Prix estimé</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {recommendations.map((rec, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                        >
                          <rec.icon className="w-10 h-10 text-[#19B7A5] mb-4" />
                          <h4 className="font-semibold text-xl mb-2">{rec.category}</h4>
                          <ul className="list-disc list-inside mb-3 text-gray-600 dark:text-gray-300">
                            {rec.devices.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                          <Badge className="bg-[#6BE445]/20 text-[#19B7A5] border-none">
                            Quantité : {rec.quantity}
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
