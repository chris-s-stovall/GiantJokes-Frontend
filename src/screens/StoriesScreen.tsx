import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StoryThumbnail } from '../components/StoryThumbnail';
import { mockStories } from '../assets/mock-data/jokes';
import { RootStackParamList } from '../types/navigation';

type StoriesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const StoriesScreen = () => {
  const navigation = useNavigation<StoriesScreenNavigationProp>();

  const handleStoryPress = (storyId: string) => {
    navigation.navigate('StoryView', { storyId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {mockStories.map((story) => (
          <StoryThumbnail
            key={story.id}
            story={story}
            onPress={handleStoryPress}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
