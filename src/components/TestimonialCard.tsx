import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  age: number;
  location: string;
  rating: number;
  comment: string;
  trip: string;
}

const TestimonialCard = ({
  name,
  age,
  location,
  rating,
  comment,
  trip,
}: TestimonialCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-5 w-5 ${
                star <= rating ? "fill-accent text-accent" : "text-muted"
              }`}
            />
          ))}
        </div>

        {/* Comment */}
        <p className="text-foreground leading-relaxed mb-6 text-sm md:text-base">
          "{comment}"
        </p>

        {/* User Info */}
        <div className="flex items-center gap-3 border-t border-border pt-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="font-serif font-bold text-primary text-lg">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-medium text-dark">
              {name} ({age}세)
            </p>
            <p className="text-sm text-muted-foreground">{location}</p>
            <p className="text-xs text-primary mt-1">{trip}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
