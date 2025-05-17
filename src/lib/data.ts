
import { OccasionArchetype, IntentionTag, RecipientTrait, GiftIdea } from "./types";

// Occasion Archetypes
export const occasionArchetypes: OccasionArchetype[] = [
  {
    id: "birthday-milestone",
    name: "Milestone Birthday",
    description: "A significant birthday deserving special recognition"
  },
  {
    id: "birthday-regular",
    name: "Birthday Celebration",
    description: "Celebrating another trip around the sun"
  },
  {
    id: "anniversary",
    name: "Anniversary",
    description: "Commemorating a special date or event"
  },
  {
    id: "graduation",
    name: "Graduation",
    description: "Celebrating academic achievements"
  },
  {
    id: "new-home",
    name: "New Home",
    description: "Marking the start of life in a new space"
  },
  {
    id: "promotion",
    name: "Career Milestone",
    description: "Celebrating professional achievements"
  },
  {
    id: "holiday",
    name: "Holiday Gift",
    description: "For seasonal celebrations and festivities"
  },
  {
    id: "just-because",
    name: "Just Because",
    description: "No occasion needed - just to show you care"
  }
];

// Intention Tags
export const intentionTags: IntentionTag[] = [
  {
    id: "spark-joy",
    name: "To Spark Joy",
    description: "Gifts that bring happiness and delight"
  },
  {
    id: "encourage-relaxation",
    name: "To Encourage Relaxation",
    description: "Gifts that promote rest and peace"
  },
  {
    id: "foster-connection",
    name: "To Foster Connection",
    description: "Gifts that bring people together"
  },
  {
    id: "inspire-creativity",
    name: "To Inspire Creativity",
    description: "Gifts that spark imagination and making"
  },
  {
    id: "support-growth",
    name: "To Support Growth",
    description: "Gifts that encourage learning and development"
  },
  {
    id: "express-appreciation",
    name: "To Express Appreciation",
    description: "Gifts that say thank you in a meaningful way"
  },
  {
    id: "create-memories",
    name: "To Create Memories",
    description: "Gifts that offer experiences to remember"
  }
];

// Recipient Traits
export const recipientTraits: RecipientTrait[] = [
  {
    id: "bookworm",
    name: "Bookworm",
    description: "Loves reading and collecting books",
    categories: ["hobby", "indoor"]
  },
  {
    id: "coffee-enthusiast",
    name: "Coffee Enthusiast",
    description: "Appreciates quality coffee and brewing",
    categories: ["food", "hobby"]
  },
  {
    id: "plant-parent",
    name: "Plant Parent",
    description: "Enjoys caring for and collecting plants",
    categories: ["hobby", "home"]
  },
  {
    id: "foodie",
    name: "Foodie",
    description: "Passionate about good food and cooking",
    categories: ["food", "experience"]
  },
  {
    id: "tech-lover",
    name: "Tech Lover",
    description: "Always excited about the latest gadgets",
    categories: ["tech", "indoor"]
  },
  {
    id: "outdoor-adventurer",
    name: "Outdoor Adventurer",
    description: "Loves spending time in nature",
    categories: ["outdoor", "experience"]
  },
  {
    id: "fitness-enthusiast",
    name: "Fitness Enthusiast",
    description: "Committed to health and exercise",
    categories: ["health", "activity"]
  },
  {
    id: "art-appreciator",
    name: "Art Appreciator",
    description: "Has an eye for beauty and creativity",
    categories: ["art", "indoor"]
  },
  {
    id: "minimalist",
    name: "Minimalist",
    description: "Values quality over quantity",
    categories: ["lifestyle", "philosophy"]
  },
  {
    id: "music-lover",
    name: "Music Lover",
    description: "Life has a soundtrack",
    categories: ["entertainment", "hobby"]
  }
];

// Sample gift ideas
export const giftIdeas: GiftIdea[] = [
  {
    id: "personalized-star-map",
    name: "Personalized Star Map",
    description: "A custom star map showing the night sky from a specific date and location",
    narrative: "For the starry-eyed dreamer who appreciates meaningful moments: A stunning personalized star map capturing exactly how the heavens appeared on that special night. Whether it marks a first date, a birth, or any meaningful moment, this is a slice of cosmic history they can treasure forever.",
    imageUrl: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80",
    price: {
      min: 50,
      max: 150
    },
    occasions: ["anniversary", "birthday-milestone", "just-because"],
    vibes: ["intimate", "joyful"],
    intentions: ["create-memories", "express-appreciation"],
    traits: ["minimalist", "art-appreciator"],
    unexpectedFactor: 70
  },
  {
    id: "luxury-throw-blanket",
    name: "Oversized Luxury Knit Blanket",
    description: "A sumptuous, oversized hand-knit blanket in premium materials",
    narrative: "For the bookworm who loves to curl up on the couch: A luxurious, oversized knit blanket that transforms any reading nook into a sanctuary of comfort. Crafted from the softest materials, it's like wrapping yourself in a cloud while diving into literary worlds.",
    imageUrl: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    price: {
      min: 80,
      max: 200
    },
    occasions: ["holiday", "new-home", "just-because"],
    vibes: ["comfort", "intimate"],
    intentions: ["encourage-relaxation", "spark-joy"],
    traits: ["bookworm", "minimalist"],
    unexpectedFactor: 30
  },
  {
    id: "indoor-herb-garden",
    name: "Smart Indoor Herb Garden",
    description: "A self-watering indoor garden system with grow lights",
    narrative: "For the foodie with a green thumb (or aspiring to have one): A sleek, self-sustaining indoor herb garden that brings the garden right to their kitchen counter. With automatic watering and built-in grow lights, they'll enjoy fresh herbs year-round, elevating everyday cooking into something extraordinary – even if they've never kept a plant alive before.",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
    price: {
      min: 100,
      max: 200
    },
    occasions: ["new-home", "just-because", "holiday"],
    vibes: ["fun", "joyful"],
    intentions: ["spark-joy", "support-growth"],
    traits: ["foodie", "plant-parent"],
    unexpectedFactor: 50
  },
  {
    id: "specialty-coffee-subscription",
    name: "Artisanal Coffee Subscription",
    description: "A curated monthly delivery of premium single-origin coffees",
    narrative: "For the coffee enthusiast who savors each morning ritual: A subscription that delivers small-batch, single-origin coffees from around the world to their doorstep. Each month brings new flavor profiles, brewing recommendations, and stories of the farmers and regions behind each bean – transforming their daily cup into a global tasting journey.",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    price: {
      min: 60,
      max: 150
    },
    occasions: ["birthday-regular", "just-because"],
    vibes: ["comfort", "joyful"],
    intentions: ["create-memories", "express-appreciation"],
    traits: ["coffee-enthusiast", "foodie"],
    unexpectedFactor: 40
  },
  {
    id: "digital-art-tablet",
    name: "Professional Drawing Tablet",
    description: "A high-quality digital drawing tablet for artists",
    narrative: "For the creative spirit who's always doodling or designing: A professional-grade drawing tablet that turns digital creation from frustrating to fluid. With pressure sensitivity that mimics traditional media and a responsive surface that feels natural, it's like giving them superpowers for their artistic expression – whether they're a seasoned digital artist or ready to explore new creative frontiers.",
    imageUrl: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2369&q=80",
    price: {
      min: 200,
      max: 600
    },
    occasions: ["graduation", "birthday-milestone", "promotion"],
    vibes: ["fun", "joyful"],
    intentions: ["inspire-creativity", "support-growth"],
    traits: ["art-appreciator", "tech-lover"],
    unexpectedFactor: 60
  },
  {
    id: "sunrise-alarm-clock",
    name: "Sunrise Simulation Alarm Clock",
    description: "An alarm clock that wakes you with gradually brightening light",
    narrative: "For the wellness-minded who struggles with morning routines: A gentle revolution for their wake-up call. This alarm mimics the sunrise with gradually increasing light, coaxing them awake naturally and setting a peaceful tone for the day. It's particularly wonderful during darker seasons – a small but meaningful way to bring more harmony to their daily rhythms.",
    imageUrl: "https://images.unsplash.com/photo-1550534791-2677533605ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    price: {
      min: 40,
      max: 120
    },
    occasions: ["just-because", "new-home"],
    vibes: ["comfort", "intimate"],
    intentions: ["encourage-relaxation", "support-growth"],
    traits: ["fitness-enthusiast", "minimalist"],
    unexpectedFactor: 75
  },
  {
    id: "vinyl-record-player",
    name: "Modern Vinyl Record Player",
    description: "A stylish record player that connects to modern speakers",
    narrative: "For the music lover who appreciates both nostalgia and quality: A beautifully designed record player that bridges analog warmth with modern connectivity. They'll rediscover the ritual of physically selecting music, watching the needle drop, and hearing their favorite albums with all the depth and character that only vinyl delivers – while still being able to connect to their existing speakers or headphones.",
    imageUrl: "https://images.unsplash.com/photo-1594387333903-9d30a8c8efcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    price: {
      min: 150,
      max: 300
    },
    occasions: ["birthday-milestone", "holiday", "promotion"],
    vibes: ["intimate", "fun"],
    intentions: ["create-memories", "spark-joy"],
    traits: ["music-lover", "minimalist"],
    unexpectedFactor: 55
  },
  {
    id: "adventure-experience-day",
    name: "Adventure Experience Day",
    description: "A gift certificate for a thrilling local adventure",
    narrative: "For the thrill-seeker who values experiences over possessions: An adventure day that will become their next great story. Whether it's zip-lining through forests, learning to surf, or racing performance cars on a track, you're giving them the gift of adrenaline, achievement, and memories that will last far longer than any physical present could.",
    imageUrl: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80",
    price: {
      min: 100,
      max: 500
    },
    occasions: ["birthday-milestone", "anniversary", "graduation"],
    vibes: ["fun", "joyful"],
    intentions: ["create-memories", "foster-connection"],
    traits: ["outdoor-adventurer", "fitness-enthusiast"],
    unexpectedFactor: 80
  }
];

// Simple recommendation function
export function getRecommendations(
  occasionId: string,
  vibe: string,
  intentionIds: string[],
  traitIds: string[],
  unexpectedFactor: number,
  count: number = 3
): GiftIdea[] {
  // Filter by occasion
  let filtered = giftIdeas.filter(gift => 
    gift.occasions.includes(occasionId)
  );
  
  // Filter by vibe if specified
  if (vibe) {
    filtered = filtered.filter(gift => 
      gift.vibes.includes(vibe as any)
    );
  }
  
  // Score each gift based on matching intentions and traits
  const scored = filtered.map(gift => {
    let score = 0;
    
    // Score based on intention matches
    intentionIds.forEach(intention => {
      if (gift.intentions.includes(intention)) {
        score += 2;
      }
    });
    
    // Score based on trait matches
    traitIds.forEach(trait => {
      if (gift.traits.includes(trait)) {
        score += 3;
      }
    });
    
    // Adjust score based on unexpected factor preference
    const unexpectedDiff = Math.abs(gift.unexpectedFactor - unexpectedFactor);
    const unexpectedScore = 10 - (unexpectedDiff / 10);
    score += unexpectedScore;
    
    return { gift, score };
  });
  
  // Sort by score (highest first)
  scored.sort((a, b) => b.score - a.score);
  
  // Return top N recommendations
  return scored.slice(0, count).map(item => item.gift);
}
