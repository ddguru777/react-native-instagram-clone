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

const iconHome = require('../../assets/images/tabbar/home.png');
const iconSchedule = require('../../assets/images/tabbar/schedule.png');
const iconProfile = require('../../assets/images/tabbar/profile.png');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: '#555CC4',
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
    Schedule: {
      screen: Usernavi
    },
    Profile: {
      screen: Usernavi
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
          case 'Schedule':
            iconSource = iconSchedule;
            break;
          case 'Profile':
            iconSource = iconProfile;
            break;
          default:
            iconSource = iconHome;
        }
        return (
          <View style={styles.tabBarItemContainer}>
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
