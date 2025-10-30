import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';

import { Footer } from '../footer/index';
import { Header } from '../header/index';
import { Anuncio } from '../anuncio/index';
import { Itens } from '../itens/index';
import Cartaz1 from '../../assets/top.jpeg';
import Cartaz2 from '../../assets/top2.jpeg';
import Cartaz3 from '../../assets/top3.jpeg';
import Cartaz4 from '../../assets/top4.jpeg';
import { useNavigation } from '@react-navigation/native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const products = [
  { id: '1', image: Cartaz1 },
  { id: '2', image: Cartaz2 },
  { id: '3', image: Cartaz3 },
  { id: '4', image: Cartaz4 },
];

export function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const intervalRef = useRef(null);
  const navigation = useNavigation();

  const scrollToIndex = (index) => {
    if (index >= 0 && index < products.length) {
     flatListRef.current.scrollToIndex({ animated: true, index });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % products.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3000); // Muda a cada 3 segundos

    return () => {
      clearInterval(intervalRef.current); // Limpa o intervalo ao desmontar
    };
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image}  resizeMode="cover"/>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.drop}>
      <Header />
      </View>
      <ScrollView>
        <View style={styles.carouselWrapper}>
          <FlatList
            ref={flatListRef}
            data={products}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View>
        <Itens/>
        </View>
        <View>
        <Anuncio/>
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
  drop: {
    zIndex:999,
  },
  carouselWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  card: {
    backgroundColor: 'black',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  image: {
  width: screenWidth  * 0.5,
  height: screenHeight * 0.5,
  resizeMode: 'stretch',
  borderRadius:10,
  },
  fundo: {
    paddingTop: 50,
  },
});