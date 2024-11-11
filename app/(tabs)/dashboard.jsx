import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const postsData = [
  { id: '1', user: 'Marion', content: 'Had a great day at the beach!', reactions: 12 },
  { id: '2', user: 'Michael', content: 'Just finished reading a new book.', reactions: 5 },
  { id: '3', user: 'Stephen', content: 'Excited for the weekend!', reactions: 20 },
  { id: '4', user: 'Christian', content: 'Coffee time!', reactions: 8 },
  { id: '5', user: 'IshowSpeed', content: 'Started a new workout routine!', reactions: 15 },
];

const reactionsData = [
  { type: '👍', count: 50 },  // Like
  { type: '❤️', count: 30 },  // Love
  { type: '😂', count: 15 },  // Haha
  { type: '😮', count: 10 },  // Wow
  { type: '😢', count: 5 },   // Sad
];

const App = () => {
  const reactionLabels = reactionsData.map(item => item.type);
  const reactionValues = reactionsData.map(item => item.count);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friendsly Dashboard</Text>

      <Text style={styles.subtitle}>User Posts</Text>
      <FlatList
        data={postsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postUser}>{item.user}</Text>
            <Text>{item.content}</Text>
            <Text style={styles.reactionCount}>{item.reactions} reactions</Text>
          </View>
        )}
      />

      <Text style={styles.subtitle}>Reactions Overview</Text>
      <View style={styles.chartContainer}>
        <BarChart
          data={{
            labels: reactionLabels,
            datasets: [{ data: reactionValues }],
          }}
          width={350}
          height={220}
          fromZero={true}
          chartConfig={{
            backgroundColor: '#f4f6f8',
            backgroundGradientFrom: '#f4f6f8',
            backgroundGradientTo: '#f4f6f8',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffffff',
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <View style={styles.legendContainer}>
          {reactionsData.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <Text style={styles.legendText}>{item.type}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f6f8',
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  post: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  postUser: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reactionCount: {
    marginTop: 5,
    color: '#888',
  },
  chartContainer: {
    alignItems: 'center',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '100%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendText: {
    fontSize: 32, // Increased size for better visibility
  },
});

export default App;
