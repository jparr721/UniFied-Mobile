import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style= {styles.header}>
        {this.props.children}
      </View>
    );
  }
}

export { Header };

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    //backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 50 : 20,
    paddingBottom: 20,
    paddingLeft: 20,
  },
});
