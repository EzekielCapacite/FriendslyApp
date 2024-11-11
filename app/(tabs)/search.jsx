import React, { useState } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const usersData = [
  { id: '1', name: 'Alice Johnson', username: 'alicej', visibility: 'public' },
  { id: '2', name: 'Bob Smith', username: 'bobsmith', visibility: 'friends' },
  { id: '3', name: 'Charlie Brown', username: 'charlieb', visibility: 'private' },
  { id: '4', name: 'David Williams', username: 'davidw', visibility: 'public' },
  { id: '5', name: 'Emma Watson', username: 'emmawatson', visibility: 'friends' },
  { id: '6', name: 'Frank Ocean', username: 'frankocean', visibility: 'public' },
  { id: '7', name: 'Grace Hopper', username: 'gracehopper', visibility: 'friends' },
  { id: '8', name: 'Hannah Arendt', username: 'hannaharendt', visibility: 'private' },
  { id: '9', name: 'Isaac Newton', username: 'isaacn', visibility: 'public' },
  { id: '10', name: 'Jack Daniels', username: 'jackdaniels', visibility: 'friends' },
  { id: '11', name: 'Katherine Johnson', username: 'katherinej', visibility: 'public' },
  { id: '12', name: 'Leonardo DiCaprio', username: 'leodicaprio', visibility: 'friends' },
  { id: '13', name: 'Maya Angelou', username: 'mayaangelou', visibility: 'private' },
  { id: '14', name: 'Nelson Mandela', username: 'nelsonm', visibility: 'public' },
  { id: '15', name: 'Oprah Winfrey', username: 'oprahw', visibility: 'friends' },
  { id: '16', name: 'Peter Parker', username: 'peterp', visibility: 'public' },
  { id: '17', name: 'Quentin Tarantino', username: 'quentint', visibility: 'private' },
  { id: '18', name: 'Rihanna Fenty', username: 'rihanna', visibility: 'friends' },
  { id: '19', name: 'Steve Jobs', username: 'stevejobs', visibility: 'public' },
  { id: '20', name: 'Tina Fey', username: 'tinafey', visibility: 'friends' },
];

const PostSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(usersData);
  const [friendRequestsSent, setFriendRequestsSent] = useState({});

  const filterUsers = (term) => {
    setSearchTerm(term);
    const filtered = usersData.filter(user => 
      user.name.toLowerCase().includes(term.toLowerCase()) || 
      user.username.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const sendFriendRequest = (user) => {
    setFriendRequestsSent(prev => ({ ...prev, [user.id]: true }));
    alert(`Friend request sent to ${user.name}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search profiles"
          value={searchTerm}
          onChangeText={filterUsers} 
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => filterUsers(searchTerm)}>
          <Icon name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      
      {filteredUsers.length === 0 && searchTerm.length > 0 ? (
        <Text style={styles.noResults}>No results found for "{searchTerm}"</Text>
      ) : (
        <FlatList
          data={filteredUsers}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.user}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userUsername}>@{item.username}</Text>
              <Text style={styles.userVisibility}>Visibility: {item.visibility}</Text>
              {friendRequestsSent[item.id] ? (
                <Text style={styles.requestSent}>Friend Request Sent</Text>
              ) : (
                <TouchableOpacity style={styles.requestButton} onPress={() => sendFriendRequest(item)}>
                  <Text style={styles.requestButtonText}>Send Friend Request</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f2f5', // Light gray background
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff', // White background for search bar
    elevation: 3,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingLeft: 10,
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  user: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginVertical: 5,
    elevation: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userUsername: {
    fontSize: 16,
    color: '#007BFF', // Link color for username
  },
  userVisibility: {
    fontSize: 14,
    color: 'gray',
  },
  requestButton: {
    marginTop: 5,
    backgroundColor: '#28a745',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  requestButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  requestSent: {
    marginTop: 5,
    color: 'gray',
    fontStyle: 'italic',
  },
  noResults: {
    padding: 10,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PostSearch;
