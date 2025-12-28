const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="text-foreground font-semibold">Margdarshak</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Margdarshak. Right Time. Right Move.
          </p>
          
          <p className="text-muted-foreground text-sm">
            Made with purpose 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
