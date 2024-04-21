// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ServicesScreen from './ServicesScreen';
import EnrollmentScreen from './EnrollmentScreen';
import ReservationScreen from './ReservationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Matrícula" component={EnrollmentScreen} />
        <Stack.Screen name="Reserva" component={ReservationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
