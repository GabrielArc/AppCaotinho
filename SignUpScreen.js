// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Senha:', password);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cadastre-se</Text>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={text => setName(text)}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
      />
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
      />
      <Button title="Cadastrar" onPress={handleSignUp} />
    </View>
  );
}
