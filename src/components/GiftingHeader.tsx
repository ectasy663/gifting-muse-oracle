
import { useState } from 'react';
import { Gift } from 'lucide-react';

const GiftingHeader = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  const toggleAnimation = () => {
    setIsAnimated(true);
    setTimeout(() => setIsAnimated(false), 2000);
  };
  
  return (
    <header className="relative py-6 md:py-10">
      <div className="container max-w-5xl">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={toggleAnimation}
          >
            <div className={`p-2 rounded-full bg-primary/10 ${isAnimated ? 'animate-float' : ''}`}>
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold tracking-tighter">
              <span className="text-primary">Sentient</span> Gifting Alchemist
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="text-sm text-muted-foreground">
              Crafting perfectly meaningful moments
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GiftingHeader;
