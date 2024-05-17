import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, Modal, TouchableOpacity, ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';

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

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function NoticesScreen() {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log('Setting up Firebase subscription...');
    const q = query(collection(db, 'notices'), where('recipient', '==', 'student'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const noticesList = [];
      snapshot.forEach((doc) => {
        noticesList.push({ ...doc.data(), id: doc.id });
      });
      console.log('Notices fetched:', noticesList);
      setNotices(noticesList);
    }, (error) => {
      Alert.alert('Erro', 'Erro ao carregar recados: ' + error.message);
    });

    return () => {
      console.log('Unsubscribing from Firebase...');
      unsubscribe();
    };
  }, []);

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const openModal = (notice) => {
    setSelectedNotice(notice);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedNotice(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openModal(item)} style={styles.noticeItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message.length > 50 ? item.message.substring(0, 50) + '...' : item.message}</Text>
      <Text style={styles.date}>{new Date(item.date.seconds * 1000).toLocaleDateString()}</Text>
    </TouchableOpacity>
  );

  if (notices.length === 0) {
    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.message}>Nenhum recado disponível.</Text>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={notices}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        {selectedNotice && (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>{selectedNotice.title}</Text>
                  <Text style={styles.modalMessage}>{selectedNotice.message}</Text>
                  <Text style={styles.modalDate}>{new Date(selectedNotice.date.seconds * 1000).toLocaleDateString()}</Text>
                  <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Fechar</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          </Modal>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  noticeItem: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    marginTop: 5,
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
