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
            color={(Platform.OS === 'ios') ? 'white' : '#e65100'} />
        </View>
        <View style={styles.search}>
          <TextInput
            style={{color: (Platform.OS === 'ios') ? 'white' : '#e65100'}}
            onChangeText={console.log("changed")}
            underlineColorAndroid='#e65100'
            placeholderTextColor={(Platform.OS === 'ios') ? 'white' : '#e65100'}
            placeholder='Search'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: (Platform.OS === 'ios') ? '#e65100' : null,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: (Platform.OS === 'ios') ? 5 : null,
    paddingBottom: (Platform.OS === 'ios') ? 5 : null,
    margin: 15,
    marginLeft:30,
    borderRadius: (Platform.OS === 'ios') ? 10 : 10,
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
