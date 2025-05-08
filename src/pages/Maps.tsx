
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, Search, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const MapsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const maps = [
    {
      id: 1,
      name: "Desert Storm",
      image: "https://via.placeholder.com/400x225",
      creator: "MapMaster",
      downloads: 12500,
      rating: 4.8,
      category: "combat",
      description: "A large desert map with multiple outposts and underground bunkers.",
    },
    {
      id: 2,
      name: "Arctic Base",
      image: "https://via.placeholder.com/400x225",
      creator: "FrostByte",
      downloads: 9800,
      rating: 4.6,
      category: "stealth",
      description: "A snowy research facility with tight corridors and open outdoor areas.",
    },
    {
      id: 3,
      name: "Urban Warfare",
      image: "https://via.placeholder.com/400x225",
      creator: "CityBuilder",
      downloads: 15200,
      rating: 4.9,
      category: "combat",
      description: "An abandoned city with multiple tall buildings perfect for snipers.",
    },
    {
      id: 4,
      name: "Jungle Ops",
      image: "https://via.placeholder.com/400x225",
      creator: "GreenZone",
      downloads: 8700,
      rating: 4.5,
      category: "stealth",
      description: "Dense jungle environment with hidden paths and enemy encampments.",
    },
    {
      id: 5,
      name: "Carrier Assault",
      image: "https://via.placeholder.com/400x225",
      creator: "NavySeals",
      downloads: 11300,
      rating: 4.7,
      category: "combat",
      description: "Aircraft carrier map with multiple decks and combat zones.",
    },
    {
      id: 6,
      name: "Mountain Pass",
      image: "https://via.placeholder.com/400x225",
      creator: "AlpineRanger",
      downloads: 7600,
      rating: 4.4,
      category: "survival",
      description: "Treacherous mountain terrain with limited visibility and sniper positions.",
    },
  ];

  const filteredMaps = maps.filter(map => {
    const matchesSearch = map.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         map.creator.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         map.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "all" || map.category === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-24 pb-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Custom Maps</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse and download custom maps created by the MPA community for IGI 2: Covert Strike multiplayer.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neon-blue" />
            </div>
            <Input
              type="text"
              placeholder="Search maps by name, creator or description..."
              className="pl-10 bg-transparent border-neon-blue border-2 rounded-full shadow-[0_0_15px_rgba(0,191,255,0.3)] focus:shadow-[0_0_25px_rgba(0,191,255,0.5)] transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            <Button 
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              className={activeFilter === "all" ? "bg-neon-blue hover:bg-neon-blue/80" : ""}
            >
              All
            </Button>
            <Button 
              variant={activeFilter === "combat" ? "default" : "outline"}
              onClick={() => setActiveFilter("combat")}
              className={activeFilter === "combat" ? "bg-neon-blue hover:bg-neon-blue/80" : ""}
            >
              Combat
            </Button>
            <Button 
              variant={activeFilter === "stealth" ? "default" : "outline"}
              onClick={() => setActiveFilter("stealth")}
              className={activeFilter === "stealth" ? "bg-neon-blue hover:bg-neon-blue/80" : ""}
            >
              Stealth
            </Button>
            <Button 
              variant={activeFilter === "survival" ? "default" : "outline"}
              onClick={() => setActiveFilter("survival")}
              className={activeFilter === "survival" ? "bg-neon-blue hover:bg-neon-blue/80" : ""}
            >
              Survival
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaps.map((map) => (
            <Card key={map.id} className="neon-card overflow-hidden">
              <div className="relative">
                <img 
                  src={map.image} 
                  alt={map.name}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute top-2 right-2 bg-neon-blue/90 text-navy px-2 py-1 rounded text-xs">
                  {map.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-white">{map.name}</CardTitle>
                <div className="text-gray-400 text-sm">Created by {map.creator}</div>
              </CardHeader>
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Download className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-400">{map.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-neon-blue mr-1" />
                    <span className="text-sm text-gray-400">{map.rating}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>{map.name}</DialogTitle>
                        <DialogDescription>Created by {map.creator}</DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <img 
                          src={map.image} 
                          alt={map.name}
                          className="w-full aspect-video object-cover rounded-md mb-4"
                        />
                        <p className="text-gray-400">{map.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <Download className="h-4 w-4 text-gray-400 mr-1" />
                              <span className="text-sm text-gray-400">{map.downloads.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-neon-blue mr-1" />
                              <span className="text-sm text-gray-400">{map.rating}</span>
                            </div>
                          </div>
                          <Button className="neon-button">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button className="neon-button" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredMaps.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-white mb-2">No Maps Found</h3>
            <p className="text-gray-400">
              No maps match your current search criteria. Try adjusting your filters.
            </p>
          </div>
        )}

        {filteredMaps.length > 0 && (
          <div className="mt-12 text-center">
            <Button className="neon-button">
              Load More Maps
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapsPage;
