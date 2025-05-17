
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
    const newSparkles = Array(12).fill(0).map(() => ({
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      size: Math.random() * 0.8 + 0.4, // Size between 0.4 and 1.2
      delay: Math.random() * 800 // Random delay for each sparkle
    }));
    
    setSparkleCount(newSparkles);
    
    // Random position for main sparkle effect
    setSparklePosition({
      x: Math.random() * 60 - 30,
      y: Math.random() * 60 - 30
    });
    
    // Reset animation after completion
    setTimeout(() => {
      setIsAnimated(false);
      setTimeout(() => {
        setShowSparkle(false);
        setSparkleCount([]);
      }, 700);
    }, 2200);
  };
  
  // Add a subtle automatic animation effect on first load
  useEffect(() => {
    const timer = setTimeout(() => toggleAnimation(), 800);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <header className="relative py-8 md:py-12 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 animated-gradient"></div>
      
      {/* Ornamental elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      {/* Decorative circles in background */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-80"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-70"></div>
      
      {/* Magical sparkle burst elements */}
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-lg"></div>
      
      <div className="container max-w-5xl relative">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={toggleAnimation}
          >
            <div className={`relative p-4 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 transition-all duration-500 shadow-lg soft-glow
              ${isAnimated ? 'animate-float scale-110 shadow-primary/30' : 'hover:scale-105'}`}
            >
              <Gift className={`h-7 w-7 text-primary transition-all duration-500 
                ${isAnimated ? 'rotate-12' : 'group-hover:scale-110'}`} 
              />
              
              {/* Enhanced magic sparkle effect with multiple sparkles */}
              {showSparkle && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles 
                    className={`h-5 w-5 text-primary animate-pulse absolute`}
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
              <h1 className="text-2xl md:text-3xl font-bold tracking-tighter relative overflow-hidden">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent group-hover:underline decoration-2 underline-offset-4 decoration-primary/30">
                  Sentient
                </span>{" "}
                <span className={`inline-block transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}`}>
                  Gifting Alchemist
                </span>
              </h1>
              
              {/* Enhanced magical tagline with animation and gradient */}
              <p className={`text-sm text-muted-foreground mt-2 transition-all duration-700 ${isAnimated ? 'opacity-100' : 'opacity-80'}`}>
                <span className="bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90 bg-clip-text text-transparent">
                  ✨ <em>Transforming intentions into perfect gifts</em> ✨
                </span>
              </p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className={`text-sm bg-gradient-to-r from-accent/70 via-accent/30 to-accent/70 px-4 py-2 rounded-md transition-all duration-500 shadow-md border border-primary/10 ${isAnimated ? 'shadow-primary/20' : ''}`}>
              Crafting perfectly meaningful moments
            </div>
          </div>
        </div>
        
        {/* Decorative alchemist elements */}
        <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-90"></div>
        
        {/* Additional magical elements */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-52 h-8 bg-gradient-to-r from-transparent via-primary/15 to-transparent blur-md"></div>
      </div>
    </header>
  );
};

export default GiftingHeader;
