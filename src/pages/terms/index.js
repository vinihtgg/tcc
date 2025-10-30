import {
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Footer } from '../footer/index';
import { Header } from '../header/index';

export function Terms() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.drop}>
      <Header />
      </View>
        <View style={styles.content}>
          <Text style={styles.title}>Termo de Responsabilidade - Game Loot</Text>
          <Text style={styles.date}>Última atualização: 11/06/2025</Text>

          <Text style={styles.subtitle}>1. Aceitação dos Termos</Text>
          <Text style={styles.text}>
            Ao acessar, navegar ou comprar em nosso site, o usuário declara estar de acordo com os termos aqui descritos. Caso não concorde, recomendamos que não utilize o site.
          </Text>

          <Text style={styles.subtitle}>2. Produtos e Garantia</Text>
          <Text style={styles.text}>
            Todos os produtos comercializados pela Game Loot são novos, com garantia do fabricante ou da própria loja, conforme especificado na página de cada item.
            A responsabilidade por defeitos de fabricação é do fabricante. Os computadores montados sob encomenda seguem as configurações acordadas com o cliente. 
            A Game Loot não se responsabiliza por incompatibilidades técnicas solicitadas pelo cliente.
          </Text>

          <Text style={styles.subtitle}>3. Informações do Usuário</Text>
          <Text style={styles.text}>
            O cliente é responsável pela veracidade dos dados fornecidos no cadastro e durante a compra. 
            Informações incorretas podem gerar atraso ou cancelamento no processamento do pedido.
          </Text>

          <Text style={styles.subtitle}>4. Uso Indevido</Text>
          <Text style={styles.text}>
            É proibido utilizar o site para fins ilícitos, fraudulentos ou que prejudiquem terceiros. 
            A Game Loot se reserva o direito de cancelar pedidos ou bloquear usuários que violem estes termos.
          </Text>

          <Text style={styles.subtitle}>5. Limitação de Responsabilidade</Text>
          <Text style={styles.text}>
            A Game Loot não se responsabiliza por danos causados por:
            {'\n'}- Instalação inadequada de hardware e software feita por terceiros;
            {'\n'}- Modificações não autorizadas nos equipamentos;
            {'\n'}- Uso indevido dos produtos;
            {'\n'}- Problemas técnicos decorrentes de mau uso ou negligência.
          </Text>

          <Text style={styles.subtitle}>6. Segurança e Privacidade</Text>
          <Text style={styles.text}>
            Seus dados são tratados com segurança e sigilo, conforme nossa Política de Privacidade. 
            Transações são protegidas por criptografia SSL e processadores de pagamento seguros.
          </Text>

          <Text style={styles.subtitle}>7. Alterações no Termo</Text>
          <Text style={styles.text}>
            A Game Loot poderá alterar este Termo a qualquer momento, sem aviso prévio. 
            Recomendamos que o cliente revise periodicamente esta página para estar ciente de possíveis mudanças.
          </Text>

          <Text style={styles.subtitle}>8. Legislação Aplicável</Text>
          <Text style={styles.text}>
            Este Termo é regido pelas leis da República Federativa do Brasil. 
            Em caso de controvérsia, o foro competente será o da comarca de [sua cidade/estado].
          </Text>

          <Text style={styles.consent}>
            Ao finalizar uma compra no site Game Loot, o cliente declara que leu, compreendeu e concorda com todos os termos acima.
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