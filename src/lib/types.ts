
// Gift recommendation system types

export type OccasionArchetype = {
  id: string;
  name: string;
  description: string;
  icon?: string;
};

export type OccasionVibe = 'joyful' | 'intimate' | 'fun' | 'comfort';

export type IntentionTag = {
  id: string;
  name: string;
  description: string;
};

export type RecipientTrait = {
  id: string;
  name: string;
  description: string;
  categories: string[];
};

export type GiftIdea = {
  id: string;
  name: string;
  description: string;
  narrative: string;
  imageUrl?: string;
  price: {
    min: number;
    max: number;
  };
  occasions: string[];
  vibes: OccasionVibe[];
  intentions: string[];
  traits: string[];
  unexpectedFactor: number; // 0-100, how unexpected is this gift
};
