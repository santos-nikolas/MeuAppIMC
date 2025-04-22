import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from './src/Screens/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen';
import IMCScreen from './src/Screens/IMCScreen';
import CalculateScreen from './src/Screens/CalculatorScreen';
import type { RootStackParamList } from './src/types/navigation'; // <-- Importa o tipo RootStackParamList

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  return (
    <NavigationContainer>
      {/* Nenhum espaço ou texto aqui */}
      <Stack.Navigator>
        {/* Nenhum espaço ou texto aqui */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        {/* Nenhum espaço ou texto aqui ENTRE as telas */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        {/* Nenhum espaço ou texto aqui ENTRE as telas */}
        <Stack.Screen
          name="IMC"
          component={IMCScreen}
          options={{ title: 'IMC' }}
        />
        <Stack.Screen
          name="Calculator"
          component={CalculateScreen}
          options={{ title: 'Calculator' }}
        />
        {/* Nenhum espaço ou texto aqui */}
      </Stack.Navigator>
      {/* Nenhum espaço ou texto aqui */}
    </NavigationContainer>
  );
}

export default App;