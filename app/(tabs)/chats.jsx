import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';

const initialMessages = [
  { id: '1', content: 'Hey everyone! How are you?', sender: 'Alice' },
  { id: '2', content: 'I’m doing well, thanks! What about you?', sender: 'Bob' },
  { id: '3', content: 'Just chilling here, how about you?', sender: 'Alice' },
  { id: '4', content: 'Looking forward to the meeting later!', sender: 'Bob' },
  { id: '5', content: 'Yes, see you at 3 PM!', sender: 'Alice' },
  { id: '6', content: 'Can’t wait to catch up, everyone!', sender: 'You' },
  { id: '7', content: 'How is the project coming along?', sender: 'Bob' },
  { id: '8', content: 'Almost done! Just a few tweaks left.', sender: 'You' },
];

// List of possible senders for replies
const possibleSenders = ['Alice', 'Bob'];

const oppositeReplies = {
  'Hello': 'Hi',
  'Hi': 'Hello',
  'How are you?': 'I’m fine, thank you!',
  'Thanks': 'You’re welcome!',
  'Yes': 'No',
  'No': 'Yes',
  // Add more pairs as needed
};

const GroupChat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessageContent, setNewMessageContent] = useState('');
  const [sender, setSender] = useState('You');

  const sendMessage = () => {
    if (newMessageContent.trim()) {
      const newMessage = {
        id: (messages.length + 1).toString(),
        content: newMessageContent,
        sender: sender,
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);

      // Get the opposite reply or a default message
      const replyMessageContent = oppositeReplies[newMessageContent] || "I don't understand.";

      // Randomly select a sender for the reply
      const randomSender = possibleSenders[Math.floor(Math.random() * possibleSenders.length)];
      const replyMessage = {
        id: (messages.length + 2).toString(),
        content: replyMessageContent,
        sender: randomSender,
      };
      setMessages(prevMessages => [...prevMessages, replyMessage]);

      setNewMessageContent('');
    }
  };

  const deleteMessage = (id) => {
    setMessages(prevMessages => prevMessages.filter(message => message.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Group Chat</Text>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={item.sender === 'You' ? styles.myMessage : styles.theirMessage}>
            <Text style={styles.senderText}>{item.sender}:</Text>
            <Text style={styles.messageText}>{item.content}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteMessage(item.id)}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessageContent}
          onChangeText={setNewMessageContent}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  messageText: {
    fontSize: 18,
    padding: 10,
    borderRadius: 5,
    color: '#000',
  },
  senderText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007BFF',
    marginBottom: 10,
    borderRadius: 10,
    maxWidth: '70%',
    padding: 10,
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e5e5ea',
    marginBottom: 10,
    borderRadius: 10,
    maxWidth: '70%',
    padding: 10,
  },
  deleteButton: {
    marginTop: 5,
    backgroundColor: '#FF6347',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

export default GroupChat;
