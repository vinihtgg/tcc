import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export function Footer() {
  const navigation = useNavigation();

  const handleEmailPress = () => {
    Linking.openURL('mailto:gameloot2025@gmail.com');
  };

  const handleLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.footer}>
      {/* Links Institucionais */}
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
          <Text style={styles.link}>Termos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
          <Text style={styles.link}>Privacidade</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Support')}>
          <Text style={styles.link}>Suporte</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Faq')}>
          <Text style={styles.link}>FAQ</Text>
        </TouchableOpacity>
      </View>

      {/* Informações de Contato */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>CNPJ: 12.345.678/0001-95</Text>
        <Text style={styles.infoText}>Endereço: R. Estados Unidos, 170 - Jardim America, Assis Chateaubriand - PR, 85935-000</Text>
        <Text style={styles.infoText}>Atendimento: Seg-Sex, 07:00h às 18:30h</Text>
      </View>

      {/* Redes Sociais e E-mail */}
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => handleLink('https://www.instagram.com/gameloot2025?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==')}>
          <Ionicons name="logo-instagram" size={22} color="purple" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEmailPress}>
          <Fontisto name="email" size={20} color="purple" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLink('https://facebook.com/gameloot')}>
          <Ionicons name="logo-facebook" size={22} color="purple" style={styles.icon} />
        </TouchableOpacity>

      </View>

      {/* Formas de Pagamento */}
      <View style={styles.paymentContainer}>
        <FontAwesome name="cc-visa" size={24} color="white" style={styles.icon} />
        <FontAwesome name="cc-mastercard" size={24} color="white" style={styles.icon} />
      </View>

      {/* Direitos autorais */}
      <Text style={styles.copyright}>
        © {new Date().getFullYear()} Game Loot. Todos os direitos reservados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#111',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderTopColor: '#2d2d2d',
    borderTopWidth: 1,
  },
  linksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  link: {
    color: 'purple',
    marginHorizontal: 8,
    fontSize: 14,
    marginBottom: 6,
  },
  infoContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  infoText: {
    color: '#aaa',
    fontSize: 12,
  },
  socialContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  paymentContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 8,
  },
  copyright: {
    color: '#999',
    fontSize: 12,
    textAlign: 'center',
  },
});