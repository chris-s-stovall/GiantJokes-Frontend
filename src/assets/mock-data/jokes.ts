import { Joke, Story } from '../../types/joke';

export const mockJokes: Joke[] = [
  {
    id: '1',
    content: "Why don't scientists trust atoms? Because they make up everything!",
    imageUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
    type: 'both',
    createdAt: '2025-04-21T12:00:00Z',
    metrics: { loves: 150, funny: 200, hates: 10, flags: 2 },
    isPremium: false
  },
  {
    id: '2',
    content: 'What do you call a bear with no teeth? A gummy bear!',
    imageUrl: 'https://images.pexels.com/photos/1468355/pexels-photo-1468355.jpeg',
    type: 'both',
    createdAt: '2025-04-21T12:30:00Z',
    metrics: { loves: 300, funny: 450, hates: 15, flags: 1 },
    isPremium: false
  },
  {
    id: '3',
    content: 'Why did the cookie go to the doctor? Because it was feeling crumbly!',
    imageUrl: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
    type: 'both',
    createdAt: '2025-04-21T13:00:00Z',
    metrics: { loves: 500, funny: 800, hates: 20, flags: 0 },
    isPremium: true
  },
  {
    id: '4',
    content: 'What do you call a dog magician? A labracadabrador!',
    imageUrl: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
    type: 'both',
    createdAt: '2025-04-21T13:30:00Z',
    metrics: { loves: 420, funny: 600, hates: 12, flags: 1 },
    isPremium: false
  },
  {
    id: '5',
    content: 'Premium: Why did the golfer bring two pairs of pants? In case he got a hole in one!',
    imageUrl: 'https://images.pexels.com/photos/1325750/pexels-photo-1325750.jpeg',
    type: 'both',
    createdAt: '2025-04-21T14:00:00Z',
    metrics: { loves: 800, funny: 1200, hates: 25, flags: 2 },
    isPremium: true
  }
];

export const mockStories: Story[] = [
  {
    id: '1',
    content: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
    imageUrl: 'https://images.pexels.com/photos/5588224/pexels-photo-5588224.jpeg',
    type: 'both',
    createdAt: '2025-04-21T12:00:00Z',
    expiresAt: '2025-04-22T12:00:00Z',
    isPremium: false
  },
  {
    id: '2',
    content: 'What do you call a funny mountain? Hill-arious!',
    imageUrl: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    type: 'both',
    createdAt: '2025-04-21T12:30:00Z',
    expiresAt: '2025-04-22T12:30:00Z',
    isPremium: true
  },
  {
    id: '3',
    content: 'Why don\'t eggs tell jokes? They\'d crack up!',
    imageUrl: 'https://images.pexels.com/photos/6294402/pexels-photo-6294402.jpeg',
    type: 'both',
    createdAt: '2025-04-21T13:00:00Z',
    expiresAt: '2025-04-22T13:00:00Z',
    isPremium: false
  }
];
