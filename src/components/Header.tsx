import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              فاضل المبارك
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              نبذة عني
            </a>
            <a href="#tweets" className="text-muted-foreground hover:text-primary transition-colors">
              التغريدات
            </a>
            <a href="#videos" className="text-muted-foreground hover:text-primary transition-colors">
              فيديوهات يوتيوب
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              تواصل معي
            </a>
          </div>
          
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Button variant="hero" size="sm">
              تابعني
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;