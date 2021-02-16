import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginOrRegisterScreen, LoginScreen, RegisterScreen, ForfotPasswordScreen } from '../Screens'
import TabNavigator from './TabNavigation'




const Navigator = createStackNavigator(
  {
    LoginOrRegister: {
      screen: LoginOrRegisterScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen
    },
    ForgotPassword: {
      screen: ForfotPasswordScreen
    },
    TabNavigation: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#efefef'
      },
    }
  }
);

export default createAppContainer(Navigator);