import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Footer } from '../footer/index';
import { Header } from '../header/index';

export function Support() {
  const navigation = useNavigation();

  const handleSubmit = () => {
    Alert.alert('Suporte', 'Sua mensagem foi enviada com sucesso!');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.drop}>
      <Header />
      </View>
        <View style={styles.content}>
          <Text style={styles.title}>Central de Suporte - Game Loot</Text>
          <Text style={styles.subtitle}>Fale com a gente</Text>
          <Text style={styles.description}>
            Precisa de ajuda com seu pedido, produto ou tem alguma dúvida? Preencha o formulário abaixo ou entre em contato pelos canais informados.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Seu nome"
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Seu e-mail"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Escreva sua mensagem"
            placeholderTextColor="#aaa"
            multiline
            numberOfLines={6}
          />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar Mensagem</Text>
          </TouchableOpacity>

          <Text style={styles.subtitle}>Canais de Atendimento</Text>
          <Text style={styles.info}>
            📧 E-mail: gameloot2025@gmail.com{'\n'}
            📞 WhatsApp: (44) 99563-2765 {'\n'}
            ⏰ Atendimento: Segunda à sexta, das 09h às 18h
          </Text>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  drop: {
    zIndex:999,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  content: {
    padding: 20,
  },
  title: {
    color: 'purple',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'purple',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#222',
    color: 'white',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  info: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 40,
  },
});