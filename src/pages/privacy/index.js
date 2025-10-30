import {
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Footer } from '../footer/index';
import { Header } from '../header/index';

export function Privacy() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.drop}>
      <Header />
      </View>
        <View style={styles.content}>
          <Text style={styles.title}>Política de Privacidade - Game Loot</Text>
          <Text style={styles.date}>Última atualização: 26/06/2025</Text>

          <Text style={styles.subtitle}>1. Coleta de Informações</Text>
          <Text style={styles.text}>
            Coletamos dados como nome, CPF, e-mail, telefone, endereço e informações de pagamento durante o uso do site. 
            Também registramos dados de navegação, como IP e páginas visitadas, para melhorar sua experiência.
          </Text>

          <Text style={styles.subtitle}>2. Uso das Informações</Text>
          <Text style={styles.text}>
            As informações são utilizadas para processar pedidos, oferecer suporte, enviar promoções (com consentimento) e aprimorar nossos serviços e o site.
          </Text>

          <Text style={styles.subtitle}>3. Compartilhamento de Dados</Text>
          <Text style={styles.text}>
            A Game Loot não vende ou compartilha seus dados com terceiros, exceto quando necessário para:
            {'\n'}- Processamento de pagamentos;
            {'\n'}- Entregas com transportadoras parceiras;
            {'\n'}- Cumprimento de exigências legais.
          </Text>

          <Text style={styles.subtitle}>4. Segurança das Informações</Text>
          <Text style={styles.text}>
            Utilizamos criptografia SSL e práticas de segurança modernas para proteger seus dados contra acessos não autorizados e vazamentos.
          </Text>

          <Text style={styles.subtitle}>5. Cookies</Text>
          <Text style={styles.text}>
            Utilizamos cookies para melhorar a navegação. Você pode gerenciá-los nas configurações do seu navegador.
          </Text>

          <Text style={styles.subtitle}>6. Direitos do Usuário</Text>
          <Text style={styles.text}>
            Você pode acessar, corrigir ou solicitar a exclusão de seus dados a qualquer momento. Também pode cancelar o recebimento de e-mails promocionais.
          </Text>

          <Text style={styles.subtitle}>7. Alterações nesta Política</Text>
          <Text style={styles.text}>
            Esta política pode ser atualizada sem aviso prévio. Recomendamos revisá-la periodicamente para estar ciente das mudanças.
          </Text>

          <Text style={styles.subtitle}>8. Contato</Text>
          <Text style={styles.text}>
            Em caso de dúvidas, entre em contato pelo e-mail: suporte@gameloot.com.br.
          </Text>

          <Text style={styles.consent}>
            Ao continuar navegando ou realizar uma compra no site Game Loot, você concorda com nossa Política de Privacidade.
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
  date: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 20,
  },
  subtitle: {
    color: 'purple',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
  },
  consent: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 40,
  },
});