import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, ExternalLink } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "تويتر",
      icon: "🐦",
      url: "https://x.com/Fnar9595",
      description: "تابعني للحصول على آخر التحديثات والأفكار"
    },
    {
      name: "يوتيوب",
      icon: "📺",
      url: "https://www.youtube.com/@%D9%81%D8%A7%D8%B6%D9%84%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B1%D9%83",
      description: "اشترك في القناة لمتابعة الفيديوهات الجديدة"
    },
    {
      name: "البريد الإلكتروني",
      icon: "✉️",
      url: "mailto:contact@example.com",
      description: "راسلني مباشرة للاستفسارات والتعاون"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            تواصل معي
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أحب التواصل مع المهتمين بالتقنية ومشاركة الأفكار والخبرات
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-card hover:shadow-hover transition-all duration-300 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                أرسل رسالة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                    الاسم
                  </Label>
                  <Input 
                    id="name" 
                    placeholder="اسمك الكريم"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                    البريد الإلكتروني
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="email@example.com"
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-sm font-medium mb-2 block">
                  الموضوع
                </Label>
                <Input 
                  id="subject" 
                  placeholder="موضوع الرسالة"
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                  الرسالة
                </Label>
                <Textarea 
                  id="message" 
                  placeholder="اكتب رسالتك هنا..."
                  rows={6}
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full animate-scale-hover">
                <Send className="h-5 w-5 mr-2" />
                إرسال الرسالة
              </Button>
            </CardContent>
          </Card>

          {/* Social Links & Info */}
          <div className="space-y-8 animate-fade-in">
            <Card className="shadow-card p-8 border-t-4 border-t-accent-gold">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  لنتواصل!
                </h3>
                <p className="text-muted-foreground">
                  أرحب بجميع الاستفسارات والاقتراحات وفرص التعاون
                </p>
              </div>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <Card 
                    key={index} 
                    className="p-4 hover:shadow-card transition-all duration-300 animate-scale-hover cursor-pointer group border-l-4 border-l-primary"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{link.icon}</span>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {link.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {link.description}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-primary p-8 text-center shadow-elegant">
              <div className="text-white space-y-4">
                <h4 className="text-xl font-bold">متوفر للتعاون</h4>
                <p className="text-white/90">
                  أبحث دائماً عن فرص التعاون في مشاريع تقنية مفيدة ومحتوى تعليمي متميز
                </p>
                <Button variant="gold" size="lg" className="mt-4 animate-scale-hover">
                  تواصل للتعاون
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;