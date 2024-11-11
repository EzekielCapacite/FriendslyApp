import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const notificationsData = [
  { id: '1', user: 'Marion', message: 'liked your post', time: '2 minutes ago' },
  { id: '2', user: 'Michael', message: 'commented on your photo', time: '5 minutes ago' },
  { id: '3', user: 'Christian', message: 'started following you', time: '10 minutes ago' },
  { id: '4', user: 'Stephen', message: 'shared your post', time: '15 minutes ago' },
  { id: '5', user: 'IshowSpeed', message: 'invited you to an event', time: '20 minutes ago' },
  { id: '6', user: 'Alice', message: 'reacted to your story', time: '25 minutes ago' },
  { id: '7', user: 'Bob', message: 'sent you a friend request', time: '30 minutes ago' },
  { id: '8', user: 'Charlie', message: 'wrote a comment on your post', time: '1 hour ago' },
  { id: '9', user: 'David', message: 'shared your photo', time: '2 hours ago' },
  { id: '10', user: 'Emma', message: 'mentioned you in a comment', time: '3 hours ago' },
  { id: '11', user: 'Frank', message: 'liked your comment', time: '4 hours ago' },
  { id: '12', user: 'Grace', message: 'invited you to join a group', time: '5 hours ago' },
];

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = () => {
      setNotifications(notificationsData);
    };

    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      {notifications.length === 0 ? (
        <Text style={styles.noNotifications}>No notifications at this time.</Text>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.notification} onPress={() => alert(`Clicked on ${item.user}'s notification`)}>
              <Icon name="bell" size={24} color="#007BFF" />
              <View style={styles.notificationContent}>
                <Text style={styles.notificationText}>
                  <Text style={styles.user}>{item.user}</Text> {item.message}
                </Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      <Button title="Clear Notifications" onPress={() => setNotifications([])} color="#FF4C4C" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8', // Soft light gray background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Darker text for contrast
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff', // White for notifications
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // Add shadow for Android
  },
  notificationContent: {
    marginLeft: 10,
    flex: 1,
  },
  notificationText: {
    color: '#333', // Dark text for better readability
  },
  user: {
    fontWeight: 'bold',
  },
  time: {
    color: '#888',
    fontSize: 12,
    marginTop: 3,
  },
  noNotifications: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});

export default Notification;
