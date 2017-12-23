import { DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Feed from './pages/Feed';

const Router = DrawerNavigator(
  {
    Home: {
      screen: Feed,
      navigationOptions: {
        drawerLabel: "Home",
      }
    },
  },
  {
    initialRouteName: 'Home'
  }
);

export default Router;
