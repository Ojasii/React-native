import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const topStories = [
    { id: 1, name: 'John Doe', image: 'https://example.com/johndoe.jpg' },
    { id: 2, name: 'Jane Doe', image: 'https://example.com/janedoe.jpg' },
    // ...
  ];

  const posts = [
    { id: 1, user: 'John Doe', image: 'https://example.com/post1.jpg' },
    { id: 2, user: 'Jane Doe', image: 'https://example.com/post2.jpg' },
    // ...
  ];

  const profileSuggestions = [
    { id: 1, name: 'John Doe', image: 'https://example.com/johndoe.jpg' },
    { id: 2, name: 'Jane Doe', image: 'https://example.com/janedoe.jpg' },
    // ...
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 100, backgroundColor: '#f0f0f0' }}>
        <FlatList
          data={topStories}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 25 }} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
              <Text>{item.user}</Text>
            </View>
          )}
        />
      </View>
      <View style={{ height: 100, backgroundColor: '#f0f0f0' }}>
        <FlatList
          data={profileSuggestions}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 25 }} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity style={{ position: 'absolute', bottom: 20, right: 20 }} onPress={() => navigation.navigate('Profile')}>
        <Image source={{ uri: 'https://example.com/profile.jpg' }} style={{ width: 50, height: 50, borderRadius: 25 }} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;