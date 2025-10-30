import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

import { Footer } from '../footer/index';
import { Header } from '../header/index';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function Comprar() {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [addressInput, setAddressInput] = useState('');

  const paymentMethods = [
    { id: 'credit_card', label: 'Cartão de Crédito' },
    { id: 'debit_card', label: 'Cartão de Débito' },
    { id: 'boleto', label: 'Boleto Bancário' },
    { id: 'pix', label: 'PIX' },
  ];

  const RadioButton = ({ label, selected, onPress }) => (
    <TouchableOpacity style={styles.radioButtonContainer} onPress={onPress}>
      <View
        style={[styles.radioButton, selected && styles.radioButtonSelected]}>
        {selected && <View style={styles.radioButtonInner} />}
      </View>
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.drop}>
        <Header />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Area de pagamento</Text>
          <View style={styles.selectionContainer}>
            <Text style={styles.selectionTitle}>Forma de Pagamento</Text>
            {paymentMethods.map((method) => (
              <RadioButton
                key={method.id}
                label={method.label}
                selected={selectedPayment === method.id}
                onPress={() => setSelectedPayment(method.id)}
              />
            ))}
          </View>

          {/* Campo de endereço */}
          <View style={styles.selectionContainer}>
            <Text style={styles.selectionTitle}>Endereço de Entrega</Text>
            <TextInput
              style={styles.addressInput}
              placeholder="Digite seu endereço"
              placeholderTextColor="#aaa"
              value={addressInput}
              onChangeText={setAddressInput}
            />
          </View>
          <TouchableOpacity
            style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fundo}>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
  container: {
    padding: 16,
    marginHorizontal: '5%',
  },
  drop: {
    zIndex: 999,
  },
  fundo: {
    paddingTop: 50,
  },
  title: {
    fontSize: 35,
    color: '#a626a6',
    marginBottom: 16,
    fontWeight: 'bold',
    marginLeft: '3%',
  },
  selectionContainer: {
    marginTop: 20,
    backgroundColor: '#3C0061',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
  },
  selectionTitle: {
    color: '#a626a6',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#a626a6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    borderColor: '#6b21a8',
  },
  radioButtonInner: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#6b21a8',
  },
  radioButtonLabel: {
    color: 'white',
    fontSize: 16,
  },
  addressInput: {
    height: 40,
    borderColor: '#6b21a8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: '#4b2c6f',
    fontSize: 16,
  },

  checkoutButton: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
  },
});