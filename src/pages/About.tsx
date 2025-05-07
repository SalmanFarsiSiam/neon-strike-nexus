
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Project Lead",
      image: "https://via.placeholder.com/200",
      description: "Founder of MPA Launcher and lead developer since 2018."
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      image: "https://via.placeholder.com/200",
      description: "Responsible for the sleek interface and user experience."
    },
    {
      name: "Michael Rodriguez",
      role: "Server Infrastructure",
      image: "https://via.placeholder.com/200",
      description: "Manages the backend servers and network infrastructure."
    },
    {
      name: "Emma Watson",
      role: "Community Manager",
      image: "https://via.placeholder.com/200",
      description: "Keeps the community engaged and handles support."
    },
  ];

  const milestones = [
    {
      year: 2018,
      title: "Project Started",
      description: "MPA Launcher began as a small mod for IGI 2 multiplayer."
    },
    {
      year: 2019,
      title: "First Public Release",
      description: "Version 1.0 was released to the public, gaining immediate traction."
    },
    {
      year: 2020,
      title: "Custom Maps Support",
      description: "Added support for community-created maps and mods."
    },
    {
      year: 2021,
      title: "Server Infrastructure Upgrade",
      description: "Expanded server capacity and improved connectivity."
    },
    {
      year: 2022,
      title: "UI Overhaul",
      description: "Complete redesign of the user interface for better experience."
    },
    {
      year: 2023,
      title: "10,000 Active Players",
      description: "Milestone of 10,000 monthly active players achieved."
    },
    {
      year: 2024,
      title: "Integration with Modern Tools",
      description: "Added support for Discord integration and achievements."
    },
    {
      year: 2025,
      title: "Version 9.3 Release",
      description: "Latest major update with significant performance improvements."
    },
  ];

  return (
    <div className="pt-24 pb-16 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About MPA Launcher</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn more about our team and the history behind MPA Launcher for IGI 2: Covert Strike.
          </p>
        </div>

        <section className="mb-16">
          <div className="bg-navy-light/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-neon-blue/40 hover:shadow-[0_0_15px_rgba(0,191,255,0.3)] transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 mb-6">
              MPA Launcher was created with a simple mission: to breathe new life into IGI 2: Covert Strike multiplayer. We believe that classic games deserve to live on, especially when they offer unique gameplay experiences that modern games often lack. Our team is dedicated to preserving and enhancing the IGI 2 multiplayer experience for both veterans and newcomers alike.
            </p>
            <p className="text-gray-400">
              We are committed to maintaining an active, friendly, and supportive community where players can enjoy competitive gameplay, share custom content, and connect with fellow fans of this beloved classic. Through continuous updates and improvements to MPA Launcher, we aim to ensure that IGI 2 multiplayer remains playable and enjoyable for years to come.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="neon-card overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover"
                />
                <CardHeader className="pt-4 pb-2">
                  <CardTitle className="text-lg text-white">{member.name}</CardTitle>
                  <div className="text-neon-blue text-sm font-medium">{member.role}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-sm">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Journey</h2>
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neon-blue/20 z-0"></div>
              <div className="space-y-12 relative z-10">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-8 items-center">
                    <div 
                      className={`w-1/2 flex ${
                        index % 2 === 0 ? 'justify-end mr-8' : 'order-3 justify-start ml-8'
                      }`}
                    >
                      <Card className="neon-card max-w-sm">
                        <CardHeader>
                          <CardTitle className="text-white">{milestone.title}</CardTitle>
                          <CardDescription className="text-neon-blue">{milestone.year}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-400">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-neon-blue animate-pulse-neon"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <Card className="neon-card p-8 text-center">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Join Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 mb-6 max-w-2xl mx-auto">
                MPA Launcher is more than just software—it's a thriving community of IGI 2 enthusiasts. Join us on Discord to connect with other players, get support, and stay updated on the latest developments.
              </CardDescription>
              <a href="#" className="neon-button inline-block">
                Join Discord
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
