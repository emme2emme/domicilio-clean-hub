import { Shield, Clock, Star, CreditCard, MessageCircle, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import cleanerImage from "@/assets/cleaner-professional.jpg";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Professioniste verificate",
      description: "Tutte le addette sono controllate e verificate per garantire sicurezza e qualità"
    },
    {
      icon: Clock,
      title: "Prenotazione flessibile",
      description: "Prenota quando vuoi, anche all'ultimo minuto. Massima flessibilità per i tuoi orari"
    },
    {
      icon: Star,
      title: "Recensioni reali",
      description: "Leggi le recensioni di altri clienti per scegliere la professionista più adatta"
    },
    {
      icon: CreditCard,
      title: "Pagamenti sicuri",
      description: "Paga online in sicurezza o direttamente in contanti, come preferisci"
    },
    {
      icon: MessageCircle,
      title: "Chat integrata",
      description: "Comunica direttamente con la tua addetta per organizzare al meglio il servizio"
    },
    {
      icon: MapPin,
      title: "Copertura locale",
      description: "Trova addette nella tua zona per un servizio rapido e conveniente"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative">
              <img 
                src={cleanerImage} 
                alt="Professional cleaner" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-accent text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm">Clienti soddisfatti</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="order-1 lg:order-2">
            <div className="mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Perché scegliere
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Instaclean
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                La piattaforma più sicura e conveniente per trovare servizi di pulizia domestica
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-secondary/50 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;