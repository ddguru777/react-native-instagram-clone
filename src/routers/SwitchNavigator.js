import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Loading from "../containers/LoadingContainer";
import Login from "../containers/LoginContainer";
import App from "./AppNavigator";
import Tab from "./TabNavigator";

const createRootNavigator = () => {
  return createSwitchNavigator(
    {
      Loading: Loading,
      // Tab, Tab,
      App: App,
      Login: Login,
    },
    {
      initialRouteName: "Loading"
    }
  );
};
  
export default createAppContainer(createRootNavigator());
