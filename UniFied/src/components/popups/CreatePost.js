import React, { Component } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity,
         TextInput, ScrollView, Picker
       } from 'react-native';
import { Icon, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { Header} from '../common';
import { toggleCreatePostModal, submitPost,
         saveNewPostTitle, saveNewPostPrice,
         saveNewPostDescription, saveNewPostCategory
       } from '../../actions'

class Post extends Component {
  buildPostConfigObject() {
    return ({
      title: this.props.newPostTitle,
      price: this.props.newPostPrice,
      description: this.props.newPostDescription,
      category: this.props.newPostCategory,
    });
  }

  render() {
    return (
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.props.createPostModalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed")
          }}
        >
          <View style={styles.header}>
            <Header>
              <View style={styles.back}>
                <TouchableOpacity
                  onPress={() => this.props.displayCreatePostModal()}>
                  <Icon
                    name='arrow-left'
                    type="material-community"
                    size={25}
                    color='#e65100' />
                </TouchableOpacity>
              </View>
            </Header>
            <View style={styles.title}>
              <Text h3>New Post</Text>
            </View>
          </View>
          <ScrollView style={styles.content}>
            <View style={styles.input}>
              <TextInput
                style={{paddingLeft:0}}
                placeholderTextColor='#8d8d8d'
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Title'
                onChangeText={(text) => this.props.saveNewPostTitle(text)}
                value={this.props.newPostTitle}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={{paddingLeft:0}}
                placeholderTextColor='#8d8d8d'
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Price'
                onChangeText={(text) => this.props.saveNewPostPrice(text)}
                value={this.props.newPostPrice}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={{paddingLeft:0}}
                placeholderTextColor='#8d8d8d'
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Description'
                onChangeText={(text) => this.props.saveNewPostDescription(text)}
                value={this.props.newPostDescription}
                multiline={true}
              />
            </View>
            <View style={styles.input}>
              <View style={styles.category}>
                <View style={styles.categoryLabel}>
                  <Text style={{color: '#8d8d8d'}}>Category:</Text>
                </View>
                <View style={{flex:1}}>
                  <Picker
                    mode='dropdown'
                    selectedValue={this.props.newPostCategory}
                    onValueChange={(itemValue, itemIndex) => this.props.saveNewPostCategory(itemValue)}>
                    <Picker.Item label='Books' value='Books'/>
                    <Picker.Item label='Computers' value='Computers'/>
                    <Picker.Item label='Housing' value='Housing'/>
                    <Picker.Item label='Cars' value='Cars'/>
                  </Picker>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.publish}>
            <Button
              buttonStyle={{marginLeft:0}}
              title='PUBLISH'
              backgroundColor='#e65100'
              color='white'
              onPress={() => this.props.sendPostToApi(this.buildPostConfigObject())}
            />
          </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // Additional header styles as needed.
  },
  back: {
    flex: 1,
    alignItems: 'flex-start',
  },
  title: {
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
    paddingBottom: 50,
  },
  publish: {
    paddingBottom: 20,
  },
  input: {
    marginBottom:50,
    borderColor: '#8d8d8d',
    borderWidth: 2,
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  category: {
    flexDirection: 'row',
  },
  categoryLabel: {
    flex: 1,
    justifyContent: 'center',
  }
});

const mapStateToProps = (state) => {
  return {
    createPostModalVisible: state.createPostModalVisible,
    newPostTitle: state.newPostTitle,
    newPostPrice: state.newPostPrice,
    newPostDescription: state.newPostDescription,
    newPostCategory: state.newPostCategory,
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayCreatePostModal() {
    dispatch(toggleCreatePostModal());
  },
  sendPostToApi(data) {
    dispatch(submitPost(data));
  },
  saveNewPostTitle(data) {
    dispatch(saveNewPostTitle(data));
  },
  saveNewPostPrice(data) {
    dispatch(saveNewPostPrice(data));
  },
  saveNewPostDescription(data) {
    dispatch(saveNewPostDescription(data));
  },
  saveNewPostCategory(data) {
    dispatch(saveNewPostCategory(data));
  }
});

const CreatePost = connect(mapStateToProps, mapDispatchToProps)(Post);

export { CreatePost };
