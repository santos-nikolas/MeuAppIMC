import React from "react";
import { StyleSheet, Button, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { HomeScreenNavigationProp } from '../types/navigation';

export const styles = StyleSheet.create({
  // Estilo para a ScrollView em si (se necessário, geralmente só flex: 1)
  scrollView: {
    flex: 1, // Garante que a área rolável ocupe a tela
  },
  // Estilo para o CONTAINER INTERNO da ScrollView (para layout)
  contentContainer: {
    flexGrow: 1, // Permite que o container cresça e use o espaço para justifyContent
    justifyContent: "center", // Centraliza verticalmente o conteúdo
    alignItems: "center", // Centraliza horizontalmente o conteúdo
    paddingVertical: 20 // Adiciona um respiro vertical
  },
  buttonContainer: { // Renomeei de 'button' para 'buttonContainer' para clareza
    marginVertical: 10, // Adiciona espaço vertical ENTRE os botões/elementos
    width: '50%', // Mantém a largura consistente dos botões
  },
  text: {
    fontSize: 20,
    marginBottom: 20, // Espaço abaixo do texto
  },
});

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleLogout = () => {
    navigation.reset({
      index: 0, // Define que a rota ativa após o reset será a primeira da lista 'routes'
      routes: [{ name: 'Login' }], // Define a nova pilha, contendo apenas a tela de Login
    });
  };

  return (
    // Aplica 'flex: 1' à ScrollView para ocupar a tela
    <ScrollView
      style={styles.scrollView}
      // Aplica os estilos de layout ao container de conteúdo
      contentContainerStyle={styles.contentContainer}
      // Opcional: garante que a rolagem funcione mesmo se o conteúdo couber na tela
      alwaysBounceVertical={false}
    >
      <Text style={styles.text}>Home Screen</Text>

      {/* Aplica o estilo de margem/largura à View que envolve o botão */}
      <View style={styles.buttonContainer}>
        <Button title="Go to IMC" onPress={() => navigation.navigate("IMC")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Calculator" onPress={() => navigation.navigate("Calculator")} />
      </View>
      {/* Aplica o estilo de margem/largura à View que envolve o botão */}
      <View style={styles.buttonContainer}>
        {/* Corrigido: O botão deve ser "Log Out" e ir para "Login" */}
        <Button title="Log Out" onPress={handleLogout} />
      </View>
    </ScrollView>
  );
}
export default Home;