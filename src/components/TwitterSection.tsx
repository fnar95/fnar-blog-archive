import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Twitter, Heart, MessageCircle, Repeat2 } from "lucide-react";

const TwitterSection = () => {
  // Sample tweets data - في التطبيق الحقيقي، ستأتي من API
  const tweets = [
    {
      id: 1,
      content: "التطوير المستمر للذات هو مفتاح النجاح في عصر التقنية. كل يوم فرصة جديدة لتعلم شيء مفيد 🌟",
      timestamp: "منذ ساعتين",
      likes: 45,
      retweets: 12,
      replies: 8
    },
    {
      id: 2,
      content: "أفضل استثمار يمكن أن تقوم به هو في تعليم نفسك. المعرفة هي الثروة الحقيقية في القرن الواحد والعشرين 📚💡",
      timestamp: "منذ 4 ساعات",
      likes: 78,
      retweets: 23,
      replies: 15
    },
    {
      id: 3,
      content: "البرمجة ليست مجرد كتابة كود، بل فن حل المشاكل وتحويل الأفكار إلى واقع رقمي يخدم الناس 💻✨",
      timestamp: "منذ يوم",
      likes: 156,
      retweets: 34,
      replies: 21
    },
    {
      id: 4,
      content: "في عالم متسارع التقنية، المهم ليس أن تعرف كل شيء، بل أن تعرف كيف تتعلم أي شيء بسرعة وكفاءة 🚀",
      timestamp: "منذ يومين",
      likes: 92,
      retweets: 18,
      replies: 12
    }
  ];

  return (
    <section id="tweets" className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            أحدث التغريدات
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            أشارككم أفكاري وتجاربي اليومية من خلال منصة تويتر
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {tweets.map((tweet, index) => (
            <Card 
              key={tweet.id} 
              className="shadow-card hover:shadow-hover transition-all duration-300 animate-scale-hover border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Twitter className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">فاضل المبارك</CardTitle>
                    <p className="text-sm text-muted-foreground">@Fnar9595 • {tweet.timestamp}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed mb-6 text-lg">
                  {tweet.content}
                </p>
                
                <div className="flex items-center justify-between text-muted-foreground">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 hover:text-red-500 transition-colors cursor-pointer">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{tweet.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-green-500 transition-colors cursor-pointer">
                      <Repeat2 className="h-4 w-4" />
                      <span className="text-sm">{tweet.retweets}</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{tweet.replies}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="lg" className="animate-scale-hover">
            عرض جميع التغريدات
            <ExternalLink className="h-5 w-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TwitterSection;