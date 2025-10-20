import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Star } from "lucide-react";

interface DestinationCardProps {
  country: string;
  flag: string;
  title: string;
  description: string;
  route: string;
  distance: string;
  difficulty: number;
  image: string;
  link: string;
  highlights: string[];
  fullyBooked?: boolean;
  departureDate?: string;
}

const DestinationCard = ({
  country,
  flag,
  title,
  description,
  route,
  distance,
  difficulty,
  image,
  link,
  highlights,
  fullyBooked,
  departureDate,
}: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={country}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
          <span className="text-2xl">{flag}</span>
          <span className="font-serif font-bold text-dark">{country}</span>
        </div>
        <div className="absolute bottom-4 right-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-dark">{distance}</span>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Title & Description */}
        <h3 className="font-serif text-2xl font-bold text-dark mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>

        {/* Route */}
        <div className="flex items-start gap-2 mb-4 p-3 bg-secondary rounded-lg">
          <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm text-foreground">{route}</p>
        </div>

        {/* Difficulty */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground">난이도:</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= difficulty ? "fill-accent text-accent" : "text-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2 mb-6">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-foreground">{highlight}</p>
            </div>
          ))}
        </div>

        {/* Fully Booked Badge */}
        {fullyBooked && departureDate && (
          <div className="mb-4 p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
            <p className="text-sm font-bold text-destructive mb-1">🔥 전석 마감</p>
            <p className="text-xs text-destructive/80 mb-1">11명/11명</p>
            <p className="text-xs text-destructive/80">{departureDate} 출발 예정</p>
          </div>
        )}

        {/* CTA */}
        <Link to={link}>
          <Button className="w-full group/btn font-sans">
            자세히 보기
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
