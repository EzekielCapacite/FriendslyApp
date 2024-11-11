import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignup = () => {
    if (username && password && password === confirmPassword) {
      alert('Signup successful!');
      router.push('/profile'); // Navigate to profile on successful signup
    } else {
      alert('Please fill in all fields and make sure passwords match.');
    }
  };

  const navigateToLogin = () => {
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Signup" onPress={handleSignup} />
      <TouchableOpacity onPress={navigateToLogin} style={styles.loginContainer}>
        <Text style={styles.loginText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E9F1F7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loginContainer: {
    marginTop: 15,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  loginText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default Signup;
