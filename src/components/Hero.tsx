import { Button } from "@/components/ui/button";
import { MapPin, Star, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Clean home interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Trova lavoro</span>
            <span className="block bg-gradient-to-r from-accent-light to-white bg-clip-text text-transparent">
              nelle pulizie
            </span>
            <span className="block text-2xl md:text-3xl font-normal mt-2">o trova chi pulisce per te</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            <strong>Collaboratori:</strong> Iscriviti gratis e inizia a guadagnare subito<br/>
            <strong>Clienti:</strong> Prenota servizi di qualità con recensioni verificate
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent text-white hover:bg-accent/90 shadow-lg text-lg px-8 py-6 animate-pulse"
            >
              <Users className="mr-2 h-5 w-5" />
              Lavora con noi - GRATIS
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-6"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Trova collaboratori
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-in">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 mr-2" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-white/80">Addette verificate</p>
            </div>
            
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 mr-2" />
                <span className="text-2xl font-bold">4.8</span>
              </div>
              <p className="text-white/80">Valutazione media</p>
            </div>
            
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-6 w-6 mr-2" />
                <span className="text-2xl font-bold">20+</span>
              </div>
              <p className="text-white/80">Città coperte</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
          <Sparkles className="h-8 w-8 text-white" />
        </div>
      </div>
      
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-accent/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;