
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
    <div className={`min-h-screen ${theme}-theme transition-colors duration-500`}>
      <GiftingHeader />
      
      <main className="container max-w-5xl pb-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Discover the Perfect Gift
          </h1>
          <p className="text-center text-muted-foreground mt-2 max-w-xl mx-auto">
            Our Sentient Gifting Alchemist helps you find uniquely meaningful gifts 
            tailored to your specific occasion and recipient.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card>
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
                    <Button onClick={generateRecommendations}>
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
