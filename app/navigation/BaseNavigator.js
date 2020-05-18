import React from "react";
import HistoryScreen from "../screens/HistoryScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import colors from '../config/colors'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from "react-navigation";




const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: {
      title: "Home",
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.green
      },

    },

  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    defaultNavigationOptions: {
      title: "Settings",
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.green
      },

    },

  }
);

const HistoryStack = createStackNavigator(
  {
    History: HistoryScreen,
  },
  {
    defaultNavigationOptions: {
      title: "History",
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.green
      },

    },

  }
);

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Settings: SettingsStack,
      History: HistoryStack,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Home") {
            // To Do Set Tab Icon here
          } else if (routeName === "Settings") {
            // To Do Set Tab Icon here
          } else if (routeName === "History") {
            // To Do Set Tab Icon here
          }
        },
      }),
      // To Do Set Tab Focus  color here
      tabBarOptions: {
        activeTintColor: "green",
        inactiveTintColor: "gray",
      },
    }
  )
);
