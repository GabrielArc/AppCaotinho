// WelcomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const handleSignUpPress = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao meu aplicativo Expo!</Text>
      <Button title="Cadastre-se" onPress={handleSignUpPress} />
    </View>
  );
}
