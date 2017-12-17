import { DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Feed from './pages/Feed';

const Router = DrawerNavigator({
  Home: {
    path: '',
    screen: Feed,
    navigationOptions: {
      drawerLabel: 'Home',
    }
  },
  // Posts: {
  //
  // },
},
{
  initialRouteName: 'Home'
});

export default Router;
