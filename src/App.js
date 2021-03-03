import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './screens/Landing';
import HomeScreen from './screens/Home';
import Search from './component/Search'


const RootStack = createStackNavigator(); 


export default function App() {
  return (
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Landing" component={LandingScreen} />
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Search" component={Search} />
        </RootStack.Navigator>
      </NavigationContainer>
  );
}


