
import { useState, useEffect } from 'react';
import { Gift, Sparkles } from 'lucide-react';

const GiftingHeader = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 });
  const [showSparkle, setShowSparkle] = useState(false);
  const [sparkleCount, setSparkleCount] = useState<Array<{x: number, y: number, size: number, delay: number}>>([]);
  
  const toggleAnimation = () => {
    setIsAnimated(true);
    setShowSparkle(true);
    
    // Generate multiple sparkles for enhanced effect
    const newSparkles = Array(5).fill(0).map(() => ({
      x: Math.random() * 80 - 40,
      y: Math.random() * 80 - 40,
      size: Math.random() * 0.6 + 0.4, // Size between 0.4 and 1
      delay: Math.random() * 500 // Random delay for each sparkle
    }));
    
    setSparkleCount(newSparkles);
    
    // Random position for main sparkle effect
    setSparklePosition({
      x: Math.random() * 40 - 20,
      y: Math.random() * 40 - 20
    });
    
    // Reset animation after completion
    setTimeout(() => {
      setIsAnimated(false);
      setTimeout(() => {
        setShowSparkle(false);
        setSparkleCount([]);
      }, 500);
    }, 2000);
  };
  
  // Add a subtle automatic animation effect on first load
  useEffect(() => {
    const timer = setTimeout(() => toggleAnimation(), 800);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <header className="relative py-6 md:py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-primary/5 animate-shimmer bg-[length:200%_100%]"></div>
      
      {/* Decorative circles in background */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-70"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/10 to-transparent opacity-60"></div>
      
      <div className="container max-w-5xl relative">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={toggleAnimation}
          >
            <div className={`relative p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-500 
              ${isAnimated ? 'animate-float scale-110 shadow-lg shadow-primary/20' : 'hover:scale-105'}`}
            >
              <Gift className={`h-6 w-6 text-primary transition-all duration-500 
                ${isAnimated ? 'rotate-12' : 'group-hover:scale-110'}`} 
              />
              
              {/* Magic sparkle effect - enhanced with multiple sparkles */}
              {showSparkle && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles 
                    className={`h-4 w-4 text-primary animate-pulse absolute`}
                    style={{
                      transform: `translate(${sparklePosition.x}px, ${sparklePosition.y}px)`,
                      opacity: isAnimated ? 1 : 0,
                      transition: 'all 0.5s ease'
                    }}
                  />
                  
                  {/* Multiple sparkles for enhanced magical effect */}
                  {sparkleCount.map((sparkle, index) => (
                    <Sparkles 
                      key={index}
                      className="absolute text-primary animate-sparkle"
                      style={{
                        height: `${sparkle.size * 16}px`, 
                        width: `${sparkle.size * 16}px`,
                        transform: `translate(${sparkle.x}px, ${sparkle.y}px)`,
                        animationDelay: `${sparkle.delay}ms`,
                        opacity: 0
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <div className="transition duration-500">
              <h1 className="text-2xl font-bold tracking-tighter relative overflow-hidden">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:underline decoration-2 underline-offset-4 decoration-primary/30">
                  Sentient
                </span>{" "}
                <span className={`inline-block transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}`}>
                  Gifting Alchemist
                </span>
              </h1>
              
              {/* Subtle magical tagline with animation and gradient */}
              <p className={`text-sm text-muted-foreground mt-1 transition-all duration-700 ${isAnimated ? 'opacity-100' : 'opacity-70'}`}>
                <span className="bg-gradient-to-r from-primary/80 via-primary/60 to-primary/70 bg-clip-text text-transparent">
                  ✨ <em>Transforming intentions into perfect gifts</em> ✨
                </span>
              </p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className={`text-sm bg-gradient-to-r from-muted/60 via-muted to-muted/60 px-3 py-1.5 rounded-md transition-all duration-500 shadow-sm border border-primary/10 ${isAnimated ? 'shadow-primary/10' : ''}`}>
              Crafting perfectly meaningful moments
            </div>
          </div>
        </div>
        
        {/* Decorative alchemist elements */}
        <div className="absolute -bottom-6 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-80"></div>
        
        {/* Additional magical pattern */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-md"></div>
      </div>
    </header>
  );
};

export default GiftingHeader;
