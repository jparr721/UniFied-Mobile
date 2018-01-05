import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// Screen imports
import Feed from './pages/Feed';
import Profile from './pages/Profile';

const Router = DrawerNavigator(
  {
    Home: {
      screen: Feed,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({tintColor}) => (
          <Icon
            name='newspaper'
            type="material-community"
            size={25}
            color={tintColor}/>
        ),
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        drawerLabel: "Profile",
        drawerIcon: ({tintColor}) => (
          <Icon
            name='account'
            type="material-community"
            size={25}
            color={tintColor}/>
        ),
      }
    },
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#4bacb8',
      inactiveTintColor: '#707070',
      labelStyle: {
        fontSize: 18,
      },
    },
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);

export default Router;
