import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import groupPhoto1 from "@/assets/gallery/group-photo-1.jpg";
import groupPhoto2 from "@/assets/gallery/group-photo-2.jpg";
import groupPhoto3 from "@/assets/gallery/group-photo-3.jpg";

const GalleryCarousel = () => {
  const galleryImages = [
    {
      src: groupPhoto1,
      alt: "자전거 여행 단체 사진 1",
    },
    {
      src: groupPhoto2,
      alt: "자전거 여행 단체 사진 2",
    },
    {
      src: groupPhoto3,
      alt: "자전거 여행 단체 사진 3",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark mb-4">
            함께한 순간들
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            잔차로드와 함께한 라이더들의 생생한 여행 순간
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
