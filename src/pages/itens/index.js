import React, { useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const products = [
    {
    id: '1',
    name: 'Air Cooler Deepcool Ag200 Am4/am5/lga1700/115x/1200',
    price: 'R$ 80,67',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/04/air-cooler-deepcool-gammaxx-series-ag200-preto-imagem-2-fundo-preto-700x700.webp',
  },  {
    id: '2',
    name: 'Adaptador Usb 4 Em 1 Keytime Synczone Kyt00034',
    price: 'R$ 63,78',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/04/kyt00034-synczone-keytime-imagem-1-fundo-preto-700x700.webp',
  },  {
    id: '3',
    name: 'Controle Gamer Kalkan Tyr Preto Pc Switch Android Ios',
    price: 'R$ 193,48',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/05/gamepad-klk00004-tyr-preto-imagem-1-fundo-preto-700x700.webp',
  },  {
    id: '4',
    name: 'Combo Teclado + Mouse Redragon Bs-7092 Sem Fio',
    price: 'R$ 84,92',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/04/bs-7092-combo-mouse-e-teclado-preto-6950376724403-imagem-2-fundo-preto-700x700.webp',
  },  {
    id: '5',
    name: 'Mouse Redragon Hana Rgb Usb/bt/wireless M694',
    price: 'R$ 144,91',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/07/mouse-redragon-m694-rgb-hana-preto-imagem-2-fundo-preto-700x700.webp',
  },  {
    id: '6',
    name: 'Gabinete Kalkan Joturn 4 Fans Argb Mid Tower Vidro',
    price: 'R$ 337,498',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/05/gabinete-klk00038-joturn-preto-com-4-fans-imagem-7-fundo-preto-700x700.webp',
  },
  {
    id: '7',
    name: 'Headset Gamer Redragon Branco H888W 40mm BT',
    price: 'R$ 261,98',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/08/h888w-luce-branco-6950376726278-imagem-1-fundo-preto-700x700.webp',
  },
  {
    id: '8',
    name: 'Mousepad Redragon Speed 900x400x3mm V2 Preto',
    price: 'R$ 123,00',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/05/mousepad-900x400x3mm-xeon-redragon-imagem-1-fundo-preto-700x700.webp',
  },
  {
    id: '9',
    name: 'Mouse Redragon Reaping Plus Preto',
    price: 'R$ 260,90',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/07/mouse-reaping-plus-preto-m987p-k-redragon-imagem-2-fundo-preto-700x700.webp',
  },
  {
    id: '10',
    name: 'MOUSE GAMER COBRA RGB ROSA COM BRANCO ',
    price: 'R$ 76,00',
    image:
      'https://cdn.awsli.com.br/2500x2500/1318/1318167/produto/225712938/m711pw-1-q1t3jueslf.png',
  },
  {
    id: '11',
    name: 'Headset Fone C/mic Gamer Usb Vortex C3tech',
    price: 'R$ 344,17',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/05/headset-c3tech-vortex-imagem-1-fundo-preto-700x700.webp',
  },
  {
    id: '12',
    name: 'Teclado Mecanico 75% Preto Abnt2 Switch Marrom',
    price: 'R$ 299,00',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/05/teclado-kalkan-klk00016-blaze-pro-gasket-rgb-preto-imagem-1-fundo-preto-700x700.webp',
  },
  {
    id: '13',
    name: 'monitor com tela curva de 34 polegadas, 240Hz',
    price: 'R$ 959,99',
    image:
      'https://www.mundoconectado.com.br/wp-content/uploads/2023/08/Novo-monitor-ASUS-Divulgacao-ASUS-912x569.jpg',
  },
  {
    id: '14',
    name: 'Gabinete Redragon Deflect Preto Mid Tower Vidro',
    price: 'R$ 299,99',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/08/gabinete-redragon-deflect-preto-ca609b-imagem-1-fundo-preto-700x525.webp',
  },
  {
    id: '15',
    name: 'Gabinete Gamer Gamdias Aura Gc2 Elite Argb Preto',
    price: 'R$ 349,99',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/02/gabinete-gamdias-aura-gc2-elite-preto-imagem-10-fundo-preto-700x700.webp',
  },
  {
    id: '16',
    name: 'Memoria Kingston Fury Beast DDR4 8gb 2666u',
    price: 'R$ 249,99',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/06/memoria-kingston-fury-beast-8-e-16gb-imagem-2-fundo-preto-700x700.webp',
  },
];

export function Itens() {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredItems, setHoveredItems] = useState({});
  const navigation = useNavigation();
  const [compras, setCompras] = useState([]);


  const navitations = (item) => {
    setProdutos(item);
    navigation.navigate('Like');
  };

  const scrollToIndex = (index) => {
    const newIndex = Math.max(0, Math.min(index, products.length - 1));
    setCurrentIndex(newIndex);
  };


  const renderItem = ({ item }) => {
    const isHovered = hoveredItems[item.id];

    return (
      <View style={styles.gridItem}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.botao}>
<TouchableOpacity
  style={[
    styles.comprar,
    isHovered && { backgroundColor: '#800060' },
  ]}
  onPress={() => navigateToCompra(item)}
  onPressIn={() =>
    setHoveredItems({ ...hoveredItems, [item.id]: true })
  }
  onPressOut={() =>
    setHoveredItems({ ...hoveredItems, [item.id]: false })
  }>
  <Text style={styles.btn}>Comprar</Text>
  <Icon
    name="shopping-cart"
    size={20}
    color="white"
    style={styles.icon}
  />
</TouchableOpacity>

        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Text style={styles.subtitle}>Novos produtos</Text>
        <View style={styles.grid}>
          <FlatList
            ref={flatListRef}
            data={products}
            renderItem={renderItem}
            numColumns={4} // Define o número de colunas
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContainer}
          />
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
  grid: {
    flex: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  subtitle: {
    color: 'white',
    fontSize: 35,
    marginLeft: 50,
    margin:20,
    marginTop:100,
    fontWeight: 'bold',
    padding:10,
    paddingLeft:16,
    borderRadius:15,
    backgroundColor:'purple',
    width:300,
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  gridItem: {
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'purple',
    borderWidth: 3,
    height:350,
    width:300,
    margin:20,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  price: {
    fontSize: 20,
    color: 'white',
    marginVertical: 5,
  },
comprar: {
    paddingHorizontal: 70,
    backgroundColor: 'purple',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  btn: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
    botao: {
    justifyContent: 'flex-end',
    marginTop: 'auto',
    marginBottom: 10,
  },
  icon: {
    marginLeft: 5,
  },
});