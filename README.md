# GiantJokes Frontend

An Instagram-style mobile app for sharing and enjoying jokes, built with React Native and Expo.

## Features

- **Feed Screen**: Scroll through a curated list of jokes with interactive feedback options
- **Stories**: Instagram-style story viewer for featured joke content
- **Premium Content**: Subscription-based access to exclusive joke packs
- **Interactive Feedback**: React to jokes with Love, Funny, Hate, or Flag options
- **iOS-Optimized**: Built with iOS design patterns and interactions in mind

## Tech Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation
- **State Management**: Zustand
- **Styling**: Styled Components
- **Animations**: React Native Reanimated
- **Backend**: Supabase (to be integrated)

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- iOS Simulator (via Xcode) or physical iOS device
- Expo Go app (for physical device testing)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chris-s-stovall/GiantJokes-Frontend.git
   cd GiantJokes-Frontend
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   ./start-fresh.sh
   ```
   Or manually:
   ```bash
   npm start
   ```

### Running the App

#### iOS Simulator
- Press 'i' in the terminal to open in iOS simulator
- Or run `npm run ios`

#### Physical iOS Device
1. Install Expo Go from the App Store
2. Scan the QR code from the terminal
3. The app will load on your device

## Project Structure

```
src/
├── assets/
│   └── mock-data/      # Mock data for development
├── components/         # Reusable UI components
├── navigation/         # Navigation configuration
├── screens/           # Main app screens
└── types/             # TypeScript type definitions
```

## Development Scripts

- `start-fresh.sh`: Cleans up Metro bundler and starts fresh development server
- `npm start`: Start the Expo development server
- `npm run ios`: Run on iOS simulator
- `npm run lint`: Run ESLint
- `npm run typescript`: Type-check TypeScript files

## Premium Features

- Monthly and yearly subscription options
- Exclusive joke packs
- Ad-free experience
- Premium content access

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is private and proprietary. All rights reserved.
