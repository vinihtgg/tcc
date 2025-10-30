import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useRef, useState } from 'react';

const Stack = createNativeStackNavigator();

import { Login } from '../pages/login/index';
import { CreateAccount } from '../pages/createaccount/index';
import { Home } from '../pages/home/index';
import { Terms } from '../pages/terms/index';
import { Privacy } from '../pages/privacy/index';
import { Support } from '../pages/support/index';
import { Faq } from '../pages/faq/index';
import { CreateAccountlegal } from '../pages/createaccountlegal/index';
import { Perifericos } from '../pages/products/index';
import { Cart } from '../pages/cart/index';
import { Itens } from '../pages/itens/index';
import { Anuncio } from '../pages/anuncio/index';
import { Comprar } from '../pages/comprar/index';
import { Like } from '../pages/like/index';
import { Perfil } from '../pages/account/index,js';
import { Compra } from '../pages/Compra/index';

export function AppRoutes() {
  const [produto, setProduto] = useState({});

  const detalhesProduto = (produto) => {
    setProduto(produto);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Terms" component={Terms} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="Faq" component={Faq} />
        <Stack.Screen
          name="CreateAccountlegal"
          component={CreateAccountlegal}
        />
        <Stack.Screen name="Perifericos">
          {() => <Perifericos setProdutos={detalhesProduto} />}
        </Stack.Screen>
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Compra">
          {() => <Compra produtos={produto} />}
        </Stack.Screen>
        <Stack.Screen name="Itens">
          {() => <Itens setProdutos={detalhesProduto} />}
        </Stack.Screen>
        <Stack.Screen name="Anuncio" component={Anuncio} />
        <Stack.Screen name="Comprar" component={Comprar} />
        <Stack.Screen name="Like" component={Like} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}