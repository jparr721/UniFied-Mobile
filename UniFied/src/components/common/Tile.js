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
              <Text
                style={{color:'#494949', fontSize: 12}}>
                Jan 15 at 4:00pm
              </Text>
            </View>
            <View style={styles.dateAndOptions}>
              <Icon
                name='dots-horizontal'
                type="material-community"
                size={20}
                color='#e65100'/>
            </View>
          </View>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.description}>
            <Text style={{color:'#494949', flex: 1, fontSize: 15}}>
              Short Desccription will be displayed here.
              Tapping on the post will reveal more details!
            </Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.chatButton}>
              <View style={styles.chatButton}>
                <Icon
                  name='message-text'
                  type="material-community"
                  size={18}
                  color='#bdbdbd'/>
                <Text style={styles.buttonTitle}>Message</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <View style={styles.shareButton}>
                <Icon
                  name='share-variant'
                  type="material-community"
                  size={18}
                  color='#bdbdbd'/>
                <Text style={styles.buttonTitle}>Share</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.favoriteButton}>
              <View style={styles.favoriteButton}>
                <Icon
                  name='heart'
                  type="material-community"
                  size={18}
                  color='#bdbdbd'/>
                <Text style={styles.buttonTitle}>Favorite</Text>
              </View>
            </TouchableOpacity>
          </View>


          {/*<View style={styles.schoolLogoWrapper}>
            <Image source={require('../../images/gv1.png')}
            style={styles.schoolLogo} />
          </View>*/}
          {/*<Rating
            ratingCount={4}
            startingValue={3}
            readonly
            imageSize={20}
            onFinishRating={this.ratingCompleted}
            ratingColor='#4bacb8'
            style={styles.rating}
          />*/}


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
    backgroundColor: 'white',
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
  dateAndOptions: {
    flex:1,
    alignItems: 'center',
    justifyContent:'flex-end',
    flexDirection: 'row',
  },
  userName: {
    flex: 1,
    justifyContent:'center',
  },
  avatar: {
    backgroundColor: '#bdbdbd',
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
    //flexDirection: 'row',
  },
  schoolLogoWrapper: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    //marginTop: 10,
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
    flex: 1,
    //width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    //paddingRight: 10,
    //backgroundColor: 'green',
  },
  buttonTitle: {
    color: '#bdbdbd',
    marginLeft: 5,
    fontSize: 16,
  },
  favoriteButton: {
    flex: 1,
    //width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    //backgroundColor: 'green',
    //paddingLeft: 10,
    //paddingRight: 10,
  },
  shareButton: {
    flex: 1,
    //width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    //paddingLeft: 10,
    //backgroundColor: 'green',
  },
  buttons: {
    paddingTop: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    borderTopColor: '#bdbdbd',
    borderTopWidth: 0.5,
  },
  description: {
    flex: 1,
  }
});

export { Tile };
