import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center animate-float">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto a iniziare?
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Unisciti a migliaia di clienti soddisfatti e trova la tua addetta alle pulizie ideale
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-6"
            >
              Trova addette ora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              Registrati come addetta
            </Button>
          </div>
          
          <div className="mt-8 text-white/80">
            <p>✓ Registrazione gratuita • ✓ Nessun impegno • ✓ Supporto 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;