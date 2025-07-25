import { MapPin, Calendar, Home, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Trova nella tua zona",
      description: "Inserisci la tua posizione e trova addette alle pulizie verificate nella tua area"
    },
    {
      icon: Calendar,
      title: "Prenota facilmente",
      description: "Scegli data, ora e tipo di servizio. Conferma la prenotazione in pochi click"
    },
    {
      icon: Home,
      title: "Ricevi il servizio",
      description: "L'addetta arriva a casa tua e svolge il lavoro con professionalità"
    },
    {
      icon: CheckCircle,
      title: "Valuta l'esperienza",
      description: "Lascia una recensione per aiutare altri utenti e migliorare il servizio"
    }
  ];

  return (
    <section id="come-funziona" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Come funziona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            In 4 semplici passaggi trovi e prenoti il servizio di pulizia perfetto per te
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-background animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-accent-light px-6 py-3 rounded-full">
            <CheckCircle className="h-5 w-5 text-accent" />
            <span className="text-accent font-medium">
              Servizio completamente gratuito per i clienti
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;