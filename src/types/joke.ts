export interface Joke {
  id: string;
  content: string;
  imageUrl?: string;
  type: 'text' | 'image' | 'both';
  createdAt: string;
  metrics: {
    loves: number;
    funny: number;
    hates: number;
    flags: number;
  };
  isPremium: boolean;
}

export interface Story {
  id: string;
  content: string;
  imageUrl: string;
  type: 'image' | 'both';
  createdAt: string;
  expiresAt: string;
  isPremium: boolean;
}

export type FeedbackType = 'love' | 'funny' | 'hate' | 'flag';

export interface UserPreferences {
  hasSubscription: boolean;
  unlockedJokePacks: string[];
  viewedStories: string[];
}
