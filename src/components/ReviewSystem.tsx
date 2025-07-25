import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";

interface ReviewSystemProps {
  userType: "client" | "cleaner";
  booking?: {
    id: string;
    date: string;
    cleaner?: { name: string; avatar: string };
    client?: { name: string; avatar: string };
  };
}

const ReviewSystem = ({ userType, booking }: ReviewSystemProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = () => {
    // Qui implementerai la logica per inviare la recensione
    console.log("Recensione inviata:", { rating, comment, userType });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ThumbsUp className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Grazie per la tua recensione!</h3>
          <p className="text-muted-foreground">
            La tua opinione ci aiuta a migliorare il servizio per tutti.
          </p>
        </CardContent>
      </Card>
    );
  }

  const mockBooking = booking || {
    id: "1",
    date: "2024-01-20",
    cleaner: { name: "Maria Rossi", avatar: "/placeholder.svg" },
    client: { name: "Alessandro B.", avatar: "/placeholder.svg" }
  };

  const reviewTarget = userType === "client" ? mockBooking.cleaner : mockBooking.client;
  const reviewerLabel = userType === "client" ? "il collaboratore" : "il cliente";

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">
          Valuta {reviewerLabel}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Info persona da recensire */}
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={reviewTarget?.avatar} alt={reviewTarget?.name} />
            <AvatarFallback>{reviewTarget?.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">{reviewTarget?.name}</div>
            <div className="text-sm text-muted-foreground">
              Servizio del {mockBooking.date}
            </div>
          </div>
        </div>

        {/* Rating con stelle */}
        <div className="text-center">
          <div className="mb-2">
            <span className="text-sm font-medium">
              Quanto sei soddisfatto del servizio?
            </span>
          </div>
          <div className="flex justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1"
              >
                <Star
                  className={`h-8 w-8 ${
                    star <= (hoverRating || rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
          {rating > 0 && (
            <div className="text-sm text-muted-foreground">
              {rating === 1 && "Molto insoddisfatto"}
              {rating === 2 && "Insoddisfatto"}
              {rating === 3 && "Neutrale"}
              {rating === 4 && "Soddisfatto"}
              {rating === 5 && "Molto soddisfatto"}
            </div>
          )}
        </div>

        {/* Criteri specifici per tipo utente */}
        {userType === "client" && (
          <div className="space-y-3">
            <div className="text-sm font-medium">Valuta i seguenti aspetti:</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Puntualità</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Qualità</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Cortesia</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Affidabilità</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {userType === "cleaner" && (
          <div className="space-y-3">
            <div className="text-sm font-medium">Valuta il cliente:</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Comunicazione</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Pagamento</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Cortesia</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Casa pulita</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Commento */}
        <div>
          <label className="text-sm font-medium mb-2 block">
            Racconta la tua esperienza (opzionale)
          </label>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={
              userType === "client"
                ? "Descrivi come è andato il servizio..."
                : "Descrivi come è andata la collaborazione con questo cliente..."
            }
            rows={3}
          />
        </div>

        {/* Pulsante invio */}
        <Button
          onClick={handleSubmitReview}
          disabled={rating === 0}
          className="w-full"
        >
          Invia recensione
        </Button>

        <div className="text-xs text-muted-foreground text-center">
          Le recensioni sono reciproche e visibili pubblicamente per aumentare la fiducia nella community
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewSystem;