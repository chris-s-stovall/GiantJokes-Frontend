import { PremiumPlan, JokePack } from '../../types/premium';

export const premiumPlans: PremiumPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Premium',
    price: 4.99,
    interval: 'month',
    features: [
      'Access to all premium jokes',
      'Ad-free experience',
      'Exclusive daily stories',
      'Early access to new features'
    ]
  },
  {
    id: 'yearly',
    name: 'Yearly Premium',
    price: 49.99,
    interval: 'year',
    features: [
      'All monthly premium features',
      'Save 17% compared to monthly',
      '3 free joke packs included',
      'Premium badge on your profile'
    ],
    popular: true
  }
];

export const jokePacks: JokePack[] = [
  {
    id: 'dad-jokes',
    name: 'Ultimate Dad Jokes',
    description: 'The finest collection of dad jokes that will make your eyes roll!',
    price: 2.99,
    jokeCount: 100,
    category: 'Dad Jokes',
    previewJoke: "Why don't eggs tell jokes? They'd crack up!"
  },
  {
    id: 'puns',
    name: 'Puntastic Collection',
    description: 'A punny bundle that will keep you laughing for hours!',
    price: 3.99,
    jokeCount: 150,
    category: 'Puns',
    previewJoke: 'What do you call a fake noodle? An impasta!'
  },
  {
    id: 'one-liners',
    name: 'Quick Wit Pack',
    description: 'Rapid-fire one-liners for quick laughs!',
    price: 1.99,
    jokeCount: 75,
    category: 'One-liners',
    previewJoke: "I used to be addicted to soap, but I'm clean now."
  }
];
