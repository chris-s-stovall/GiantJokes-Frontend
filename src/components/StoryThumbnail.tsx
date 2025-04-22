import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Story } from '../types/joke';

interface StoryThumbnailProps {
  story: Story;
  onPress: (storyId: string) => void;
}

export const StoryThumbnail: React.FC<StoryThumbnailProps> = ({ story, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onPress(story.id)}
    >
      <View style={[styles.imageContainer, story.isPremium && styles.premiumBorder]}>
        <Image
          source={{ uri: story.imageUrl }}
          style={styles.image}
        />
      </View>
      {story.isPremium && (
        <View style={styles.premiumBadge}>
          <Text style={styles.premiumText}>⭐</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    alignItems: 'center',
    width: 80,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#E4E4E4',
    overflow: 'hidden',
  },
  premiumBorder: {
    borderColor: '#FFD700',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  premiumBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  premiumText: {
    fontSize: 12,
  },
});
