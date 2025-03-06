
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Add a subtle noise texture
  const noiseStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    opacity: 0.015,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
  } as React.CSSProperties;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background text-foreground">
      {/* Noise texture overlay */}
      <div style={noiseStyle}></div>
      
      {/* Gradient background elements */}
      <div className="fixed top-0 -left-96 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl opacity-30"></div>
      <div className="fixed bottom-0 -right-96 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl opacity-30"></div>
      
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="text-9xl font-serif font-bold mb-4 text-accent">404</div>
        <h1 className="text-4xl font-serif font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="btn-primary flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
