import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';

import { Footer } from '../footer/index';
import { Header } from '../header/index';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export function Like() {
  const navigation = useNavigation();

  // Estado com produtos favoritos (exemplo inicial)
  const [favoriteItems, setFavoriteItems] = useState([
    {
      id: 1,
      name: 'Mouse',
      description:
        'Mouse Gamer Redragon King Pro, 26000DPI, 5 Botoes, Wireless, Preto, M916-PRO-1K',
      price: 299.99,
      image:
        'https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/m/9/m916-pro-1k7.jpg',
    },
    {
      id: 2,
      name: 'PC Gamer Valquíria II',
      description: 'Intel i5-10400F, Radeon RX 580 8GB, 16GB DDR4, SSD 480GB',
      price: 2258.98,
      image:
        'https://http2.mlstatic.com/D_NQ_NP_958483-MLB87382190173_072025-O.webp',
    },
  ]);

  // Estado simples para itens do carrinho
  const [cartItems, setCartItems] = useState([]);

  // Remove item dos favoritos
  const removeFavorite = (id) => {
    Alert.alert(
      'Remover favorito',
      'Deseja remover este produto dos favoritos?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
          },
        },
      ]
    );
  };

  // Adiciona item ao carrinho
  const addToCart = (item) => {
    // Verifica se já está no carrinho
    const exists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (exists) {
      Alert.alert('Já está no carrinho');
      return;
    }
    setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    Alert.alert('Produto adicionado ao carrinho');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.drop}>
        <Header />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Seus Favoritos</Text>

          {favoriteItems.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Nenhum produto favorito.</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.buttonText}>Ver Produtos</Text>
              </TouchableOpacity>
            </View>
          ) : (
            favoriteItems.map((item) => (
              <View key={item.id} style={styles.productItem}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productDescription}>{item.description}</Text>
                  <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
                </View>

                <View style={styles.buttonsContainer}>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeFavorite(item.id)}
                  >
                    <Ionicons name="heart-outline" size={26} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={() => addToCart(item)}
                  >
                    <Text style={styles.addToCartButtonText}>Carrinho</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
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
  title: {
    fontSize: 35,
    color: '#a626a6',
    marginBottom: 16,
    fontWeight: 'bold',
    marginLeft: '3%',
  },
  emptyContainer: {
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
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  productName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    color: 'gray',
    fontSize: 14,
    marginVertical: 4,
  },
  productPrice: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // empilha verticalmente
  },
  addToCartButton: {
    backgroundColor: '#6b21a8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#6b21a8',
    borderRadius:5,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8, // espaço entre os botões
  },
  fundo: {
    paddingTop: 50,
  },
});