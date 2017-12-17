import React, { Component } from 'react';
import { View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { toggleFilterModal } from '../../actions';
import { Text } from 'react-native-elements';

class FilterContainer extends Component {
  render() {
    return(
      <View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.props.filterModalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed")
          }}
        >
          <View style={styles.backdrop}>
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => this.props.displayFilterModal()}>
                <View style={styles.close}>
                  <Icon
                    name='chevron-down'
                    type="material-community"
                    size={28}
                    color='#9e9e9e'
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.title}>
                <Text h4>Select Categories</Text>
              </View>
              <View style={styles.row}>
                <View style={styles.iconBox}>
                  <Icon
                    name='laptop-chromebook'
                    type="material-community"
                    size={28}
                    color='#80DEEA'/>
                  <Text>Computers</Text>
                </View>
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
                    name='car'
                    type="material-community"
                    size={28}
                    color='#80DEEA'/>
                  <Text>Cars</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.iconBox}>
                  <Icon
                    name='calendar'
                    type="material-community"
                    size={28}
                    color='#80DEEA'/>
                  <Text>Events</Text>
                </View>
                <View style={styles.iconBox}>
                  <Icon
                    name='chair-school'
                    type="material-community"
                    size={28}
                    color='#80DEEA'/>
                  <Text>Furniture</Text>
                </View>
                <View style={styles.iconBox}>
                  <Icon
                    name='content-cut'
                    type="material-community"
                    size={28}
                    color='#80DEEA'/>
                  <Text>Haircuts</Text>
                </View>
                <View style={styles.iconBox}>
                  <Icon
                    name='television'
                    type="material-community"
                    size={28}
                    color='#80DEEA'/>
                  <Text>TVs</Text>
                </View>
              </View>
              <View style={styles.row}>
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
                    name='cellphone'
                    type="material-community"
                    size={28}
                    color='#80DEEA'/>
                  <Text>Phones</Text>
                </View>
                <View style={styles.iconBox}>
                  <Icon
                    name='power-plug'
                    type="material-community"
                    size={28}
                    color='#80DEEA'/>
                  <Text>Electronics</Text>
                </View>
                <View style={styles.iconBox}>
                  <Icon
                    name='gamepad-variant'
                    type="material-community"
                    size={28}
                    color='#80DEEA'/>
                  <Text>Video Games</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.iconBox}>
                  <Icon
                    name='briefcase'
                    type="material-community"
                    size={28}
                    color='#80DEEA'/>
                  <Text>Jobs</Text>
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
                    name='sunglasses'
                    type="material-community"
                    size={28}
                    color='#80DEEA'/>
                  <Text>Accessories</Text>
                </View>
                <View style={styles.iconBox}>
                  <Icon
                    name='soccer'
                    type="material-community"
                    size={28}
                    color='#80DEEA'/>
                  <Text>IM Sports</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => this.props.displayFilterModal()}>
          <Icon
            name='chevron-up'
            type="material-community"
            size={28}
            color='#9e9e9e'
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backdrop:{
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    width: '100%',
    height: '80%',
  },
  title: {
    alignItems: 'center',
  },
  close: {
    marginBottom: 10,
  },
  row: {
    marginTop:30,
    marginBottom:30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconBox: {
    flex:1,
    alignItems: 'center',
    flexDirection: 'column',
  },
});

const mapStateToProps = (state) => {
  return {
    filterModalVisible: state.filterModalVisible,
  };
};

const mapDispatchToProps = (dispatch) => ({
  displayFilterModal() {
    dispatch(toggleFilterModal());
  },
});

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps)
(FilterContainer);

export { Filter };
