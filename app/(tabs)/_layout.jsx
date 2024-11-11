import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.icon, { tintColor: color }]}
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.dashboard}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.notification}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.search}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: 'Chats',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.chats}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="newsfeed"
        options={{
          title: 'Newsfeed',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon
              icon={icons.newsfeed}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default TabLayout;
