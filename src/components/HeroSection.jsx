import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Profile Image */}
          <div className="flex justify-center mb-8 opacity-0 animate-fade-in">
            <div className="relative">
              <img
                src="/profile.png"
                alt="Hardik Singh"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              {" "}
              HARDIK SINGH
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
              {" "}
              
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
             I'm a passionate Web Developer and AIML enthusiast who loves turning ideas into interactive digital experiences. 
             I enjoy building innovative projects that blend creativity with technology. Constantly exploring new tools and concepts,
              I strive to push the limits of what's possible on the web.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-5">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};