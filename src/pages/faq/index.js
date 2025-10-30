import {
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Footer } from '../footer/index';
import { Header } from '../header/index';

export function Faq() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.drop}>
      <Header />
      </View>
        <View style={styles.content}>
          <Text style={styles.title}>Perguntas Frequentes (FAQ) - Game Loot</Text>
          <Text style={styles.date}>Última atualização: 26/06/2025</Text>

          <Text style={styles.question}>1. Quais produtos a Game Loot vende?</Text>
          <Text style={styles.answer}>
            Trabalhamos com computadores gamers, PCs para trabalho, notebooks e acessórios de informática de alta performance.
          </Text>

          <Text style={styles.question}>2. Os computadores são montados sob encomenda?</Text>
          <Text style={styles.answer}>
            Sim! Você pode montar seu computador conosco escolhendo as peças. Nossos técnicos cuidam da montagem e testes.
          </Text>

          <Text style={styles.question}>3. Como funciona a garantia dos produtos?</Text>
          <Text style={styles.answer}>
            Todos os produtos têm garantia de fábrica. Os PCs montados pela Game Loot possuem garantia própria de até 12 meses, conforme o item.
          </Text>

          <Text style={styles.question}>4. Em quanto tempo meu pedido é enviado?</Text>
          <Text style={styles.answer}>
            Pedidos são enviados entre 2 a 5 dias úteis após a confirmação do pagamento. Produtos montados sob encomenda podem levar um pouco mais, conforme demanda.
          </Text>

          <Text style={styles.question}>5. Quais formas de pagamento são aceitas?</Text>
          <Text style={styles.answer}>
            Aceitamos cartões de crédito, Pix, boleto bancário e pagamentos por intermediadores seguros como Mercado Pago e PagSeguro.
          </Text>

          <Text style={styles.question}>6. Posso acompanhar meu pedido?</Text>
          <Text style={styles.answer}>
            Sim! Após o envio, você receberá um código de rastreio para acompanhar sua entrega diretamente no site da transportadora.
          </Text>

          <Text style={styles.question}>7. É possível trocar ou devolver um produto?</Text>
          <Text style={styles.answer}>
            Sim. Conforme o Código de Defesa do Consumidor, você pode solicitar troca ou devolução em até 7 dias corridos após o recebimento. Entre em contato com nosso suporte.
          </Text>

          <Text style={styles.question}>8. Como entro em contato com o suporte?</Text>
          <Text style={styles.answer}>
            Você pode nos enviar um e-mail para suporte@gameloot.com.br ou entrar em contato pelo formulário no site.
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
  question: {
    color: 'purple',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
  },
  answer: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
  },
});