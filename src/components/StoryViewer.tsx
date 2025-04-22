import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { Story } from '../types/joke';

interface StoryViewerProps {
  story: Story;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const StoryViewer: React.FC<StoryViewerProps> = ({
  story,
  onClose,
  onNext,
  onPrevious,
}) => {
  const [progress] = useState(new Animated.Value(0));
  const { width, height } = Dimensions.get('window');

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000, // 5 seconds per story
      useNativeDriver: false,
    }).start(() => {
      onNext();
    });

    return () => {
      progress.setValue(0);
    };
  }, [story.id]);

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.progressContainer}>
        <Animated.View 
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]} 
        />
      </View>

      <Image
        source={{ uri: story.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.contentContainer}>
        <Text style={styles.content}>{story.content}</Text>
      </View>

      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>

      <View style={styles.navigationContainer}>
        <TouchableOpacity 
          style={[styles.navButton, styles.leftHalf]} 
          onPress={onPrevious}
        />
        <TouchableOpacity 
          style={[styles.navButton, styles.rightHalf]} 
          onPress={onNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  progressContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.3)',
    zIndex: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 12,
  },
  content: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  closeText: {
    color: '#fff',
    fontSize: 24,
  },
  navigationContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  navButton: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  leftHalf: {
    flex: 1,
  },
  rightHalf: {
    flex: 1,
  },
});
