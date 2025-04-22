import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FeedbackType } from '../types/joke';

interface FeedbackBarProps {
  jokeId: string;
  metrics: {
    loves: number;
    funny: number;
    hates: number;
    flags: number;
  };
}

export const FeedbackBar: React.FC<FeedbackBarProps> = ({ jokeId, metrics }) => {
  const handleFeedback = (type: FeedbackType) => {
    // TODO: Implement feedback handling
    console.log(`Feedback ${type} for joke ${jokeId}`);
  };

  const FeedbackButton = ({ 
    type, 
    count, 
    emoji 
  }: { 
    type: FeedbackType; 
    count: number; 
    emoji: string;
  }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleFeedback(type)}
    >
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.count}>{count}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FeedbackButton type="love" count={metrics.loves} emoji="❤️" />
      <FeedbackButton type="funny" count={metrics.funny} emoji="😂" />
      <FeedbackButton type="hate" count={metrics.hates} emoji="👎" />
      <FeedbackButton type="flag" count={metrics.flags} emoji="🚩" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  button: {
    alignItems: 'center',
    minWidth: 60,
  },
  emoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  count: {
    fontSize: 12,
    color: '#666666',
  },
});
