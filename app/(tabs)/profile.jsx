import { View, Text, StyleSheet, Image, FlatList, Button } from 'react-native';
import React from 'react';
import animeImage from '../../assets/anime.png'; // Correctly import your image
import coverImage from '../../assets/cover.png'; // Add a cover image if you have one

const userProfile = {
  name: 'Ezekiel Capacite',
  bio: 'Just another social media enthusiast. Love to travel and share experiences!',
  profilePicture: animeImage, // Use the imported image here
  friends: [
    { id: '1', name: 'Marion Anthony Magallon' },
    { id: '2', name: 'Michael Olayvar' },
    { id: '3', name: 'Stephen Stanley' },
    { id: '4', name: 'Christian Sanchez' },
  ],
  posts: [
    { id: '1', content: 'Just got back from an amazing trip to the mountains!', time: '2 hours ago' },
    { id: '2', content: 'Excited for the weekend!', time: '1 day ago' },
    { id: '3', content: 'Check out my new recipe!', time: '3 days ago' },
  ],
};

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image source={coverImage} style={styles.coverImage} />
      <View style={styles.profileInfo}>
        <Image source={userProfile.profilePicture} style={styles.profilePicture} />
        <Text style={styles.name}>{userProfile.name}</Text>
        <Text style={styles.bio}>{userProfile.bio}</Text>
        <Text style={styles.friendsCount}>{userProfile.friends.length} Friends</Text>
        <Button title="Send Friend Request" onPress={() => alert('Friend request sent!')} />
      </View>
      
      <Text style={styles.friendsTitle}>Friends</Text>
      <FlatList
        data={userProfile.friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.friend}>
            <Text>{item.name}</Text>
          </View>
        )}
      />

      <Text style={styles.postsTitle}>Recent Posts</Text>
      <FlatList
        data={userProfile.posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postContent}>{item.content}</Text>
            <Text style={styles.postTime}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  coverImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: -60, // Overlap the profile picture with the cover image
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  friendsCount: {
    fontSize: 16,
    marginBottom: 20,
  },
  friendsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 20,
  },
  friend: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginTop: 20,
    marginLeft: 20,
  },
  post: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  postContent: {
    fontSize: 16,
  },
  postTime: {
    fontSize: 12,
    color: '#888',
  },
});

export default Profile;
