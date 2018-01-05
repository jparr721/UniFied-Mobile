import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { Icon } from 'react-native-elements';

class Search extends Component {
  render() {
    return(
      <View style={styles.searchBarContainer}>
        <View style={styles.icon}>
          <Icon
            name='magnify'
            type="material-community"
            size={18}
            color='#494949'/>
        </View>
        <View style={styles.search}>
          <TextInput
            onChangeText={console.log("changed")}
            underlineColorAndroid='#494949'
            placeholderTextColor='#494949'
            placeholder='Search'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: (Platform.OS === 'ios') ? '#b4ffff' : null,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 15,
    borderRadius: 10,
    flexDirection: 'row',
  },
  search: {
    flex: 1,
  },
  icon: {
    justifyContent: 'center',
  }
});

export { Search };
