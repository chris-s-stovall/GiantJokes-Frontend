import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StoryViewer } from '../components/StoryViewer';
import { mockStories } from '../assets/mock-data/jokes';
import { RootStackParamList } from '../types/navigation';

type StoryViewRouteProp = RouteProp<RootStackParamList, 'StoryView'>;
type StoryViewNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const StoryViewScreen = () => {
  const navigation = useNavigation<StoryViewNavigationProp>();
  const route = useRoute<StoryViewRouteProp>();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Find the initial index based on the storyId from navigation params
  useEffect(() => {
    const index = mockStories.findIndex(story => story.id === route.params.storyId);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [route.params.storyId]);

  const handleClose = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (currentIndex < mockStories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      handleClose();
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!mockStories[currentIndex]) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <StoryViewer
        story={mockStories[currentIndex]}
        onClose={handleClose}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </View>
  );
};
