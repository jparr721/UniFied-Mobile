import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { Filter } from '../popups/Filter';

class FilterShortcutBar extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.seeMore}>
          <Filter />
        </View>
        <View style={styles.filters}>
          <View style={styles.iconBox}>
            <Icon
              name='book-open-variant'
              type="material-community"
              size={28}
              color='#80DEEA'/>
            <Text>Books</Text>
          </View>
          <View style={styles.iconBox}>
            <Icon
              name='home-modern'
              type="material-community"
              size={28}
              color='#80DEEA'/>
            <Text>Housing</Text>
          </View>
          <View style={styles.iconBox}>
            <Icon
              name='account-multiple-plus'
              type="material-community"
              size={28}
              color='#80DEEA'/>
            <Text>Clubs</Text>
          </View>
          <View style={styles.iconBox}>
            <Icon
              name='school'
              type="material-community"
              size={28}
              color='#80DEEA'/>
            <Text>Tutoring</Text>
          </View>
          <View style={styles.iconBox}>
            <Icon
              name='calendar'
              type="material-community"
              size={28}
              color='#80DEEA'/>
            <Text>Events</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  seeMore: {

  },
  filters: {

    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconBox: {
    flex:1,
    alignItems: 'center',
    flexDirection: 'column',
  }
});

export { FilterShortcutBar };
