import React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './homepage';
import CreatePage from './createpage';
import UpDelete from './updelpage';
import ClassPage from './classepage';
import Homie from './stackComposant';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#fff',
                    inactiveTintColor: 'lightgray',
                    activeBackgroundColor: '#93C6E7',
                    inactiveBackgroundColor: '#5C469C',
                        style: {
                              backgroundColor: '#5C469C',
                        }
                 }}
                      screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                          let iconName;
              
                          if (route.name === 'Liste des etudiants') {
                            iconName = focused
                              ? 'people'
                              : 'people-outline';
                          } else if (route.name === 'Classe') {
                            iconName = focused ? 'home' : 'home-outline';
                          } else if (route.name === "creation d'étudiant") {
                            iconName = focused ? 'school' : 'school-outline';
                          } 
                          // You can return any component that you like here!
                          return <Ionicons name={iconName} size={32} color={color} />;
                        }
                      })
                      
                    }
            >
                <Tab.Screen name="Liste des etudiants" component={Homie} />
                <Tab.Screen name="Classe" component={ClassPage} />
                <Tab.Screen name="creation d'étudiant" component={CreatePage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
  }