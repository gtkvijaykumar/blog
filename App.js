import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import indexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/blogContext";
import ShowScreen from "./src/screens/showScreen";
import CreateScreen from "./src/screens/CreateScreen";

const navigator = createStackNavigator(
  {
    Index: indexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
