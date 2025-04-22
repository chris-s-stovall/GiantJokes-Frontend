import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, MainTabParamList } from '../types/navigation';

import { FeedScreen } from '../screens/FeedScreen';
import { StoriesScreen } from '../screens/StoriesScreen';
import { StoryViewScreen } from '../screens/StoryViewScreen';
import { PremiumScreen } from '../screens/PremiumScreen';

// Placeholder component - we'll create this next
const PremiumModal = () => null;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Feed" 
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Stories" 
        component={StoriesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Premium" 
        component={PremiumScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen 
            name="MainTabs" 
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="StoryView" 
            component={StoryViewScreen}
            options={{ headerShown: false }}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen 
            name="PremiumModal" 
            component={PremiumModal}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
