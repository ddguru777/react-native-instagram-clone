import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import Home from "../containers/HomeContainer";
import Photoslider from "../containers/PhotosliderContainer";
import Userprofile from "../containers/UserprofileContainer";

const stackNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Userprofile: { screen: Userprofile },
    Photoslider: { screen: Photoslider },
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(stackNavigator);
