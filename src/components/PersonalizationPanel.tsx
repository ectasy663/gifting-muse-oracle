
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { intentionTags, recipientTraits } from '@/lib/data';
import { IntentionTag, RecipientTrait } from '@/lib/types';

interface PersonalizationPanelProps {
  selectedIntentions: string[];
  selectedTraits: string[];
  unexpectedFactor: number;
  onIntentionChange: (intentions: string[]) => void;
  onTraitChange: (traits: string[]) => void;
  onUnexpectedFactorChange: (value: number) => void;
}

const PersonalizationPanel: React.FC<PersonalizationPanelProps> = ({
  selectedIntentions,
  selectedTraits,
  unexpectedFactor,
  onIntentionChange,
  onTraitChange,
  onUnexpectedFactorChange
}) => {
  const toggleIntention = (id: string) => {
    if (selectedIntentions.includes(id)) {
      onIntentionChange(selectedIntentions.filter(i => i !== id));
    } else {
      // Limit to 3 selections maximum
      if (selectedIntentions.length < 3) {
        onIntentionChange([...selectedIntentions, id]);
      }
    }
  };
  
  const toggleTrait = (id: string) => {
    if (selectedTraits.includes(id)) {
      onTraitChange(selectedTraits.filter(t => t !== id));
    } else {
      // Limit to 3 selections maximum
      if (selectedTraits.length < 3) {
        onTraitChange([...selectedTraits, id]);
      }
    }
  };
  
  const handleUnexpectedChange = (value: number[]) => {
    onUnexpectedFactorChange(value[0]);
  };
  
  return (
    <div className="animate-reveal space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
          What's your gifting intention?
        </h2>
        <p className="text-muted-foreground text-center md:text-left">
          Select up to 3 intentions for this gift
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          {intentionTags.map((intention) => (
            <IntentionCard
              key={intention.id}
              intention={intention}
              isSelected={selectedIntentions.includes(intention.id)}
              onToggle={() => toggleIntention(intention.id)}
            />
          ))}
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
          Who is this gift for?
        </h2>
        <p className="text-muted-foreground text-center md:text-left">
          Select up to 3 traits that describe the recipient
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-2">
          {recipientTraits.map((trait) => (
            <TraitBubble
              key={trait.id}
              trait={trait}
              isSelected={selectedTraits.includes(trait.id)}
              onToggle={() => toggleTrait(trait.id)}
            />
          ))}
        </div>
      </div>
      
      <div className="space-y-4 pt-4">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Serendipity Factor</h3>
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">
            {unexpectedFactor < 30 ? 'Predictable' : 
             unexpectedFactor < 70 ? 'Balanced' : 'Unexpected'}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          How surprising do you want our gift suggestions to be?
        </p>
        <div className="px-3 py-4">
          <Slider
            defaultValue={[unexpectedFactor]}
            max={100}
            step={10}
            onValueChange={handleUnexpectedChange}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>Familiar</span>
            <span>Balanced</span>
            <span>Surprising</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IntentionCardProps {
  intention: IntentionTag;
  isSelected: boolean;
  onToggle: () => void;
}

const IntentionCard: React.FC<IntentionCardProps> = ({ intention, isSelected, onToggle }) => {
  return (
    <Card 
      className={`card-hover relative p-4 cursor-pointer ${
        isSelected ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-secondary/50'
      }`}
      onClick={onToggle}
    >
      <div>
        <h3 className="font-medium">{intention.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          {intention.description}
        </p>
      </div>
    </Card>
  );
};

interface TraitBubbleProps {
  trait: RecipientTrait;
  isSelected: boolean;
  onToggle: () => void;
}

const TraitBubble: React.FC<TraitBubbleProps> = ({ trait, isSelected, onToggle }) => {
  return (
    <div
      className={`card-hover text-center p-3 rounded-lg cursor-pointer transition-colors ${
        isSelected ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/80'
      }`}
      onClick={onToggle}
    >
      <span className="font-medium text-sm">{trait.name}</span>
    </div>
  );
};

export default PersonalizationPanel;
