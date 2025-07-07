import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Users, Target, BookOpen, Zap } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "Python", "التطوير الشخصي", 
    "إدارة المشاريع", "الذكاء الاصطناعي", "التسويق الرقمي"
  ];

  const achievements = [
    {
      icon: Code,
      title: "خبرة في التطوير",
      description: "أكثر من 5 سنوات في تطوير التطبيقات والمواقع",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "مجتمع متفاعل",
      description: "أكثر من 10K متابع عبر منصات التواصل الاجتماعي",
      color: "text-green-500"
    },
    {
      icon: BookOpen,
      title: "محتوى تعليمي",
      description: "أكثر من 100 مقال ومحاضرة في مجال التقنية",
      color: "text-purple-500"
    },
    {
      icon: Target,
      title: "مشاريع ناجحة",
      description: "نجح في تطوير عشرات المشاريع التقنية المتنوعة",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            نبذة عني
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مطور ومهتم بالتقنية، أسعى لمشاركة المعرفة والخبرات مع المجتمع التقني العربي
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              رحلتي في عالم التقنية
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              بدأت رحلتي في عالم التقنية من الفضول البسيط لفهم كيفية عمل البرامج والتطبيقات. 
              مع الوقت، تطور هذا الفضول إلى شغف حقيقي بالبرمجة وتطوير الحلول التقنية.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              أؤمن بأن التقنية يجب أن تكون في خدمة الإنسان، ولذلك أركز على تطوير حلول تساعد 
              الناس وتسهل عليهم حياتهم اليومية. كما أحرص على مشاركة معرفتي مع الآخرين من خلال 
              المحتوى التعليمي والتفاعل مع المجتمع التقني.
            </p>
            
            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4 text-foreground">المهارات والاهتمامات</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-6 text-center shadow-card hover:shadow-hover transition-all duration-300 animate-scale-hover border-t-4 border-t-primary"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-current/10 mb-4 ${achievement.color}`}>
                        <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                      </div>
                      <h5 className="font-semibold text-foreground mb-2">
                        {achievement.title}
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <Card className="bg-gradient-primary p-8 md:p-12 text-center shadow-elegant">
          <div className="text-white space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">
              رؤيتي
            </h3>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              أسعى لبناء جسر بين التقنية والمجتمع العربي، من خلال تقديم محتوى تعليمي مفيد وحلول تقنية 
              عملية تساهم في تطوير مهارات الشباب العربي في مجال التقنية والبرمجة.
            </p>
            <div className="flex items-center justify-center">
              <Zap className="h-6 w-6 text-accent-gold-light mr-2" />
              <span className="text-accent-gold-light font-semibold">
                "التعلم المستمر هو مفتاح النجاح في عصر التقنية"
              </span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;