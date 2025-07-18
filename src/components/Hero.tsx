import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import blendedHeroImage from "@/assets/blended-hero-image.jpg";

const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              أهلاً بكم في
              <span className="block text-accent-gold-light">مدونتي الشخصية</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              أشارككم أفكاري وتجاربي من خلال التغريدات ومقاطع اليوتيوب
            </p>
            <p className="text-lg text-white/80">
              مرحباً، أنا فاضل المبارك، أقدم محتوى متنوع حول التقنية والتطوير الشخصي
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="gold" size="lg" className="animate-scale-hover">
                شاهد أحدث الفيديوهات
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary animate-scale-hover">
                تصفح التغريدات
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <Card className="overflow-hidden shadow-elegant relative">
              <div className="relative z-10 flex items-center justify-center h-80 p-8">
                <img 
                  src={blendedHeroImage}
                  alt="فاضل المبارك"
                  className="max-w-[280px] max-h-[280px] object-contain rounded-lg shadow-hover"
                />
              </div>
            </Card>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-light/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;