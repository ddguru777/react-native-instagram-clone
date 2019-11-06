import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import SideBar from "../containers/SlidebarContainer";
import Usernavi from "./UserNavigator";
import Tab from "./TabNavigator";

export default createDrawerNavigator(
  {
    // Usernavi: { screen: Usernavi }
    Tabnavi: { screen: Tab }
  },
  {
    initialRouteName: "Tabnavi",
    contentComponent: props => <SideBar {...props} />
  }
);