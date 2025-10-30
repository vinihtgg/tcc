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

export function CreateAccount() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Cadastro</Text>

        <text style={styles.txtz}>Quero me cadastra como pessoa  ?</text>
        <View style={styles.box}>
          <TouchableOpacity style={styles.buttonz} onPress={() => navigation.navigate('CreateAccount')}>
            <Text style={styles.buttonTextz}>Fisica</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonz} onPress={() => navigation.navigate('CreateAccountlegal')}>
            <Text style={styles.buttonTextz}>Juridica</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.txt}>Nome completo</Text>
        <TextInput
          placeholder="nome exemplo"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        <Text style={styles.txt}>Email</Text>
        <TextInput
          placeholder="email@exemplo.com"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        <Text style={styles.txt}>Data nascimento</Text>
        <TextInput
          placeholder="11/22/3333"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        <Text style={styles.txt}>CPF</Text>
        <TextInput
          placeholder="123.456.789-00"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        <Text style={styles.txt}>Telefone</Text>
        <TextInput
          placeholder="(44) 96324-5348"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        <Text style={styles.txt}>Senha</Text>
        <TextInput
          placeholder="****"
          style={styles.inputControl}
          placeholderTextColor="white"
        />

        <Text style={styles.txt}>Confirmar senha</Text>
        <TextInput
          placeholder="****"
          style={styles.inputControl}
          placeholderTextColor="white"
        />
        <Text style={styles.txt}>Cadastrar-se</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.button}>
            <Text style={styles.button_txt}>Criar conta</Text>
          </View>
        </TouchableOpacity>

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
    paddingBottom: 10,
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