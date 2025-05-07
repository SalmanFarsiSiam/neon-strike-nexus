
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Hero = () => {
  const currentVersion = "v9.3.0";

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-16 px-4 md:px-8">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-neon-blue/10 rounded-full blur-[100px] z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-[100px] h-[100px] md:w-[200px] md:h-[200px] bg-neon-purple/10 rounded-full blur-[80px] z-0"></div>
      
      <div className="container relative z-10 max-w-5xl">
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">MPA </span>
            <span className="text-neon-blue animate-glow">Official Community</span>
          </h1>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl mt-6">
            An official gaming community working with IGI 2 multiplayer game and provided servers and various other services with real-time support to all players.
          </p>
          
          <div className="mt-8 flex items-center justify-center">
            <Button 
              size="lg"
              className="neon-button group flex items-center gap-2 text-lg"
            >
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              Download Launcher
              <span className="text-xs opacity-80 ml-1">({currentVersion})</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
