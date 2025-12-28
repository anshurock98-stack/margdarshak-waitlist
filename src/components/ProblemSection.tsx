import { Clock, Car, Battery, Repeat } from "lucide-react";

const ProblemSection = () => {
  const painPoints = [
    {
      icon: Clock,
      text: "Leaving \"on time\" but still getting stuck",
    },
    {
      icon: Car,
      text: "Reaching home exhausted",
    },
    {
      icon: Battery,
      text: "No energy or time left for yourself",
    },
    {
      icon: Repeat,
      text: "Repeating this cycle every single day",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The daily struggle you know too well
          </h2>
          <p className="text-muted-foreground text-lg">
            Sound familiar?
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-5 md:p-6 bg-card rounded-xl border border-border shadow-sm animate-fade-in-delay-${index + 1}`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground text-base md:text-lg font-medium">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block px-6 py-4 bg-gold/10 rounded-xl border border-gold/30">
            <p className="text-lg md:text-xl font-semibold text-foreground">
              Traffic isn't random.{" "}
              <span className="text-gold">Bad timing is.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
