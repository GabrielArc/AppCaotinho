import React, { useState } from 'react';
import { View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, Text } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login bem sucedido
        const user = userCredential.user;
        console.log('Login bem sucedido:', user);
        // Mostrar alerta de sucesso
        Alert.alert('Sucesso', 'Login bem sucedido!');
        // Redirecionar para a tela de serviços
        navigation.navigate('Services');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao fazer login:', errorMessage);
        // Verificar se o erro é de credenciais inválidas
        if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
          Alert.alert('Erro', 'Email ou senha incorretos.');
        } else {
          // Se o erro não for de credenciais inválidas, mostrar mensagem genérica
          Alert.alert('Erro', 'Erro ao fazer login. Por favor, tente novamente.');
        }
      });
  };

  const goToRegisterScreen = () => {
    navigation.navigate('Register');
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 20 }}>Cãotinho</Text>
        <TextInput
          style={{ height: 40, width: '100%', marginBottom: 20, borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 10 }}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={{ height: 40, width: '100%', marginBottom: 20, borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 10 }}
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Button title="Entrar" onPress={signIn} />
        <Button title="Registrar" onPress={goToRegisterScreen} />
      </View>
    </TouchableWithoutFeedback>
  );
}
