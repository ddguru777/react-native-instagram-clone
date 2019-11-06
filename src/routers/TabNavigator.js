/* eslint-disable import/no-unresolved */
import React from 'react';
import { 
  Image, 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity 
} from 'react-native';

import { 
  createBottomTabNavigator, 
} from 'react-navigation-tabs';

import Usernavi from "./UserNavigator";
import Userprofile from "../containers/UserprofileContainer";

const iconHome = require('../../assets/images/tabbar/home.png');
const iconSearch = require('../../assets/images/tabbar/search.png');
const iconNotification = require('../../assets/images/tabbar/notification.png');
const iconFollow = require('../../assets/images/tabbar/follow.png');
const iconProfile = require('../../assets/images/tabbar/profile.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 3,
    borderTopColor: '#121212',
    paddingHorizontal: 10,
  },
  tabBarItemContainerFocused: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 3,
    borderTopColor: '#fff',
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    // tintColor: '#fff',
  },
  headerContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
  headerCaption: {
    fontFamily: 'Lato-Regular',
    color: '#fff',
    fontSize: 18,
  },
});

// Create a tab bar controller
export default createBottomTabNavigator(
  {
    Home: {
      screen: Usernavi
    },
    Search: {
      screen: Usernavi
    },
    Notification: {
      screen: Usernavi
    },
    Follow: {
      screen: Usernavi
    },
    Profile: {
      screen: Userprofile
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Home':
            iconSource = iconHome;
            break;
          case 'Search':
            iconSource = iconSearch;
            break;
          case 'Notification':
            iconSource = iconNotification;
            break;
          case 'Follow':
            iconSource = iconFollow;
            break;
          case 'Profile':
            iconSource = iconProfile;
            break;
          default:
            iconSource = iconHome;
        }
        return (
          <View style={styles.tabBarItemContainer, focused && styles.tabBarItemContainerFocused}>
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: "#121212",
        borderTopWidth: 0.5,
        borderTopColor: 'gray',
      },
      labelStyle: {
        color: "#000",
      },
    },
  },
);
