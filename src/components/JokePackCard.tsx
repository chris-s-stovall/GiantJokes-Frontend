import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { JokePack } from '../types/premium';

interface JokePackCardProps {
  pack: JokePack;
  onPurchase: (packId: string) => void;
}

export const JokePackCard: React.FC<JokePackCardProps> = ({ pack, onPurchase }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{pack.name}</Text>
          <Text style={styles.category}>{pack.category}</Text>
        </View>
        <View style={styles.countBadge}>
          <Text style={styles.countText}>{pack.jokeCount} jokes</Text>
        </View>
      </View>

      <Text style={styles.description}>{pack.description}</Text>
      
      <View style={styles.previewContainer}>
        <Text style={styles.previewLabel}>Preview joke:</Text>
        <Text style={styles.previewJoke}>{pack.previewJoke}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>${pack.price}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onPurchase(pack.id)}
        >
          <Text style={styles.buttonText}>Purchase Pack</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: '#666666',
  },
  countBadge: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  countText: {
    fontSize: 12,
    color: '#666666',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  previewContainer: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  previewLabel: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  previewJoke: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#333333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
