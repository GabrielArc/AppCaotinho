import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, StatusBar, Button, Alert, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function ReservationScreen() {
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [petName, setPetName] = useState('');

  const handleCheckInChange = (event, date) => {
    setShowCheckInPicker(false);
    if (date) {
      setCheckInDate(date);
    }
  };

  const handleCheckOutChange = (event, date) => {
    setShowCheckOutPicker(false);
    if (date) {
      setCheckOutDate(date);
    }
  };

  const showCheckInPickerFunc = () => {
    setShowCheckInPicker(true);
    Keyboard.dismiss(); // Fecha o teclado ao abrir o DatePicker
  };

  const showCheckOutPickerFunc = () => {
    setShowCheckOutPicker(true);
    Keyboard.dismiss(); // Fecha o teclado ao abrir o DatePicker
  };

  const handleReservation = () => {
    const message = `Reserva para ${petName} feita para ${formatDate(checkInDate)} até ${formatDate(checkOutDate)}`;
    Alert.alert('Reserva Solicitada', message);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <StatusBar style="dark" />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 24 }}>Reserve sua Hospedagem</Text>
          </View>
          
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={showCheckInPickerFunc}>
              <Text>Check-in: {formatDate(checkInDate)}</Text>
            </TouchableOpacity>
            {showCheckInPicker && (
              <DateTimePicker
                testID="checkInPicker"
                value={checkInDate}
                mode="date"
                display="default"
                onChange={handleCheckInChange}
              />
            )}
          </View>

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={showCheckOutPickerFunc}>
              <Text>Check-out: {formatDate(checkOutDate)}</Text>
            </TouchableOpacity>
            {showCheckOutPicker && (
              <DateTimePicker
                testID="checkOutPicker"
                value={checkOutDate}
                mode="date"
                display="default"
                onChange={handleCheckOutChange}
              />
            )}
          </View>

          <View style={{ marginTop: 20 }}>
            <TextInput
              placeholder="Nome do Pet"
              style={{ borderWidth: 1, width: 200, padding: 5 }}
              value={petName}
              onChangeText={setPetName}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Button title="Confirmar Reserva" onPress={handleReservation} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
}
