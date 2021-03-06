import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, FlatList,
         TouchableOpacity, Text, Platform } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import { Search, Tile, FilterShortcutBar, Header } from '../common';
import ActionButton from 'react-native-action-button';
import { toggleCreatePostModal, getAllPosts } from '../../actions';
import { connect } from 'react-redux';
import { CreatePost } from '../popups';

class Feed extends Component {
  componentWillMount() {
    this.props.loadPosts();
  }

  _renderItem = ({item}) => (
    <View  style={styles.tile} id={item.post_id}>
      <Tile content={item} />
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <CreatePost />
        <View style={styles.header}>
          <Header>
            <TouchableOpacity style={styles.sideNavOpacity}
              onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                <View style={styles.imageBorder}>
                  <View style={styles.imageWrapper}>
                    <Image source={require('../../images/profile.png')}
                      style={styles.image} />
                  </View>
                </View>
                <View style={styles.badgeContainer}>
                    <View style={styles.schoolLogoWrapper}>
                      <Image source={require('../../images/gv1.png')}
                      style={styles.schoolLogo} />
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.search}>
              <Search />
            </View>
          </Header>
        </View>
        <FlatList style={{height:'75%'}}
          data={this.props.posts}
          keyExtractor={(item, index) => item.post_id}
          renderItem={this._renderItem}
        />
        <FilterShortcutBar />
        <ActionButton
          offsetY={'20%'}
          offsetX={'5%'}
          buttonColor="#e65100"
          onPress={() => this.props.displayCreatePostModal()}>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#efefef',
  },
  header: {
    backgroundColor: 'white',
  },
  imageBorder: {
    borderRadius: 100,
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bdbdbd',
  },
  image: {
    flex:1,
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  imageWrapper: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  tile: {
    marginBottom: 10,
  },
  search: {
    flex:1,
  },
  badgeContainer: {
    flexDirection: 'column',
    position: 'absolute',
    paddingTop: 60,
    paddingLeft: 60,
  },
  schoolLogoWrapper: {
    height: 35,
    width: 35,
    padding: 5,
    backgroundColor: '#bdbdbd',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#e65100',
  },
  schoolLogo: {
    padding:2,
    resizeMode: 'contain',
    height: null,
    width: null,
    flex: 1,
  },
  sideNavOpacity: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    createPostModalVisible: state.createPostModalVisible,
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayCreatePostModal() {
    dispatch(toggleCreatePostModal());
  },
  loadPosts() {
    dispatch(getAllPosts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
