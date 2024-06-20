import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import indexScreen from './src/screens/indexScreen';

const navigator = createStackNavigator(
  {
    Index : indexScreen
},
{
 initialRouteName: 'Index',
 defaultNavigationOptions: {
  title : 'Blogs'
 }
}
);

const App = createAppContainer(navigator);

export default ()=> {
  return <App/>;
};