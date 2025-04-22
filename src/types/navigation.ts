// src/types/navigation.ts
import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

// 1. Define a lista de rotas e seus parâmetros
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  IMC: undefined;
  Calculator: undefined; // Incluindo a tela Calculator
  // Adicione outras telas aqui no futuro...
};

// 2. (Opcional, mas recomendado) Define os tipos de props de tela individuais
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type IMCScreenProps = NativeStackScreenProps<RootStackParamList, 'IMC'>;
export type CalculatorScreenProps = NativeStackScreenProps<RootStackParamList, 'Calculator'>;

// 3. (Opcional, mas recomendado) Define os tipos apenas da prop 'navigation' para uso com useNavigation
export type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type IMCScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'IMC'>;
export type CalculatorScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Calculator'>;