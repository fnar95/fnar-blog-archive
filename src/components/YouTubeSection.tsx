import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Eye, Clock, Calendar } from "lucide-react";

const YouTubeSection = () => {
  // Sample YouTube videos data - في التطبيق الحقيقي، ستأتي من YouTube API
  const videos = [
    {
      id: 1,
      title: "أساسيات البرمجة للمبتدئين - كيف تبدأ رحلتك في التقنية",
      description: "في هذا الفيديو أشرح الخطوات الأولى للدخول في عالم البرمجة وأهم اللغات التي يجب تعلمها",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop",
      duration: "15:30",
      views: "12.5K",
      uploadDate: "منذ أسبوع",
      category: "تعليمي"
    },
    {
      id: 2,
      title: "تجربتي في تطوير التطبيقات - نصائح من الواقع العملي",
      description: "أحكي لكم تجربتي الشخصية في تطوير التطبيقات والتحديات التي واجهتني وكيف تغلبت عليها",
      thumbnail: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=225&fit=crop",
      duration: "22:45",
      views: "8.7K",
      uploadDate: "منذ أسبوعين",
      category: "تجارب شخصية"
    },
    {
      id: 3,
      title: "مستقبل الذكاء الاصطناعي - رؤية عملية للعشر سنوات القادمة",
      description: "نظرة شاملة على تطور الذكاء الاصطناعي وتأثيره على مختلف القطاعات في المستقبل القريب",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=225&fit=crop",
      duration: "18:20",
      views: "19.2K",
      uploadDate: "منذ 3 أسابيع",
      category: "تحليل"
    },
    {
      id: 4,
      title: "إدارة الوقت في العصر الرقمي - استراتيجيات فعالة للإنتاجية",
      description: "أساليب وأدوات عملية لإدارة الوقت بكفاءة والحفاظ على التوازن بين العمل والحياة الشخصية",
      thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=225&fit=crop",
      duration: "25:10",
      views: "15.8K",
      uploadDate: "منذ شهر",
      category: "تطوير ذاتي"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "تعليمي":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "تجارب شخصية":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "تحليل":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "تطوير ذاتي":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <section id="videos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            قناة اليوتيوب
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            محتوى متنوع حول التقنية، البرمجة، والتطوير الشخصي
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {videos.map((video, index) => (
            <Card 
              key={video.id} 
              className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-scale-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="hero" size="lg" className="animate-scale-hover">
                    <Play className="h-6 w-6 mr-2" />
                    مشاهدة
                  </Button>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {video.duration}
                </div>
                <Badge className={`absolute top-3 right-3 ${getCategoryColor(video.category)}`}>
                  {video.category}
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl leading-tight hover:text-primary transition-colors cursor-pointer">
                  {video.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views} مشاهدة</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{video.uploadDate}</span>
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
            زيارة القناة
            <ExternalLink className="h-5 w-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;