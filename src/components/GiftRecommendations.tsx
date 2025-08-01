
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
      <div className="space-y-4">
        <Card className="p-8 text-center border-dashed border-primary/30 bg-white/90 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="animate-pulse-gentle w-16 h-16 rounded-full bg-gradient-to-br from-primary/40 to-primary/20"></div>
              <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="space-y-2">
              <span className="text-lg font-bold text-foreground block">Crafting perfect gift ideas...</span>
              <span className="text-sm text-foreground/70 font-medium">This will just take a moment</span>
            </div>
          </div>
        </Card>
        
        {/* Loading skeleton cards */}
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden bg-white/90 backdrop-blur-sm">
            <div className="h-32 bg-gradient-to-br from-muted/60 to-muted/40 animate-pulse"></div>
            <CardContent className="p-4 space-y-3">
              <div className="h-4 bg-muted/60 rounded animate-pulse"></div>
              <div className="h-3 bg-muted/40 rounded w-1/2 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-3 bg-muted/40 rounded animate-pulse"></div>
                <div className="h-3 bg-muted/40 rounded w-3/4 animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  
  if (recommendations.length === 0) {
    return (
      <Card className="p-8 text-center border-dashed border-primary/30 bg-white/90 backdrop-blur-sm">
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center bg-primary/10">
            <Heart className="w-8 h-8 text-primary/60" />
          </div>
          
          <div className="space-y-2">
            <h3 className="font-bold text-foreground">Your Perfect Gifts Await</h3>
            <p className="text-foreground/70 text-sm max-w-xs mx-auto font-medium">
              Complete the questionnaire to discover personalized gift recommendations
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-2 text-xs text-foreground/60 pt-2 font-medium">
            <span>🎯</span>
            <span>Personalized</span>
            <span>•</span>
            <span>✨</span>
            <span>Curated</span>
            <span>•</span>
            <span>💝</span>
            <span>Perfect</span>
          </div>
        </div>
      </Card>
    );
  }
  
  return (
    <div className="space-y-6">
      {recommendations.map((gift, index) => (
        <GiftCard key={gift.id} gift={gift} index={index} />
      ))}
    </div>
  );
};

interface GiftCardProps {
  gift: GiftIdea;
  index: number;
}

const GiftCard: React.FC<GiftCardProps> = ({ gift, index }) => {
  const formatPrice = (min: number, max: number) => {
    if (min === max) return `$${min}`;
    return `$${min} - $${max}`;
  };
  
  // Determine if this is a highly unexpected gift
  const isUnexpected = gift.unexpectedFactor > 70;
  
  return (
    <Card className="overflow-hidden card-hover border h-full relative group shadow-lg transition-all duration-500 hover:shadow-xl animate-reveal bg-white/95 backdrop-blur-sm" 
          style={{ animationDelay: `${index * 200}ms` }}>
      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 z-10 bg-gradient-to-br from-white via-transparent to-transparent transition-opacity duration-700"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-5 h-full">
        {/* Image Section */}
        {gift.imageUrl && (
          <div className="relative sm:col-span-2 h-48 sm:h-full overflow-hidden">
            <img 
              src={gift.imageUrl} 
              alt={gift.name}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
            />
            <button 
              className="absolute top-3 right-3 p-2 bg-white/95 rounded-full hover:bg-white transition-colors shadow-sm hover:shadow z-10"
              aria-label="Add to favorites"
            >
              <Heart className="h-4 w-4 text-pink-500" />
            </button>
            
            {/* Unexpected badge */}
            {isUnexpected && (
              <div className="absolute top-3 left-3 z-10">
                <Badge variant="outline" className="bg-white/95 text-primary border-primary/30 font-semibold shadow-sm px-2 py-1 flex items-center gap-1 text-xs">
                  <Sparkles className="h-3 w-3" />
                  Surprise
                </Badge>
              </div>
            )}
            
            {/* Price overlay */}
            <div className="absolute bottom-3 left-3 z-10">
              <Badge className="bg-black/70 text-white border-0 font-semibold shadow-sm px-3 py-1">
                {formatPrice(gift.price.min, gift.price.max)}
              </Badge>
            </div>
          </div>
        )}
        
        {/* Content Section */}
        <CardContent className="sm:col-span-3 p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="font-bold text-xl leading-tight text-foreground">{gift.name}</h3>
              <p className="text-sm text-foreground/70 font-medium">{gift.description}</p>
            </div>
            
            <p className="text-sm leading-relaxed line-clamp-3 text-foreground/80">{gift.narrative}</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {gift.traits.slice(0, 3).map((trait) => (
                <Badge key={trait} variant="secondary" className="text-xs bg-primary/15 text-primary border-primary/30 font-medium">
                  {trait.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-foreground/60 font-medium">
                <span>Surprise Level:</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full ${
                        i < Math.ceil(gift.unexpectedFactor / 20) ? 'bg-primary' : 'bg-muted/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default GiftRecommendations;
