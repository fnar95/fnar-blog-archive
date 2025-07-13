import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Eye, Clock, Calendar } from "lucide-react";

const YouTubeSection = () => {
  // فيديوهات قناة اليوتيوب الفعلية
  const videos = [
    {
      id: 1,
      title: "تصميم الانشطة التفاعلية في كانفا",
      description: "ساعد طلابك على التعلم الذاتي بتصميم انشطة تفاعلية في كانفا",
      thumbnail: "https://img.youtube.com/vi/UfK4mmULreg/maxresdefault.jpg",
      duration: "12:45",
      views: "2.1K",
      uploadDate: "منذ أسبوع",
      category: "تعليمي",
      videoUrl: "https://www.youtube.com/watch?v=UfK4mmULreg"
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
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="animate-scale-hover"
                    onClick={() => window.open(video.videoUrl, '_blank')}
                  >
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
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="hover:bg-primary/10"
                    onClick={() => window.open(video.videoUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="animate-scale-hover"
            onClick={() => window.open('https://www.youtube.com/@%D9%81%D8%A7%D8%B6%D9%84%D8%A7%D9%84%D9%85%D8%A8%D8%A7%D8%B1%D9%83', '_blank')}
          >
            زيارة القناة
            <ExternalLink className="h-5 w-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;