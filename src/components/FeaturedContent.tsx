
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturedContent = () => {
  const features = [
    {
      icon: "🎮",
      title: "Modern Gaming",
      description: "Experience IGI 2 like never before with enhanced graphics and gameplay."
    },
    {
      icon: "🗺️",
      title: "Custom Maps",
      description: "Play on a variety of custom maps created by the community."
    },
    {
      icon: "🔧",
      title: "Easy Setup",
      description: "Get started in minutes with our simple setup process."
    },
    {
      icon: "👥",
      title: "Active Community",
      description: "Join thousands of players in the MPA community."
    },
    {
      icon: "🚀",
      title: "Regular Updates",
      description: "Enjoy frequent updates with new features and improvements."
    },
    {
      icon: "🛡️",
      title: "24/7 Servers",
      description: "Play anytime with our dedicated round-the-clock servers."
    }
  ];
  
  return (
    <section className="py-12 md:py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            <span className="text-white">Why Choose </span>
            <span className="text-neon-blue">MPA Launcher</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            The ultimate IGI 2 multiplayer experience with modern features and a thriving community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="neon-card">
              <CardHeader>
                <div className="text-2xl md:text-3xl mb-2">{feature.icon}</div>
                <CardTitle className="text-white text-lg md:text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-sm md:text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
