import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';

import { Footer } from '../footer/index';
import { Header } from '../header/index';
import { useNavigation } from '@react-navigation/native';

export function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Mouse',
      description:
        'Mouse Gamer Redragon King Pro, 26000DPI, 5 Botoes, Wireless, Preto, M916-PRO-1K',
      price: 299.99,
      quantity: 1,
      image:
        'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/9/m916-pro-1k7.jpg',
    },
    {
      id: 2,
      name: 'PC Gamer Valquíria II',
      description: 'Intel i5-10400F, Radeon RX 580 8GB, 16GB DDR4, SSD 480GB',
      price: 2258.98,
      quantity: 1,
      image:
        'https://http2.mlstatic.com/D_NQ_NP_958483-MLB87382190173_072025-O.webp',
    },
  ]);

  // ✅ Estado para armazenar o endereço/CEP
  const [addressInput, setAddressInput] = useState('');

  const navigation = useNavigation();

  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const discount = subtotal >= 15000 ? 1500 : 0;
    const total = subtotal - discount;
    return { subtotal, discount, total };
  };

  const { subtotal, discount, total } = calculateTotals();

  const removeItemFromCart = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert(
        'Carrinho vazio',
        'Adicione produtos antes de finalizar a compra.'
      );
      return;
    }
    setCartItems([]);
    setAddressInput('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.drop}>
        <Header />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Seu Carrinho</Text>
          {cartItems.length === 0 ? (
            <View style={styles.emptyCart}>
              <Text style={styles.emptyText}>Seu carrinho está vazio</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Ver Produtos</Text>
              </TouchableOpacity>
            </View>
          ) : (
            cartItems.map((item) => (
              <View key={item.id} style={styles.productItem}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.productImage}
                />
                <View style={styles.productDetails}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productDescription}>
                    {item.description}
                  </Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, item.quantity - 1)}
                      style={styles.quantityButtonTouchable}>
                      <Text style={styles.quantityButton}>-</Text>
                    </TouchableOpacity>
                    <TextInput
                      style={styles.quantityInput}
                      value={String(item.quantity)}
                      keyboardType="numeric"
                      onChangeText={(text) => {
                        const newQuantity = Math.max(1, parseInt(text) || 1);
                        updateQuantity(item.id, newQuantity);
                      }}
                    />
                    <TouchableOpacity
                      onPress={() => updateQuantity(item.id, item.quantity + 1)}
                      style={styles.quantityButtonTouchable}>
                      <Text style={styles.quantityButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.productPrice}>
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeItemFromCart(item.id)}>
                  <Text style={styles.removeButtonText}>×</Text>
                </TouchableOpacity>
              </View>
            ))
          )}
                        <View style={styles.selectionContainer}>
                <Text style={styles.selectionTitle}>CEP</Text>
                <TextInput
                  style={styles.addressInput}
                  placeholder="Digite seu endereço"
                  placeholderTextColor="#aaa"
                  value={addressInput}
                  onChangeText={setAddressInput}
                />
              </View>

          {cartItems.length > 0 && (
            <>
              <View style={styles.summary}>
                <Text style={styles.summaryText}>
                  Subtotal: R$ {subtotal.toFixed(2)}
                </Text>
                {discount > 0 && (
                  <Text style={[styles.summaryText, { color: '#a0e7a0' }]}>
                    Desconto: -R$ {discount.toFixed(2)}
                  </Text>
                )}
                <Text style={[styles.summaryText, styles.totalText]}>
                  Total: R$ {total.toFixed(2)}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.checkoutButton}
                onPress={() => navigation.navigate('Comprar')}>
                <Text style={styles.checkoutButtonText}>Continuar Compra</Text>
              </TouchableOpacity>
            </>
          )}
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
  },
  drop: {
    zIndex: 999,
  },
  container: {
    padding: 16,
    marginHorizontal: '5%',
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
  selectionContainer: {
    marginTop: 15,
  },
  selectionTitle: {
    color: 'white',
    marginBottom: 5,
    fontSize: 16,
  },
  title: {
    fontSize: 35,
    color: '#a626a6',
    marginBottom: 16,
    fontWeight: 'bold',
    marginLeft: '3%',
  },
  emptyCart: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  emptyText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#6b21a8',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  productItem: {
    flexDirection: 'row',
    backgroundColor: '#3C0061',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    position: 'relative',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    color: 'gray',
    fontSize: 14,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityButtonTouchable: {
    paddingHorizontal: 10,
  },
  quantityButton: {
    color: 'white',
    fontSize: 20,
  },
  quantityInput: {
    width: 40,
    height: 40,
    borderColor: '#6b21a8',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#4b2c6f',
    marginHorizontal: 5,
  },
  productPrice: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#e0c3ff',
    borderRadius: 50,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  summary: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#3C0061',
    borderRadius: 8,
  },
  summaryText: {
    color: 'white',
    fontSize: 16,
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
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
  fundo: {
    paddingTop: 50,
  },
});