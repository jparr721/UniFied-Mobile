import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Search, Tile, FilterShortcutBar } from '../common';

class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style= {styles.header}>
          <View style= {styles.imageContainer}>
            <Image source={require('../../images/gv1.png')}
              style={styles.image} />
          </View>
          <View style={styles.search}>
            <Search />
          </View>
        </View>
        <ScrollView style={{height:'75%'}}>
          <View  style={styles.tile}>
            <Tile />
          </View>
          <View  style={styles.tile}>
            <Tile />
          </View>
          <View  style={styles.tile}>
            <Tile />
          </View>
          <View  style={styles.tile}>
            <Tile />
          </View>
        </ScrollView>
        <FilterShortcutBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row'
  },
  filterShortcutBar: {

  },
  imageContainer: {
    paddingLeft: 20,
  },
  image: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  tile: {
    margin: 10,
  },
  search: {
    flex:1,
  }
});

export default Feed;
