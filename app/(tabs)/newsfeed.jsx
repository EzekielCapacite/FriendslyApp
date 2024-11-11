import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

// Sample data for posts
const postsData = [
  {
    id: '1',
    user: 'Alice',
    content: 'Just bought this vintage bicycle!',
    image: require('../../assets/bicycle.png'),
    timestamp: '2 hours ago',
    likes: 0,
    comments: [],
  },
  {
    id: '2',
    user: 'Bob',
    content: 'Check out this beautiful antique table I found!',
    image: require('../../assets/antique.png'),
    timestamp: '1 day ago',
    likes: 0,
    comments: [],
  },
  {
    id: '3',
    user: 'Charlie',
    content: 'Selling my old guitar if anyone is interested!',
    image: require('../../assets/guitar.png'),
    timestamp: '3 days ago',
    likes: 0,
    comments: [],
  },
  {
    id: '4',
    user: 'David',
    content: 'Got a new smartphone! Loving it!',
    image: require('../../assets/smartphone.png'),
    timestamp: '5 days ago',
    likes: 0,
    comments: [],
  },
  {
    id: '5',
    user: 'Eve',
    content: 'Just sold my camera! Goodbye, old friend.',
    image: require('../../assets/camera.png'),
    timestamp: '1 week ago',
    likes: 0,
    comments: [],
  },
];

const Newsfeed = () => {
  const [posts, setPosts] = useState(postsData);
  const [commentText, setCommentText] = useState('');

  const handleLike = (id) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (id) => {
    if (commentText.trim()) {
      setPosts(prevPosts =>
        prevPosts.map(post =>
          post.id === id
            ? { ...post, comments: [...post.comments, commentText] }
            : post
        )
      );
      setCommentText(''); // Clear the input
    }
  };

  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.headerContainer}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
      <Text style={styles.postContent}>{item.content}</Text>
      <Image source={item.image} style={styles.postImage} />
      <Text>Likes: {item.likes} {item.likes > 0 && '👍'}</Text>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(item.id)}>
          <Text style={styles.actionText}>👍</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment..."
          value={commentText}
          onChangeText={setCommentText}
          onSubmitEditing={() => {
            handleComment(item.id);
          }}
        />
      </View>
      {item.comments.length > 0 && (
        <View style={styles.commentsContainer}>
          {item.comments.map((comm, index) => (
            <Text key={index} style={styles.commentText}>{comm}</Text>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Newsfeed</Text>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f2f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  post: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 15,
    padding: 15,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
  },
  postContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  actionButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#007BFF',
    borderWidth: 1,
    borderRadius: 5,
  },
  actionText: {
    color: '#007BFF',
  },
  commentInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginLeft: 10,
  },
  commentsContainer: {
    marginTop: 10,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Newsfeed;

