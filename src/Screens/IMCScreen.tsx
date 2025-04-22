import React, { useState } from "react";
import { Button, Text, TextInput, View, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { IMCScreenNavigationProp } from '../types/navigation';
import { styles } from "./HomeScreen";

const IMC = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setImc] = useState<number | null>(null);
  const navigation = useNavigation<IMCScreenNavigationProp>();

  const calculateIMC = () => {
    // ... (validação)
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    if (heightNum > 0 && weightNum > 0) { // Adicionar checagem para evitar divisão por zero ou NaN
      const imcValue: number = weightNum / (heightNum * heightNum);
      setImc(imcValue); // Armazena o número
    } else {
      Alert.alert("Erro", "Peso e altura devem ser números positivos.");
      setImc(null); // Limpa o IMC em caso de erro
    }
    // ... (else do peso/altura não preenchidos)
  };

  return (
    <ScrollView
          style={styles.scrollView}
          // Aplica os estilos de layout ao container de conteúdo
          contentContainerStyle={styles.contentContainer}
          // Opcional: garante que a rolagem funcione mesmo se o conteúdo couber na tela
          alwaysBounceVertical={false}>
      <Text style={styles.text}>Calculate your IMC</Text>
      <TextInput
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
      />
      <TextInput
        placeholder="Height (m)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, paddingLeft: 8 }}
      />
      <View style={styles.buttonContainer}>
      <Button title="Calculate IMC" onPress={calculateIMC} />
      {imc !== null && <Text>Your IMC is: {imc.toFixed(2)}</Text>}
      </View>
      <View style={styles.buttonContainer}>
      <Button title="Go to Home" onPress={() => navigation.goBack()} />
      </View >
    </ScrollView>
  );
}

export default IMC;