import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './homepage';
import CreatePage from './createpage';
import UpDelete from './updelpage';

const Stack = createStackNavigator();

export default function Homie() {
  return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
              }}
        >
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Update" component={UpDelete} />
        </Stack.Navigator>
  );
}