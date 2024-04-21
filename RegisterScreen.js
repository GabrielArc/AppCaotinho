import React, { useState } from 'react';
import { View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Nova conta criada com sucesso
        const user = userCredential.user;
        console.log('Nova conta criada:', user);
        // Mostrar alerta de sucesso
        Alert.alert('Sucesso', 'Sua conta foi criada com sucesso!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao criar nova conta:', errorMessage);
        // Verificar se o erro é de e-mail já em uso
        if (errorCode === 'auth/email-already-in-use') {
          Alert.alert('Erro', 'Este e-mail já está sendo utilizado.');
        }
      });
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
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
        <Button title="Criar Conta" onPress={signUp} />
      </View>
    </TouchableWithoutFeedback>
  );
}
