import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Avatar, Icon, Rating } from 'react-native-elements';

class Tile extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.tileHeader}>
          <Avatar
            small
            rounded
            icon={{name: 'account-circle', size: 28}}
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
          <View style={styles.leftSide}>
            <Text style={{fontStyle: 'italic', color:'#494949', flex: 1}}>
              Short Desccription will be displayed here.
              Tapping on the post will reveal more details!
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity>
                <View style={styles.chatButton}>
                  <Icon
                    name='message-text'
                    type="material-community"
                    size={18}
                    color='#4bacb8'/>
                  <Text style={styles.buttonTitle}>Message</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.favoriteButton}>
                  <Icon
                    name='heart'
                    type="material-community"
                    size={18}
                    color='#4bacb8'/>
                  <Text style={styles.buttonTitle}>Favorite</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.shareButton}>
                  <Icon
                    name='share-variant'
                    type="material-community"
                    size={18}
                    color='#4bacb8'/>
                  <Text style={styles.buttonTitle}>Share</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rightSide}>
            <View style={styles.schoolLogoWrapper}>
              <Image source={require('../../images/gv1.png')}
              style={styles.schoolLogo} />
            </View>
            <Rating
              ratingCount={4}
              startingValue={3}
              readonly
              imageSize={20}
              onFinishRating={this.ratingCompleted}
              ratingColor='#4bacb8'
              style={styles.rating}
            />
            <Text style={{alignItems: 'center'}}>User Rating</Text>
          </View>
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
    backgroundColor: '#4bacb8',
  },
  mainContent: {
    borderRadius: 5,
    flex:1,
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingLeft:10,
    paddingTop: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  rightSide: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    paddingBottom:10,
    //backgroundColor: '#b4ffff',
  },
  leftSide: {
    width: '80%',
    //backgroundColor: 'red',
    //flexDirection: 'row',
  },
  schoolLogoWrapper: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    marginTop: 10,
    flex: 1,
    //backgroundColor: 'red',

  },
  schoolLogo: {
    resizeMode: 'contain',
    height: null,
    width: null,
    flex: 1,
  },
  chatButton: {
    //width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: 10,
  },
  buttonTitle: {
    color: '#4bacb8',
    marginLeft: 5,
    fontSize: 16,
  },
  favoriteButton: {
    //width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    //backgroundColor: 'green',
    paddingLeft: 10,
    paddingRight: 10,
  },
  shareButton: {
    //width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  buttons: {
    height: '30%',
    width: '100%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  rating: {
    //color: 'red',
    padding: 5,
  }
});

export { Tile };
