
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GiftIdea } from '@/lib/types';
import { Heart } from 'lucide-react';

interface GiftRecommendationsProps {
  recommendations: GiftIdea[];
  isLoading: boolean;
}

const GiftRecommendations: React.FC<GiftRecommendationsProps> = ({ recommendations, isLoading }) => {
  if (isLoading) {
    return (
      <div className="py-10 text-center">
        <div className="inline-block animate-pulse-gentle">
          <span className="text-lg">Crafting perfect gift ideas...</span>
        </div>
      </div>
    );
  }
  
  if (recommendations.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-muted-foreground">
          Select an occasion, vibe, and personalization options to see gift recommendations
        </p>
      </div>
    );
  }
  
  return (
    <div className="animate-reveal space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
          Your Curated Gift Inspirations
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
  
  return (
    <Card className="overflow-hidden card-hover border h-full">
      {gift.imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={gift.imageUrl} 
            alt={gift.name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105" 
          />
          <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-pink-500" />
          </button>
        </div>
      )}
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-bold text-lg">{gift.name}</h3>
          <div className="text-sm text-muted-foreground">
            {formatPrice(gift.price.min, gift.price.max)}
          </div>
        </div>
        
        <p className="text-sm">{gift.narrative}</p>
        
        <div className="pt-2 flex flex-wrap gap-1">
          {gift.unexpectedFactor > 70 && (
            <Badge variant="outline" className="bg-fun-light text-fun-dark">
              Unexpected Delight
            </Badge>
          )}
          {gift.traits.slice(0, 2).map((trait) => (
            <Badge key={trait} variant="secondary" className="text-xs">
              {trait.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GiftRecommendations;
