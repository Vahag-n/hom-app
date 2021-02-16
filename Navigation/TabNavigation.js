import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createSwitchNavigator } from 'react-navigation'

import {
  NewsScreen,
  HomeScreen,
  ForumsScreen,
  EventsScreen,
  MessageScreen,
  SettingsScreen,
  DirectoryScreen,
  PrivilegeScreen,
  MyProfileScreen,
  AddEventsScreen,
  CreateTopicScreen,
  ForumDetailsScreen,
  NotificationScreen,
  PrivilegeDetailsScreen
} from '../Screens'
import { Icon } from 'react-native-elements'

import store from '../Redux/Store'
import { showMoreAction } from '../Redux/Actions/ui'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Main Page'
    }
  }
})

const NotificationStack = createStackNavigator({
  Notification: {
    screen: NotificationScreen
  }
})

const MessageStack = createStackNavigator({
  Message: {
    screen: MessageScreen
  }
})

const DirectoryStack = createStackNavigator({
  Directory: {
    screen: DirectoryScreen
  }
})

const EventsStack = createStackNavigator({
  Events: {
    screen: EventsScreen
  },
  AddEvent: {
    screen: AddEventsScreen
  }
})

const NewStack = createStackNavigator({
  News: {
    screen: NewsScreen
  }
})

const ForumsStack = createStackNavigator({
  Forums: {
    screen: ForumsScreen
  },
  ForumDetails: {
    screen: ForumDetailsScreen
  },
  CreateTopic: {
    screen: CreateTopicScreen
  }
})
const PrivilegeStack = createStackNavigator({
  Privilege: {
    screen: PrivilegeScreen
  },
  PrivilegeDetails: {
    screen: PrivilegeDetailsScreen
  }
})

const MyProfileStack = createStackNavigator({
  MyProfile: {
    screen: MyProfileScreen,
    navigationOptions: {
      headerShown: false
    }
  }
})

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsScreen
  }
})

const MoreNavStack = createSwitchNavigator({
  Events: EventsStack,
  News: NewStack,
  Forums: ForumsStack,
  Privilege: PrivilegeStack,
  MyProfile: MyProfileStack,
  Settings: SettingsStack
})

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Notification: { screen: NotificationStack },
    Message: { screen: MessageStack },
    Directory: { screen: DirectoryStack },
    MoreNav: {
      screen: MoreNavStack,
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[
          navigation.state.index
        ].routes[navigation.state.routes[navigation.state.index].index]
        let tabBarVisible = true
        if (routeName === 'AddEvent' || routeName === 'ForumDetails') {
          tabBarVisible = false
        }

        return {
          title: 'More',
          tabBarVisible
        }
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        let iconType
        let color = focused ? '#c93146' : 'gray'
        if (routeName === 'Home') {
          iconType = `ionicon`
          iconName = `ios-home`
        } else if (routeName === 'Notification') {
          iconType = `ionicon`
          iconName = `ios-notifications`
        } else if (routeName === 'Message') {
          iconType = `font-awesome`
          iconName = `comments`
        } else if (routeName === 'Directory') {
          iconType = `font-awesome`
          iconName = `star`
        } else if (routeName === 'MoreNav') {
          iconType = `font-awesome`
          iconName = `ellipsis-h`
        }
        return (
          <Icon
            name={iconName}
            type={iconType}
            size={25}
            color={color || tintColor}
          />
        )
      },

      tabBarOnPress: ({ navigation, defaultHandler }) => {
        const { routeName } = navigation.state
        if (routeName === 'MoreNav') {
          const { showMore } = store.getState().uiReducer
          store.dispatch(showMoreAction(!showMore))
        } else {
          store.dispatch(showMoreAction(false))
          defaultHandler()
        }
      }
    }),

    tabBarOptions: {
      activeTintColor: '#3B3B3B',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12,
        marginBottom: 10
      },
      style: {
        height: 90,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderWidth: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 20
      },
      tabStyle: {
        paddingTop: 15,
        paddingVertical: 12
      }
    }
  }
)

export default TabNavigator
