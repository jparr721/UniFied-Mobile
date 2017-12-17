import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

class Search extends Component {
  render() {
    return(
      <View style={styles.searchBarContainer}>
        <SearchBar
          clearIcon
          lightTheme
          onChangeText={() => console.log('changed')}
          placeholder='Search for an item...'
          containerStyle={{backgroundColor: 'rgba(0,0,0,0)',
                               borderTopWidth: 0,
                               borderBottomWidth: 0,
                               width: '100%'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    width: '100%',
    alignItems: 'flex-end',
    padding: 10,
  }
});

export { Search };
