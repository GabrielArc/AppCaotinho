// ServicesScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ServicesScreen({ navigation }) {
  const navigateToEnrollment = () => {
    navigation.navigate('Matrícula');
  };

  const navigateToReservation = () => {
    navigation.navigate('Reserva');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Seja bem-vindo à página de serviços!</Text>
      <Button title="Matricular em Aula" onPress={navigateToEnrollment} />
      <Button title="Reservar Hospedagem" onPress={navigateToReservation} />
    </View>
  );
}
