import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultShowScreen from "./src/screens/ReslutShowScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigatior = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow:ResultShowScreen
  },
  {
    initialRouteKey: "Search",
    defaultNavigationOptions: {
      title: "Resturant Search",
    },
  }
);

export default createAppContainer(navigatior);
