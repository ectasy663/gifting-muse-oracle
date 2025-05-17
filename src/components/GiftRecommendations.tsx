
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GiftIdea } from '@/lib/types';
import { Heart, Sparkles } from 'lucide-react';

interface GiftRecommendationsProps {
  recommendations: GiftIdea[];
  isLoading: boolean;
}

const GiftRecommendations: React.FC<GiftRecommendationsProps> = ({ recommendations, isLoading }) => {
  if (isLoading) {
    return (
      <div className="py-16 text-center">
        <div className="inline-block relative">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="animate-pulse-gentle w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10"></div>
              <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-primary animate-pulse" />
            </div>
            <span className="text-lg font-medium text-foreground">Crafting perfect gift ideas...</span>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-5 w-10 h-10 rounded-full bg-primary/10 animate-pulse-gentle opacity-70 blur-md"></div>
        <div className="absolute top-1/3 right-5 w-8 h-8 rounded-full bg-primary/20 animate-pulse-gentle opacity-80 blur-md"></div>
      </div>
    );
  }
  
  if (recommendations.length === 0) {
    return (
      <div className="py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50"></div>
        
        <div className="relative z-10">
          <div className="mb-4 opacity-80">
            <div className="w-16 h-16 mx-auto rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary/50" />
            </div>
          </div>
          
          <p className="text-muted-foreground max-w-sm mx-auto">
            Select an occasion, vibe, and personalization options to see gift recommendations
          </p>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
    );
  }
  
  return (
    <div className="animate-reveal space-y-8">
      <div className="space-y-2 relative">
        <div className="absolute -left-4 top-1/2 w-1.5 h-12 bg-primary/30 rounded-r-md transform -translate-y-1/2"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          <span className="relative">
            Your Curated Gift Inspirations
            <span className="absolute -bottom-1.5 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-transparent"></span>
          </span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left">
          Thoughtfully selected based on your preferences
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {recommendations.map((gift) => (
          <GiftCard key={gift.id} gift={gift} />
        ))}
      </div>
    </div>
  );
};

interface GiftCardProps {
  gift: GiftIdea;
}

const GiftCard: React.FC<GiftCardProps> = ({ gift }) => {
  const formatPrice = (min: number, max: number) => {
    if (min === max) return `$${min}`;
    return `$${min} - $${max}`;
  };
  
  // Determine if this is a highly unexpected gift
  const isUnexpected = gift.unexpectedFactor > 70;
  
  return (
    <Card className="overflow-hidden card-hover border h-full relative group shadow-md transition-all duration-500 hover:shadow-lg">
      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 z-10 bg-gradient-to-br from-white via-transparent to-transparent transition-opacity duration-700"></div>
      
      {gift.imageUrl && (
        <div className="relative h-52 w-full overflow-hidden">
          <img 
            src={gift.imageUrl} 
            alt={gift.name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
          />
          <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors shadow-sm hover:shadow z-10">
            <Heart className="h-4 w-4 text-pink-500" />
          </button>
          
          {/* Unexpected badge */}
          {isUnexpected && (
            <div className="absolute top-3 left-3 z-10">
              <Badge variant="outline" className="bg-fun-light text-fun-dark border-fun-dark/20 font-medium shadow-sm px-3 py-1 flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                Unexpected Delight
              </Badge>
            </div>
          )}
        </div>
      )}
      
      <CardContent className="p-5 space-y-3 relative">
        {/* Subtle decorative element */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <div className="space-y-1">
          <h3 className="font-bold text-lg">{gift.name}</h3>
          <div className="text-sm text-muted-foreground flex items-center">
            <span className="font-medium">{formatPrice(gift.price.min, gift.price.max)}</span>
          </div>
        </div>
        
        <p className="text-sm">{gift.narrative}</p>
        
        <div className="pt-3 flex flex-wrap gap-1.5">
          {gift.traits.slice(0, 2).map((trait) => (
            <Badge key={trait} variant="secondary" className="text-xs bg-primary/10 text-primary-foreground">
              {trait.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GiftRecommendations;
