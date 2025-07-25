import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Clock, CheckCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

interface CleanerProfileProps {
  cleaner?: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    reviewsCount: number;
    location: string;
    pricePerHour: number;
    bio: string;
    specialties: string[];
    availableDates: Date[];
    photos: string[];
    reviews: Array<{
      id: string;
      clientName: string;
      clientAvatar: string;
      rating: number;
      comment: string;
      date: string;
      cleanerReply?: string;
    }>;
  };
}

const CleanerProfile = ({ cleaner }: CleanerProfileProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

  // Mock data se non viene passato il cleaner
  const mockCleaner = {
    id: "1",
    name: "Maria Rossi",
    avatar: "/placeholder.svg",
    rating: 4.9,
    reviewsCount: 127,
    location: "Frosinone Centro",
    pricePerHour: 18,
    bio: "Esperienza decennale nelle pulizie domestiche. Affidabile, puntuale e attenta ai dettagli. Disponibile per pulizie ordinarie, approfondite e post-ristrutturazione.",
    specialties: ["Pulizia generale", "Pulizia approfondita", "Post-ristrutturazione", "Stiratura", "Pulizia vetri"],
    availableDates: [new Date(), new Date(Date.now() + 86400000), new Date(Date.now() + 172800000)],
    photos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    reviews: [
      {
        id: "1",
        clientName: "Alessandro B.",
        clientAvatar: "/placeholder.svg",
        rating: 5,
        comment: "Eccellente servizio! Maria è molto professionale e ha lasciato casa impeccabile.",
        date: "2024-01-15",
        cleanerReply: "Grazie Alessandro! È stato un piacere lavorare per voi."
      },
      {
        id: "2",
        clientName: "Lucia M.",
        clientAvatar: "/placeholder.svg",
        rating: 5,
        comment: "Puntuale e accurata. La consiglio vivamente!",
        date: "2024-01-10"
      }
    ]
  };

  const currentCleaner = cleaner || mockCleaner;
  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonna sinistra - Info profilo */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header profilo */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={currentCleaner.avatar} alt={currentCleaner.name} />
                  <AvatarFallback>{currentCleaner.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold">{currentCleaner.name}</h1>
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{currentCleaner.rating}</span>
                      <span className="text-muted-foreground">({currentCleaner.reviewsCount} recensioni)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{currentCleaner.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-primary">€{currentCleaner.pricePerHour}</span>
                    <span className="text-muted-foreground">all'ora</span>
                  </div>
                  
                  <p className="text-muted-foreground">{currentCleaner.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specializzazioni */}
          <Card>
            <CardHeader>
              <CardTitle>Specializzazioni</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {currentCleaner.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary">{specialty}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Foto del lavoro */}
          <Card>
            <CardHeader>
              <CardTitle>Esempi del mio lavoro</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {currentCleaner.photos.map((photo, index) => (
                  <div key={index} className="aspect-square rounded-lg bg-muted overflow-hidden">
                    <img src={photo} alt={`Lavoro ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recensioni */}
          <Card>
            <CardHeader>
              <CardTitle>Recensioni ({currentCleaner.reviewsCount})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentCleaner.reviews.map((review) => (
                <div key={review.id} className="border-b border-border pb-4 last:border-b-0">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={review.clientAvatar} alt={review.clientName} />
                      <AvatarFallback>{review.clientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{review.clientName}</span>
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-muted-foreground mb-2">{review.comment}</p>
                      {review.cleanerReply && (
                        <div className="bg-muted p-3 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-sm">Risposta di {currentCleaner.name}:</span>
                          </div>
                          <p className="text-sm">{review.cleanerReply}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Colonna destra - Prenotazione */}
        <div className="space-y-6">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Prenota ora</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Calendario */}
              <div>
                <label className="text-sm font-medium mb-2 block">Seleziona data</label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => !currentCleaner.availableDates.some(d => 
                    d.toDateString() === date.toDateString()
                  )}
                  className="rounded-md border"
                />
              </div>

              {/* Orari disponibili */}
              {selectedDate && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Orario</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTimeSlot === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTimeSlot(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Durata */}
              <div>
                <label className="text-sm font-medium mb-2 block">Durata</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="2">2 ore (€{currentCleaner.pricePerHour * 2})</option>
                  <option value="3">3 ore (€{currentCleaner.pricePerHour * 3})</option>
                  <option value="4">4 ore (€{currentCleaner.pricePerHour * 4})</option>
                  <option value="5">5 ore (€{currentCleaner.pricePerHour * 5})</option>
                </select>
              </div>

              {/* Pulsanti azione */}
              <div className="space-y-2 pt-4">
                <Button className="w-full" size="lg" disabled={!selectedDate || !selectedTimeSlot}>
                  Prenota ora
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contatta
                </Button>
              </div>

              <div className="text-xs text-muted-foreground text-center pt-2">
                ✓ Cancellazione gratuita fino a 24h prima<br/>
                ✓ Pagamento sicuro o in contanti<br/>
                ✓ Soddisfatti o rimborsati
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CleanerProfile;