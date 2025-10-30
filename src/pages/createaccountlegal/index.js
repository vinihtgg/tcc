import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import logo from '../../assets/gameloot.png';

import { useNavigation } from '@react-navigation/native';
import { Footer } from '../footer/index';

export function CreateAccountlegal() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Cadastro de Pessoa Jurídica</Text>

        <text style={styles.txtz}>Quero me cadastra como pessoa  ?</text>
        <View style={styles.box}>
          <TouchableOpacity style={styles.buttonz} onPress={() => navigation.navigate('CreateAccount')}>
            <Text style={styles.buttonTextz}>Fisica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonz} onPress={() => navigation.navigate('CreateAccountlegal')}>
            <Text style={styles.buttonTextz}>Juridica</Text>
          </TouchableOpacity>
        </View>

        {/* Razão Social */}
        <Text style={styles.txt}>Razão Social</Text>
        <TextInput
          placeholder="Razão Social"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        {/* Nome Fantasia */}
        <Text style={styles.txt}>Nome Fantasia</Text>
        <TextInput
          placeholder="Nome Fantasia"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        {/* CNPJ */}
        <Text style={styles.txt}>CNPJ</Text>
        <TextInput
          placeholder="00.000.000/0000-00"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        {/* Inscrição Estadual */}
        <Text style={styles.txt}>Inscrição Estadual</Text>
        <TextInput
          placeholder="Inscrição Estadual"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        {/* Inscrição Municipal */}
        <Text style={styles.txt}>Inscrição Municipal</Text>
        <TextInput
          placeholder="Inscrição Municipal"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        {/* Segmento */}
        <Text style={styles.txt}>Segmento / Atividade</Text>
        <TextInput
          placeholder="Comércio, Indústria, Serviços, etc."
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        {/* Endereço */}
        <Text style={styles.txt}>Endereço Completo</Text>
        <TextInput
          placeholder="Rua, Número, Bairro, Cidade, Estado, CEP"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        {/* Email */}
        <Text style={styles.txt}>Email</Text>
        <TextInput
          placeholder="email@empresa.com"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        {/* Telefone */}
        <Text style={styles.txt}>Telefone</Text>
        <TextInput
          placeholder="(XX) XXXX-XXXX"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        {/* Senha */}
        <Text style={styles.txt}>Senha</Text>
        <TextInput
          placeholder="****"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        {/* Confirmar Senha */}
        <Text style={styles.txt}>Confirmar Senha</Text>
        <TextInput
          placeholder="****"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        {/* Botão de Cadastro */}
        <Text style={styles.txt}>Cadastrar-se</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.button}>
            <Text style={styles.button_txt}>Criar Conta</Text>
          </View>
        </TouchableOpacity>

        {/* Voltar */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.create}>⬅ Voltar</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  content: {
    paddingBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  inputControl: {
    height: 50,
    width: 280,
    color: 'white',
    backgroundColor: 'purple',
    borderRadius: 12,
    borderColor: 'white',
    borderStyle: 'solid',
    fontSize: 14,
    marginHorizontal: 0,
    paddingHorizontal: 16,
    margin: 10,
  },
  button: {
    alignItems: 'center',
    color: 'white',
    borderColor: 'white',
    backgroundColor: 'purple',
    borderRadius: 30,
    paddingHorizontal: 67,
    paddingVertical: 12,
    marginHorizontal: 20,
    margin: 10,
  },
  button_txt: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 21,
  },
  create: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    marginVertical: 16,
    backgroundColor:'#4b0149',
    borderRadius:12,
    padding:10,
  },
  txt: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 21,
    width: 210,
    marginLeft: 0,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 36,
    paddingBottom: 30,
  },


  box :{
    flexDirection: 'row',
    paddingBottom:20,
  },
    txtz:{
    color:'white',
    paddingBottom:12,
  },
  buttonz: {
    backgroundColor: 'purple', // roxo
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 15,
    elevation: 5, // Android
    borderColor: 'black',
    borderWidth: 1,
    width:80,
    alignItems:'center',
  },
  buttonTextz: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});