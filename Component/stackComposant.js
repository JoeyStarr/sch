import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './homepage';
import CreatePage from './createpage';
import UpDelete from './updelpage';
import ClassPage from './classepage';
import UpClasse from './upclasse';
import MyTabs from './bottomComposant';


const Stack = createStackNavigator();

export default function Homie() {
  return (
    
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
              }}
        >
            <Stack.Screen name="Home" component={MyTabs} />
            <Stack.Screen name="Update" component={UpDelete} />
            <Stack.Screen name="Classe" component={ClassPage} />
            <Stack.Screen name="UpdateClasse" component={UpClasse} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}