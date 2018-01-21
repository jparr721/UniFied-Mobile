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
            color='white' />
        </View>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            onChangeText={console.log("changed")}
            underlineColorAndroid='#e65100'
            placeholderTextColor='white'
            placeholder='Search'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#e65100',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: (Platform.OS === 'ios') ? 5 : null,
    paddingBottom: (Platform.OS === 'ios') ? 5 : null,
    margin: 15,
    marginLeft:30,
    borderRadius: 10,
    flexDirection: 'row',
  },
  search: {
    flex: 1,
  },
  icon: {
    justifyContent: 'center',
    paddingLeft: 5,
  },
  input: {
    color: 'white',
    padding: (Platform.OS === 'ios') ? null : 5,
    paddingLeft: 10,
  },
});

export { Search };
