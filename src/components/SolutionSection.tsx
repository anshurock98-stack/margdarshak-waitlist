import { BarChart3, Route, Clock, Brain } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Analyze patterns",
      description: "Study long-term traffic patterns across your city",
    },
    {
      icon: Route,
      title: "Understand behaviour",
      description: "Learn your daily commute and preferences",
    },
    {
      icon: Clock,
      title: "Identify windows",
      description: "Find the optimal time windows to leave",
    },
    {
      icon: Brain,
      title: "Move smarter",
      description: "Help you move smarter, not harder",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full text-gold text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
            Our Approach
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Margdarshak will do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A smarter way to plan your commute
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block px-8 py-5 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-lg md:text-xl font-medium text-foreground">
              We're building a system that helps you{" "}
              <span className="text-primary font-semibold">beat traffic</span> —{" "}
              by timing it right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
