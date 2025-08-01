
import React from 'react';
import { Card } from '@/components/ui/card';
import { occasionArchetypes } from '@/lib/data';
import { OccasionArchetype, OccasionVibe } from '@/lib/types';

interface OccasionSelectorProps {
  selectedOccasion: string;
  selectedVibe: OccasionVibe | '';
  onSelectOccasion: (id: string) => void;
  onSelectVibe: (vibe: OccasionVibe) => void;
}

const OccasionSelector: React.FC<OccasionSelectorProps> = ({ 
  selectedOccasion, 
  selectedVibe,
  onSelectOccasion,
  onSelectVibe 
}) => {
  // Get the current selected occasion object
  const currentOccasion = occasionArchetypes.find(o => o.id === selectedOccasion);
  
  return (
    <div className="animate-reveal space-y-8">
      <div className="space-y-3">
        <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
          What's the Occasion?
        </h2>
        <p className="text-muted-foreground text-center md:text-left">
          Select the type of occasion you're celebrating
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 auto-rows-fr">
          {occasionArchetypes.map((occasion) => (
            <Card 
              key={occasion.id}
              className={`card-hover relative p-6 cursor-pointer flex flex-col ${
                selectedOccasion === occasion.id 
                  ? 'ring-2 ring-primary bg-primary/5' 
                  : 'hover:bg-secondary/50'
              }`}
              onClick={() => onSelectOccasion(occasion.id)}
            >
              <div className="text-center flex flex-col flex-grow">
                <h3 className="font-medium">{occasion.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex-grow">
                  {occasion.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {selectedOccasion && (
        <div className="space-y-3 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
            What's the vibe of this {currentOccasion?.name}?
          </h2>
          <p className="text-muted-foreground text-center md:text-left">
            Help us understand the emotional tone of the occasion
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
            <VibeCard 
              name="Joyful & Festive" 
              color="joy" 
              isSelected={selectedVibe === 'joyful'}
              onClick={() => onSelectVibe('joyful')}
            />
            <VibeCard 
              name="Intimate & Meaningful" 
              color="intimate" 
              isSelected={selectedVibe === 'intimate'}
              onClick={() => onSelectVibe('intimate')}
            />
            <VibeCard 
              name="Fun & Lighthearted" 
              color="fun" 
              isSelected={selectedVibe === 'fun'}
              onClick={() => onSelectVibe('fun')}
            />
            <VibeCard 
              name="Comfort & Cozy" 
              color="comfort" 
              isSelected={selectedVibe === 'comfort'}
              onClick={() => onSelectVibe('comfort')}
            />
          </div>
        </div>
      )}
    </div>
  );
};

interface VibeCardProps {
  name: string;
  color: string;
  isSelected: boolean;
  onClick: () => void;
}

const VibeCard: React.FC<VibeCardProps> = ({ name, color, isSelected, onClick }) => {
  return (
    <div
      className={`card-hover p-4 rounded-lg cursor-pointer transition-all ${
        isSelected
          ? `ring-2 ring-${color}-dark bg-${color}-light text-${color}-dark`
          : `bg-${color}-light/40 hover:bg-${color}-light`
      }`}
      onClick={onClick}
    >
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default OccasionSelector;
