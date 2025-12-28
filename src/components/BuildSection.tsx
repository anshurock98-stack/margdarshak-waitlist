import { Construction, Shield, Clock } from "lucide-react";

const BuildSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container max-w-3xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in">
            <Construction className="w-4 h-4" />
            In Development
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 animate-fade-in">
            Currently Under Development
          </h2>
          
          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed animate-fade-in-delay-1">
            <p>
              We're analysing large-scale traffic data and designing a system that can 
              reliably suggest the best time to leave — morning and evening.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-6">
              <div className="flex items-center gap-3 px-5 py-3 bg-card rounded-xl border border-border">
                <Shield className="w-5 h-5 text-gold" />
                <span className="text-foreground font-medium">We're not rushing this.</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 bg-card rounded-xl border border-border">
                <Clock className="w-5 h-5 text-gold" />
                <span className="text-foreground font-medium">We're building it right.</span>
              </div>
            </div>
            
            <p className="text-foreground font-medium">
              If this resonates with you, join the early list.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
