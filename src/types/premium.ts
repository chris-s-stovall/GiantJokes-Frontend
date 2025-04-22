export interface PremiumPlan {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  popular?: boolean;
}

export interface JokePack {
  id: string;
  name: string;
  description: string;
  price: number;
  jokeCount: number;
  category: string;
  previewJoke: string;
}

export interface PremiumState {
  isSubscribed: boolean;
  activeSubscription?: string;
  purchasedPacks: string[];
  lastUpdated: string;
}
