import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Clock, Filter } from "lucide-react";
import { useState } from "react";

interface Cleaner {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  location: string;
  distance: string;
  pricePerHour: number;
  specialties: string[];
  availableToday: boolean;
  nextAvailable: string;
}

const CleanersList = () => {
  const [filters, setFilters] = useState({
    specialty: "all",
    priceRange: "all",
    availability: "all",
    rating: "all"
  });

  const mockCleaners: Cleaner[] = [
    {
      id: "1",
      name: "Maria Rossi",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviewsCount: 127,
      location: "Frosinone Centro",
      distance: "0.5 km",
      pricePerHour: 18,
      specialties: ["Pulizia generale", "Stiratura"],
      availableToday: true,
      nextAvailable: "Oggi alle 14:00"
    },
    {
      id: "2",
      name: "Anna Bianchi",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviewsCount: 89,
      location: "Frosinone Sud",
      distance: "1.2 km",
      pricePerHour: 20,
      specialties: ["Pulizia approfondita", "Post-ristrutturazione"],
      availableToday: false,
      nextAvailable: "Domani alle 09:00"
    },
    {
      id: "3",
      name: "Elena Verdi",
      avatar: "/placeholder.svg",
      rating: 4.7,
      reviewsCount: 156,
      location: "Frosinone Nord",
      distance: "2.1 km",
      pricePerHour: 16,
      specialties: ["Pulizia generale", "Pulizia vetri"],
      availableToday: true,
      nextAvailable: "Oggi alle 16:00"
    }
  ];

  const specialties = ["Pulizia generale", "Pulizia approfondita", "Post-ristrutturazione", "Stiratura", "Pulizia vetri"];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header con filtri */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Collaboratori disponibili</h1>
          <p className="text-muted-foreground">Trovati {mockCleaners.length} collaboratori nella tua zona</p>
        </div>
        
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filtri
        </Button>
      </div>

      {/* Filtri rapidi */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button variant="outline" size="sm">Disponibili oggi</Button>
        <Button variant="outline" size="sm">Valutazione 4.5+</Button>
        <Button variant="outline" size="sm">Prezzo più basso</Button>
        <Button variant="outline" size="sm">Più vicini</Button>
      </div>

      {/* Lista collaboratori */}
      <div className="grid gap-6">
        {mockCleaners.map((cleaner) => (
          <Card key={cleaner.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar e info base */}
                <div className="flex items-start gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={cleaner.avatar} alt={cleaner.name} />
                    <AvatarFallback>{cleaner.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{cleaner.name}</h3>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{cleaner.rating}</span>
                        <span className="text-sm text-muted-foreground">({cleaner.reviewsCount})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{cleaner.location} • {cleaner.distance}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {cleaner.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Disponibilità e prezzo */}
                <div className="md:text-right space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-primary">€{cleaner.pricePerHour}</div>
                    <div className="text-sm text-muted-foreground">all'ora</div>
                  </div>

                  <div className="flex items-center gap-2 justify-end">
                    <div className={`w-2 h-2 rounded-full ${cleaner.availableToday ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    <span className="text-sm font-medium">{cleaner.nextAvailable}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Contatta
                    </Button>
                    <Button size="sm">
                      Prenota
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Paginazione */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Precedente</Button>
          <Button variant="outline" size="sm">1</Button>
          <Button size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Successivo</Button>
        </div>
      </div>
    </div>
  );
};

export default CleanersList;