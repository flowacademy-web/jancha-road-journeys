import { MapPin, Calendar, TrendingUp, Users, Hotel } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CourseInfoProps {
  route: string;
  distance: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  accommodation: string;
}

const CourseInfo = ({ route, distance, duration, difficulty, groupSize, accommodation }: CourseInfoProps) => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card className="border-border/50">
            <CardContent className="p-4">
              <MapPin className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm text-muted-foreground mb-1">루트</p>
              <p className="text-sm font-medium text-foreground">{route}</p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardContent className="p-4">
              <TrendingUp className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm text-muted-foreground mb-1">거리</p>
              <p className="text-sm font-medium text-foreground">{distance}</p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardContent className="p-4">
              <Calendar className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm text-muted-foreground mb-1">기간</p>
              <p className="text-sm font-medium text-foreground">{duration}</p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardContent className="p-4">
              <TrendingUp className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm text-muted-foreground mb-1">난이도</p>
              <p className="text-sm font-medium text-foreground">{difficulty}</p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardContent className="p-4">
              <Users className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm text-muted-foreground mb-1">그룹</p>
              <p className="text-sm font-medium text-foreground">{groupSize}</p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardContent className="p-4">
              <Hotel className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm text-muted-foreground mb-1">숙소</p>
              <p className="text-sm font-medium text-foreground">{accommodation}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
