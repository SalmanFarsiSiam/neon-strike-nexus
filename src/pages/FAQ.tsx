
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQPage = () => {
  const faqItems = [
    {
      question: "What is MPA Launcher?",
      answer: "MPA Launcher is a community-developed launcher for IGI 2: Covert Strike that enhances the multiplayer experience. It includes features like improved graphics, custom maps, dedicated servers, and a modern user interface."
    },
    {
      question: "Do I need to own IGI 2 to use MPA Launcher?",
      answer: "Yes, you need to own a legitimate copy of IGI 2: Covert Strike to use MPA Launcher. The launcher enhances the existing game but doesn't replace it."
    },
    {
      question: "How do I install MPA Launcher?",
      answer: "You can download the latest version of MPA Launcher from our Downloads page. Simply run the installer and follow the on-screen instructions. The setup process is straightforward and should take only a few minutes."
    },
    {
      question: "Why can't I connect to servers?",
      answer: "There could be several reasons: 1) Check your internet connection. 2) Make sure your firewall isn't blocking the launcher. 3) Verify that the server you're trying to connect to is online. 4) Try restarting the launcher. If problems persist, visit our Discord for help."
    },
    {
      question: "How do I create or install custom maps?",
      answer: "You can download custom maps from our Maps page. To install them, place the downloaded files in the 'maps' folder in your MPA Launcher installation directory. To create maps, download our Map Editor tool from the Downloads page."
    },
    {
      question: "Does MPA Launcher support mods?",
      answer: "Yes, MPA Launcher supports a variety of mods. You can find community-created mods on our Discord server or forums. To install mods, follow the instructions provided with each mod."
    },
    {
      question: "Is MPA Launcher safe to use?",
      answer: "Yes, MPA Launcher is safe to use. Our code is open source and regularly reviewed by the community. We don't include any malware, adware, or unwanted software in our launcher."
    },
    {
      question: "How can I report bugs or suggest features?",
      answer: "You can report bugs or suggest features on our Discord server or through our GitHub repository. We appreciate all feedback that helps us improve MPA Launcher."
    },
    {
      question: "Can I host my own server?",
      answer: "Yes, you can host your own server using our Server Manager tool, available on the Downloads page. The tool provides a user-friendly interface for configuring and managing your server."
    },
    {
      question: "What languages does MPA Launcher support?",
      answer: "Currently, MPA Launcher supports English, Spanish, Russian, and German. We're working on adding more languages in future updates."
    }
  ];

  const categories = [
    { name: "Installation", questions: [0, 1, 2] },
    { name: "Gameplay", questions: [3, 4, 5] },
    { name: "Technical", questions: [6, 7, 8, 9] }
  ];

  return (
    <div className="pt-24 pb-16 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about MPA Launcher and IGI 2 multiplayer gameplay.
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">{category.name}</h2>
            <Card className="neon-card overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((questionIndex) => (
                  <AccordionItem key={questionIndex} value={`item-${questionIndex}`}>
                    <AccordionTrigger className="px-6 py-4 hover:bg-white/5 text-left text-white">
                      {faqItems[questionIndex].question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-400">
                      {faqItems[questionIndex].answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        ))}

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-400 mb-8">
            If you couldn't find the answer to your question, join our Discord community for real-time support.
          </p>
          <a href="#" className="neon-button inline-block">
            Join Our Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
