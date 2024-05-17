// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ServicesScreen from './ServicesScreen';
import EnrollmentScreen from './EnrollmentScreen';
import ReservationScreen from './ReservationScreen';
import NoticesScreen from './NoticesScreen';
import { initializeApp } from "firebase/app";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuislfrsi-it-_luh8lfr7j7NHLit2148",
  authDomain: "caotinho-bf58e.firebaseapp.com",
  databaseURL: "https://caotinho-bf58e-default-rtdb.firebaseio.com",
  projectId: "caotinho-bf58e",
  storageBucket: "caotinho-bf58e.appspot.com",
  messagingSenderId: "1011268283545",
  appId: "1:1011268283545:web:f37a2b1f51af259e359c08",
  measurementId: "G-3TEWNMECN4"
};

const app = initializeApp(firebaseConfig);

// Componente de Login
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
        <Stack.Screen name="Notices" component={NoticesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
