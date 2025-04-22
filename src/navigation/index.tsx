import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { RootStackParamList, MainTabParamList } from '../types/navigation';

import { FeedScreen } from '../screens/FeedScreen';
import { StoriesScreen } from '../screens/StoriesScreen';
import { StoryViewScreen } from '../screens/StoryViewScreen';
import { PremiumScreen } from '../screens/PremiumScreen';
import { CategoriesScreen } from '../screens/CategoriesScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ICONS } from '../assets/icons';

// Placeholder component - we'll create this next
const PremiumModal = () => null;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          paddingBottom: 10
        }
      }}
    >
      <Tab.Screen 
        name="Feed" 
        component={FeedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const FeedIcon = ICONS.feed;
            return (
              <FeedIcon
                width={24}
                height={24}
                fill={focused ? '#007AFF' : '#8E8E93'}
              />
            );
          }
        }}
      />
      <Tab.Screen 
        name="Stories" 
        component={StoriesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const StoriesIcon = ICONS.stories;
            return (
              <StoriesIcon
                width={24}
                height={24}
                fill={focused ? '#007AFF' : '#8E8E93'}
              />
            );
          }
        }}
      />
      <Tab.Screen 
        name="Premium" 
        component={PremiumScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const PremiumIcon = ICONS.premium;
            return (
              <PremiumIcon
                width={24}
                height={24}
                fill={focused ? '#007AFF' : '#8E8E93'}
              />
            );
          }
        }}
      />
      <Tab.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const CategoriesIcon = ICONS.categories;
            return (
              <CategoriesIcon
                width={24}
                height={24}
                fill={focused ? '#007AFF' : '#8E8E93'}
              />
            );
          }
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const SettingsIcon = ICONS.settings;
            return (
              <SettingsIcon
                width={24}
                height={24}
                fill={focused ? '#007AFF' : '#8E8E93'}
              />
            );
          }
        }}
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
