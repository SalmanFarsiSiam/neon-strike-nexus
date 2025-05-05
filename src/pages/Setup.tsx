
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SetupPage = () => {
  const setupSteps = [
    {
      step: 1,
      title: "Download the MPA Launcher",
      description: "Download the latest version of the MPA Launcher from the Downloads page.",
      image: "https://via.placeholder.com/600x340",
    },
    {
      step: 2,
      title: "Install the Launcher",
      description: "Run the installer and follow the on-screen instructions. Choose your installation directory and wait for the installation to complete.",
      image: "https://via.placeholder.com/600x340",
    },
    {
      step: 3,
      title: "Launch the Application",
      description: "Open MPA Launcher from your desktop or start menu. You may need to run as administrator for the first time.",
      image: "https://via.placeholder.com/600x340",
    },
    {
      step: 4,
      title: "Configure Your Settings",
      description: "Set your in-game name, graphics settings, and other preferences from the launcher settings.",
      image: "https://via.placeholder.com/600x340",
    },
    {
      step: 5,
      title: "Join a Server",
      description: "Select a server from the server browser and click Join to start playing!",
      image: "https://via.placeholder.com/600x340",
    },
  ];

  return (
    <div className="pt-24 pb-16 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">How To Setup</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow these simple steps to get started with MPA Launcher and join the IGI 2 multiplayer community.
          </p>
        </div>

        <div className="space-y-16 mt-12">
          {setupSteps.map((step, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <Card className="neon-card overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={`Step ${step.step}`} 
                    className="w-full h-full object-cover aspect-video"
                  />
                </Card>
              </div>
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-blue/20 text-neon-blue font-bold">
                    {step.step}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
              {index < setupSteps.length - 1 && (
                <div className="col-span-1 lg:col-span-2 flex justify-center">
                  <div className="w-1 h-12 bg-neon-blue/20"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="neon-card p-6">
            <CardHeader>
              <CardTitle className="text-xl text-white">Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400 mb-4">
                If you're experiencing any issues with the setup process, check our FAQ page or join our Discord community for real-time support.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/faq" className="neon-button">View FAQ</a>
                <a href="#" className="neon-button">Join Discord</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SetupPage;
