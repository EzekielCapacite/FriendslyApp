import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    };

    load();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3B5998" />
      </View>
    ); // Show loading spinner while fonts are loading
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to My Friendsly</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Link href="/login" style={styles.link}>
          <Text style={styles.linkText}>Login</Text>
        </Link>
        <Link href="/signup" style={styles.link}>
          <Text style={styles.linkText}>Signup</Text>
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9F1F7',
  },
  container: {
    flex: 1,
    backgroundColor: '#E9F1F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#3B5998',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#d6d6d6',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center', // Center buttons horizontally
    marginTop: 20,
  },
  link: {
    paddingVertical: 15, // Adjust vertical padding for equal height
    paddingHorizontal: 40, // Ensure consistent horizontal padding
    borderRadius: 5,
    backgroundColor: '#1877F2',
    width: '80%', // Make them the same width
    alignItems: 'center', // Center text inside the button
    marginBottom: 10, // Space between buttons
  },
  linkText: {
    fontFamily: 'Roboto-Regular',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
