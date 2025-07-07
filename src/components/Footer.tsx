import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "نبذة عني", href: "#about" },
    { name: "التغريدات", href: "#tweets" },
    { name: "فيديوهات يوتيوب", href: "#videos" },
    { name: "تواصل معي", href: "#contact" }
  ];

  const socialLinks = [
    { name: "تويتر", href: "https://x.com/Fnar9595", icon: "🐦" },
    { name: "يوتيوب", href: "https://www.youtube.com/@%D9%81%D8%A7%D8%B6%D9%84%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B1%D9%83", icon: "📺" },
    { name: "بريد إلكتروني", href: "mailto:contact@example.com", icon: "✉️" }
  ];

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-accent-gold-light bg-clip-text text-transparent">
              فاضل المبارك
            </h3>
            <p className="text-white/80 leading-relaxed max-w-md">
              مطور ومهتم بالتقنية، أشارككم رحلتي في عالم البرمجة والتطوير الشخصي 
              من خلال التغريدات ومقاطع اليوتيوب التعليمية.
            </p>
            <div className="flex items-center gap-2 text-white/70">
              <span>صُنع بـ</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>و</span>
              <Code className="h-4 w-4 text-accent-gold-light" />
              <span>و</span>
              <Coffee className="h-4 w-4 text-amber-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-gold-light">
              روابط سريعة
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-gold-light">
              تابعني
            </h4>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">
            <p>© {currentYear} فاضل المبارك. جميع الحقوق محفوظة.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              سياسة الخصوصية
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              شروط الاستخدام
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-accent-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;