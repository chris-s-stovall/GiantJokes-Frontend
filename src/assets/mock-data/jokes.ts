import { Joke, Story } from '../../types/joke';

export const mockJokes: Joke[] = [
  {
    id: '1',
    content: "Why don't scientists trust atoms? Because they make up everything!",
    type: 'text',
    createdAt: '2025-04-21T12:00:00Z',
    metrics: { loves: 150, funny: 200, hates: 10, flags: 2 },
    isPremium: false
  },
  {
    id: '2',
    content: 'What do you call a bear with no teeth? A gummy bear!',
    imageUrl: 'https://source.unsplash.com/random/800x600?bear',
    type: 'both',
    createdAt: '2025-04-21T12:30:00Z',
    metrics: { loves: 300, funny: 450, hates: 15, flags: 1 },
    isPremium: false
  },
  {
    id: '3',
    content: 'Premium Dad Joke of the Day',
    imageUrl: 'https://source.unsplash.com/random/800x600?dad',
    type: 'both',
    createdAt: '2025-04-21T13:00:00Z',
    metrics: { loves: 500, funny: 800, hates: 20, flags: 0 },
    isPremium: true
  }
];

export const mockStories: Story[] = [
  {
    id: '1',
    content: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
    imageUrl: 'https://source.unsplash.com/random/800x1600?scarecrow',
    type: 'both',
    createdAt: '2025-04-21T12:00:00Z',
    expiresAt: '2025-04-22T12:00:00Z',
    isPremium: false
  },
  {
    id: '2',
    content: 'Premium Story',
    imageUrl: 'https://source.unsplash.com/random/800x1600?funny',
    type: 'both',
    createdAt: '2025-04-21T12:30:00Z',
    expiresAt: '2025-04-22T12:30:00Z',
    isPremium: true
  }
];
