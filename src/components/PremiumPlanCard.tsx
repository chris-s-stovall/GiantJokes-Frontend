import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PremiumPlan } from '../types/premium';

interface PremiumPlanCardProps {
  plan: PremiumPlan;
  onSelect: (planId: string) => void;
}

export const PremiumPlanCard: React.FC<PremiumPlanCardProps> = ({ plan, onSelect }) => {
  return (
    <TouchableOpacity
      style={[styles.container, plan.popular && styles.popularContainer]}
      onPress={() => onSelect(plan.id)}
    >
      {plan.popular && (
        <View style={styles.popularBadge}>
          <Text style={styles.popularText}>MOST POPULAR</Text>
        </View>
      )}
      
      <Text style={styles.name}>{plan.name}</Text>
      <Text style={styles.price}>
        ${plan.price}
        <Text style={styles.interval}>/{plan.interval}</Text>
      </Text>

      <View style={styles.featuresContainer}>
        {plan.features.map((feature, index) => (
          <View key={index} style={styles.featureRow}>
            <Text style={styles.featureCheck}>✓</Text>
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.button, plan.popular && styles.popularButton]}
        onPress={() => onSelect(plan.id)}
      >
        <Text style={[styles.buttonText, plan.popular && styles.popularButtonText]}>
          Choose Plan
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  popularContainer: {
    borderColor: '#FFD700',
    borderWidth: 2,
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    right: 20,
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  interval: {
    fontSize: 16,
    color: '#666666',
  },
  featuresContainer: {
    marginBottom: 20,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureCheck: {
    color: '#4CAF50',
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  featureText: {
    fontSize: 16,
    color: '#666666',
  },
  button: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  popularButton: {
    backgroundColor: '#FFD700',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666666',
  },
  popularButtonText: {
    color: '#000000',
  },
});
