import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Profile extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title: {
    fontSize:30,
  }
});

export default Profile;
