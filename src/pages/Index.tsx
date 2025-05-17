
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import GiftingHeader from '@/components/GiftingHeader';
import OccasionSelector from '@/components/OccasionSelector';
import PersonalizationPanel from '@/components/PersonalizationPanel';
import GiftRecommendations from '@/components/GiftRecommendations';
import { getRecommendations } from '@/lib/data';
import { GiftIdea, OccasionVibe } from '@/lib/types';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [theme, setTheme] = useState<string>('universal');
  const { toast } = useToast();
  
  // State for selections
  const [selectedOccasion, setSelectedOccasion] = useState<string>('');
  const [selectedVibe, setSelectedVibe] = useState<OccasionVibe | ''>('');
  const [selectedIntentions, setSelectedIntentions] = useState<string[]>([]);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [unexpectedFactor, setUnexpectedFactor] = useState<number>(50);
  
  // State for recommendations
  const [recommendations, setRecommendations] = useState<GiftIdea[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [lastSearchParams, setLastSearchParams] = useState<string>('');
  
  // Handle occasion selection
  const handleSelectOccasion = (id: string) => {
    setSelectedOccasion(id);
    
    toast({
      title: "Occasion selected",
      description: "Now tell us about the vibe of this occasion.",
    });
  };
  
  // Handle vibe selection
  const handleSelectVibe = (vibe: OccasionVibe) => {
    setSelectedVibe(vibe);
    setTheme(vibe || 'universal');
    
    toast({
      title: `${vibe.charAt(0).toUpperCase() + vibe.slice(1)} vibe selected`,
      description: "Now personalize your gift recommendations.",
    });
  };
  
  // Generate recommendations
  const generateRecommendations = () => {
    if (!selectedOccasion || !selectedVibe) {
      toast({
        title: "Missing information",
        description: "Please select both an occasion and a vibe.",
        variant: "destructive"
      });
      return;
    }
    
    // Check if any intentions or traits are selected
    if (selectedIntentions.length === 0 || selectedTraits.length === 0) {
      toast({
        title: "More information needed",
        description: "Please select at least one intention and one recipient trait.",
        variant: "destructive"
      });
      return;
    }
    
    // Create a search param string to avoid unnecessary recalculation
    const searchParams = `${selectedOccasion}-${selectedVibe}-${selectedIntentions.join(',')}-${selectedTraits.join(',')}-${unexpectedFactor}`;
    
    // Only regenerate if parameters changed
    if (searchParams === lastSearchParams) return;
    
    setIsLoading(true);
    
    // Simulate loading time (in a real app, this would be a real API call)
    setTimeout(() => {
      const newRecommendations = getRecommendations(
        selectedOccasion,
        selectedVibe,
        selectedIntentions,
        selectedTraits,
        unexpectedFactor,
        3
      );
      
      setRecommendations(newRecommendations);
      setLastSearchParams(searchParams);
      setIsLoading(false);
      
      toast({
        title: "Gift ideas crafted for you",
        description: `Found ${newRecommendations.length} perfect gift suggestions.`,
      });
    }, 1500);
  };
  
  // Reset all selections
  const resetSelections = () => {
    setSelectedOccasion('');
    setSelectedVibe('');
    setSelectedIntentions([]);
    setSelectedTraits([]);
    setUnexpectedFactor(50);
    setRecommendations([]);
    setLastSearchParams('');
    setTheme('universal');
  };
  
  return (
    <div className={`min-h-screen pb-16 ${theme}-theme transition-colors duration-500`}>
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/80"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-2xl"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" 
          style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")'}}
        ></div>
      </div>

      <GiftingHeader />
      
      <main className="container max-w-5xl py-8 relative">
        <div className="mb-10 relative">
          <div className="absolute -top-10 left-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-x-1/2"></div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto max-w-2xl">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Discover the Perfect Gift
            </span>
          </h1>
          
          <p className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">
            Our Sentient Gifting Alchemist helps you find uniquely meaningful gifts 
            tailored to your specific occasion and recipient.
          </p>
          
          <div className="absolute -bottom-6 left-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transform -translate-x-1/2"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="overflow-hidden border border-primary/10 shadow-lg card-gradient">
            <CardContent className="p-6">
              <OccasionSelector 
                selectedOccasion={selectedOccasion}
                selectedVibe={selectedVibe}
                onSelectOccasion={handleSelectOccasion}
                onSelectVibe={handleSelectVibe}
              />
              
              {selectedVibe && (
                <>
                  <Separator className="my-8" />
                  
                  <PersonalizationPanel 
                    selectedIntentions={selectedIntentions}
                    selectedTraits={selectedTraits}
                    unexpectedFactor={unexpectedFactor}
                    onIntentionChange={setSelectedIntentions}
                    onTraitChange={setSelectedTraits}
                    onUnexpectedFactorChange={setUnexpectedFactor}
                  />
                  
                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={resetSelections}>
                      Start Over
                    </Button>
                    <Button 
                      onClick={generateRecommendations} 
                      className="bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Find Perfect Gifts
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <GiftRecommendations 
              recommendations={recommendations}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
