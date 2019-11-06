import { createStackNavigator } from "react-navigation-stack";
import Drawer from "./DrawerNavigator";
import Tab from "./TabNavigator";

console.disableYellowBox = true;

export default createStackNavigator(
  {
    // Tab: { screen: Tab },
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: "Drawer",
    // initialRouteName: "Tab",
    headerMode: "none"
  }
);