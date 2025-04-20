export type RootStackParamList = {
  Login: undefined; // A tela "Login" não recebe parâmetros por enquanto
  Home: undefined;  // A tela "Home" não recebe parâmetros
  IMC: undefined;   // A tela "IMC" não recebe parâmetros
};

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from './src/Screens/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen';
import IMCScreen from './src/Screens/IMCScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {

  return (
    <NavigationContainer> {/* <-- Abertura */}
      <Stack.Navigator> {/* <-- Abertura */}
        {/* Telas (<Stack.Screen>) virão aqui dentro */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="IMC"
          component={IMCScreen}
          options={{ title: 'IMC' }}
        />
      </Stack.Navigator> {/* <-- FECHAMENTO OBRIGATÓRIO */}
    </NavigationContainer> {/* <-- FECHAMENTO OBRIGATÓRIO */}
  );
}

export default App;