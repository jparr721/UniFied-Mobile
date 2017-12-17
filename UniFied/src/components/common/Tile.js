import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

class Tile extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Avatar
            small
            rounded
            icon={{name: 'account-circle', size: 24}}
            overlayContainerStyle={styles.avatar}
            onPress={() => this.props.displayUserMenu()}
            activeOpacity={0.7}
          />
        </View>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 4,
    backgroundColor: '#80DEEA',
  },
  avatar: {
    margin: 5,
  }
});

export { Tile };
