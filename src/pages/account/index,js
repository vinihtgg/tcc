import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { Footer } from '../footer/index';
import { Header } from '../header/index';

export function Perfil() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />

      <ScrollView>
        <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>João Silva</Text>
          <Text style={styles.profileEmail}>joao.silva@email.com</Text>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>

        {/* Informações pessoais */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📋 Informações Pessoais</Text>
          <Text style={styles.sectionItem}>Telefone: (11) 98765-4321</Text>
          <Text style={styles.sectionItem}>CPF: 123.456.789-00</Text>
        </View>

        {/* Endereço */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🚚 Endereço de Entrega</Text>
          <Text style={styles.sectionItem}>Rua dos Computadores, 123</Text>
          <Text style={styles.sectionItem}>São Paulo - SP</Text>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Editar Endereço</Text>
          </TouchableOpacity>
        </View>

        {/* Pagamentos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💳 Métodos de Pagamento</Text>
          <Text style={styles.sectionItem}>Visa ** 1234</Text>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Adicionar Cartão</Text>
          </TouchableOpacity>
        </View>

        {/* Pedidos recentes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🛒 Pedidos Recentes</Text>
          <Text style={styles.sectionItem}>PC Gamer RTX 4070 - Entregue ✅</Text>
          <Text style={styles.sectionItem}>Teclado Mecânico RGB - A caminho 🚚</Text>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Ver todos os pedidos</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de desejos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⭐ Lista de Desejos</Text>
          <Text style={styles.sectionItem}>Monitor 240Hz 27"</Text>
          <Text style={styles.sectionItem}>Mouse Logitech G Pro X</Text>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Ver lista completa</Text>
          </TouchableOpacity>
        </View>

        {/* Configurações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚙️ Configurações da Conta</Text>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Alterar Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Sair da Conta</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#000',
  },
  container: {
    marginHorizontal:'5%',
    marginTop: 50,
  },
  profileContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 20,
    padding: 30,
    marginBottom: 30,

    shadowColor: 'purple',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
    borderColor: 'purple',
    borderWidth: 1,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'purple',
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: 'lightgray',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: 'purple',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  editButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  section: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    borderColor: 'purple',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  sectionItem: {
    fontSize: 14,
    color: 'lightgray',
    marginBottom: 6,
  },
  linkButton: {
    marginTop: 10,
  },
  linkButtonText: {
    color: 'purple',
    fontWeight: '600',
  },
    fundo: {
    paddingTop: 50,
  },
});