import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home';
import Home from './ProgramList';

const navigator = createStackNavigator({
  Home: { screen: Home },
  ProgramList: { screen: ProgramList }
});

const App = createAppContainer(navigator)

export default App;