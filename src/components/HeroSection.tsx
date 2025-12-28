import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a2b4a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container max-w-4xl relative z-10 py-20 md:py-0">
        {/* Logo */}
        <div className="text-center mb-10 md:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl md:text-2xl">M</span>
            </div>
            <span className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Margdarshak
            </span>
          </div>
          <p className="text-gold text-sm md:text-base font-medium mt-2 tracking-wide">
            Right Time. Right Move.
          </p>
        </div>

        {/* Main headline */}
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight animate-fade-in">
            Still losing hours every week{" "}
            <span className="text-primary">in traffic?</span>
          </h1>

          <div className="space-y-3 animate-fade-in-delay-1">
            <p className="text-xl md:text-2xl text-foreground font-medium">
              You don't have a <span className="text-muted-foreground line-through">time</span> problem.
            </p>
            <p className="text-xl md:text-2xl text-foreground font-medium">
              You have a <span className="text-gold font-semibold">timing</span> problem.
            </p>
          </div>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Every day, commuters lose precious time on the road — 
            time that could be spent on health, family, or personal growth.
            <br className="hidden md:block" />
            <span className="text-foreground font-medium">Margdarshak is being built to fix this.</span>
          </p>

          <div className="pt-4 animate-fade-in-delay-3">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToWaitlist}
              className="animate-pulse-gold"
            >
              Get Notified When It's Ready
              <ArrowDown className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
