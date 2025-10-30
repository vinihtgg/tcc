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
import { Header } from '../header/index';
import { Footer } from '../footer/index';

const screenWidth = Dimensions.get('window').width;


const products = [
  {
    id: '1',
    name: 'Headset Gamer Redragon Branco H888W 40mm BT',
    price: 'R$ 261,98',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/08/h888w-luce-branco-6950376726278-imagem-1-fundo-preto-700x700.webp',
    info: ' *Drivers: 40mm, áudio de alta qualidade.\n *Conexão: Bluetooth, sem fio.\n *Microfone: Ajustável e com cancelamento de ruído.\n *Design: Confortável, com almofadas para os ouvidos e ajustável para diferentes tamanhos de cabeça.\n *Uso: Ideal para longas sessões de jogos, comunicação clara com outros jogadores.',
  },
  {
    id: '2',
    name: 'Mousepad Redragon Speed 900x400x3mm V2 Preto',
    price: 'R$ 123,00',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/05/mousepad-900x400x3mm-xeon-redragon-imagem-1-fundo-preto-700x700.webp',
    info: ' * Tamanho: 900x400mm (grande área para movimentos amplos do mouse).\n *Espessura: 3mm.\n *Superfície: Superfície de alta performance, suave, permitindo deslizar preciso e rápido do mouse.\n *Base: Antiderrapante para estabilidade durante o uso.\n *Cor: Preto, com o logo da Redragon.',
  },
  {
    id: '3',
    name: 'Mouse Redragon Reaping Plus Preto',
    price: 'R$ 260,90',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/07/mouse-reaping-plus-preto-m987p-k-redragon-imagem-2-fundo-preto-700x700.webp',
    info: ' *Sensor: Alta precisão (geralmente até 16000 DPI).\n *Botões: 8 botões programáveis.\n *Iluminação: RGB personalizável.\n *Ergonomia: Design ergonômico, ideal para sessões de jogos longas.\n *Conexão: Fio (USB).\n *Outros: Ajuste de DPI com controles rápidos, ideal para jogos que exigem alta precisão.',
  },
  {
    id: '4',
    name: 'MOUSE GAMER COBRA RGB ROSA COM BRANCO ',
    price: 'R$ 76,00',
    image:
      'https://cdn.awsli.com.br/2500x2500/1318/1318167/produto/225712938/m711pw-1-q1t3jueslf.png',
    info: '*Iluminação: RGB com várias cores e modos.\n *Design: Estiloso, nas cores rosa e branco.\n *Ergonomia: Confortável e leve, ideal para longas sessões de uso\n *Conexão: Fio (USB).\n *Outros: Ideal para quem busca um bom custo-benefício, com boa resposta para jogos casuais.',
  },
  {
    id: '5',
    name: 'Headset Fone C/mic Gamer Usb Vortex C3tech',
    price: 'R$ 344,17',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/05/headset-c3tech-vortex-imagem-1-fundo-preto-700x700.webp',
    info: '*Conexão: USB.\n *Áudio: Som de alta qualidade, ideal para jogos imersivos.\n *Microfone: Integrado, com boa captação para chat de voz.\n *Ergonomia: Almofadas acolchoadas e arco ajustável para conforto durante o uso prolongado.\n *Design: Fones grandes, estilo gamer com iluminação RGB.\n *Uso: Ideal para gamers que precisam de boa comunicação em jogos online.',
  },
  {
    id: '6',
    name: 'Teclado Mecanico 75% Preto Abnt2 Switch Marrom',
    price: 'R$ 299,00',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/05/teclado-kalkan-klk00016-blaze-pro-gasket-rgb-preto-imagem-1-fundo-preto-700x700.webp',
    info: '*Switches: Switches mecânicos marrons (feedback tátil e silencioso).\n *Layout: Compacto (75% das teclas de um teclado convencional).\n *Iluminação: RGB com diversas opções de personalização.\n *Teclas: Duráveis e com alta taxa de resposta, projetado para jogos e digitação.\n *Conexão:*Fio (USB).\n *Design: Compacto e robusto, ideal para setups mais compactos.',
  },
  {
    id: '7',
    name: 'monitor com tela curva de 34 polegadas, 240Hz',
    price: 'R$ 959,99',
    image:
      'https://www.mundoconectado.com.br/wp-content/uploads/2023/08/Novo-monitor-ASUS-Divulgacao-ASUS-912x569.jpg',
    info: ' *Tela ultrawide curva de 34 polegadas\n *Taxa de atualização: 240Hz (ideal para jogos competitivos)\n *Imersão visual ampliada',
  },
  {
    id: '8',
    name: 'Gabinete Redragon Deflect Preto Mid Tower Vidro',
    price: 'R$ 299,99',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/08/gabinete-redragon-deflect-preto-ca609b-imagem-1-fundo-preto-700x525.webp',
    info: ' *Lateral em vidro temperado\n *Suporte para sistemas gamers e boa refrigeração',
  },
  {
    id: '9',
    name: 'Gabinete Gamer Gamdias Aura Gc2 Elite Argb Preto',
    price: 'R$ 349,99',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/02/gabinete-gamdias-aura-gc2-elite-preto-imagem-10-fundo-preto-700x700.webp',
    info: ' *Cor: Preto\n *Painel frontal com iluminação ARGB\n *Mid Tower com vidro lateral e suporte a setups gamer',
  },
  {
    id: '10',
    name: 'Memoria Kingston Fury Beast DDR4 8gb 2666u',
    price: 'R$ 249,99',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/06/memoria-kingston-fury-beast-8-e-16gb-imagem-2-fundo-preto-700x700.webp',
    info: ' *Tipo: DDR4\n *Capacidade: 8GB\n *Frequência: 2666MHz\n *Modelo de alta confiabilidade para jogos e multitarefa',
  },
  {
    id: '11',
    name: 'Headset Gamer Mento PTO Redragon H270-RGB',
    price: 'R$ 320,99',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/05/headset-redragon-h270-rgb-mento-imagem-8-fundo-preto-700x700.webp',
    info: ' *Som estéreo imersivo\n Iluminação RGB\n *Microfone ajustável\n *Design confortável para longas sessões',
  },
  {
    id: '12',
    name: 'Water Cooler DeepCool V2 ARGB 360mm Preto',
    price: 'R$ 499,99',
    image:
      'https://levelupshop.com.br/wp-content/uploads/2025/08/water-cooler-deepcool-le360-v2-rgb-preto-imagem-1-fundo-preto-700x700.webp',
    info: ' *Tamanho: 360mm (3 ventoinhas)\n *Sistema de refrigeração líquida\n *Iluminação ARGB personalizável\n Indicado para alto desempenho e overclock',
  },


];


export function Perifericos({ setProdutos }) {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredItems, setHoveredItems] = useState({});
  const [compras, setCompras] = useState([]); // Estado para armazenar as compras

  const scrollToIndex = (index) => {
    const newIndex = Math.max(0, Math.min(index, products.length - 1));
    flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
    setCurrentIndex(newIndex);
  };

  const navitations = (item) => {
    setProdutos(item);
    navigation.navigate('Compra');
  };

  const renderItem = ({ item }) => {
    const isHovered = hoveredItems[item.id];

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.botao}>
          <TouchableOpacity
            style={[
              styles.comprar,
              isHovered && { backgroundColor: '#800060' },
            ]}
            onPress={() => navitations(item)}
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
        <View style={styles.drop}>
          <Header />
        </View>
        <Text style={styles.title}>Perifericos</Text>
        <Text style={styles.subtitle}>Recomendados</Text>
        <View style={styles.carouselWrapper}>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => scrollToIndex(currentIndex - 1)}>
            <Text style={styles.arrowText}>{'<'}</Text>
          </TouchableOpacity>

          <FlatList
            ref={flatListRef}
            data={products}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContainer}
          />

          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => scrollToIndex(currentIndex + 1)}>
            <Text style={styles.arrowText}>{'>'}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>Todos</Text>
          <View>
            <FlatList />
          </View>
        </View>
        <Footer />
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
  subtitle: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 21,
    padding: 20,
    marginLeft: 50,
    fontWeight: 'bold',
  },
  carouselWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '7%',
  },
  arrowButton: {
    width: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  arrowText: {
    color: 'white',
    fontSize: 28,
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 2,
    marginHorizontal: 10,
    width: screenWidth * 0.6,
    maxWidth: 200,
    height: 340,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'purple',
    borderWidth: 3,
  },
  image: {
    height: 180,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  price: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(128, 0, 128, 0.8)',
    marginTop: 13,
    borderRadius: 20,
    padding: 5,
    marginBottom: 5,
    borderWidth: 2,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
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
    position: 'absolute',
    right: 10,
    top: 5,
  },
});