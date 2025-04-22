import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Joke } from '../types/joke';

interface JokeCardProps {
  joke: Joke;
}

export const JokeCard: React.FC<JokeCardProps> = ({ joke }) => {
  const { width } = Dimensions.get('window');
  const imageHeight = width * 0.6; // 60% of screen width

  return (
    <View style={styles.container}>
      {joke.isPremium && (
        <View style={styles.premiumBadge}>
          <Text style={styles.premiumText}>PREMIUM</Text>
        </View>
      )}
      
      {joke.imageUrl && (
        <Image
          source={{ uri: joke.imageUrl }}
          style={[styles.image, { height: imageHeight }]}
          resizeMode="cover"
        />
      )}
      
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{joke.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
  },
  contentContainer: {
    padding: 16,
  },
  content: {
    fontSize: 18,
    color: '#333333',
    lineHeight: 24,
  },
  premiumBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFD700',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 1,
  },
  premiumText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
