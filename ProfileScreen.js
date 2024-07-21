// ProfileScreen.js
import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

const ProfileScreen = () => {
  const profile = {
    image: 'https://example.com/profile.jpg',
    followers: 100,
    following: 50,
    posts: 20,
  };

  const posts = [
    { id: 1, image: 'https://example.com/post1.jpg' },
    { id: 2, image: 'https://example.com/post2.jpg' },
    // ...
  ];

  return(
    <View style={{ flex: 1 }}>
    <View style={{ flexDirection: 'row', padding: 10 }}>
      <Image source={{ uri: profile.image }} style={{ width: 50, height: 50, borderRadius: 25 }} />
      <View style={{ marginLeft: 10 }}>
        <Text>{profile.followers} Followers</Text>
        <Text>{profile.following} Following</Text>
      </View>
    </View>
    <View style={{ padding: 10 }}>
      <Text>
        <Text style={{ fontWeight: 'bold' }}>{profile.posts}</Text> Posts
      </Text>
    </View>
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={{ width: '100%', height: 200 }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </View>
    );
};
export default ProfileScreen;
