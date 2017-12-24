import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
          <View style={styles.headerInfo}>
            <View style={styles.userName}>
              <Text
                style={{fontWeight: 'bold', color:'#494949', fontSize: 15}}>
                Michael Jordan
              </Text>
            </View>
            <View style={styles.date}>
              <Text style={{fontStyle: 'italic',}}>1/15/2018</Text>
            </View>
          </View>
        </View>
        <View style={styles.mainContent}>
          <Text style={{fontStyle: 'italic', color:'#494949'}}>Short Desccription will be displayed here.</Text>
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
    //borderRadius: 10,
    backgroundColor: '#80DEEA',
    elevation: 2,
  },
  tileHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerInfo: {
    height: '100%',
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    paddingLeft:10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  date: {
    flex:1,
    alignItems: 'flex-end',
    justifyContent:'center',
  },
  userName: {
    flex: 1,
    justifyContent:'center',
  },
  avatar: {

  },
  mainContent: {
    borderRadius: 5,
    flex:1,
    width: '100%',
    backgroundColor: '#efefef',
    alignSelf: 'center',
    padding:10,
  },
});

export { Tile };
