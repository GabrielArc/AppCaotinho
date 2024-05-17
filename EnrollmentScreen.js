import React, { useState } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView, Platform, StatusBar, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function MatriculaScreen() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [diasSelecionados, setDiasSelecionados] = useState([]);

  const handleMatricula = () => {
    // Aqui você pode implementar a lógica para processar a matrícula
    // Por enquanto, vamos apenas mostrar uma mensagem com os dados coletados
    const message = `Nome: ${nome}\nIdade: ${idade}\nEmail: ${email}\nTelefone: ${telefone}\nEndereço: ${endereco}\nDias de aula: ${diasSelecionados.join(', ')}`;
    Alert.alert('Matrícula Confirmada', message);
  };

  const toggleDiaSelecionado = (dia) => {
    const index = diasSelecionados.indexOf(dia);
    if (index === -1) {
      setDiasSelecionados([...diasSelecionados, dia]);
    } else {
      setDiasSelecionados(diasSelecionados.filter((item) => item !== dia));
    }
  };

  const renderDiasAula = () => {
    const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
    return diasSemana.map((dia) => (
      <TouchableOpacity
        key={dia}
        style={{
          backgroundColor: diasSelecionados.includes(dia) ? 'blue' : 'gray',
          padding: 10,
          margin: 5,
          borderRadius: 5,
        }}
        onPress={() => toggleDiaSelecionado(dia)}
      >
        <Text style={{ color: 'white' }}>{dia}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <StatusBar style="dark" />
        <View style={{ width: '80%' }}>
          <Text style={{ fontSize: 24, marginBottom: 20 }}>Formulário de Matrícula</Text>
          <TextInput
            placeholder="Nome"
            style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            placeholder="Idade"
            style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            value={idade}
            onChangeText={setIdade}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Email"
            style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Telefone"
            style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Endereço"
            style={{ borderWidth: 1, marginBottom: 20, padding: 5 }}
            value={endereco}
            onChangeText={setEndereco}
          />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
            {renderDiasAula()}
          </View>
          <Button title="Confirmar Matrícula" onPress={handleMatricula} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
