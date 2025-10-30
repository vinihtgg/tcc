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

export function Login() {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>Login</Text>

          <Text style={styles.txt}>Endereço de email</Text>
          <TextInput
            placeholder="email@exemplo.com"
            style={styles.inputControl}
            placeholderTextColor="white"
          />
          <Text style={styles.txt}>Senha</Text>
          <TextInput
            placeholder="*****"
            style={styles.inputControl}
            placeholderTextColor="white"
          />
          <Text style={styles.txt}>Entra</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.button}>
              <Text style={styles.button_txt}>Entrar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forget}>Equeceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateAccount')}>
            <Text style={styles.create}>Não possui conta?</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.forget}>Permanecer desconectado</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </>
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
    paddingHorizontal: 85,
    paddingVertical: 12,
    marginHorizontal: 20,
    margin: 10,
  },
  button_txt:{
  color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 21,

  },
  forget: {
    FontSize: 1,
    FontWeight: 600,
    color: 'white',
    textAlign: 'center',
    marginVertical: 16,
  },
  create: {
    FontSize: 16,
    Fontleight: 600,
    textAlign: 'center',
    color: '#c081ff',
    marginVertical: 16,
    
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
    marginTop: '1%',
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
});