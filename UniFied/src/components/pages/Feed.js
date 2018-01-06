import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView,
          TouchableOpacity, Text, Platform } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { Search, Tile, FilterShortcutBar } from '../common';
import ActionButton from 'react-native-action-button';

class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style= {styles.header}>
          <TouchableOpacity style={styles.sideNavOpacity}
            onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <View style={styles.imageBorder}>
                <View style={styles.imageWrapper}>
                  <Image source={require('../../images/profile.png')}
                    style={styles.image} />
                </View>
              </View>
              <View style={styles.badgeContainer}>
                  <View style={styles.schoolLogoWrapper}>
                    <Image source={require('../../images/gv1.png')}
                    style={styles.schoolLogo} />
                  </View>
              </View>
          </TouchableOpacity>
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
        <ActionButton
          offsetY={'20%'}
          offsetX={'5%'}
          buttonColor="#e65100"></ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#efefef',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 50 : 20,
    paddingLeft: 20,
  },
  imageBorder: {
    borderRadius: 100,
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8d8d8d',
  },
  image: {
    flex:1,
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  imageWrapper: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  tile: {
    marginBottom: 10,
  },
  search: {
    flex:1,
  },
  badgeContainer: {
    flexDirection: 'column',
    position: 'absolute',
    paddingTop: 60,
    paddingLeft: 60,
    //backgroundColor: 'blue'
  },
  schoolLogoWrapper: {
    height: 35,
    width: 35,
    padding: 5,
    //paddingBottom: 5,
    backgroundColor: '#bdbdbd',
    borderRadius: 100,
  },
  schoolLogo: {
    padding:2,
    resizeMode: 'contain',
    height: null,
    width: null,
    flex: 1,

  },
  sideNavOpacity: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default Feed;
