import { MapPin } from "lucide-react";

interface RouteMapProps {
  days: {
    day: string;
    title: string;
  }[];
}

const RouteMap = ({ days }: RouteMapProps) => {
  return (
    <div className="relative py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Route line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-primary h-full opacity-30" />
        
        {/* Days */}
        <div className="relative space-y-16">
          {days.map((dayInfo, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  isEven ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? "text-right" : "text-left"}`}>
                  <div className={`inline-block bg-white rounded-xl shadow-lg p-6 border-2 border-primary/20 hover:border-primary/40 transition-all animate-fade-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center gap-3 mb-2">
                      {isEven && (
                        <>
                          <h3 className="font-serif text-lg font-bold text-dark">{dayInfo.title}</h3>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full whitespace-nowrap">
                            {dayInfo.day}
                          </span>
                        </>
                      )}
                      {!isEven && (
                        <>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full whitespace-nowrap">
                            {dayInfo.day}
                          </span>
                          <h3 className="font-serif text-lg font-bold text-dark">{dayInfo.title}</h3>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Center marker */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg border-4 border-white">
                    {index === 0 && (
                      <MapPin className="h-8 w-8 text-white" />
                    )}
                    {index === days.length - 1 && (
                      <MapPin className="h-8 w-8 text-white" />
                    )}
                    {index !== 0 && index !== days.length - 1 && (
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    )}
                  </div>
                  {index === 0 && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        출발
                      </span>
                    </div>
                  )}
                  {index === days.length - 1 && (
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="bg-accent text-dark px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        도착
                      </span>
                    </div>
                  )}
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RouteMap;
