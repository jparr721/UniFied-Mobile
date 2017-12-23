import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

class Tile extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.tileHeader}>
          <Avatar
            small
            rounded
            icon={{name: 'account-circle', size: 24}}
            overlayContainerStyle={styles.avatar}
            onPress={() => this.props.displayUserMenu()}
            activeOpacity={0.7}
          />
        </View>
        <View style={styles.mainContent}>

        </View>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#80DEEA',
  },
  tileHeader: {
    marginBottom: 10,
  },
  avatar: {

  },
  mainContent: {
    borderRadius: 10,
    height:'75%',
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});

export { Tile };
