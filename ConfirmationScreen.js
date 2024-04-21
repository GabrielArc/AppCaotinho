import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ConfirmationScreen({ navigation }) {
  const handleGenerateReceipt = () => {
    // Lógica para gerar o comprovante de hospedagem
    // Por enquanto, vamos apenas navegar de volta para a tela inicial
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Comprovante de Hospedagem</Text>
      <Button title="Gerar Comprovante" onPress={handleGenerateReceipt} />
    </View>
  );
}
