
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
    description: "Celebrating a meaningful milestone together"
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
  },
  {
    id: "premium-tea-set",
    name: "Premium Tea Ceremony Set",
    description: "An elegant tea set with premium loose-leaf teas",
    narrative: "For the mindful soul who appreciates quiet moments: A beautifully crafted tea ceremony set that transforms tea drinking into a meditation. Complete with premium loose-leaf teas from around the world, it's an invitation to slow down and savor life's simple pleasures.",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=2371&q=80",
    price: {
      min: 70,
      max: 180
    },
    occasions: ["anniversary", "just-because", "holiday"],
    vibes: ["intimate", "comfort"],
    intentions: ["encourage-relaxation", "create-memories"],
    traits: ["minimalist", "coffee-enthusiast"],
    unexpectedFactor: 45
  },
  {
    id: "cooking-class-experience",
    name: "Private Cooking Class Experience",
    description: "A hands-on cooking class with a professional chef",
    narrative: "For the foodie who loves to learn: A private cooking class that takes their culinary skills to the next level. Whether mastering pasta-making, perfecting knife techniques, or exploring exotic cuisines, they'll gain confidence in the kitchen while creating delicious memories.",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    price: {
      min: 120,
      max: 300
    },
    occasions: ["birthday-regular", "anniversary", "graduation"],
    vibes: ["fun", "joyful"],
    intentions: ["support-growth", "create-memories"],
    traits: ["foodie", "outdoor-adventurer"],
    unexpectedFactor: 65
  },
  {
    id: "smart-fitness-mirror",
    name: "Smart Home Fitness Mirror",
    description: "An interactive mirror that streams fitness classes",
    narrative: "For the fitness enthusiast who values convenience: A sleek mirror that doubles as a personal trainer, streaming live and on-demand fitness classes right to their home. From yoga to HIIT workouts, it's like having a premium gym membership that never closes.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    price: {
      min: 800,
      max: 1500
    },
    occasions: ["birthday-milestone", "promotion", "new-home"],
    vibes: ["joyful", "fun"],
    intentions: ["support-growth", "encourage-relaxation"],
    traits: ["fitness-enthusiast", "tech-lover"],
    unexpectedFactor: 85
  },
  {
    id: "artisan-bookends",
    name: "Handcrafted Artistic Bookends",
    description: "Unique sculptural bookends made by local artisans",
    narrative: "For the bookworm with an eye for beauty: Handcrafted bookends that turn their book collection into a gallery display. Each piece is unique, combining functionality with artistic expression – perfect for someone who appreciates both literature and craftsmanship.",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2428&q=80",
    price: {
      min: 45,
      max: 120
    },
    occasions: ["birthday-regular", "new-home", "graduation"],
    vibes: ["intimate", "comfort"],
    intentions: ["inspire-creativity", "express-appreciation"],
    traits: ["bookworm", "art-appreciator"],
    unexpectedFactor: 40
  },
  {
    id: "bluetooth-headphones",
    name: "Premium Wireless Headphones",
    description: "High-quality noise-canceling wireless headphones",
    narrative: "For the music lover who craves audio perfection: Premium headphones that deliver studio-quality sound while blocking out the world's distractions. Whether they're commuting, working, or just enjoying their favorite albums, these transform any space into their personal concert hall.",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    price: {
      min: 200,
      max: 400
    },
    occasions: ["birthday-regular", "graduation", "promotion"],
    vibes: ["joyful", "fun"],
    intentions: ["spark-joy", "support-growth"],
    traits: ["music-lover", "tech-lover"],
    unexpectedFactor: 30
  },
  {
    id: "succulent-garden-kit",
    name: "DIY Succulent Garden Kit",
    description: "Everything needed to create a beautiful succulent arrangement",
    narrative: "For the plant parent who loves hands-on projects: A complete kit to create their own stunning succulent garden. With carefully selected plants, beautiful containers, and expert guidance, it's perfect for both beginners and experienced plant enthusiasts looking for a new creative challenge.",
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    price: {
      min: 35,
      max: 85
    },
    occasions: ["just-because", "new-home", "birthday-regular"],
    vibes: ["comfort", "joyful"],
    intentions: ["spark-joy", "inspire-creativity"],
    traits: ["plant-parent", "minimalist"],
    unexpectedFactor: 50
  },
  {
    id: "gourmet-spice-collection",
    name: "World Spice Collection",
    description: "Premium spices and seasonings from around the globe",
    narrative: "For the foodie who loves to experiment: A curated collection of exotic spices and seasonings that will transport their taste buds around the world. Each jar comes with recipe suggestions and origin stories, turning everyday cooking into culinary adventures.",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a86002dc7a5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    price: {
      min: 60,
      max: 140
    },
    occasions: ["birthday-regular", "holiday", "just-because"],
    vibes: ["fun", "joyful"],
    intentions: ["inspire-creativity", "spark-joy"],
    traits: ["foodie", "coffee-enthusiast"],
    unexpectedFactor: 55
  },
  {
    id: "meditation-cushion-set",
    name: "Luxury Meditation Cushion Set",
    description: "Ergonomic meditation cushions with natural materials",
    narrative: "For the wellness-minded seeking inner peace: A beautifully crafted meditation set that makes mindfulness practice more comfortable and inviting. Made with sustainable materials and designed for proper posture, it's an investment in their mental well-being and daily tranquility.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    price: {
      min: 80,
      max: 160
    },
    occasions: ["just-because", "new-home", "holiday"],
    vibes: ["comfort", "intimate"],
    intentions: ["encourage-relaxation", "support-growth"],
    traits: ["fitness-enthusiast", "minimalist"],
    unexpectedFactor: 60
  },
  {
    id: "portable-espresso-maker",
    name: "Portable Espresso Maker",
    description: "A compact, manual espresso maker for coffee on-the-go",
    narrative: "For the coffee enthusiast who refuses to compromise on quality: A portable espresso maker that delivers café-quality shots anywhere. Perfect for camping trips, office use, or travel, it ensures they never have to settle for subpar coffee again.",
    imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2370&q=80",
    price: {
      min: 90,
      max: 180
    },
    occasions: ["birthday-regular", "graduation", "just-because"],
    vibes: ["fun", "joyful"],
    intentions: ["spark-joy", "support-growth"],
    traits: ["coffee-enthusiast", "outdoor-adventurer"],
    unexpectedFactor: 70
  },
  {
    id: "digital-photo-frame",
    name: "Smart Digital Photo Frame",
    description: "A WiFi-enabled frame that displays photos from anywhere",
    narrative: "For anyone who treasures memories and connections: A smart photo frame that keeps loved ones close, even when they're far away. Family and friends can send photos directly to the frame, creating a constantly updating gallery of shared moments and making distance feel a little smaller.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2372&q=80",
    price: {
      min: 120,
      max: 250
    },
    occasions: ["anniversary", "birthday-milestone", "new-home"],
    vibes: ["intimate", "joyful"],
    intentions: ["foster-connection", "create-memories"],
    traits: ["tech-lover", "minimalist"],
    unexpectedFactor: 40
  }
];

// Improved recommendation function
export function getRecommendations(
  occasionId: string,
  vibe: string,
  intentionIds: string[],
  traitIds: string[],
  unexpectedFactor: number,
  count: number = 3
): GiftIdea[] {
  // Start with all gifts
  let available = [...giftIdeas];
  
  // Filter by occasion (more flexible - if gift has ANY matching occasion)
  if (occasionId) {
    available = available.filter(gift => 
      gift.occasions.includes(occasionId)
    );
  }
  
  // If we don't have enough gifts after occasion filtering, expand the search
  if (available.length < count * 2) {
    available = [...giftIdeas];
  }
  
  // Score each gift based on multiple factors
  const scored = available.map(gift => {
    let score = 0;
    
    // Base score for occasion match
    if (gift.occasions.includes(occasionId)) {
      score += 10;
    }
    
    // Score for vibe match
    if (vibe && gift.vibes.includes(vibe as any)) {
      score += 8;
    }
    
    // Score based on intention matches (more weight)
    intentionIds.forEach(intention => {
      if (gift.intentions.includes(intention)) {
        score += 5;
      }
    });
    
    // Score based on trait matches (highest weight)
    traitIds.forEach(trait => {
      if (gift.traits.includes(trait)) {
        score += 7;
      }
    });
    
    // Adjust score based on unexpected factor preference
    const unexpectedDiff = Math.abs(gift.unexpectedFactor - unexpectedFactor);
    const unexpectedScore = Math.max(0, 5 - (unexpectedDiff / 20));
    score += unexpectedScore;
    
    // Add some randomness to avoid always showing the same gifts
    score += Math.random() * 3;
    
    return { gift, score };
  });
  
  // Sort by score (highest first)
  scored.sort((a, b) => b.score - a.score);
  
  // Ensure variety by picking from different price ranges and categories
  const recommendations: GiftIdea[] = [];
  const usedTraits = new Set<string>();
  
  for (const item of scored) {
    if (recommendations.length >= count) break;
    
    // Try to avoid gifts with completely overlapping traits
    const hasNewTrait = item.gift.traits.some(trait => !usedTraits.has(trait));
    const isHighScore = item.score > 15;
    
    if (hasNewTrait || isHighScore || recommendations.length < count) {
      recommendations.push(item.gift);
      item.gift.traits.forEach(trait => usedTraits.add(trait));
    }
  }
  
  // If we still don't have enough, fill with remaining high-scoring items
  if (recommendations.length < count) {
    for (const item of scored) {
      if (recommendations.length >= count) break;
      if (!recommendations.includes(item.gift)) {
        recommendations.push(item.gift);
      }
    }
  }
  
  return recommendations.slice(0, count);
}
