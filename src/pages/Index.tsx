
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
    <div className={`min-h-screen bg-gradient-to-br from-background via-accent/10 to-primary/10 transition-colors duration-500 relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/25 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-primary/25 rounded-full blur-2xl animate-float" style={{animationDelay: '6s'}}></div>
        
        {/* Gift box icons pattern */}
        <div className="absolute top-1/4 left-1/4 opacity-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary/40">
            <path d="M22 12v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7m20-4V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1m5-6 2 2m4-2L11 4M7 8h10" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        <div className="absolute top-3/4 right-1/3 opacity-10">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-primary/40">
            <path d="M22 12v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7m20-4V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1m5-6 2 2m4-2L11 4M7 8h10" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      <GiftingHeader />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container max-w-6xl pt-12 pb-8">
          <div className="text-center space-y-6 mb-16">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent animate-gradient-x">
                Discover the Perfect Gift
              </h1>
              <div className="absolute -top-2 -right-2 w-8 h-8 text-primary/60">
                ✨
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
              Our Sentient Gifting Alchemist helps you find uniquely meaningful gifts 
              tailored to your specific occasion and recipient. Let's create magic together.
            </p>
            
            <div className="flex justify-center items-center gap-2 text-sm text-foreground/70 font-medium">
              <span>🎁</span>
              <span>Personalized</span>
              <span>•</span>
              <span>✨</span>
              <span>Thoughtful</span>
              <span>•</span>
              <span>🎯</span>
              <span>Perfect Match</span>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="container max-w-7xl px-4 pb-20">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Panel - Gift Selection */}
            <div className="xl:col-span-2">
              <Card className="overflow-hidden border border-primary/30 shadow-2xl bg-white/95 backdrop-blur-sm magic-border h-fit">
                <CardContent className="p-8 lg:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-foreground">
                      <span className="text-2xl">🎯</span>
                      Let's Find Your Perfect Gift
                    </h2>
                    <p className="text-foreground/70 font-medium">
                      Answer a few questions to get personalized gift recommendations
                    </p>
                  </div>

                  <OccasionSelector 
                    selectedOccasion={selectedOccasion}
                    selectedVibe={selectedVibe}
                    onSelectOccasion={handleSelectOccasion}
                    onSelectVibe={handleSelectVibe}
                  />
                  
                  {selectedVibe && (
                    <>
                      <Separator className="my-10" />
                      
                      <PersonalizationPanel 
                        selectedIntentions={selectedIntentions}
                        selectedTraits={selectedTraits}
                        unexpectedFactor={unexpectedFactor}
                        onIntentionChange={setSelectedIntentions}
                        onTraitChange={setSelectedTraits}
                        onUnexpectedFactorChange={setUnexpectedFactor}
                      />
                      
                      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
                        <Button 
                          variant="outline" 
                          onClick={resetSelections}
                          className="order-2 sm:order-1 border-primary/30 text-foreground hover:bg-primary/5"
                        >
                          Start Over
                        </Button>
                        <Button 
                          onClick={generateRecommendations} 
                          className="order-1 sm:order-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
                          size="lg"
                        >
                          ✨ Find Perfect Gifts
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Right Panel - Recommendations */}
            <div className="xl:col-span-1">
              <div className="sticky top-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-foreground">
                    <span className="text-2xl">💝</span>
                    Your Gift Recommendations
                  </h2>
                  <p className="text-foreground/70 text-sm font-medium">
                    Curated especially for your occasion and recipient
                  </p>
                </div>
                
                <GiftRecommendations 
                  recommendations={recommendations}
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="bg-gradient-to-t from-primary/10 to-transparent py-16 mt-20">
          <div className="container max-w-4xl text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Give the Perfect Gift?</h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto font-medium">
              Join thousands who have found their perfect gifts using our AI-powered recommendations. 
              Every gift tells a story, and we help you write the perfect one.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-foreground/70 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Over 10,000 happy gifters</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Personalized recommendations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Unique & thoughtful options</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
