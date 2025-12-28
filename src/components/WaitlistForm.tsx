import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ArrowRight, Share2, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return;
    }

    if (!whatsapp.trim() && !email.trim()) {
      toast({
        title: "Contact required",
        description: "Please enter either WhatsApp number or email.",
        variant: "destructive",
      });
      return;
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist_submissions')
        .insert({
          name: name.trim(),
          whatsapp: whatsapp.trim() || null,
          email: email.trim() || null,
        });

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error: any) {
      console.error("Waitlist submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoHome = () => {
    setIsSubmitted(false);
    setName("");
    setWhatsapp("");
    setEmail("");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Margdarshak - Beat Traffic by Timing It Right",
        text: "Check out Margdarshak - a smart system to help you save time on your daily commute!",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Share it with friends who hate traffic too.",
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-16 md:py-24 bg-primary">
        <div className="container max-w-2xl">
          <div className="text-center text-primary-foreground animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gold rounded-full mb-6">
              <CheckCircle2 className="w-10 h-10 text-foreground" />
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              You're on the list ✅
            </h2>
            
            <div className="space-y-4 text-primary-foreground/90 text-base md:text-lg mb-8">
              <p>Thanks for signing up.</p>
              <p>
                We'll notify you as soon as Margdarshak is ready to help you 
                save time every day.
              </p>
              <p className="text-gold font-medium">
                You're early — and that matters.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gold" 
                size="lg"
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="w-5 h-5" />
                Share with a friend
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleGoHome}
                className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-16 md:py-24 bg-primary">
      <div className="container max-w-xl">
        <div className="text-center text-primary-foreground mb-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Join the Early Access List
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Be the first to know when Margdarshak is ready.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in-delay-1">
          <div>
            <Input
              type="text"
              placeholder="What should we call you?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-primary-foreground border-0 text-foreground placeholder:text-muted-foreground h-14"
            />
          </div>

          <div>
            <Input
              type="tel"
              placeholder="WhatsApp number (for quick updates)"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="bg-primary-foreground border-0 text-foreground placeholder:text-muted-foreground h-14"
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email address (if you prefer email)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground border-0 text-foreground placeholder:text-muted-foreground h-14"
            />
          </div>

          <Button
            type="submit"
            variant="gold"
            size="xl"
            className="w-full gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin"></span>
                Joining...
              </>
            ) : (
              <>
                Notify Me
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>

          <p className="text-center text-primary-foreground/60 text-sm">
            We'll only notify you when Margdarshak is ready. No spam.
          </p>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
