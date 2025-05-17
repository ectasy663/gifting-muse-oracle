
import { useState, useEffect } from 'react';
import { Gift, Sparkles } from 'lucide-react';

const GiftingHeader = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [sparklePosition, setSparklePosition] = useState({ x: 0, y: 0 });
  const [showSparkle, setShowSparkle] = useState(false);
  
  const toggleAnimation = () => {
    setIsAnimated(true);
    setShowSparkle(true);
    
    // Random position for sparkle effect
    setSparklePosition({
      x: Math.random() * 40 - 20,
      y: Math.random() * 40 - 20
    });
    
    // Reset animation after completion
    setTimeout(() => {
      setIsAnimated(false);
      setTimeout(() => setShowSparkle(false), 500);
    }, 2000);
  };
  
  // Add a subtle automatic animation effect on first load
  useEffect(() => {
    const timer = setTimeout(() => toggleAnimation(), 800);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <header className="relative py-6 md:py-10 overflow-hidden">
      <div className="container max-w-5xl relative">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={toggleAnimation}
          >
            <div className={`relative p-3 rounded-full bg-primary/10 transition-all duration-500 
              ${isAnimated ? 'animate-float scale-110 shadow-lg shadow-primary/20' : 'hover:scale-105'}`}
            >
              <Gift className={`h-6 w-6 text-primary transition-all duration-500 
                ${isAnimated ? 'rotate-12' : 'group-hover:scale-110'}`} 
              />
              
              {/* Magic sparkle effect */}
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
                </div>
              )}
            </div>
            
            <div className="transition duration-500">
              <h1 className="text-2xl font-bold tracking-tighter relative overflow-hidden">
                <span className="text-primary group-hover:underline decoration-2 underline-offset-4 decoration-primary/30">
                  Sentient
                </span>{" "}
                <span className={`inline-block transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}`}>
                  Gifting Alchemist
                </span>
              </h1>
              
              {/* Subtle magical tagline with animation */}
              <p className={`text-sm text-muted-foreground mt-1 transition-all duration-700 ${isAnimated ? 'opacity-100' : 'opacity-70'}`}>
                ✨ <em>Transforming intentions into perfect gifts</em> ✨
              </p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className={`text-sm text-muted-foreground bg-muted/40 px-3 py-1.5 rounded-md transition-all duration-500 ${isAnimated ? 'shadow-sm' : ''}`}>
              Crafting perfectly meaningful moments
            </div>
          </div>
        </div>
        
        {/* Decorative alchemist elements */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-70"></div>
      </div>
    </header>
  );
};

export default GiftingHeader;
