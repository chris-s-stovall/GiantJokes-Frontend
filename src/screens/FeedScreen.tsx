import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mockJokes } from '../assets/mock-data/jokes';
import { Joke } from '../types/joke';
import { JokeCard } from '../components/JokeCard';
import { FeedbackBar } from '../components/FeedbackBar';

export const FeedScreen = () => {
  const renderItem = ({ item }: { item: Joke }) => (
    <View style={styles.jokeContainer}>
      <JokeCard joke={item} />
      <FeedbackBar jokeId={item.id} metrics={item.metrics} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockJokes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    padding: 16,
  },
  jokeContainer: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
