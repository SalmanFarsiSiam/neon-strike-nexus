
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const DownloadsPage = () => {
  const [activeTab, setActiveTab] = useState("launcher");

  const launcherVersions = [
    {
      version: "v9.3.0",
      date: "May 1, 2025",
      size: "45 MB",
      description: "Latest stable release with improved server connectivity and new UI features.",
      isLatest: true,
    },
    {
      version: "v9.2.5",
      date: "April 15, 2025",
      size: "43 MB",
      description: "Minor bug fixes and performance improvements.",
      isLatest: false,
    },
    {
      version: "v9.2.0",
      date: "March 25, 2025",
      size: "42 MB",
      description: "Added support for new maps and fixed multiplayer connectivity issues.",
      isLatest: false,
    },
  ];

  const tools = [
    {
      name: "Map Editor",
      version: "v2.1.0",
      size: "22 MB",
      description: "Create and edit custom maps for IGI 2 multiplayer.",
    },
    {
      name: "Texture Pack Creator",
      version: "v1.5.0",
      size: "15 MB",
      description: "Create custom textures and skins for the game.",
    },
    {
      name: "Server Manager",
      version: "v3.0.0",
      size: "10 MB",
      description: "Setup and manage your own IGI 2 multiplayer server.",
    },
  ];

  return (
    <div className="pt-24 pb-16 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Downloads</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Download the latest version of MPA Launcher and additional tools for IGI 2: Covert Strike.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-block p-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <ToggleGroup type="single" value={activeTab} onValueChange={(value) => value && setActiveTab(value)}>
              <ToggleGroupItem 
                value="launcher"
                className={`px-8 py-3 rounded-full text-base font-medium transition-all ${
                  activeTab === "launcher" 
                    ? "bg-neon-blue text-black shadow-[0_0_15px_rgba(0,191,255,0.5)]" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Launcher
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="tools"
                className={`px-8 py-3 rounded-full text-base font-medium transition-all ${
                  activeTab === "tools" 
                    ? "bg-neon-blue text-black shadow-[0_0_15px_rgba(0,191,255,0.5)]" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Tools
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        
        {activeTab === "launcher" && (
          <div className="space-y-6">
            {launcherVersions.map((launcher, index) => (
              <Card key={index} className={launcher.isLatest ? "neon-card border-neon-blue" : "neon-card"}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-white">
                      MPA Launcher {launcher.version}
                      {launcher.isLatest && (
                        <span className="ml-3 text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full">
                          Latest
                        </span>
                      )}
                    </CardTitle>
                    <div className="text-sm text-gray-400">
                      Released: {launcher.date}
                    </div>
                  </div>
                  <CardDescription className="text-gray-400">
                    {launcher.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Size: {launcher.size}
                  </div>
                  <Button 
                    className={launcher.isLatest ? "neon-button" : "bg-secondary hover:bg-secondary/80"}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        {activeTab === "tools" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="neon-card">
                <CardHeader>
                  <CardTitle className="text-lg text-white">
                    {tool.name}
                  </CardTitle>
                  <div className="text-xs text-gray-400">
                    Version: {tool.version}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">
                    {tool.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Size: {tool.size}
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-16">
          <Card className="neon-card p-6">
            <CardHeader>
              <CardTitle className="text-xl text-white text-center">System Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-neon-blue text-lg font-semibold mb-4">Minimum Requirements</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Operating System: Windows 7/8/10/11</li>
                    <li>• CPU: Intel Core i3 2.0 GHz or equivalent</li>
                    <li>• RAM: 2 GB</li>
                    <li>• GPU: DirectX 9 compatible</li>
                    <li>• Storage: 1 GB available space</li>
                    <li>• Network: Broadband Internet connection</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-neon-blue text-lg font-semibold mb-4">Recommended Requirements</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Operating System: Windows 10/11</li>
                    <li>• CPU: Intel Core i5 or equivalent</li>
                    <li>• RAM: 4 GB</li>
                    <li>• GPU: DirectX 11 compatible</li>
                    <li>• Storage: 2 GB available space</li>
                    <li>• Network: High-speed Internet connection</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
