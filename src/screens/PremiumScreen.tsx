import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PremiumPlanCard } from '../components/PremiumPlanCard';
import { JokePackCard } from '../components/JokePackCard';
import { premiumPlans, jokePacks } from '../assets/mock-data/premium';

type Tab = 'subscriptions' | 'packs';

export const PremiumScreen = () => {
  const [activeTab, setActiveTab] = useState<Tab>('subscriptions');

  const handlePlanSelect = (planId: string) => {
    // TODO: Implement subscription purchase
    Alert.alert(
      'Subscribe to Premium',
      `Would you like to subscribe to the ${planId} plan?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Subscribe',
          onPress: () => console.log(`Selected plan: ${planId}`)
        }
      ]
    );
  };

  const handlePackPurchase = (packId: string) => {
    // TODO: Implement pack purchase
    Alert.alert(
      'Purchase Pack',
      `Would you like to purchase this joke pack?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Purchase',
          onPress: () => console.log(`Selected pack: ${packId}`)
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Premium Content</Text>
        <Text style={styles.subtitle}>
          Unlock exclusive jokes and features
        </Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'subscriptions' && styles.activeTab]}
          onPress={() => setActiveTab('subscriptions')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'subscriptions' && styles.activeTabText
          ]}>
            Subscriptions
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'packs' && styles.activeTab]}
          onPress={() => setActiveTab('packs')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'packs' && styles.activeTabText
          ]}>
            Joke Packs
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'subscriptions' ? (
          <View>
            {premiumPlans.map(plan => (
              <PremiumPlanCard
                key={plan.id}
                plan={plan}
                onSelect={handlePlanSelect}
              />
            ))}
          </View>
        ) : (
          <View>
            {jokePacks.map(pack => (
              <JokePackCard
                key={pack.id}
                pack={pack}
                onPurchase={handlePackPurchase}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#FFD700',
  },
  tabText: {
    fontSize: 16,
    color: '#666666',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#000000',
  },
  content: {
    flex: 1,
    paddingVertical: 16,
  },
});
